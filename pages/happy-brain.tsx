import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const capas = [
  {
    num: "01",
    slug: "blueprint",
    title: "Blueprint Happy Brain",
    desc: "Sesión de trabajo estructurada con output: plan implementable de 30 días.",
    items: ["Backlog de 30 días (8–15 acciones)", "Ritmo semanal mínimo + responsables", "Estructura base del hub (Happy Brain)"],
    price: "USD 450",
    priceNote: "CLP 450.000",
    showPrice: true,
  },
  {
    num: "02",
    slug: "operacion",
    title: "Mentoring 4W",
    desc: "Acompañamiento para que quede hecho y usado.",
    items: ["Menos \"intención\", más implementación", "Ajustes finos semana a semana", "Evidencia y cierre real de pendientes"],
    price: "USD 1.200",
    priceNote: "CLP 1.200.000",
    showPrice: false,
  },
  {
    num: "03",
    slug: "optimizacion",
    title: "Mentoring 6M",
    desc: "Madurez y sostenibilidad: delegación, estándares, ritmos, SOPs y auditoría.",
    items: ["Operación que se sostiene sin sobrecarga", "Roles claros y delegación", "Mejora continua (sin reinventar la rueda)"],
    price: "USD 1.500",
    priceNote: "CLP 1.500.000 / mes",
    showPrice: false,
  },
];

export default function HappyBrain() {
  return (
    <>
      <Head>
        <title>Happy Brain — ASSYSTU</title>
        <meta name="description" content="Primero bajamos carga mental. Después instalamos método en uso. La productividad llega como consecuencia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background text-on-background font-body antialiased">
        <Header />
        <main className="pt-24">

          {/* ── Hero ── */}
          <section className="flex flex-col justify-center px-8 py-24 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-primary leading-tight mb-8">
                El sistema operativo <span className="italic text-on-tertiary-container">cognitivo</span> para líderes que necesitan claridad.
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12">
                Happy Brain no es una herramienta; es la arquitectura que permite externalizar tu conocimiento, procesos y decisiones en una estructura líquida y escalable.
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
          <section className="py-24 bg-surface-container-low px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="font-label text-on-tertiary-container font-bold tracking-widest uppercase text-sm mb-4 block">La Definición</span>
                  <h2 className="font-headline text-5xl font-bold text-primary mb-8 leading-tight">Partimos con un diagnóstico y un plan de 30 días.</h2>
                  <div className="space-y-6 text-on-surface-variant text-lg">
                    <p>En vez de &ldquo;ordenar por ordenar&rdquo;, definimos un backlog realista, con dueños, fechas y estándar mínimo de hecho. Priorizamos el <strong>método</strong> por encima de la plataforma técnica.</p>
                    <p>Es una intervención estructural en la forma en que tu equipo procesa la información y ejecuta semana a semana.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-l-4 border-primary">
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
                  <div className="bg-surface-container-high p-10 rounded-xl">
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

          {/* ── Las 3 Capas ── */}
          <section id="capas" className="py-32 px-8 max-w-7xl mx-auto">
            <h2 className="font-headline text-5xl font-bold text-primary text-center mb-24">La Arquitectura de 3 Capas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capas.map(({ num, slug, title, desc, items, price, priceNote, showPrice }) => (
                <div key={num} className="flex flex-col rounded-2xl border border-outline-variant/20 bg-gradient-to-br from-surface-container/60 to-surface-container-lowest/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="px-8 pt-8 pb-0">
                    <span className="text-7xl font-headline italic text-outline-variant/40 font-black leading-none block mb-2">{num}</span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-3">{title}</h3>
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
                  <div className="mt-auto px-8 pb-8">
                    {showPrice ? (
                      <div className="bg-surface-container-lowest rounded-xl p-4 mb-6">
                        <span className="font-headline text-3xl font-bold text-primary">{price}</span>
                        <span className="text-on-surface-variant text-sm ml-2">{priceNote}</span>
                      </div>
                    ) : (
                      <p className="text-on-surface-variant/60 text-xs italic leading-relaxed mb-6 px-1">
                        El precio de esta etapa se definirá y comunicará durante nuestra sesión de diagnóstico, ya que depende de la complejidad de la implementación.
                      </p>
                    )}
                    <Link href={`/contacto?capa=${slug}`} className="block text-center bg-editorial-gradient text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                      Agendar diagnóstico
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Cómo trabajamos ── */}
          <section className="py-32 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="font-headline text-5xl font-bold text-primary max-w-lg leading-tight">Un proceso de diseño, no de programación.</h2>
              <p className="text-on-surface-variant text-lg max-w-sm mt-4 md:mt-0">Cuatro fases para reconstruir tu agilidad operativa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { fase: "Fase 1", tag: "Diagnóstico", desc: "Entrevistas para mapear los cuellos de botella y la fuga de información actual." },
                { fase: "Fase 2", tag: "Arquitectura", desc: "Diseño del modelo en papel antes de tocar cualquier herramienta digital." },
                { fase: "Fase 3", tag: "Implementación", desc: "Construcción del sistema y migración de los procesos críticos a la nueva estructura." },
                { fase: "Fase 4", tag: "Transferencia", desc: "Capacitación del equipo para asegurar que el sistema sea autosuficiente y evolutivo." },
              ].map(({ fase, tag, desc }) => (
                <div key={fase} className="space-y-4">
                  <div className="font-headline text-2xl font-bold border-b-2 border-primary pb-2 flex justify-between">
                    <span>{fase}</span>
                    <span className="text-on-tertiary-container">{tag}</span>
                  </div>
                  <p className="text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-32 bg-surface-container-low px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline text-5xl font-bold text-primary text-center mb-16 italic">Preguntas frecuentes</h2>
              <div className="space-y-6">
                {[
                  { q: "¿Necesito usar Notion sí o sí?", a: "No necesariamente. Usamos Happy Brain como hub cuando hace sentido, pero el foco es instalar método y consistencia." },
                  { q: "¿Esto es \"productividad\" o \"gestión\"?", a: "Es operación personal y de equipo: claridad, decisiones, ritmo semanal, y ejecución con evidencia." },
                  { q: "¿Y si ya usamos Slack, Teams o Jira?", a: "Happy Brain no sustituye herramientas de comunicación; actúa como el tejido conectivo que centraliza la \"verdad\" de la empresa que suele perderse en el ruido de esas apps." },
                  { q: "¿Cuánto tiempo le tomará a mi equipo aprender el sistema?", a: "El sistema se diseña sobre sus flujos actuales. La curva de aprendizaje técnico es de menos de 4 horas, mientras que el hábito se consolida en las primeras 2 semanas de uso guiado." },
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
          <section className="py-32 px-8">
            <div className="max-w-7xl mx-auto bg-editorial-gradient rounded-3xl p-16 text-center text-on-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <h2 className="font-headline text-5xl font-bold mb-8 relative z-10">Si quieres salir del modo incendio, partamos por el diagnóstico</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">Agenda una sesión de 30 minutos donde evaluaremos tu arquitectura de información actual sin compromiso.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                <Link href="/contacto" className="bg-on-tertiary-container text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform inline-block text-white">
                  Agendar diagnóstico
                </Link>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
