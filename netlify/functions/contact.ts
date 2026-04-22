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
  const result = await notionRequest(`/databases/${PEOPLE_DB_ID}/query`, "POST", {
    filter: { property: "Email", email: { equals: email } },
    page_size: 1,
  });
  return (result.results?.[0]?.id as string) ?? null;
}

async function upsertPerson(data: {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
}): Promise<string> {
  const existingId = await findPersonByEmail(data.email);
  const fullName = `${data.nombre} ${data.apellido}`.trim();

  const properties: Record<string, unknown> = {
    "Full Name": { title: [{ text: { content: fullName } }] },
    Tipo: { select: { name: "Persona" } },
    Relationship: { multi_select: [{ name: "Lead" }] },
    ...(data.email ? { Email: { email: data.email } } : {}),
    ...(data.telefono ? { Phone: { phone_number: data.telefono } } : {}),
  };

  if (existingId) {
    await notionRequest(`/pages/${existingId}`, "PATCH", { properties });
    return existingId;
  }

  const page = await notionRequest("/pages", "POST", {
    parent: { database_id: PEOPLE_DB_ID },
    properties,
  });
  return page.id as string;
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
    const personId = await upsertPerson({
      nombre: nombre.trim(),
      apellido: (apellido ?? "").trim(),
      telefono: (telefono ?? "").trim(),
      email: email.trim().toLowerCase(),
    });

    const tipoOferta = INTERES_TO_TIPO_OFERTA[interes];
    const hasInterest = !!tipoOferta;

    if (hasInterest) {
      const fullName = `${nombre.trim()} ${(apellido ?? "").trim()}`.trim();
      await createOportunidad(personId, tipoOferta, fullName);
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
