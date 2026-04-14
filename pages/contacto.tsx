import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const capaLabels: Record<string, string> = {
  blueprint: "Blueprint Happy Brain (Capa 01)",
  operacion: "Mentoring 4W (Capa 02)",
  optimizacion: "Mentoring 6M (Capa 03)",
};

export default function Contacto() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const { capa } = router.query;
    if (capa && typeof capa === "string" && capaLabels[capa]) {
      setMensaje(`Hola, vengo desde la página de Happy Brain y me gustaría agendar un diagnóstico para la capa: ${capaLabels[capa]}.`);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Contacto — ASSYSTU</title>
        <meta name="description" content="Conversemos y veamos si Happy Brain calza con tu realidad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background text-on-background font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <Header />
        <main className="pt-24">

          {/* ── Hero ── */}
          <section className="px-8 py-14 xl:py-16 2xl:py-20 max-w-7xl mx-auto">
            <div className="editorial-grid">
              <div className="col-span-12 md:col-span-7">
                <h1 className="font-headline text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight leading-none mb-8 text-primary">
                  Contacto / <span className="italic font-normal text-on-surface-variant">Agendar diagnóstico</span>
                </h1>
                <p className="text-lg xl:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  Estamos listos para escuchar los desafíos de tu operación. Una conversación honesta es el primer paso hacia la claridad.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 flex items-end justify-end">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
                  <Image
                    src="/contacto-hero.png"
                    alt="Conversemos sobre tu operación"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Booking placeholder ── */}
          {/* PENDIENTE: habilitar cuando el agendador (Google Calendar / Calendly) esté configurado
          <section className="bg-surface-container-low py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center text-center border-t-4 border-tertiary">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4">calendar_today</span>
                <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Reserva tu sesión diagnóstica</h2>
                <div className="bg-surface-container-high px-8 py-16 rounded-lg w-full max-w-2xl flex items-center justify-center border-2 border-dashed border-outline-variant">
                  <p className="text-on-surface-variant font-medium italic">[ Calendario de agendamiento — próximamente ]</p>
                </div>
                <p className="mt-6 text-sm text-outline max-w-md">Selecciona una hora que te resulte cómoda para una introducción de 30 minutos a nuestras metodologías.</p>
              </div>
            </div>
          </section>
          */}

          {/* ── Formulario (Netlify Forms) ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-14 2xl:gap-16 items-start">
              <div>
                <h2 className="text-3xl xl:text-4xl font-bold text-primary mb-6 font-headline">¿Prefieres un mensaje directo?</h2>
                <p className="text-on-surface-variant mb-12">Si tu consulta requiere más detalle o prefieres ser contactado en un horario específico, completa este breve formulario.</p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-tertiary-container">speed</span>
                    <div>
                      <h4 className="font-bold text-primary">Respuesta ágil</h4>
                      <p className="text-sm text-on-surface-variant">Revisamos cada mensaje en menos de 48 horas hábiles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-tertiary-container">security</span>
                    <div>
                      <h4 className="font-bold text-primary">Sin compromiso</h4>
                      <p className="text-sm text-on-surface-variant">El diagnóstico inicial es gratuito y sin obligación.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                <form
                  name="contacto"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contacto" />
                  <input type="text" name="bot-field" className="hidden" tabIndex={-1} aria-hidden="true" />

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Nombre Completo</label>
                    <input
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Empresa <span className="normal-case tracking-normal opacity-60">(opcional)</span></label>
                    <input
                      name="empresa"
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Tamaño de equipo <span className="normal-case tracking-normal opacity-60">(opcional)</span></label>
                    <select
                      name="equipo"
                      className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="solo">Solo / freelance</option>
                      <option value="2-5">2–5 personas</option>
                      <option value="6-20">6–20 personas</option>
                      <option value="20+">Más de 20</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Mensaje</label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="¿En qué podemos ayudarte?"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-editorial-gradient text-on-primary py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    Enviar mensaje
                  </button>
                  <p className="text-[10px] text-center text-outline uppercase tracking-tighter">Procesado vía Netlify Forms</p>
                </form>
              </div>
            </div>
          </section>

          {/* ── Qué pasa después ── */}
          <section className="bg-primary text-on-primary py-14 xl:py-16 2xl:py-24 px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-10 xl:mb-12 2xl:mb-16">
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 font-headline">El camino hacia la claridad</h2>
                <p className="text-on-primary-container max-w-xl text-lg">Qué esperar después de enviarnos tu información.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { n: "01", title: "Análisis Preliminar", desc: "Revisamos tu contexto y los puntos de dolor iniciales para preparar la conversación más útil posible." },
                  { n: "02", title: "Sesión de Descubrimiento", desc: "Una charla de 30 minutos para profundizar en tu operación actual y tus objetivos de negocio." },
                  { n: "03", title: "Propuesta de Diagnóstico", desc: "Entregamos una hoja de ruta conceptual y los próximos pasos para iniciar la transformación." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="space-y-4">
                    <div className="text-5xl font-headline italic text-on-tertiary-container opacity-50">{n}</div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-on-primary-container text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container to-transparent opacity-50 pointer-events-none" />
          </section>

          {/* ── Canales directos ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2 font-headline">Canales Directos</h2>
                <p className="text-on-surface-variant mb-8">Información de contacto directo.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container block mb-2">Email</span>
                    <a href="mailto:info-experiencias@assystu.com" className="text-xl font-headline hover:text-tertiary transition-colors">info-experiencias@assystu.com</a>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container block mb-2">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/aldosoto/" target="_blank" rel="noopener noreferrer" className="text-xl font-headline hover:text-tertiary transition-colors">linkedin.com/in/aldosoto</a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-6xl text-primary">hub</span>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
