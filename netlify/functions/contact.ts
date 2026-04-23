const PEOPLE_DB_ID = "1920a2ce2140816c9fc2c2faabdc065e";
const OPORTUNIDADES_DB_ID = "193024d87948488a8f5bc6b328bcdae2";

const INTERES_TO_TIPO_OFERTA: Record<string, string> = {
  blueprint: "SMB · Blueprint (Capa 1)",
  "mentoring-4w": "SMB · Mentoring 4W (Capa 2)",
  "mentoring-6m": "SMB · Mentoring 6M (Capa 3)",
  "transforma-erp": "BC · Workshop",
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://www.assystu.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

async function notionRequest(path: string, method: string, body?: object) {
  const apiKey = process.env.NOTION_API_KEY;
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function findPersonByEmail(email: string): Promise<string | null> {
  if (!email) return null;
  const result = await notionRequest(`/databases/${PEOPLE_DB_ID}/query`, "POST", {
    filter: { property: "Email", email: { equals: email } },
    page_size: 1,
  });
  return (result.results?.[0]?.id as string) ?? null;
}

async function findPersonByPhone(phone: string): Promise<{ id: string; name: string } | null> {
  if (!phone) return null;
  const result = await notionRequest(`/databases/${PEOPLE_DB_ID}/query`, "POST", {
    filter: { property: "Phone", phone_number: { equals: phone } },
    page_size: 1,
  });
  const page = result.results?.[0];
  if (!page) return null;
  const name = (page.properties?.["Full Name"]?.title?.[0]?.plain_text as string) ?? "contacto existente";
  return { id: page.id as string, name };
}

async function addComment(pageId: string, text: string) {
  await notionRequest("/comments", "POST", {
    parent: { page_id: pageId },
    rich_text: [{ type: "text", text: { content: text } }],
  });
}

async function upsertPerson(data: {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
}): Promise<{ id: string; isNew: boolean; phoneMatchId?: string; phoneMatchName?: string }> {
  const fullName = `${data.nombre} ${data.apellido}`.trim();

  const properties: Record<string, unknown> = {
    "Full Name": { title: [{ text: { content: fullName } }] },
    Tipo: { select: { name: "Persona" } },
    Relationship: { multi_select: [{ name: "Lead" }] },
    ...(data.email ? { Email: { email: data.email } } : {}),
    ...(data.telefono ? { Phone: { phone_number: data.telefono } } : {}),
  };

  // 1. Buscar por email (match definitivo)
  const emailMatch = data.email ? await findPersonByEmail(data.email) : null;
  if (emailMatch) {
    await notionRequest(`/pages/${emailMatch}`, "PATCH", { properties });
    return { id: emailMatch, isNew: false };
  }

  // 2. Buscar por teléfono (posible match — crear nuevo + comentario)
  const phoneMatch = data.telefono ? await findPersonByPhone(data.telefono) : null;

  const page = await notionRequest("/pages", "POST", {
    parent: { database_id: PEOPLE_DB_ID },
    properties,
  });
  const newId = page.id as string;

  return {
    id: newId,
    isNew: true,
    ...(phoneMatch ? { phoneMatchId: phoneMatch.id, phoneMatchName: phoneMatch.name } : {}),
  };
}

async function openOportunidadExists(personId: string, tipoOferta: string): Promise<boolean> {
  const result = await notionRequest(`/databases/${OPORTUNIDADES_DB_ID}/query`, "POST", {
    filter: {
      and: [
        { property: "People", relation: { contains: personId } },
        { property: "Tipo de oferta", select: { equals: tipoOferta } },
        { property: "Etapa", select: { does_not_equal: "07Cerrado - Ganado" } },
        { property: "Etapa", select: { does_not_equal: "08Cerrado - Perdido" } },
      ],
    },
    page_size: 1,
  });
  return (result.results?.length ?? 0) > 0;
}

async function createOportunidad(personId: string, tipoOferta: string, fullName: string) {
  const today = new Date().toISOString().split("T")[0];
  await notionRequest("/pages", "POST", {
    parent: { database_id: OPORTUNIDADES_DB_ID },
    properties: {
      "Deal / Nombre": { title: [{ text: { content: `Inbound Web · ${fullName}` } }] },
      People: { relation: [{ id: personId }] },
      "Tipo de oferta": { select: { name: tipoOferta } },
      "Tipo de cliente": { select: { name: "B2B" } },
      Etapa: { select: { name: "01Lead" } },
      Canal: { select: { name: "Inbound" } },
      "Primera interacción": { date: { start: today } },
    },
  });
}

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
}) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  if (!process.env.NOTION_API_KEY) {
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ error: "Configuración incompleta" }) };
  }

  let data: Record<string, string>;
  try {
    data = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Solicitud inválida" }) };
  }

  // Honeypot — silent accept for bots
  if (data.bot_field) {
    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ success: true }) };
  }

  const { nombre, apellido, telefono, email, interes } = data;
  if (!nombre?.trim()) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "El nombre es requerido" }) };
  }
  if (!telefono?.trim() && !email?.trim()) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Se requiere al menos un teléfono o email" }) };
  }

  try {
    const cleanEmail = (email ?? "").trim().toLowerCase();
    const cleanPhone = (telefono ?? "").trim();
    const cleanNombre = nombre.trim();
    const cleanApellido = (apellido ?? "").trim();
    const fullName = `${cleanNombre} ${cleanApellido}`.trim();

    const person = await upsertPerson({
      nombre: cleanNombre,
      apellido: cleanApellido,
      telefono: cleanPhone,
      email: cleanEmail,
    });

    // Si es registro nuevo con posible match por teléfono, agregar comentario
    if (person.isNew && person.phoneMatchId && person.phoneMatchName) {
      await addComment(
        person.id,
        `⚠️ Posible duplicado: este contacto comparte el teléfono con "${person.phoneMatchName}" (ID: ${person.phoneMatchId}). Revisar y fusionar si corresponde.`
      );
    }

    const tipoOferta = INTERES_TO_TIPO_OFERTA[interes];
    const hasInterest = !!tipoOferta;

    if (hasInterest) {
      const alreadyExists = await openOportunidadExists(person.id, tipoOferta);
      if (!alreadyExists) {
        await createOportunidad(person.id, tipoOferta, fullName);
      }
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, hasInterest }),
    };
  } catch (err) {
    console.error("[contact-fn]", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Error interno, intenta nuevamente" }),
    };
  }
};
