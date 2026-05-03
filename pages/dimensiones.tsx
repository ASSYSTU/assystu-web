"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/* ─────────────────────────────────────────
   DATOS
───────────────────────────────────────── */

type Version = "todos" | "personal" | "negocio";
type Capa = "hub" | "operativo" | "evento";

interface Dimension {
  icon: string;
  nombre: string;
  capa: Capa;
  version: "ambos" | "negocio";
  descripcion: string;
  ejemploPersonal?: string;
  ejemploNegocio?: string;
}

const DIMENSIONES: Dimension[] = [
  {
    icon: "📝",
    nombre: "Notas",
    capa: "operativo",
    version: "ambos",
    descripcion: "Donde cae todo lo que llega: ideas, acuerdos, aprendizajes. La materia prima del sistema.",
    ejemploPersonal: "La receta que te pasaron, lo que acordaste con el banco, lo que quieres recordar del libro que estás leyendo.",
    ejemploNegocio: "Los acuerdos de una reunión, el resumen de una llamada con un cliente, las decisiones que no pueden perderse.",
  },
  {
    icon: "🎯",
    nombre: "Proyectos",
    capa: "hub",
    version: "ambos",
    descripcion: "Un resultado con fecha límite. Todo lo que haces tiene un proyecto detrás.",
    ejemploPersonal: "Planificar el viaje de verano, terminar el ramo, hacer el cambio de casa.",
    ejemploNegocio: "Lanzar un producto, implementar un nuevo proceso, cerrar una propuesta.",
  },
  {
    icon: "🗂️",
    nombre: "Áreas",
    capa: "hub",
    version: "ambos",
    descripcion: "Las esferas de responsabilidad continua, sin fecha límite. Siempre están ahí aunque no tengas un proyecto activo.",
    ejemploPersonal: "Salud, Finanzas, Familia, Estudio.",
    ejemploNegocio: "Gerencia de Operaciones, Marketing, Finanzas, Líneas de servicio.",
  },
  {
    icon: "📚",
    nombre: "Recursos",
    capa: "hub",
    version: "ambos",
    descripcion: "Temas que te importan y clasifican tu información de forma transversal. El índice temático del sistema.",
    ejemploPersonal: "IA, Productividad, Notion Tips, Recetas.",
    ejemploNegocio: "Cliente X, Vertical Agro, Tecnología Notion, Categoría Premium.",
  },
  {
    icon: "👥",
    nombre: "Personas",
    capa: "hub",
    version: "ambos",
    descripcion: "Contactos, clientes, equipo. Cada persona conectada con lo que hiciste junto a ella.",
    ejemploPersonal: "El médico, el profe, el banco, tus amigos más cercanos.",
    ejemploNegocio: "Clientes, proveedores, equipo interno, socios.",
  },
  {
    icon: "✅",
    nombre: "Tareas",
    capa: "operativo",
    version: "ambos",
    descripcion: "Lo concreto que hay que hacer. Con dueño, fecha y proyecto asignado. Sin eso, es solo una intención.",
    ejemploPersonal: "Llamar al médico antes del viernes, revisar el contrato, comprar el regalo.",
    ejemploNegocio: "Enviar la propuesta, revisar el contrato, preparar la presentación del lunes.",
  },
  {
    icon: "🎬",
    nombre: "Contenido",
    capa: "hub",
    version: "ambos",
    descripcion: "Lo que creas o publicas. Posts, videos, artículos. Conectado con el canal donde va.",
    ejemploPersonal: "El post de LinkedIn que estás preparando, el video para YouTube.",
    ejemploNegocio: "El newsletter de la empresa, las publicaciones del equipo comercial.",
  },
  {
    icon: "📢",
    nombre: "Canales",
    capa: "hub",
    version: "ambos",
    descripcion: "Los medios donde publicas. LinkedIn, Instagram, YouTube, Newsletter. El contenido sabe a qué canal pertenece.",
    ejemploPersonal: "Tu LinkedIn personal, tu cuenta de Instagram.",
    ejemploNegocio: "Las redes de la empresa, el canal de YouTube corporativo, el blog.",
  },
  {
    icon: "🏆",
    nombre: "Metas",
    capa: "hub",
    version: "negocio",
    descripcion: "El norte estratégico explícito. Lo que el equipo quiere lograr este trimestre, este año. Los proyectos se alinean acá.",
    ejemploNegocio: "Crecer un 30% en facturación, lanzar dos nuevos servicios, consolidar el equipo de operaciones.",
  },
  {
    icon: "🤝",
    nombre: "Reuniones",
    capa: "evento",
    version: "negocio",
    descripcion: "Cada sesión con alguien que importa. Con acuerdos, participantes y tareas derivadas. No más post-its que desaparecen.",
    ejemploNegocio: "Reunión de kick-off con el cliente, sesión de seguimiento semanal, entrevista de selección.",
  },
  {
    icon: "💼",
    nombre: "Oportunidades",
    capa: "hub",
    version: "negocio",
    descripcion: "El pipeline comercial. Cada posibilidad de venta o proyecto nuevo, con su contexto y seguimiento.",
    ejemploNegocio: "Propuesta para Empresa X, renovación de contrato con Cliente Y, nuevo servicio para Vertical Z.",
  },
  {
    icon: "💬",
    nombre: "Mensajes",
    capa: "evento",
    version: "negocio",
    descripcion: "Los WhatsApp, correos y DMs que generan trabajo o decisiones. Capturados antes de que se pierdan en el ruido.",
    ejemploNegocio: "El cambio de requisitos que llegó por WhatsApp, el correo con el feedback del cliente, el DM con la propuesta informal.",
  },
];

