import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TransformaERP() {
  return (
    <>
      <Head>
        <title>TransformaERP — ASSYSTU</title>
        <meta name="description" content="Mentoría para mejorar la operación y el uso real de tu ERP, sin depender de consultoría tradicional." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background text-on-background font-body antialiased">
        <Header />
        <main className="pt-24">

          {/* ── Hero ── */}
          <section className="relative flex items-center px-8 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full editorial-grid">
              <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                <span className="text-on-tertiary-container font-label tracking-widest uppercase text-sm mb-4">Transformación Operacional</span>
                <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] text-primary mb-8">
                  Arquitectura de <br /><span className="italic text-tertiary">resultados</span> operativos.
                </h1>
                <p className="text-on-surface-variant text-xl md:text-2xl max-w-xl mb-10 leading-relaxed">
                  Mentoría para mejorar la operación y el uso real de tu ERP, sin depender de consultoría tradicional.
                </p>
                <div className="flex gap-4">
                  <Link href="/contacto" className="bg-editorial-gradient text-on-primary px-8 py-4 rounded-xl font-bold transition-all hover:opacity-90 shadow-lg">
                    Agendar diagnóstico
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 relative mt-12 md:mt-0">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-8 bg-tertiary text-on-tertiary rounded-xl max-w-[240px]">
                  <p className="font-headline text-2xl italic leading-tight">&ldquo;La eficiencia no es añadir, es destilar.&rdquo;</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Mini-nav sticky ── */}
          <section className="sticky top-[72px] z-40 bg-surface-container-low/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-center gap-12 font-label text-sm font-bold tracking-widest uppercase text-on-surface-variant">
              <a href="#que-es" className="hover:text-tertiary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span> Qué es
              </a>
              <a href="#para-quien" className="hover:text-tertiary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span> Para quién
              </a>
            </div>
          </section>

          {/* ── Qué es (Bento) ── */}
          <section id="que-es" className="py-24 px-8 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="editorial-grid mb-24">
                <div className="col-span-12 md:col-span-5">
                  <h2 className="font-headline text-5xl font-bold text-primary mb-6">Transformar ERP</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    No es necesario cambiar de software para cambiar de realidad. Nuestra metodología se enfoca en el &ldquo;last mile&rdquo; de la ejecución operativa.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 p-10 bg-surface-container-low rounded-xl">
                  <h3 className="font-headline text-3xl font-bold mb-8">Síntomas de Ineficiencia</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: "warning", title: "Data Silos", desc: "Información que existe en el ERP pero se gestiona en Excels externos." },
                      { icon: "speed", title: "Latencia Operativa", desc: "Procesos que tardan días cuando el sistema permite horas." },
                      { icon: "group_off", title: "Sub-utilización", desc: "Uso de menos del 40% de las capacidades funcionales del módulo." },
                      { icon: "error", title: "Desgaste del Equipo", desc: "Resistencia interna por flujos de trabajo mal configurados." },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="flex gap-4">
                        <span className="material-symbols-outlined text-tertiary flex-shrink-0">{icon}</span>
                        <div>
                          <h4 className="font-bold text-primary">{title}</h4>
                          <p className="text-sm text-on-surface-variant">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-10 bg-primary-container text-on-primary rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-4 block">architecture</span>
                    <h3 className="font-headline text-3xl font-bold mb-4">Metodología 3 Pilares</h3>
                    <ul className="space-y-4 text-on-primary-container">
                      {["Diagnóstico Estructural", "Alineación de Procesos", "Mentoría de Ejecución"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contacto" className="mt-8 block py-3 border border-outline-variant/30 rounded-lg hover:bg-on-primary hover:text-primary transition-all font-bold text-center text-sm">
                    Ver detalles
                  </Link>
                </div>
                <div className="p-10 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <h4 className="font-label text-xs tracking-widest uppercase text-tertiary mb-4">Enfoque</h4>
                  <p className="font-headline text-2xl text-primary leading-tight">Transferencia de capacidades internas, no dependencia eterna.</p>
                </div>
                <div className="md:col-span-2 p-10 bg-surface-container-high rounded-xl flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <h4 className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">Cómo trabajamos</h4>
                    <p className="font-headline text-2xl font-bold">Inmersión, Ajuste y Transferencia.</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-on-surface-variant italic">&ldquo;No enviamos un manual de 200 páginas. Nos sentamos con el equipo, ajustamos los procesos y nos aseguramos de que el resultado sea tangible en la operación.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Para quién / Qué no es ── */}
          <section id="para-quien" className="py-24 px-8 bg-surface-container-low">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary mb-8">Para quién es</h2>
                <ul className="space-y-6">
                  {[
                    "Equipos que tienen ERP, pero siguen operando en paralelo por WhatsApp/Excel.",
                    "Empresas que necesitan orden, trazabilidad y consistencia.",
                    "Líderes que quieren que el equipo gane autonomía.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 flex-shrink-0">done</span>
                      <span className="text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary mb-8">Qué no es</h2>
                <ul className="space-y-6">
                  {[
                    "No es venta de software ni implementación &lsquo;llave en mano&rsquo;.",
                    "No es consultoría tradicional de reportes infinitos.",
                    "No es capacitación tipo certificación.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 opacity-70" dangerouslySetInnerHTML={{ __html: `<span class="material-symbols-outlined text-error flex-shrink-0">close</span><span class="text-on-surface-variant">${item}</span>` }} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-24 px-8 bg-surface">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-headline text-4xl font-bold text-primary mb-12 text-center">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  { q: "¿Es necesario cambiar de ERP para mejorar la operación?", a: "Generalmente no. Nuestro enfoque es maximizar el valor de la infraestructura actual. La transformación ocurre en los procesos, roles y hábitos, no en el software." },
                  { q: "¿Cuánto tiempo para ver resultados?", a: "Los primeros ajustes de procesos y visibilidad de datos suelen reflejarse entre las 4 y 8 semanas tras el inicio del diagnóstico." },
                  { q: "¿Funciona para cualquier ERP?", a: "Sí. El método TransformaERP es ERP-agnóstico: funciona con SAP, Oracle, Microsoft Dynamics, Softland, y otros sistemas. El foco es la operación, no el software específico." },
                ].map(({ q, a }) => (
                  <div key={q} className="p-6 bg-surface-container-low rounded-xl">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-primary">{q}</h4>
                      <span className="material-symbols-outlined flex-shrink-0 ml-4">add</span>
                    </div>
                    <div className="mt-4 text-on-surface-variant text-sm leading-relaxed">{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Final ── */}
          <section className="py-24 px-8 bg-primary">
            <div className="max-w-7xl mx-auto editorial-grid items-center">
              <div className="col-span-12 md:col-span-8">
                <h2 className="font-headline text-5xl md:text-7xl text-on-primary font-bold leading-tight mb-8">
                  Lleve su operación <br /><span className="text-on-tertiary-container italic">al siguiente nivel.</span>
                </h2>
                <p className="text-on-primary-container text-xl max-w-2xl">Hablemos sobre cómo mejorar el uso de su ERP sin traumas técnicos.</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:justify-end mt-8 md:mt-0">
                <Link href="/contacto" className="bg-on-tertiary-container text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-tertiary transition-colors shadow-2xl inline-block">
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
