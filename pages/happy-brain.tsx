import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceModal, { type CapaModalData } from "@/components/ServiceModal";

const capas: Array<{
  num: string;
  slug: string;
  title: string;
  desc: string;
  duration: string;
  items: string[];
  price: string;
  priceNote: string;
  showPrice: boolean;
  ctaLabel: string;
  modal: Omit<CapaModalData, "title" | "desc" | "duration" | "ctaLabel" | "ctaHref">;
}> = [
  {
    num: "01",
    slug: "blueprint",
    title: "Blueprint Happy Brain",
    desc: "Sesión de trabajo estructurada con output: plan de acción de 30 días.",
    duration: "3h + entrega 48h hábiles",
    items: ["Backlog de 30 días (8–15 acciones)", "Ritmo semanal mínimo + responsables", "Hub con IA lista para responder sobre tu operación"],
    price: "USD 650",
    priceNote: "CLP 650.000",
    showPrice: true,
    ctaLabel: "Contáctanos",
    modal: {
      includes: [
        "Entrevista de diagnóstico (mapeo de cuellos de botella y fugas de información)",
        "Diseño del sistema en papel antes de tocar cualquier herramienta",
        "Backlog de 30 días (8–15 acciones) con dueños y fechas",
        'Ritual semanal mínimo con estándar de "hecho" + evidencia',
        "Estructura base del hub central (cuando aplica Notion)",
        "Definición de roles: champion humano y técnico",
        "IA preconfigurada para el hub: prompts para ritual semanal, resúmenes y seguimiento de pendientes",
        "Acceso a plantilla Happy Brain y portal con videos de apoyo",
      ],
      deliverables: [
        "Backlog priorizado en documento editable",
        "Plantilla de ritual semanal lista para usar",
        "Resumen ejecutivo del diagnóstico",
      ],
      notIncludes: [
        "Ejecución técnica dentro de los sistemas del cliente",
        "Capacitación del equipo (disponible en Mentoring 4W)",
        "Soporte post-entrega",
      ],
    },
  },
  {
    num: "02",
    slug: "operacion",
    title: "Mentoring 4W",
    desc: "Acompañamiento para que el sistema quede andando y en uso.",
    duration: "4 semanas",
    items: ["Menos \"intención\", más acción", "Ajustes finos semana a semana", "IA en uso: minutas, resúmenes y seguimiento automático"],
    price: "USD 1.200",
    priceNote: "CLP 1.200.000",
    showPrice: false,
    ctaLabel: "Agendar diagnóstico",
    modal: {
      includes: [
        "4 sesiones semanales (60–90 min c/u)",
        "Guía al equipo para poner el sistema en uso con sus propios recursos",
        "Seguimiento de evidencia y avance semana a semana",
        "Ajustes finos según la carga real detectada en uso",
        "Cierre formal con hábitos y evidencia consolidados",
        "Puesta en uso de IA en el ritual del equipo: minutas, resúmenes semanales y organización de backlog",
        "Acceso a plantilla Happy Brain y portal con videos de apoyo",
      ],
      deliverables: [
        "Sistema operativo en uso con evidencia documentada",
        "Ritual semanal consolidado en el equipo",
        "Registro de ajustes y aprendizajes del proceso",
      ],
      notIncludes: [
        "Ejecución técnica directa en sistemas del cliente",
        "Soporte entre sesiones fuera del horario acordado",
      ],
    },
  },
  {
    num: "03",
    slug: "optimizacion",
    title: "Mentoring 6M",
    desc: "Madurez y sostenibilidad: delegación, estándares, ritmos, SOPs y auditoría.",
    duration: "6 meses",
    items: ["Operación que se sostiene sin sobrecarga", "Roles claros y delegación real", "IA para auditorías, métricas y detección de cuellos de botella"],
    price: "USD 1.500",
    priceNote: "CLP 1.500.000 / mes",
    showPrice: false,
    ctaLabel: "Agendar diagnóstico",
    modal: {
      includes: [
        "Sesiones mensuales de auditoría del sistema",
        "Acompañamiento para delegar responsabilidades al equipo",
        "Diseño de SOPs y rituales que no dependan del fundador",
        "Ciclo de revisión y mejora continua",
        "Seguimiento de métricas operacionales clave",
        "IA integrada en auditorías periódicas: análisis de métricas, seguimiento de delegación y detección de cuellos de botella",
        "Acceso a plantilla Happy Brain y portal con videos de apoyo",
      ],
      deliverables: [
        "SOPs documentados por proceso crítico",
        "Estructura de roles y responsabilidades actualizada",
        "Registro de seguimiento operacional (dashboard o documento)",
      ],
      notIncludes: [
        "Ejecución técnica directa en sistemas del cliente",
        "Rediseño del sistema base (requiere Blueprint + 4W previos)",
      ],
    },
  },
];