const CAPAS = [
  {
    id: "hub" as Capa,
    icon: "🏛️",
    label: "Hubs de Contexto",
    desc: "Lo que siempre está ahí. Proyectos, personas, áreas, metas y más.",
    pregunta: "¿En qué proyecto estoy? ¿Con quién trabajo? ¿Qué oportunidad sigo?",
    color: "bg-[#e8f0ea] border-[#b4cdb8]",
    dot: "bg-[#4d6453]",
  },
  {
    id: "evento" as Capa,
    icon: "📅",
    label: "Eventos Comunicacionales",
    desc: "Lo que ocurre: reuniones y mensajes que generan trabajo.",
    pregunta: "¿Qué reunión tuvimos? ¿Qué acordamos por WhatsApp?",
    color: "bg-[#fdf0ec] border-[#e2725b]/40",
    dot: "bg-[#e2725b]",
  },
  {
    id: "operativo" as Capa,
    icon: "⚡",
    label: "Documentos Operativos",
    desc: "Lo que se hace y lo que se registra: tareas y notas.",
    pregunta: "¿Qué tengo que hacer? ¿Qué aprendí? ¿Qué acordamos?",
    color: "bg-[#f0edeb] border-[#c3c8c1]",
    dot: "bg-[#434843]",
  },
];

const SCENARIOS = [
  {
    id: "industria",
    tab: "Industria",
    icono: "🏗️",
    titulo: "Constructora con 3 obras en paralelo",
    antes: "El arquitecto manda un cambio de planos por WhatsApp a las 8pm. El jefe de obra lo lee, dice 'ya' y sigue. A la semana nadie recuerda qué cambió ni por qué.",
    con_hb: [
      { dim: "💬 Mensaje", accion: "El WhatsApp entra al sistema vinculado a la obra correspondiente" },
      { dim: "✅ Tarea", accion: "Se genera una tarea para el capataz con fecha y contexto completo" },
      { dim: "📝 Nota", accion: "La decisión queda registrada: quién la tomó, cuándo, y por qué" },
      { dim: "🎯 Proyecto", accion: "La obra tiene historial completo de cambios y acuerdos" },
    ],
    resultado: "La próxima reunión de obra parte con todos informados, sin tener que reconstruir qué pasó.",
  },
  {
    id: "servicios",
    tab: "Servicios",
    icono: "🤝",
    titulo: "Consultora de RRHH cerrando un proceso",
    antes: "El socio sale de una reunión donde surgió la oportunidad de un proceso de selección. Queda en su memoria y en el hilo del correo. Tres días después alguien pregunta '¿en qué quedamos con ese cliente?' y nadie sabe.",
    con_hb: [
      { dim: "🤝 Reunión", accion: "La sesión queda registrada con acuerdos y participantes" },
      { dim: "💼 Oportunidad", accion: "El proceso de selección entra al pipeline con su contexto" },
      { dim: "✅ Tareas", accion: "El equipo sabe qué sigue, sin depender de que el socio recuerde" },
      { dim: "👥 Persona", accion: "El historial con ese cliente está completo y accesible" },
    ],
    resultado: "La IA puede responder '¿qué acordamos con ese cliente?' al instante, porque la información está donde tiene que estar.",
  },
  {
    id: "profesional",
    tab: "Profesional",
    icono: "🩺",
    titulo: "Médico con consulta privada",
    antes: "Atiende 20 pacientes al día. Los seguimientos, exámenes pendientes y derivaciones viven en papeles, en la memoria y en el bloc de notas del computador. A veces algo se cae.",
    con_hb: [
      { dim: "👥 Persona", accion: "Cada paciente es una persona con su historial" },
      { dim: "✅ Tareas", accion: "Los seguimientos tienen fecha y están asignados" },
      { dim: "📝 Notas", accion: "Los acuerdos de cada consulta quedan registrados" },
      { dim: "🗂️ Área", accion: "Todo bajo el Área 'Consulta Médica', sin mezclar con el resto" },
    ],
    resultado: "Entra al próximo control con contexto completo. Sin buscar, sin improvisar.",
  },
  {
    id: "familiar",
    tab: "Familiar",
    icono: "✈️",
    titulo: "Papá organizando las vacaciones de verano",
    antes: "Cotizaciones en el correo, ideas de los chicos en WhatsApp, las fechas del colegio en la agenda del teléfono y el presupuesto en la cabeza. Cuando alguien pregunta '¿qué falta?', la respuesta tarda diez minutos.",
    con_hb: [
      { dim: "🎯 Proyecto", accion: "'Vacaciones Verano 2026': todo el viaje en un solo lugar" },
      { dim: "📝 Notas", accion: "Cada cotización, idea y acuerdo familiar queda registrado" },
      { dim: "✅ Tareas", accion: "Lo que falta, con fecha y con quién lo hace" },
      { dim: "👥 Personas", accion: "La agencia, el hotel, las personas de contacto del viaje" },
    ],
    resultado: "Cuando alguien pregunta '¿qué falta?', la respuesta está en un solo lugar, no en tu cabeza.",
  },
  {
    id: "estudiante",
    tab: "Estudiante",
    icono: "📖",
    titulo: "Universitario con tesis y práctica al mismo tiempo",
    antes: "Clases en un cuaderno, feedback del profesor en el chat de Teams, avances de tesis en un Google Doc y la práctica en otro sistema. Llega a cada reunión sin recordar bien qué acordó la vez anterior.",
    con_hb: [
      { dim: "🎯 Proyectos", accion: "'Tesis' y 'Práctica' como proyectos separados, sin mezcla" },
      { dim: "📝 Notas", accion: "El feedback del profesor va directo al proyecto de la tesis" },
      { dim: "✅ Tareas", accion: "Los compromisos de cada reunión quedan asignados con fecha" },
      { dim: "📚 Recursos", accion: "Los artículos y referencias organizados por tema" },
    ],
    resultado: "Llega a cada reunión preparado. Sin el '¿qué acordamos la vez pasada?'.",
  },
];

