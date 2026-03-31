import Head from "next/head";
import Link from "next/link";
import { newsreader, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shared from "@/styles/shared.module.css";
import s from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Método Happy Brain — ASSYSTU</title>
        <meta name="description" content="Instalamos claridad operacional y un sistema semanal que se sostiene: backlog de 30 días, ritual mínimo y un hub para que la operación no dependa de incendios ni WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${s.page} ${inter.className}`}>
        <Header />

        {/* ── Hero ── */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <h1 className={`${s.h1} ${newsreader.className}`}>Método Happy Brain</h1>
            <p className={s.heroSubtitle}>Organiza tu vida. Baja la carga mental. Ejecuta semana a semana.</p>
            <ul className={s.heroBullets}>
              <li>Backlog de 30 días (8–15 acciones) por semana, con dueños</li>
              <li>Ritual semanal mínimo + evidencia (sin evidencia no se revisa)</li>
              <li>IA aplicada para acelerar, no para meter más ruido</li>
            </ul>
            <div className={s.heroCtas}>
              <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
              <Link href="/happy-brain" className={s.heroCtaSecondary}>Ver Happy Brain</Link>
            </div>
          </div>
        </section>

        {/* ── El problema ── */}
        <section className={s.sectionLow}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Cuando todo está en la cabeza, la semana se vuelve una lista infinita</h2>
            <ul className={s.bullets}>
              <li>Demasiadas cosas abiertas y decisiones chicas todo el día</li>
              <li>Se pierde tiempo en coordinar, buscar contexto y apagar incendios</li>
              <li>Se intenta "ordenar", pero no se sostiene por falta de método</li>
              <li>La IA no ayuda (o ayuda poco) si no hay una estructura mínima</li>
            </ul>
          </div>
        </section>

        {/* ── Qué hacemos ── */}
        <section className={s.section}>
          <div className={s.inner}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Instalamos un método que se usa en la vida real</h2>
            <p className={s.lead}>
              Partimos por bajar carga mental y ordenar lo esencial. Luego construimos un sistema
              simple de captura, planificación y ejecución que se sostiene semana a semana.
            </p>
            <div className={s.pilaresGrid}>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>01</p>
                <p className={s.pilarTitle}>Personas primero</p>
                <p className={s.pilarText}>Roles, hábitos, desgaste, compromiso</p>
              </div>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>02</p>
                <p className={s.pilarTitle}>Procesos humanos</p>
                <p className={s.pilarText}>Capturar → Clarificar → Planificar → Ejecutar → Cerrar</p>
              </div>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>03</p>
                <p className={s.pilarTitle}>Herramientas al servicio</p>
                <p className={s.pilarText}>Happy Brain como hub, manteniendo lo que ya usan</p>
              </div>
              <div className={s.pilarCard}>
                <p className={s.pilarNum}>04</p>
                <p className={s.pilarTitle}>IA transversal</p>
                <p className={s.pilarText}>2–3 usos concretos que ahorren tiempo y sostengan consistencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 30 días ── */}
        <section className={s.sectionLow}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>En 30 días deberías ver esto</h2>
            <ul className={s.bullets}>
              <li>Backlog de 30 días con 8–15 acciones, priorizadas y calendarizables</li>
              <li>Ritual semanal mínimo (agenda fija + responsable)</li>
              <li>Estándar mínimo de "hecho" + evidencia</li>
              <li>Hub (Happy Brain) con notas, acuerdos y tareas en un solo lugar</li>
              <li>2–3 quick wins de IA aplicados a tu realidad</li>
            </ul>
            <Link href="/contacto" className={shared.btnPrimary}>Agendar diagnóstico</Link>
          </div>
        </section>

        {/* ── Las 3 capas ── */}
        <section className={s.section}>
          <div className={s.inner}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Elige la profundidad: plan, implementación o madurez</h2>
            <p className={s.lead}>
              Puedes partir por un plan implementable de 30 días, o ir directo a acompañamiento
              para que quede hecho y usado.
            </p>
            <div className={s.capasGrid}>
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 1</p>
                <p className={s.capaTitle}>Blueprint Happy Brain</p>
                <p className={s.capaDesc}>Sesión de trabajo estructurada con output: plan implementable de 30 días.</p>
              </div>
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 2</p>
                <p className={s.capaTitle}>Mentoring 4W</p>
                <p className={s.capaDesc}>Acompañamiento para que quede hecho y usado.</p>
              </div>
              <div className={s.capaCard}>
                <p className={s.capaNum}>Capa 3</p>
                <p className={s.capaTitle}>Mentoring 6M</p>
                <p className={s.capaDesc}>Madurez y sostenibilidad: delegación, estándares, ritmos, SOPs y auditoría.</p>
              </div>
            </div>
            <Link href="/happy-brain" className={shared.btnPrimary}>Ver detalle de Happy Brain</Link>
          </div>
        </section>

        {/* ── Para quién ── */}
        <section className={s.sectionLow}>
          <div className={s.inner}>
            <div className={s.paraQuienGrid}>
              <div>
                <h2 className={`${s.h2} ${newsreader.className}`}>Para quién es</h2>
                <ul className={s.bullets}>
                  <li>Si estás con demasiadas cosas abiertas y quieres recuperar claridad</li>
                  <li>Si necesitas un método semanal simple (no más herramientas)</li>
                  <li>Si quieres que la IA trabaje con tu sistema, no en paralelo</li>
                </ul>
              </div>
              <div>
                <h2 className={`${s.h2} ${newsreader.className}`}>Para quién no es</h2>
                <ul className={s.bullets}>
                  <li>Si buscas "la app mágica" sin cambiar hábitos mínimos</li>
                  <li>Si no hay disposición a sostener un ritual semanal (aunque sea corto)</li>
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
                <h3>"No tengo tiempo."</h3>
                <p>Justamente. El primer objetivo es bajar carga mental e instalar un ritual mínimo que te devuelva tiempo.</p>
              </div>
              <div className={s.faqItem}>
                <h3>"Ya probamos Notion/IA y no resultó."</h3>
                <p>Normal. Sin método y estructura, las herramientas se vuelven más ruido. Partimos por lo humano y lo simple.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section className={s.sectionDark}>
          <h2 className={`${s.h2Dark} ${newsreader.className}`}>Menos carga mental. Más claridad. Mejor ejecución.</h2>
          <Link href="/contacto" className={s.cierreCta}>Agendar diagnóstico</Link>
        </section>

        <Footer />
      </div>
    </>
  );
}
