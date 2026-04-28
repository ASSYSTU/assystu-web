import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";

const capaToInteres: Record<string, string> = {
  blueprint: "blueprint",
  operacion: "mentoring-4w",
  optimizacion: "mentoring-6m",
};

export default function Contacto() {
  const router = useRouter();
  const [defaultInteres, setDefaultInteres] = useState("");

  useEffect(() => {
    const { capa } = router.query;
    if (capa && typeof capa === "string" && capaToInteres[capa]) {
      setDefaultInteres(capaToInteres[capa]);
    }
  }, [router.query]);

  return (
    <>
      <SEOHead
        title="Contacto — ASSYSTU"
        description="Conversemos y veamos si Happy Brain calza con tu realidad."
        url="/contacto"
        image="/og/og-contacto.png"
      />
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

          {/* ── Formulario ── */}
          <section className="py-14 xl:py-16 2xl:py-24 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-14 2xl:gap-16 items-start">
              <div>
                <h2 className="text-3xl xl:text-4xl font-bold text-primary mb-6 font-headline">Agenda un diagnóstico</h2>
                <p className="text-on-surface-variant mb-12">Una conversación honesta de 30 minutos para evaluar tu operación actual. Sin costo y sin compromiso.</p>
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
                <ContactForm
                  key={defaultInteres}
                  defaultInteres={defaultInteres}
                />
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