const COPE_STEPS = [
  {
    letra: "C",
    nombre: "Capturar",
    icon: "inbox",
    desc: "Todo lo que llega entra al sistema. Una idea, un mensaje, un acuerdo de reunión. Sin eso, se pierde.",
    color: "text-[#4d6453]",
    bg: "bg-[#e8f0ea]",
    border: "border-[#b4cdb8]",
  },
  {
    letra: "O",
    nombre: "Organizar",
    icon: "hub",
    desc: "Vincular y relacionar. La tarea va al proyecto, la nota a la persona, el mensaje a la oportunidad. El sistema empieza a tener memoria.",
    color: "text-[#e2725b]",
    bg: "bg-[#fdf0ec]",
    border: "border-[#e2725b]/30",
  },
  {
    letra: "P",
    nombre: "Planificar",
    icon: "event_note",
    desc: "Con todo conectado, planificar es fácil y con foco. Ves lo que importa sin tener que recordar: el sistema te lo muestra.",
    color: "text-[#314865]",
    bg: "bg-[#e8eff9]",
    border: "border-[#b0c8eb]",
  },
  {
    letra: "E",
    nombre: "Ejecutar",
    icon: "rocket_launch",
    desc: "Trabajas con contexto completo. Sin buscar qué acordamos, sin preguntar qué sigue. El foco aparece solo cuando todo está relacionado.",
    color: "text-[#061b0e]",
    bg: "bg-[#f0edeb]",
    border: "border-[#c3c8c1]",
  },
];

const FREE_TEMPLATES = [
  {
    id: "m1",
    nombre: "M1 · Organiza tus ideas",
    icon: "💡",
    dims: ["📝 Notas", "🗂️ Áreas", "📚 Recursos", "👥 Personas"],
    para: "Para quien parte capturando y clasificando",
    url: "https://www.notion.com/templates/happy-brain-organiza-tus-ideas",
  },
  {
    id: "m2",
    nombre: "M2 · Organiza tus proyectos",
    icon: "🎯",
    dims: ["🎯 Proyectos", "✅ Tareas", "👥 Personas"],
    para: "Para quien quiere ejecutar con foco",
    url: "https://www.notion.com/templates/happy-brain-organiza-tus-proyectos",
  },
  {
    id: "m3",
    nombre: "M3 · Organiza tu contenido",
    icon: "🎬",
    dims: ["🎬 Contenido", "📢 Canales", "👥 Personas"],
    para: "Para creadores y comunicadores",
    url: "https://www.notion.com/templates/happy-brain-organiza-tu-contenido",
  },
];

/* ─────────────────────────────────────────
   GRAFO DE CONEXIONES
───────────────────────────────────────── */

// version: "personal" = solo aparece en ejemplos personales y en el estado base
//          "negocio"  = solo aparece cuando hay un ejemplo de negocio activo
const GRAPH_NODES = [
  // ── 8 base (personal) ──
  { id: "notas",     icon: "📝", label: "Notas",     x: 160, y: 370, version: "personal" },
  { id: "proyectos", icon: "🎯", label: "Proyectos", x: 210, y: 140, version: "personal" },
  { id: "areas",     icon: "🗂️", label: "Áreas",     x: 500, y: 35,  version: "personal" },
  { id: "recursos",  icon: "📚", label: "Recursos",  x: 810, y: 115, version: "personal" },
  { id: "personas",  icon: "👥", label: "Personas",  x: 490, y: 255, version: "personal" },
  { id: "tareas",    icon: "✅", label: "Tareas",    x: 830, y: 345, version: "personal" },
  { id: "contenido", icon: "🎬", label: "Contenido", x: 345, y: 460, version: "personal" },
  { id: "canales",   icon: "📢", label: "Canales",   x: 645, y: 460, version: "personal" },
  // ── 4 negocio ──
  { id: "metas",          icon: "🏆", label: "Metas",          x: 60,  y: 65,  version: "negocio" },
  { id: "reuniones",      icon: "🤝", label: "Reuniones",      x: 330, y: 195, version: "negocio" },
  { id: "oportunidades",  icon: "💼", label: "Oportunidades",  x: 710, y: 215, version: "negocio" },
  { id: "mensajes",       icon: "💬", label: "Mensajes",       x: 65,  y: 255, version: "negocio" },
];

