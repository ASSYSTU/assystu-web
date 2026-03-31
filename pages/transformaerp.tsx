import Head from "next/head";
import Link from "next/link";
import { newsreader, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shared from "@/styles/shared.module.css";
import s from "@/styles/TransformaERP.module.css";

export default function TransformaERP() {
  return (
    <>
      <Head>
        <title>TransformaERP — ASSYSTU</title>
        <meta name="description" content="Mentoría para mejorar la operación y el uso real de tu ERP, sin depender de consultoría tradicional." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${s.page} ${inter.className}`}>
        <Header />

        {/* ── Hero ── */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <h1 className={`${s.h1} ${newsreader.className}`}>TransformaERP</h1>
            <p className={s.heroSubtitle}>
              Mentoría para mejorar la operación y el uso real de tu ERP,
              sin depender de consultoría tradicional.
            </p>
            <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
          </div>
        </section>

        {/* ── Qué es ── */}
        <section className={s.sectionLow}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Qué es</h2>
            <p className={s.lead}>
              Acompañamiento práctico para ordenar procesos, roles y hábitos de operación
              alrededor del ERP. El objetivo es transferencia de capacidades internas.
            </p>
            <ul className={s.bullets}>
              <li>Diagnóstico operativo: dolores, brechas y prioridades</li>
              <li>Plan de implementación por ciclos (semanas), con responsables</li>
              <li>Ritmo de seguimiento para sostener adopción y calidad</li>
            </ul>
          </div>
        </section>

        {/* ── Problema que resuelve ── */}
        <section className={s.section}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>El problema que resuelve</h2>
            <p className={s.lead}>
              La mayoría de las empresas usa muy por debajo del potencial real de su ERP.
              Algunos síntomas comunes:
            </p>
            <ul className={s.bullets}>
              <li>Procesos paralelos en Excel, WhatsApp o herramientas no integradas</li>
              <li>Reportabilidad poco confiable o difícil de obtener</li>
              <li>KPIs que no se gestionan desde el ERP</li>
              <li>Equipos que no dominan el sistema y dependen de soporte externo</li>
              <li>Falta de liderazgo interno sobre el uso del ERP</li>
            </ul>
          </div>
        </section>

        {/* ── 3 Pilares ── */}
        <section className={s.sectionLow}>
          <div className={s.inner}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Tres pilares</h2>
            <div className={s.pilaresGrid}>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>Pilar 1</p>
                <p className={s.pilarTitle}>Método Transformador</p>
                <p className={s.pilarText}>
                  Diagnóstico, rediseño, activación y consolidación de mejoras con el ERP actual.
                </p>
              </div>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>Pilar 2</p>
                <p className={s.pilarTitle}>Equipo Orquestador</p>
                <p className={s.pilarText}>
                  Formación de un equipo interno que lidera el cambio, sin dependencia de terceros.
                </p>
              </div>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>Pilar 3</p>
                <p className={s.pilarTitle}>Cultura Ganadora</p>
                <p className={s.pilarText}>
                  Alineamiento de mentalidad, prácticas y liderazgo para sostener la mejora en el tiempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Para quién / Qué no es ── */}
        <section className={s.section}>
          <div className={s.inner}>
            <div className={s.dosCols}>
              <div className={s.col}>
                <h2 className={`${s.h2} ${newsreader.className}`}>Para quién es</h2>
                <ul className={s.bullets}>
                  <li>Equipos que tienen ERP, pero siguen operando en paralelo por WhatsApp/Excel</li>
                  <li>Empresas que necesitan orden, trazabilidad y consistencia</li>
                  <li>Líderes que quieren que el equipo gane autonomía</li>
                </ul>
              </div>
              <div className={s.col}>
                <h2 className={`${s.h2} ${newsreader.className}`}>Qué no es</h2>
                <ul className={s.bullets}>
                  <li>No es venta de software ni implementación "llave en mano"</li>
                  <li>No es consultoría tradicional de reportes infinitos</li>
                  <li>No es capacitación tipo certificación</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section className={s.sectionDark}>
          <h2 className={`${s.h2Dark} ${newsreader.className}`}>Si necesitas que el ERP deje de ser "un sistema más" y se vuelva operación</h2>
          <Link href="/contacto" className={s.cierreCta}>Agendar diagnóstico</Link>
        </section>

        <Footer />
      </div>
    </>
  );
}
