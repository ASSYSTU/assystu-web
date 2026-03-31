import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" href="/logo%20para%20compartir%20en%20web.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