// Personal edges (base, siempre visibles en modo personal)
const EDGES_PERSONAL: [string, string][] = [
  ["proyectos", "tareas"],
  ["proyectos", "notas"],
  ["areas",     "notas"],
  ["areas",     "tareas"],
  ["recursos",  "notas"],
  ["personas",  "notas"],
  ["personas",  "tareas"],
  ["canales",   "contenido"],
  ["contenido", "notas"],
  ["contenido", "tareas"],
];

// Negocio edges (solo visibles cuando hay ejemplo de negocio activo)
const EDGES_NEGOCIO: [string, string][] = [
  ["metas",         "proyectos"],
  ["personas",      "reuniones"],
  ["personas",      "mensajes"],
  ["oportunidades", "reuniones"],
  ["reuniones",     "notas"],
  ["reuniones",     "tareas"],
  ["oportunidades", "notas"],
  ["oportunidades", "tareas"],
  ["mensajes",      "notas"],
  ["mensajes",      "tareas"],
];

const GRAPH_EXAMPLES = [
  {
    id: "consulta",
    tipo: "personal" as const,
    label: "🩺 Consulta médica",
    desc: "Una visita al médico activa 5 dimensiones y deja registro automático de todo, sin esfuerzo extra.",
    activeNodes: ["personas", "areas", "proyectos", "notas", "tareas"],
    activeEdges: [["proyectos","notas"],["proyectos","tareas"],["areas","notas"],["personas","notas"],["personas","tareas"]] as [string,string][],
  },
  {
    id: "viaje",
    tipo: "personal" as const,
    label: "✈️ Planificar el viaje",
    desc: "El proyecto centraliza cotizaciones, tareas pendientes y las personas involucradas en un solo lugar.",
    activeNodes: ["proyectos", "personas", "notas", "tareas", "recursos"],
    activeEdges: [["proyectos","notas"],["proyectos","tareas"],["personas","notas"],["personas","tareas"],["recursos","notas"]] as [string,string][],
  },
  {
    id: "reunion-cliente",
    tipo: "negocio" as const,
    label: "🤝 Reunión con cliente",
    desc: "Una reunión vinculada a una oportunidad genera notas, tareas y mensajes de seguimiento, sin depender de la memoria de nadie.",
    activeNodes: ["personas", "oportunidades", "reuniones", "mensajes", "notas", "tareas"],
    activeEdges: [["personas","reuniones"],["personas","mensajes"],["oportunidades","reuniones"],["reuniones","notas"],["reuniones","tareas"],["mensajes","notas"]] as [string,string][],
  },
  {
    id: "meta-trimestre",
    tipo: "negocio" as const,
    label: "🏆 Meta del trimestre",
    desc: "Una meta estratégica orienta proyectos y oportunidades. Todo el equipo ejecuta con el mismo norte, sin necesidad de reuniones de alineación constantes.",
    activeNodes: ["metas", "proyectos", "oportunidades", "personas", "tareas", "notas"],
    activeEdges: [["metas","proyectos"],["proyectos","tareas"],["proyectos","notas"],["personas","tareas"],["oportunidades","notas"],["oportunidades","tareas"]] as [string,string][],
  },
];

