import Head from "next/head";
import Link from "next/link";
import { newsreader, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shared from "@/styles/shared.module.css";
import s from "@/styles/Contacto.module.css";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto — ASSYSTU</title>
        <meta name="description" content="Conversemos y veamos si Happy Brain calza con tu realidad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${s.page} ${inter.className}`}>
        <Header />

        {/* ── Hero ── */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <h1 className={`${s.h1} ${newsreader.className}`}>Contacto</h1>
            <p className={s.heroSubtitle}>Conversemos y veamos si Happy Brain calza con tu realidad.</p>
          </div>
        </section>

        {/* ── Agendar (placeholder) ── */}
        <section className={s.section}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Agendar diagnóstico</h2>
            <div className={s.agendarBox}>
              <p className={s.agendarPlaceholder}>
                Aquí irá el calendario de agendamiento (Calendly o Google Appointment Schedule).<br />
                <em>Próximamente disponible.</em>
              </p>
              {/* TODO: reemplazar por embed de Calendly o Google Calendar cuando esté listo */}
              <Link href="mailto:hola@assystu.com" className={shared.btnPrimary}>
                Escríbenos por ahora
              </Link>
            </div>
          </div>
        </section>

        {/* ── Formulario fallback (Netlify Forms) ── */}
        <section className={s.sectionLow}>
          <div className={s.innerNarrow}>
            <h2 className={`${s.h2} ${newsreader.className}`}>Si prefieres, déjanos un mensaje</h2>
            <p className={s.lead}>Responderemos por email con los siguientes pasos.</p>

            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              className={s.form}
            >
              <input type="hidden" name="form-name" value="contacto" />

              <div className={s.fieldGroup}>
                <label className={s.label} htmlFor="nombre">Nombre</label>
                <input className={s.input} type="text" id="nombre" name="nombre" required />
              </div>

              <div className={s.fieldGroup}>
                <label className={s.label} htmlFor="email">Email</label>
                <input className={s.input} type="email" id="email" name="email" required />
              </div>

              <div className={s.fieldGroup}>
                <label className={s.label} htmlFor="empresa">
                  Empresa <span className={s.labelOptional}>(opcional)</span>
                </label>
                <input className={s.input} type="text" id="empresa" name="empresa" />
              </div>

              <div className={s.fieldGroup}>
                <label className={s.label} htmlFor="equipo">
                  Tamaño de equipo <span className={s.labelOptional}>(opcional)</span>
                </label>
                <select className={s.select} id="equipo" name="equipo">
                  <option value="">Seleccionar...</option>
                  <option value="solo">Solo / freelance</option>
                  <option value="2-5">2–5 personas</option>
                  <option value="6-20">6–20 personas</option>
                  <option value="20+">Más de 20</option>
                </select>
              </div>

              <div className={s.fieldGroup}>
                <label className={s.label} htmlFor="mensaje">Mensaje</label>
                <textarea className={s.textarea} id="mensaje" name="mensaje" required />
              </div>

              <button type="submit" className={shared.btnPrimary}>Enviar mensaje</button>
              <p className={s.formNote}>Respondemos en menos de 48 horas hábiles.</p>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
