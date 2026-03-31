import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASSYSTU — Consultoría e Implementación de IA</title>
        <meta name="description" content="ASSYSTU — Consultoría e implementación de IA para empresas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>ASSYSTU</h1>
        <p>Consultoría e implementación de IA — Página en construcción</p>
        <nav>
          <a href="/happy-brain">Happy Brain</a>
          <a href="/transformaerp">TransformaERP</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </main>
    </>
  );
}
