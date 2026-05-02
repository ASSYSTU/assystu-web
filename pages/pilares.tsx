"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/* ─────────────────────────────────────────
   DATOS
───────────────────────────────────────── */

const PILARES = [
  {
    num: "01",
    icon: "👥",
    nombre: "Personas",
    tagline: "El punto de partida",
    descripcion:
      "Roles, hábitos, fricciones, compromiso, claridad de hacia dónde vamos. Bajamos carga mental, definimos foco y reducimos ruido.",
    pregunta: "¿Tu equipo sabe exactamente qué se espera de cada uno?",
    bg: "bg-primary-fixed",
    text: "text-on-primary-fixed",
    bgHex: "#d0e9d4",
    textHex: "#0b2013",
  },
  {
    num: "02",
    icon: "🔄",
    nombre: "Procesos",
    tagline: "El flujo del día a día",
    descripcion:
      "Capturar → organizar (vincular) → planificar → ejecutar. Procesos humanos, no burocráticos. Flujos que la gente realmente sigue.",
    pregunta: "¿Tienen una forma compartida de operar que todos respetan?",
    bg: "bg-secondary-fixed",
    text: "text-on-secondary-fixed",
    bgHex: "#d2e4ff",
    textHex: "#001c37",
  },
  {
    num: "03",
    icon: "🛠️",
    nombre: "Herramientas",
    tagline: "Al servicio del método",
    descripcion:
      "Al servicio de los procesos, no al revés. Integraciones, plataformas, sistemas que habilitan el método — no lo obstaculizan.",
    pregunta: "¿Sus herramientas apoyan cómo trabajan, o crean más fricción?",
    bg: "bg-[#f5e6c8]",
    text: "text-[#5c4209]",
    bgHex: "#f5e6c8",
    textHex: "#5c4209",
  },
  {
    num: "04",
    icon: "🤖",
    nombre: "IA",
    tagline: "El amplificador activo",
    descripcion:
      "La IA se potencia cuando hay contexto, sistema, y un equipo que tiene claro hacia dónde va. Sin eso, opera en el vacío.",
    pregunta: "¿Tu IA tiene el contexto necesario para ser realmente útil?",
    bg: "bg-tertiary-fixed",
    text: "text-on-tertiary-fixed",
    bgHex: "#ffdad3",
    textHex: "#3e0500",
  },
];

const NIVELES = [
  {
    icon: "🧑",
    nivel: "Personal",
    desc: "Un profesional que organiza su vida con método + IA integrada. Menos ruido mental, más foco en lo que importa.",
  },
  {
    icon: "💼",
    nivel: "Independiente",
    desc: "Un emprendedor o consultor que opera su negocio con sistema. Claridad de roles, procesos reales, herramientas que funcionan.",
  },
  {
    icon: "👥",
    nivel: "Equipos",
    desc: "Un equipo con claridad, procesos compartidos y IA amplificando la operación. Colaboración sin fricción.",
  },
  {
    icon: "🏢",
    nivel: "Organizaciones",
    desc: "Una empresa que alinea personas, procesos, herramientas e IA estratégicamente. Transformación real, no tecnología por tecnología.",
  },
];