// Datos del modal para cada capa (pasados al componente ServiceModal)
function buildModalData(capa: typeof capas[number]): CapaModalData {
  return {
    title: capa.title,
    duration: capa.duration,
    desc: capa.desc,
    ctaLabel: capa.ctaLabel,
    ctaHref: `/contacto?capa=${capa.slug}`,
    ...capa.modal,
  };
}

export default function HappyBrain() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const modalData = capas.map(buildModalData);

  return (
    <>
      <Head>
        <title>Happy Brain — ASSYSTU</title>
        <meta name="description" content="Bajamos carga mental y dejamos el método andando. La productividad llega como consecuencia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background text-on-background font-body antialiased">
        <Header />
        <main className="pt-24">

          {/* ── Hero ── */}
          <section className="flex flex-col justify-center px-8 py-14 xl:py-16 2xl:py-24 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="font-headline text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-primary leading-tight mb-8">
                El sistema operativo <span className="italic text-on-tertiary-container">cognitivo</span> para líderes que necesitan claridad.
              </h1>
              <p className="font-body text-lg xl:text-xl 2xl:text-2xl text-on-surface-variant max-w-2xl mb-12">
                Happy Brain no es una herramienta; es la arquitectura que externaliza tu conocimiento, procesos y decisiones — con IA como capa de inteligencia que potencia cada etapa del método.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/contacto" className="bg-editorial-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  Agendar diagnóstico <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="#capas" className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all text-center">
                  Explorar las 3 capas
                </Link>
              </div>
            </div>
          </section>

          {/* ── Qué es / Qué NO es ── */}
          <section className="py-14 xl:py-16 2xl:py-24 bg-surface-container-low px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-14 2xl:gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="font-label text-on-tertiary-container font-bold tracking-widest uppercase text-sm mb-4 block">La Definición</span>
                  <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-8 leading-tight">Partimos con un diagnóstico y un plan de 30 días.</h2>
                  <div className="space-y-6 text-on-surface-variant text-lg">
                    <p>En vez de &ldquo;ordenar por ordenar&rdquo;, definimos un backlog realista, con dueños, fechas y estándar mínimo de hecho. Priorizamos el <strong>método</strong> por encima de la plataforma técnica.</p>
                    <p>Es una intervención estructural en la forma en que tu equipo procesa la información y ejecuta semana a semana.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-surface-container-lowest p-6 xl:p-10 rounded-xl shadow-sm border-l-4 border-primary">
                    <h3 className="font-headline text-2xl font-bold text-primary mb-4 italic">Happy Brain ES...</h3>
                    <ul className="space-y-4 text-on-surface-variant">
                      {["Un backlog de 30 días con dueños y entregables claros.", "Un ritmo semanal mínimo con evidencia documentada.", "Un hub central que centraliza notas, acuerdos y tareas."].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary flex-shrink-0">check_circle</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface-container-high p-6 xl:p-10 rounded-xl">
                    <h3 className="font-headline text-2xl font-bold text-on-surface-variant mb-4 italic opacity-60">Happy Brain NO ES...</h3>
                    <ul className="space-y-4 text-on-surface-variant opacity-70">
                      {["Una simple plantilla de Notion descargable.", "Un gestor de tareas tradicional (To-Do List).", "Un método que requiere horas de mantenimiento cada semana."].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined flex-shrink-0">cancel</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── IA ── */}
          <section className="py-14 xl:py-20 2xl:py-32 bg-surface-container-low px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 xl:mb-16">
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-container font-bold mb-4 block">Inteligencia Artificial</span>
                <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6 leading-tight">IA que funciona porque tiene contexto</h2>
                <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                  La IA solo es útil cuando tiene información estructurada. Por eso el método importa: cuando tu equipo documenta en el hub y sigue el ritual, la IA puede organizar, resumir y responder sobre tu operación al instante.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "hub",
                    title: "Hub conectado",
                    desc: "La IA tiene acceso a tu backlog, acuerdos y pendientes. Organiza y prioriza al instante, sin que tengas que recordar dónde está cada cosa.",
                  },
                  {
                    icon: "autorenew",
                    title: "Ritual que alimenta la IA",
                    desc: "Cada semana que tu equipo documenta en el hub, la IA tiene más contexto. Minutas, resúmenes y seguimiento de pendientes sin carga extra.",
                  },
                  {
                    icon: "auto_awesome",
                    title: "Preguntas que se responden solas",
                    desc: "¿Qué quedó pendiente? ¿Qué acordamos? ¿Qué tiene prioridad? La IA responde porque la información está donde debe estar.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 space-y-4">
                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container block">{icon}</span>
                    <h3 className="font-headline text-xl font-bold text-primary">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Las 3 Capas ── */}
          <section id="capas" className="py-14 xl:py-20 2xl:py-32 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12 xl:mb-16 2xl:mb-24">
              <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4">La Arquitectura de 3 Capas</h2>
              <p className="text-on-surface-variant text-lg">Para equipos y organizaciones que necesitan operar con método.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capas.map(({ num, slug, title, desc, duration, items, price, priceNote, showPrice, ctaLabel }, index) => (
                <div key={num} className="flex flex-col rounded-2xl border border-outline-variant/20 bg-gradient-to-br from-surface-container/60 to-surface-container-lowest/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="px-8 pt-8 pb-0">
                    <span className="text-7xl font-headline italic text-outline-variant/40 font-black leading-none block mb-2">{num}</span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-1">{title}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container mb-3 block">{duration}</span>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{desc}</p>
                    <div className="h-px w-full bg-outline-variant/30 mb-6" />
                    <ul className="space-y-3 mb-8">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-on-tertiary-container text-base flex-shrink-0 mt-0.5">check</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto px-8 pb-8 space-y-3">
                    {showPrice ? (
                      <div className="bg-surface-container-lowest rounded-xl p-4">
                        <span className="font-headline text-3xl font-bold text-primary">{price}</span>
                        <span className="text-on-surface-variant text-sm ml-2">{priceNote}</span>
                      </div>
                    ) : (
                      <p className="text-on-surface-variant/60 text-xs italic leading-relaxed px-1">
                        El precio se define durante la sesión de diagnóstico, según el alcance del acompañamiento.
                      </p>
                    )}
                    <button
                      onClick={() => setActiveModal(index)}
                      className="w-full text-center border border-outline-variant text-primary px-6 py-3 rounded-xl font-bold hover:bg-surface-container transition-colors"
                    >
                      Más información
                    </button>
                    <Link
                      href={`/contacto?capa=${slug}`}
                      className="block text-center bg-editorial-gradient text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                    >
                      {ctaLabel}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-14 xl:py-20 2xl:py-32 bg-surface-container-low px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary text-center mb-12 xl:mb-16 italic">Preguntas frecuentes</h2>
              <div className="space-y-6">
                {[
                  { q: "¿Necesito usar Notion sí o sí?", a: "No necesariamente. Usamos Happy Brain como hub cuando hace sentido, pero el foco es el método y la consistencia." },
                  { q: "¿Esto es \"productividad\" o \"gestión\"?", a: "Es operación personal y de equipo: claridad, decisiones, ritmo semanal, y ejecución con evidencia." },
                  { q: "¿Y si ya usamos Slack, Teams o Jira?", a: "Happy Brain no sustituye herramientas de comunicación; actúa como el tejido conectivo que centraliza la \"verdad\" de la empresa que suele perderse en el ruido de esas apps." },
                  { q: "¿Cuánto tiempo le tomará a mi equipo aprender el sistema?", a: "El sistema se diseña sobre sus flujos actuales. La curva de aprendizaje técnico es de menos de 4 horas, mientras que el hábito se consolida en las primeras 2 semanas de uso acompañado." },
                ].map(({ q, a }) => (
                  <details key={q} className="group bg-surface-container-lowest p-6 rounded-xl cursor-pointer">
                    <summary className="font-bold text-lg text-primary flex justify-between items-center list-none">
                      {q}
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0 ml-4">expand_more</span>
                    </summary>
                    <p className="mt-4 text-on-surface-variant">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Final ── */}
          <section className="py-14 xl:py-20 2xl:py-32 px-8">
            <div className="max-w-7xl mx-auto bg-editorial-gradient rounded-3xl p-8 md:p-12 xl:p-14 2xl:p-16 text-center text-on-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 xl:mb-8 relative z-10">Si quieres salir del modo incendio, partamos por el diagnóstico</h2>
              <p className="text-lg xl:text-xl opacity-90 mb-8 xl:mb-12 max-w-2xl mx-auto relative z-10">Agenda una sesión de 30 minutos donde evaluaremos tu arquitectura de información actual sin compromiso.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                <Link href="/contacto" className="bg-on-tertiary-container text-white px-8 xl:px-10 py-4 xl:py-5 rounded-xl font-bold text-lg xl:text-xl hover:scale-105 transition-transform inline-block">
                  Agendar diagnóstico
                </Link>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>

      {/* Modal de detalle de servicio */}
      <ServiceModal
        capas={modalData}
        activeIndex={activeModal}
        onClose={() => setActiveModal(null)}
        onNavigate={(index) => setActiveModal(index)}
      />
    </>
  );
}
