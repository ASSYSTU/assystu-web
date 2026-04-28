import { Html, Head, Main, NextScript } from "next/document";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASSYSTU",
  url: "https://www.assystu.com",
  logo: "https://www.assystu.com/logo-assystu.png",
  description:
    "Consultora de eficiencia operacional y claridad empresarial. Implementamos el Método Happy Brain y TransformaERP para líderes y equipos en Chile.",
  sameAs: [
    "https://www.linkedin.com/in/aldosoto/",
    "https://www.instagram.com/kpsota/",
    "https://www.youtube.com/@AldoSotoE",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info-experiencias@assystu.com",
    contactType: "customer service",
  },
};

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" href="/icon-assystu.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJXWQXRB');`,
          }}
        />
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJXWQXRB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