/* ─────────────────────────────────────────
   COMPONENTES
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SpiralFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      {/* Fila de nodos */}
      <div className="flex items-stretch justify-between gap-2">
        {PILARES.map((p, i) => (
          <div key={p.nombre} className="flex items-center gap-2 flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center gap-2 rounded-2xl py-5 px-2 text-center"
              style={{ backgroundColor: p.bgHex, color: p.textHex }}
            >
              <span className="text-2xl md:text-3xl">{p.icon}</span>
              <span className="font-bold text-[11px] md:text-xs leading-tight">{p.nombre}</span>
            </motion.div>
            {i < PILARES.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.25 }}
                className="text-on-surface-variant/30 text-base flex-shrink-0"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Arco de retorno "amplifica": sólido hacia Personas, punteado hacia Procesos/Herramientas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="relative"
      >
        {/*
          viewBox 0 0 100 12. Centros aproximados de los nodos en el flex layout:
          Personas ≈ x=11, Procesos ≈ x=37, Herramientas ≈ x=63, IA ≈ x=89
          Arco punteado: IA(89) → Procesos(37) | Arco sólido: Procesos(37) → Personas(11)
        */}
        <svg
          viewBox="0 0 100 12"
          className="w-full"
          style={{ height: "24px" }}
          preserveAspectRatio="none"
        >
          {/* Punteado: IA → Procesos */}
          <path
            d="M 89,0 L 89,9 L 38,9"
            stroke="#e2725b"
            strokeWidth="1.5"
            fill="none"
            opacity="0.28"
            strokeDasharray="3 3"
          />
          {/* Sólido: Procesos → Personas */}
          <path
            d="M 38,9 L 11,9 L 11,0"
            stroke="#e2725b"
            strokeWidth="1.5"
            fill="none"
            opacity="0.65"
          />
        </svg>
        <div className="flex justify-center -mt-1">
          <span
            className="text-[#e2725b] text-xs font-semibold px-3 py-1 rounded-full border border-[#e2725b]/20 whitespace-nowrap"
            style={{ backgroundColor: "#f6f3f1" }}
          >
            ↩ amplifica
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PÁGINA
───────────────────────────────────────── */

export default function Pilares() {
  return (
    <>
      <SEOHead
        title="Los 4 Pilares del Método Happy Brain | ASSYSTU"
        description="Personas, Procesos, Herramientas e IA. El marco de diagnóstico y transformación de Happy Brain. La IA es el pilar 4, no el pilar 1."
        url="/pilares"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">

          {/* ── HERO ── */}
          <section className="bg-editorial-gradient py-20 xl:py-28 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container mb-6 block">
                    Método Happy Brain
                  </span>
                  <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-on-primary leading-tight mb-6">
                    Los 4 pilares que hacen que todo funcione
                  </h1>
                  <p className="text-lg md:text-xl text-on-primary/80 leading-relaxed max-w-2xl">
                    Personas, Procesos, Herramientas e IA. Cuando los cuatro están sanos, se genera una espiral virtuosa donde cada uno potencia al siguiente — y al anterior.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── LOS 4 PILARES ── */}
          <section className="py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Los 4 pilares
                  </h2>
                  <p className="text-on-surface-variant max-w-xl mx-auto">
                    No son etapas que se completan — son dimensiones que se mantienen. Cada persona u organización tiene un nivel de madurez distinto en cada una.
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {PILARES.map((p, i) => (
                  <FadeIn key={p.nombre} delay={i * 0.1}>
                    <div
                      className={`${p.bg} rounded-2xl p-7 h-full flex flex-col`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{p.icon}</span>
                        <span className={`text-xs font-bold tracking-widest opacity-30 ${p.text}`}>
                          {p.num}
                        </span>
                      </div>
                      <h3 className={`font-headline text-xl font-bold ${p.text} mb-1`}>
                        {p.nombre}
                      </h3>
                      <p className={`text-xs font-semibold uppercase tracking-wide opacity-50 ${p.text} mb-4`}>
                        {p.tagline}
                      </p>
                      <p className={`text-sm leading-relaxed ${p.text} opacity-80 flex-1`}>
                        {p.descripcion}
                      </p>
                      <div className="mt-5 border-t border-current/10 pt-4">
                        <p className={`text-xs italic ${p.text} opacity-55`}>
                          {p.pregunta}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ── LA ESPIRAL VIRTUOSA ── */}
          <section className="bg-surface-container-low py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-10">
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
                    La espiral virtuosa
                  </h2>
                  <p className="text-on-surface-variant max-w-2xl mx-auto">
                    Los 4 pilares no son lineales — forman un ciclo que se retroalimenta. La IA amplifica todo lo que hay antes de ella, y eso mejora a las personas, que mejoran sus procesos...
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <SpiralFlow />
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
                <FadeIn delay={0.2}>
                  <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20">
                    <p className="text-sm font-bold text-primary mb-2">En una dirección →</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      La IA funciona mejor cuando hay sistema, contexto, procesos claros y un equipo alineado. Sin eso, opera en el vacío.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20">
                    <p className="text-sm font-bold text-[#802918] mb-2">En la otra dirección ←</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      La IA amplifica todo lo anterior: mejora procesos, descubre posibilidades, acelera. Y eso mejora a las personas, que mejoran sus procesos... y así sigue.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ── LA IA ES EL PILAR 4 ── */}
          <section className="py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-[#fdf0ec] text-[#802918] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                    <span>⚠️</span> El error más común
                  </div>
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                    El mercado dice &ldquo;mete IA y listo&rdquo;.<br />Happy Brain dice que no.
                  </h2>
                  <blockquote className="text-xl md:text-2xl text-on-surface font-headline italic mb-8 leading-relaxed border-l-4 border-[#e2725b] pl-6">
                    &ldquo;La IA es el pilar 4, no el pilar 1. Y cuando los 4 pilares están sanos, la IA no es un gasto — es un multiplicador.&rdquo;
                  </blockquote>
                  <p className="text-on-surface-variant leading-relaxed">
                    Implementar IA sobre un equipo sin claridad de roles, sin procesos definidos, con herramientas que se usan mal — solo amplifica el caos. El orden importa. El contexto importa. El sistema importa.
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ── APLICA EN TODOS LOS NIVELES ── */}
          <section className="bg-surface-container-low py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-10">
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Aplica en todos los niveles
                  </h2>
                  <p className="text-on-surface-variant max-w-xl mx-auto">
                    El mismo marco, adaptado a cada contexto. No importa si eres una persona o una organización de 2000 personas.
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {NIVELES.map((n, i) => (
                  <FadeIn key={n.nivel} delay={i * 0.1}>
                    <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 h-full">
                      <span className="text-3xl block mb-4">{n.icon}</span>
                      <h3 className="font-bold text-primary mb-2">{n.nivel}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{n.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONEXIÓN SAP ── */}
          <section className="py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="bg-primary-container rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-primary-container mb-4">
                    Contexto
                  </p>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-primary mb-6 leading-tight">
                    25 años de consultoría SAP después
                  </h2>
                  <p className="text-on-primary-container leading-relaxed mb-4">
                    En proyectos en EY, Microsoft, BHP y más de 50 empresas, el framework era siempre el mismo:{" "}
                    <strong className="text-on-primary">Personas → Procesos → Tecnología</strong>.
                  </p>
                  <p className="text-on-primary-container leading-relaxed mb-4">
                    La IA agrega una 4ª capa que antes no existía. Un ERP era herramienta pasiva — necesitabas a alguien para operar. La IA es un{" "}
                    <strong className="text-on-primary">amplificador activo</strong> que devuelve valor hacia arriba: mejora los procesos, que mejoran a las personas, que mejoran su uso de las herramientas.
                  </p>
                  <p className="text-on-primary-container leading-relaxed text-sm italic opacity-80">
                    Eso no lo hacía un ERP. Eso es lo nuevo que cambia todo.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── PROCESOS HUMANOS ── */}
          <section className="bg-surface-container-low py-16 xl:py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <FadeIn>
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                    Procesos humanos.<br />No de empresa.
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed mb-5">
                    Los ERPs nacieron para los procesos de la empresa: finanzas, cadena de suministro, RRHH. Grandes sistemas para estructuras grandes. Costosos, rígidos, diseñados para flujos predecibles.
                  </p>
                  <p className="text-on-surface-variant leading-relaxed mb-5">
                    Pero el trabajo real de las personas y equipos sucede en otro lado: en reuniones, en el correo, en acuerdos verbales, en documentos dispersos en cinco plataformas distintas. No hay sistema para eso. Las personas construyen <strong className="text-on-surface">puentes mentales</strong> para conectar todo — y ese esfuerzo tiene un costo enorme en energía y tiempo.
                  </p>
                  <p className="text-on-surface leading-relaxed mb-8">
                    Happy Brain se hace cargo de eso. No de los procesos del ERP — de los <strong>procesos humanos y de equipos</strong> que el ERP nunca tocó.
                  </p>
                  <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                      Sobre la tecnología
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      La primera versión vive en <strong className="text-on-surface">Notion</strong> — no porque Notion sea el destino, sino porque es la mejor plataforma hoy para implementar el método. El día que existan sistemas más específicos, el método migra sin fricción. El método es lo que importa, no la herramienta en que aterriza.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ── CTA FINAL ── */}
          <section className="py-16 xl:py-20 px-6 md:px-8">
            <FadeIn>
              <div className="max-w-7xl mx-auto bg-editorial-gradient rounded-3xl p-8 md:p-12 xl:p-14 text-center text-on-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <h2 className="font-headline text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 relative z-10 leading-tight">
                  ¿Cuál es el pilar más débil en tu operación?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto relative z-10">
                  Agenda una sesión de diagnóstico y lo vemos juntos — sin compromiso, sin venta.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <Link
                    href="/contacto"
                    className="bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block"
                  >
                    Agendar diagnóstico
                  </Link>
                  <Link
                    href="/dimensiones"
                    className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors text-center"
                  >
                    Ver las dimensiones del sistema
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