function ConnectionGraph() {
  const [activeExample, setActiveExample] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const example = GRAPH_EXAMPLES.find((e) => e.id === activeExample) ?? null;
  const isNegocioMode = example?.tipo === "negocio";

  // Qué nodos mostrar según el modo
  const visibleNodes = GRAPH_NODES.filter((n) =>
    isNegocioMode ? true : n.version === "personal"
  );

  // Qué edges mostrar según el modo
  const visibleEdges = isNegocioMode
    ? [...EDGES_PERSONAL, ...EDGES_NEGOCIO]
    : EDGES_PERSONAL;

  const isNodeActive = (id: string) =>
    example ? example.activeNodes.includes(id) : true;

  const isEdgeActive = (from: string, to: string) =>
    example
      ? example.activeEdges.some(([f, t]) => f === from && t === to)
      : true;

  const nodeById = (id: string) => GRAPH_NODES.find((n) => n.id === id)!;

  const personalExamples = GRAPH_EXAMPLES.filter((e) => e.tipo === "personal");
  const negocioExamples  = GRAPH_EXAMPLES.filter((e) => e.tipo === "negocio");

  const totalNodes = visibleNodes.length;
  const totalEdges = visibleEdges.length;

  return (
    <div ref={ref}>
      {/* Botones agrupados */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 items-start">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Personal</span>
          <div className="flex flex-wrap gap-2">
            {personalExamples.map((ex) => (
              <button
                key={ex.id}
                onClick={() => setActiveExample(activeExample === ex.id ? null : ex.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeExample === ex.id
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:border-outline-variant"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Negocio</span>
          <div className="flex flex-wrap gap-2">
            {negocioExamples.map((ex) => (
              <button
                key={ex.id}
                onClick={() => setActiveExample(activeExample === ex.id ? null : ex.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                  activeExample === ex.id
                    ? "bg-[#e2725b] text-white border-[#e2725b] shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:border-outline-variant"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
        {activeExample && (
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-transparent select-none">·</span>
            <button
              onClick={() => setActiveExample(null)}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-on-surface-variant/50 hover:text-primary transition-colors border border-transparent"
            >
              Ver todo
            </button>
          </div>
        )}
      </div>

      {/* Descripción del ejemplo */}
      <AnimatePresence mode="wait">
        {example && (
          <motion.div
            key={example.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className={`mb-6 rounded-xl px-5 py-3 inline-block ${
              example.tipo === "negocio"
                ? "bg-[#fdf0ec]"
                : "bg-[#e8f0ea]"
            }`}
          >
            <p className={`text-sm font-medium ${
              example.tipo === "negocio" ? "text-[#3e0500]" : "text-[#0b2013]"
            }`}>{example.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grafo */}
      <div
        className="relative w-full rounded-2xl bg-surface-container-lowest border border-outline-variant/20 overflow-hidden"
        style={{ aspectRatio: "1000/520" }}
      >
        {/* SVG: aristas */}
        <svg
          viewBox="0 0 1000 520"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {visibleEdges.map(([from, to], i) => {
            const a = nodeById(from);
            const b = nodeById(to);
            const active  = isEdgeActive(from, to);
            const dimmed  = example !== null && !active;
            const isNegEdge = EDGES_NEGOCIO.some(([f, t]) => f === from && t === to);
            const strokeColor = active && example
              ? (isNegEdge ? "#e2725b" : "#4d6453")
              : (isNegEdge ? "#e2725b" : "#c3c8c1");
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={strokeColor}
                strokeWidth={active && example ? 2.5 : 1.5}
                strokeLinecap="round"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: inView ? 1 : 0,
                  opacity: inView
                    ? dimmed ? 0.12 : active && example ? 1 : (isNegEdge ? 0.25 : 0.35)
                    : 0,
                }}
                transition={{
                  pathLength: { duration: 0.55, delay: 0.15 + i * 0.05, ease: "easeOut" },
                  opacity:    { duration: 0.3,  delay: example ? 0 : 0.15 + i * 0.05 },
                }}
              />
            );
          })}
        </svg>

        {/* Nodos */}
        <AnimatePresence>
          {visibleNodes.map((node) => {
            const active  = isNodeActive(node.id);
            const dimmed  = example !== null && !active;
            const isNegNode = node.version === "negocio";
            return (
              <motion.div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 pointer-events-none select-none"
                style={{
                  left: `${(node.x / 1000) * 100}%`,
                  top:  `${(node.y / 520)  * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{
                  opacity: inView ? (dimmed ? 0.15 : 1) : 0,
                  scale:   inView ? (active && example ? 1.1 : 1) : 0.75,
                }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.35, delay: isNegNode ? 0.05 : 0 }}
              >
                <div className={`rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm transition-all ${
                  active && example
                    ? isNegNode
                      ? "bg-[#fdf0ec] border border-[#e2725b]/50 shadow-md"
                      : "bg-[#e8f0ea] border border-[#b4cdb8] shadow-md"
                    : "bg-surface-container-lowest border border-outline-variant/30"
                }`}>
                  <span className="text-base leading-none">{node.icon}</span>
                  <span className={`text-xs font-bold whitespace-nowrap ${
                    active && example
                      ? isNegNode ? "text-[#3e0500]" : "text-[#0b2013]"
                      : "text-on-surface-variant"
                  }`}>
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <p className="text-center text-on-surface-variant/50 text-xs italic mt-4">
        {example
          ? `${example.activeNodes.length} dimensiones activas · ${example.activeEdges.length} relaciones · ${totalNodes} en el grafo`
          : `${totalNodes} dimensiones · ${totalEdges} relaciones`}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   HELPERS DE ANIMACIÓN
───────────────────────────────────────── */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────── */

export default function Dimensiones() {
  const [filtro, setFiltro] = useState<Version>("todos");
  const [scenarioActivo, setScenarioActivo] = useState(0);
  const [copeActivo, setCopeActivo] = useState<number | null>(null);

  const dimsFiltradas = DIMENSIONES.filter((d) => {
    if (filtro === "personal") return d.version === "ambos";
    if (filtro === "negocio") return true;
    return true;
  });

  return (
    <>
      <SEOHead
        title="Cómo funciona Happy Brain: Las dimensiones del sistema"
        description="Conoce las 8 y 12 dimensiones de Happy Brain, cómo se relacionan y por qué eso cambia la forma en que organizas tu vida o tu negocio."
        url="/dimensiones"
      />
      <div className="bg-background text-on-background font-body antialiased">
        <Header />
        <main className="pt-24">

          {/* ── HERO ── */}
          <section className="px-6 md:px-8 py-16 xl:py-20 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.span
                className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Cómo funciona Happy Brain
              </motion.span>
              <motion.h1
                className="font-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Tu información dispersa{" "}
                <span className="italic text-on-tertiary-container">no es falta de disciplina</span>.
                Es falta de estructura.
              </motion.h1>
              <motion.p
                className="text-on-surface-variant text-lg xl:text-xl max-w-2xl mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Happy Brain organiza lo que sabes, lo que haces y lo que te llega en un solo sistema conectado.
                Acá te mostramos cómo funciona por dentro, dimensión por dimensión.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <a href="#dimensiones" className="bg-editorial-gradient text-white px-7 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Ver las dimensiones <span className="material-symbols-outlined text-base">arrow_downward</span>
                </a>
                <a href="#cope" className="bg-surface-container-highest text-primary px-7 py-3.5 rounded-xl font-bold text-base hover:bg-surface-container-high transition-colors text-center">
                  Ver el método COPE
                </a>
              </motion.div>
            </div>
          </section>

          {/* ── LAS 3 CAPAS ── */}
          <section className="py-16 xl:py-20 bg-surface-container-low px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">La base del sistema</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                  Todo Happy Brain se organiza en 3 grupos
                </h2>
                <p className="text-on-surface-variant text-base max-w-xl mb-12">
                  Antes de ver las dimensiones, conviene entender su rol. Cada dimensión vive en uno de estos grupos, y eso determina cómo se conecta con el resto.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CAPAS.map((capa, i) => (
                  <FadeIn key={capa.id} delay={i * 0.1}>
                    <div className={`rounded-2xl border p-7 h-full ${capa.color}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${capa.dot}`} />
                        <span className="text-2xl">{capa.icon}</span>
                        <h3 className="font-headline text-lg font-bold text-primary">{capa.label}</h3>
                      </div>
                      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{capa.desc}</p>
                      <p className="text-on-surface-variant/70 text-xs italic leading-relaxed border-t border-outline-variant/30 pt-4">
                        {capa.pregunta}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.3}>
                <p className="text-on-surface-variant/60 text-sm mt-8 text-center italic">
                  Los hubs dan contexto → los eventos capturan lo que pasa → los documentos operativos registran y ejecutan. Eso es todo el sistema.
                </p>
              </FadeIn>
            </div>
          </section>

          {/* ── LAS DIMENSIONES ── */}
          <section id="dimensiones" className="py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">Las dimensiones</span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                  <div>
                    <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                      Las piezas del sistema
                    </h2>
                    <p className="text-on-surface-variant text-base mt-2 max-w-lg">
                      Cada dimensión es una base de datos con un rol claro. Solas son útiles. Conectadas, son poderosas.
                    </p>
                  </div>
                  {/* Filtro */}
                  <div className="flex gap-2 bg-surface-container-high rounded-xl p-1 self-start md:self-auto">
                    {(["todos", "personal", "negocio"] as Version[]).map((v) => (
                      <button
                        key={v}
                        onClick={() => setFiltro(v)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                          filtro === v
                            ? "bg-surface-container-lowest text-primary shadow-sm"
                            : "text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        {v === "todos" ? "Todas" : v === "personal" ? "Personal (8)" : "Negocio (12)"}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={filtro}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {dimsFiltradas.map((dim, i) => {
                    const capaInfo = CAPAS.find((c) => c.id === dim.capa)!;
                    const esNueva = dim.version === "negocio";
                    return (
                      <motion.div
                        key={dim.nombre}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow relative"
                      >
                        {esNueva && filtro !== "negocio" && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest bg-[#e2725b]/10 text-[#e2725b] px-2 py-0.5 rounded-full">
                            Negocio
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{dim.icon}</span>
                          <div>
                            <h3 className="font-headline font-bold text-primary text-base leading-tight">{dim.nombre}</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className={`w-1.5 h-1.5 rounded-full ${capaInfo.dot}`} />
                              <span className="text-[11px] text-on-surface-variant capitalize">{capaInfo.label}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{dim.descripcion}</p>
                        {(filtro === "personal" || filtro === "todos") && dim.ejemploPersonal && (
                          <p className="text-[11px] text-on-surface-variant/60 italic leading-relaxed border-t border-outline-variant/20 pt-3">
                            {dim.ejemploPersonal}
                          </p>
                        )}
                        {filtro === "negocio" && dim.ejemploNegocio && (
                          <p className="text-[11px] text-on-surface-variant/60 italic leading-relaxed border-t border-outline-variant/20 pt-3">
                            {dim.ejemploNegocio}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* ── EL PODER DE LA CONEXIÓN ── */}
          <section className="py-16 xl:py-20 bg-surface-container-low px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">Lo que lo hace diferente</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                  El poder no está en cada pieza.<br className="hidden md:block" />
                  <span className="italic text-on-tertiary-container">Está en que todas se conectan.</span>
                </h2>
                <p className="text-on-surface-variant text-base max-w-xl mb-10">
                  Una nota suelta o una tarea sin proyecto son información que se pierde. Cuando todo está vinculado, cada cosa que entra al sistema construye contexto automáticamente. Elige un ejemplo para ver qué dimensiones se activan.
                </p>
              </FadeIn>
              <ConnectionGraph />
            </div>
          </section>

          {/* ── CASOS REALES ── */}
          <section className="py-16 xl:py-20 bg-surface-container-low px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">Casos reales</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                  Lo que cambia cuando todo está conectado
                </h2>
                <p className="text-on-surface-variant text-base max-w-xl mb-10">
                  Situaciones concretas: antes y después de tener el sistema.
                </p>
              </FadeIn>

              {/* Tabs */}
              <FadeIn>
                <div className="flex flex-wrap gap-2 mb-8">
                  {SCENARIOS.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setScenarioActivo(i)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        scenarioActivo === i
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
                      }`}
                    >
                      <span>{s.icono}</span>
                      {s.tab}
                    </button>
                  ))}
                </div>
              </FadeIn>

              <AnimatePresence mode="wait">
                <motion.div
                  key={scenarioActivo}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const s = SCENARIOS[scenarioActivo];
                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Antes */}
                        <div className="bg-surface-container-highest rounded-2xl p-7">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-on-surface-variant/50">cancel</span>
                            <span className="font-bold text-on-surface-variant/60 text-sm uppercase tracking-widest">Sin el sistema</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-4 leading-tight">
                            {s.icono} {s.titulo}
                          </h3>
                          <p className="text-on-surface-variant leading-relaxed">{s.antes}</p>
                        </div>

                        {/* Con HB */}
                        <div className="bg-surface-container-lowest rounded-2xl p-7 border border-[#b4cdb8]">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-[#4d6453]">check_circle</span>
                            <span className="font-bold text-[#4d6453] text-sm uppercase tracking-widest">Con Happy Brain</span>
                          </div>
                          <div className="space-y-3 mb-5">
                            {s.con_hb.map((paso, i) => (
                              <motion.div
                                key={i}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 + 0.15 }}
                              >
                                <span className="text-xs font-bold bg-[#e8f0ea] text-[#4d6453] px-2 py-1 rounded-lg shrink-0 mt-0.5 whitespace-nowrap">
                                  {paso.dim}
                                </span>
                                <span className="text-on-surface-variant text-sm leading-relaxed">{paso.accion}</span>
                              </motion.div>
                            ))}
                          </div>
                          <motion.div
                            className="bg-[#e8f0ea] rounded-xl p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <p className="text-[#0b2013] text-sm font-medium leading-relaxed">
                              <span className="font-bold">Resultado: </span>{s.resultado}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* ── MÉTODO COPE ── */}
          <section id="cope" className="py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">El método</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                  COPE: el motor que hace que todo funcione
                </h2>
                <p className="text-on-surface-variant text-base max-w-xl mb-12">
                  Las dimensiones son las piezas. COPE es lo que las puebla, las vincula y hace que te entreguen valor cuando lo necesitas. Sin el método, las piezas son solo estructura vacía.
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {COPE_STEPS.map((step, i) => (
                  <FadeIn key={step.letra} delay={i * 0.1}>
                    <button
                      onClick={() => setCopeActivo(copeActivo === i ? null : i)}
                      className={`w-full text-left rounded-2xl border p-7 transition-all hover:shadow-md ${step.bg} ${step.border} ${
                        copeActivo === i ? "ring-2 ring-offset-1 ring-outline-variant" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-headline text-5xl font-black italic ${step.color}`}>{step.letra}</span>
                        <span className={`material-symbols-outlined text-3xl ${step.color}`}>{step.icon}</span>
                      </div>
                      <h3 className="font-headline text-xl font-bold text-primary mb-3">{step.nombre}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                    </button>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="mt-8 bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 flex flex-col md:flex-row items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-on-tertiary-container shrink-0">lightbulb</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    <strong className="text-primary">La clave no es aplicar las 4 etapas de forma perfecta.</strong> Es que cuando el sistema está conectado, el foco aparece solo, sin tener que recordar, sin tener que buscar. COPE es el hábito que mantiene el sistema vivo.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── POR DÓNDE EMPEZAR ── */}
          <section className="py-16 xl:py-20 bg-surface-container-low px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-3 block">Por dónde empezar</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                  No hace falta llegar al sistema completo de un golpe
                </h2>
                <p className="text-on-surface-variant text-base max-w-xl mb-12">
                  Puedes partir con plantillas gratuitas, ir sumando dimensiones a tu ritmo y llegar al sistema completo cuando estés listo.
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

                {/* Plantillas gratuitas */}
                <FadeIn delay={0}>
                  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-7 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#4d6453] bg-[#e8f0ea] px-3 py-1 rounded-full">Gratis</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-primary mb-4">3 plantillas para partir</h3>
                    <div className="space-y-4 flex-1">
                      {FREE_TEMPLATES.map((t) => (
                        <div key={t.id} className="border-b border-outline-variant/20 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-start gap-2">
                              <span className="text-lg">{t.icon}</span>
                              <div>
                                <p className="font-bold text-primary text-sm">{t.nombre}</p>
                                <p className="text-on-surface-variant/60 text-xs mt-0.5">{t.para}</p>
                              </div>
                            </div>
                            <a
                              href={t.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-[11px] font-bold text-[#4d6453] hover:underline"
                            >
                              Ver →
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2 ml-7">
                            {t.dims.map((d) => (
                              <span key={d} className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://www.notion.com/@aldosoto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block text-center border border-outline-variant text-primary px-5 py-3 rounded-xl font-bold text-sm hover:bg-surface-container transition-colors"
                    >
                      Ver todas las plantillas gratuitas
                    </a>
                  </div>
                </FadeIn>

                {/* Plantilla paga */}
                <FadeIn delay={0.1}>
                  <div className="bg-surface-container-lowest rounded-2xl border-2 border-[#4d6453] p-7 flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8f0ea]/60 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                    <div className="flex items-center gap-2 mb-5 relative">
                      <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#4d6453] px-3 py-1 rounded-full">Pago directo</span>
                    </div>
                    <span className="text-3xl mb-3 relative">🧠</span>
                    <h3 className="font-headline text-xl font-bold text-primary mb-2 relative">Plantilla Happy Brain</h3>
                    <p className="text-sm font-bold text-on-tertiary-container mb-4 relative">Sistema completo · 8 dimensiones · USD 49</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed flex-1 relative">
                      Lo que M1 + M2 + M3 ofrecen por separado, integrado en un solo sistema, con las 8 dimensiones conectadas y agentes IA incluidos.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1 mb-6 relative">
                      {DIMENSIONES.filter((d) => d.version === "ambos").map((d) => (
                        <span key={d.nombre} className="text-[10px] bg-[#e8f0ea] text-[#0b2013] px-2 py-0.5 rounded-full">
                          {d.icon} {d.nombre}
                        </span>
                      ))}
                    </div>
                    {/* CTA principal */}
                    <a
                      href="https://assystu.flycrew.com/e/ec7ebc33a4218ec0/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block text-center bg-editorial-gradient text-white px-5 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                      Obtener la plantilla <span className="material-symbols-outlined text-sm align-middle ml-1">open_in_new</span>
                    </a>
                    {/* Upsell */}
                    <div className="mt-4 pt-4 border-t border-outline-variant/20">
                      <p className="text-[11px] font-semibold text-on-surface-variant/50 uppercase tracking-wide mb-2">
                        ¿Quieres acompañamiento?
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://assystu.flycrew.com/e/0899a64bc978de4c/register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between w-full text-sm text-primary hover:bg-surface-container rounded-lg px-3 py-2 transition-colors group"
                        >
                          <span>Sesión 1:1 de Diagnóstico</span>
                          <span className="text-xs text-on-surface-variant/50 group-hover:text-primary transition-colors font-medium">USD 100 →</span>
                        </a>
                        <a
                          href="https://assystu.flycrew.com/e/2f82af702d258bfc/register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between w-full text-sm text-primary hover:bg-surface-container rounded-lg px-3 py-2 transition-colors group"
                        >
                          <span>Pack 5 sesiones</span>
                          <span className="text-xs text-on-surface-variant/50 group-hover:text-primary transition-colors font-medium">USD 500 →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* HB Negocio */}
                <FadeIn delay={0.2}>
                  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-7 flex flex-col h-full relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#e2725b] bg-[#fdf0ec] px-3 py-1 rounded-full">Premium</span>
                    </div>
                    <span className="text-3xl mb-3">🏢</span>
                    <h3 className="font-headline text-xl font-bold text-primary mb-2">Happy Brain Negocio</h3>
                    <p className="text-sm font-bold text-on-tertiary-container mb-4">12 dimensiones · Con mentoría</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                      Para equipos medianos y empresas. Suma Metas, Reuniones, Mensajes y Oportunidades. Requiere acompañamiento: el sistema solo no es suficiente cuando hay un equipo que debe cambiar cómo opera.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1 mb-5">
                      {DIMENSIONES.filter((d) => d.version === "negocio").map((d) => (
                        <span key={d.nombre} className="text-[10px] bg-[#fdf0ec] text-[#802918] px-2 py-0.5 rounded-full">
                          {d.icon} {d.nombre}
                        </span>
                      ))}
                    </div>
                    {/* Programas disponibles */}
                    <div className="pt-4 border-t border-outline-variant/20 mb-5">
                      <p className="text-[11px] font-semibold text-on-surface-variant/50 uppercase tracking-wide mb-2">
                        Programas disponibles
                      </p>
                      <div className="space-y-2">
                        {[
                          { nombre: "Blueprint", desc: "Diagnóstico + plan 30 días" },
                          { nombre: "Mentoring 4W", desc: "Implementación guiada" },
                          { nombre: "Mentoring 6M", desc: "Transformación sostenida" },
                        ].map((p) => (
                          <div key={p.nombre} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e2725b]/50 flex-shrink-0" />
                            <span className="text-on-surface font-medium">{p.nombre}</span>
                            <span className="text-on-surface-variant/60 text-xs mt-0.5">{p.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/happy-brain#programas"
                      className="block text-center border border-[#e2725b]/40 text-[#802918] px-5 py-3.5 rounded-xl font-bold text-sm hover:bg-[#fdf0ec] transition-colors"
                    >
                      Ver los programas Happy Brain
                    </Link>
                  </div>
                </FadeIn>

              </div>

              <FadeIn delay={0.3}>
                <p className="text-center text-on-surface-variant/60 text-sm italic">
                  M1 → M2 → M3 cubren en partes las 8 dimensiones de HB Personal. La plantilla paga las une en un sistema integrado.
                </p>
              </FadeIn>
            </div>
          </section>

          {/* ── CTA FINAL ── */}
          <section className="py-16 xl:py-20 px-6 md:px-8">
            <FadeIn>
              <div className="max-w-7xl mx-auto bg-editorial-gradient rounded-3xl p-8 md:p-12 xl:p-14 text-center text-on-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 relative z-10 leading-tight">
                  ¿Quieres que tu equipo opere así?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto relative z-10">
                  Agenda una sesión de diagnóstico de 30 minutos y vemos juntos qué estructura le falta a tu operación.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link
                    href="/contacto"
                    className="bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block"
                  >
                    Agendar diagnóstico
                  </Link>
                  <Link
                    href="/happy-brain"
                    className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors text-center"
                  >
                    Ver los programas
                  </Link>
                </div>
              </div>
            </FadeIn>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
