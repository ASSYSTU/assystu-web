import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TextRotate } from "@/components/TextRotate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Método Happy Brain — ASSYSTU</title>
        <meta name="description" content="Instalamos claridad operacional y un sistema semanal que se sostiene: backlog de 30 días, ritual mínimo y un hub para que la operación no dependa de incendios ni WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-surface font-body text-on-surface">
        <Header />
        <main className="pt-24">

          {/* ── Hero ── */}
          <section className="relative flex items-center px-8 py-14 xl:py-16 2xl:py-20 max-w-7xl mx-auto overflow-hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <h1 className="font-headline text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-primary tracking-tighter leading-none">
                  Método Happy Brain
                </h1>
                <p className="text-xl lg:text-2xl 2xl:text-3xl font-headline italic text-on-surface-variant max-w-2xl leading-relaxed">
                  Organiza tu vida. Baja la carga mental. Ejecuta semana a semana.
                </p>
                <ul className="space-y-4 py-4">
                  {[
                    "Backlog de 30 días (8–15 acciones) con dueños",
                    "Ritual semanal mínimo + evidencia (sin evidencia no se revisa)",
                    "IA aplicada para acelerar, no para meter más ruido",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-on-tertiary-container mt-0.5 flex-shrink-0">check_circle</span>
                      <span className="text-lg text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contacto" className="bg-editorial-gradient text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    Agendar diagnóstico
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link href="/happy-brain" className="border-2 border-outline-variant text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-all text-center">
                    Ver las 3 capas
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="aspect-square bg-surface-container-high rounded-full relative overflow-hidden">
                  <Image 
                    src="/hero-desk.png" 
                    alt="Escritorio organizado que refleja claridad mental" 
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-tertiary text-on-tertiary p-8 rounded-xl shadow-xl max-w-[240px] z-10">
                  <p className="font-headline italic text-xl">&ldquo;La claridad es el único antídoto contra el caos operacional.&rdquo;</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── El problema ── */}
          <section className="bg-surface-container-low py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 2xl:gap-24 items-center">
                <div>
                  <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-8 leading-tight">El caos no es falta de ganas, es falta de arquitectura.</h2>
                  <p className="text-lg xl:text-xl text-on-surface-variant mb-12 leading-relaxed">
                    Vives con demasiadas cosas en la cabeza. La coordinación sucede por ráfagas de WhatsApp, apagas incendios a diario y sientes que, por mucho que corras, el sistema no es sostenible. Sin un método, el crecimiento solo significa más ruido.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "chat_bubble", title: "WhatsApp Ops", desc: "La información se pierde en hilos infinitos." },
                    { icon: "local_fire_department", title: "Incendios", desc: "Tu agenda es reactiva, no proactiva.", mt: true },
                    { icon: "psychology", title: "Carga Mental", desc: "El cerebro como almacén, no como procesador." },
                    { icon: "trending_down", title: "Insostenible", desc: "No puedes escalar sin multiplicar el estrés.", mt: true },
                  ].map(({ icon, title, desc, mt }) => (
                    <div key={title} className={`bg-surface-container-lowest p-8 rounded-xl space-y-4${mt ? " mt-8" : ""}`}>
                      <span className="material-symbols-outlined text-4xl text-tertiary block">{icon}</span>
                      <h3 className="font-bold text-lg">{title}</h3>
                      <p className="text-sm text-on-surface-variant">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── La promesa ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container font-bold">La Transformación</span>
              <h2 className="font-headline text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary leading-tight flex flex-wrap justify-center gap-x-3 items-center">
                <span>Claridad operacional</span>
                <TextRotate
                  texts={[
                    "absoluta.",
                    "accionable.",
                    "tangible.",
                    "sostenida."
                  ]}
                  staggerDuration={0.03}
                  rotationInterval={2500}
                  mainClassName="italic text-on-tertiary-container overflow-hidden"
                />
              </h2>
              <p className="text-lg xl:text-2xl text-on-surface-variant leading-relaxed">
                Instalamos un <strong>sistema semanal sostenible</strong> que actúa como el HUB central de tu negocio. Pasamos de la improvisación al rigor de un método probado: <strong>Happy Brain</strong>.
              </p>
              <div className="h-1 w-24 bg-tertiary mx-auto" />
            </div>
          </section>

          {/* ── Las 3 Capas del Método ── */}
          <section className="bg-primary text-on-primary py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-headline text-3xl xl:text-4xl font-bold mb-12 xl:mb-16 text-center">Las 3 Capas del Método</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Capa de Captura", desc: "Vaciamos el ruido. Creamos un backlog estructurado de 30 días donde cada acción tiene un dueño y un entregable claro." },
                  { num: "02", title: "Capa de Rituales", desc: "El latido del negocio. Reuniones mínimas con una regla sagrada: sin evidencia documental, el punto no se revisa." },
                  { num: "03", title: "Capa de Aceleración", desc: "Integración de IA en procesos clave. No para hacer más, sino para hacer lo mismo en una fracción del tiempo." },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="bg-primary-container p-6 xl:p-10 rounded-xl border border-on-primary-container/20 hover:border-on-tertiary-container transition-all">
                    <span className="text-6xl font-headline italic opacity-20 mb-6 block">{num}</span>
                    <h3 className="text-2xl font-bold mb-4">{title}</h3>
                    <p className="text-on-primary-container leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 30 días ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 md:p-10 xl:p-12 2xl:p-16 space-y-8">
                  <h2 className="font-headline text-3xl xl:text-4xl font-bold text-primary">¿Qué cambia en 30 días?</h2>
                  <div className="space-y-6">
                    {[
                      { n: 1, title: "Backlog Limpio", desc: "Tienes las 8–15 acciones críticas del mes priorizadas." },
                      { n: 2, title: "El Ritual Instalado", desc: "Tu equipo sabe exactamente qué reportar y cuándo." },
                      { n: 3, title: "El HUB Central", desc: "Un solo lugar de verdad. No más búsqueda de archivos." },
                      { n: 4, title: "IA en Producción", desc: "2–3 casos de uso reales ahorrando horas cada semana." },
                    ].map(({ n, title, desc }) => (
                      <div key={n} className="flex gap-4">
                        <div className="w-12 h-12 shrink-0 bg-tertiary-fixed text-tertiary rounded-full flex items-center justify-center font-bold">{n}</div>
                        <div>
                          <h4 className="font-bold">{title}</h4>
                          <p className="text-on-surface-variant">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 min-h-[400px] relative">
                  <Image
                    src="/home-30-days.png"
                    alt="Qué cambia en 30 días con el Método Happy Brain"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Para quién ── */}
          <section className="bg-surface-container py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30 rounded-2xl overflow-hidden">
                <div className="bg-surface p-8 md:p-10 xl:p-12 2xl:p-16">
                  <h3 className="font-headline text-2xl xl:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-primary-container">sentiment_satisfied</span>
                    Para quién es esto
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "Directivos que sienten que su equipo no \"tracciona\" sin su presencia constante.",
                      "Empresas que quieren dejar de gestionar por \"sensaciones\" y pasar a gestionar por \"evidencias\".",
                      "Líderes que valoran su tiempo y la salud mental de su organización.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-green-600 flex-shrink-0">done</span>
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface p-8 md:p-10 xl:p-12 2xl:p-16">
                  <h3 className="font-headline text-2xl xl:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container">sentiment_dissatisfied</span>
                    Para quién NO es esto
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "Quien busca una \"varita mágica\" que no requiera disciplina mínima semanal.",
                      "Organizaciones que prefieren el caos creativo a la eficiencia operacional.",
                      "Aquellos que no están dispuestos a documentar procesos básicos.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 opacity-70">
                        <span className="material-symbols-outlined text-error flex-shrink-0">close</span>
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl xl:text-4xl font-bold text-primary text-center mb-12 xl:mb-16">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Cuánto tiempo requiere implementar esto?",
                    a: "La configuración inicial toma unas horas, pero el mantenimiento semanal se reduce a un ritual de 45–60 minutos para todo el equipo. Ahorramos más tiempo del que pedimos.",
                  },
                  {
                    q: "Ya hemos probado otros métodos (Agile, Scrum...) ¿En qué cambia?",
                    a: "No somos un framework rígido. Happy Brain es arquitectura aplicada a tu realidad. Nos centramos en la carga mental y la evidencia, no en la burocracia de las ceremonias.",
                  },
                  {
                    q: "¿Necesito saber de IA o de Notion?",
                    a: "No. Montamos el HUB y te entregamos las herramientas listas. Tú solo tienes que usar la interfaz, nosotros nos encargamos de la complejidad técnica.",
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="group bg-surface-container-low p-6 rounded-lg">
                    <summary className="list-none font-bold text-lg flex justify-between items-center cursor-pointer">
                      {q}
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0 ml-4">expand_more</span>
                    </summary>
                    <p className="mt-4 text-on-surface-variant leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── Cierre CTA ── */}
          <section className="bg-editorial-gradient text-on-primary py-14 xl:py-16 2xl:py-24 px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
              <h2 className="font-headline text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight">¿Listo para recuperar el control de tus semanas?</h2>
              <p className="text-lg xl:text-xl opacity-90 max-w-2xl mx-auto">El diagnóstico es el primer paso para entender dónde se está fugando la energía de tu equipo. Sin compromiso.</p>
              <div className="flex justify-center">
                <Link href="/contacto" className="bg-on-tertiary-container text-white px-10 xl:px-12 py-4 xl:py-5 rounded-xl font-bold text-lg xl:text-xl hover:scale-105 transition-all inline-block">
                  Agendar diagnóstico ahora
                </Link>
              </div>
            </div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-on-primary-container/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none" />
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
