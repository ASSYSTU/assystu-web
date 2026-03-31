import Head from "next/head";
import Link from "next/link";
import { newsreader, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shared from "@/styles/shared.module.css";
import s from "@/styles/HappyBrain.module.css";

export default function HappyBrain() {
  return (
    <>
      <Head>
        <title>Happy Brain — ASSYSTU</title>
        <meta name="description" content="Primero bajamos carga mental. Después instalamos método en uso. La productividad llega como consecuencia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${s.page} ${inter.className}`}>
        <Header />

        {/* ── Hero ── */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <h1 className={`${s.h1} ${newsreader.className}`}>Método Happy Brain</h1>
            <p className={s.heroSubtitle}>
              Primero bajamos carga mental. Después instalamos método en uso.
              La productividad llega como consecuencia.
            </p>
            <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
          </div>
        </section>

        {/* ── Cómo partimos ── */}
        <section className={s.sectionLow}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Partimos con un diagnóstico y un plan de 30 días</h2>
            <p className={s.lead}>
              En vez de "ordenar por ordenar", definimos un backlog realista, con dueños,
              fechas y estándar mínimo de hecho.
            </p>
            <ul className={s.bullets}>
              <li>Claridad de prioridades y decisiones</li>
              <li>Ritmo semanal mínimo (sostenible)</li>
              <li>Hub (Happy Brain) como fuente de verdad</li>
              <li>IA aplicada a tareas concretas</li>
            </ul>
          </div>
        </section>

        {/* ── Las 3 capas ── */}
        <section className={s.section}>
          <div className={s.inner}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Tres capas según el nivel de acompañamiento</h2>
            <div className={s.capasGrid}>

              {/* Capa 1 */}
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 1</p>
                <p className={s.capaTitle}>Blueprint Happy Brain</p>
                <p className={s.capaDesc}>
                  Sesión de trabajo estructurada con output: plan implementable de 30 días.
                </p>
                <div>
                  <p className={s.capaSubtitle}>Qué te llevas</p>
                  <ul className={s.capaBullets}>
                    <li>Backlog de 30 días (8–15 acciones)</li>
                    <li>Ritmo semanal mínimo + responsables</li>
                    <li>Estructura base del hub (Happy Brain)</li>
                  </ul>
                </div>
                <div className={s.capaPrice}>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>Chile</span>
                    <span className={s.capaPriceValue}>USD 450 (CLP 450.000)</span>
                  </div>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>LATAM premium</span>
                    <span className={s.capaPriceValue}>USD 650 (CLP 650.000)</span>
                  </div>
                </div>
                <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
              </div>

              {/* Capa 2 */}
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 2</p>
                <p className={s.capaTitle}>Mentoring 4W</p>
                <p className={s.capaDesc}>
                  Acompañamiento para que quede hecho y usado.
                </p>
                <div>
                  <p className={s.capaSubtitle}>Qué cambia</p>
                  <ul className={s.capaBullets}>
                    <li>Menos "intención", más implementación</li>
                    <li>Ajustes finos semana a semana</li>
                    <li>Evidencia y cierre real de pendientes</li>
                  </ul>
                </div>
                <div className={s.capaPrice}>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>Chile</span>
                    <span className={s.capaPriceValue}>USD 1.200 (CLP 1.200.000)</span>
                  </div>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>LATAM premium</span>
                    <span className={s.capaPriceValue}>USD 1.800 (CLP 1.800.000)</span>
                  </div>
                </div>
                <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
              </div>

              {/* Capa 3 */}
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 3</p>
                <p className={s.capaTitle}>Mentoring 6M</p>
                <p className={s.capaDesc}>
                  Madurez y sostenibilidad: delegación, estándares, ritmos, SOPs y auditoría.
                </p>
                <div>
                  <p className={s.capaSubtitle}>Enfoque</p>
                  <ul className={s.capaBullets}>
                    <li>Operación que se sostiene sin sobrecarga</li>
                    <li>Roles claros y delegación</li>
                    <li>Mejora continua (sin reinventar la rueda)</li>
                  </ul>
                </div>
                <div className={s.capaPrice}>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>Chile Standard / mes</span>
                    <span className={s.capaPriceValue}>USD 1.500 (CLP 1.500.000)</span>
                  </div>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>LATAM Standard / mes</span>
                    <span className={s.capaPriceValue}>USD 2.200 (CLP 2.200.000)</span>
                  </div>
                  <div className={s.capaPriceRow}>
                    <span className={s.capaPriceLabel}>Premium</span>
                    <span className={s.capaPriceValue}>+30–40%</span>
                  </div>
                </div>
                <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Para quién ── */}
        <section className={s.sectionLow}>
          <div className={s.inner}>
            <div className={s.paraQuienGrid}>
              <div>
                <h2 className={`${s.h2} ${newsreader.className}`}>Para quién es</h2>
                <ul className={s.bullets}>
                  <li>Personas o equipos que están operando con demasiadas cosas en la cabeza</li>
                  <li>Si ya usan (o quieren usar) Notion como hub, pero necesitan método</li>
                  <li>Si quieren IA aplicada con criterio y estructura</li>
                </ul>
              </div>
              <div>
                <h2 className={`${s.h2} ${newsreader.className}`}>Para quién no es</h2>
                <ul className={s.bullets}>
                  <li>Si buscas consultoría tradicional sin involucrarte en hábitos y operación</li>
                  <li>Si no hay disponibilidad de sostener un ritual semanal mínimo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.section}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Preguntas frecuentes</h2>
            <div className={s.faqList}>
              <div className={s.faqItem}>
                <h3>¿Necesito usar Notion sí o sí?</h3>
                <p>No necesariamente. Usamos Happy Brain como hub cuando hace sentido, pero el foco es instalar método y consistencia.</p>
              </div>
              <div className={s.faqItem}>
                <h3>¿Esto es "productividad" o "gestión"?</h3>
                <p>Es operación personal y de equipo: claridad, decisiones, ritmo semanal, y ejecución con evidencia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section className={s.sectionDark}>
          <h2 className={`${s.h2Dark} ${newsreader.className}`}>Si quieres salir del modo incendio, partamos por el diagnóstico</h2>
          <Link href="/contacto" className={s.cierreCta}>Agendar diagnóstico</Link>
        </section>

        <Footer />
      </div>
    </>
  );
}
