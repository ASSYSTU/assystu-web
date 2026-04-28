import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}

const BASE_URL = "https://www.assystu.com";
const DEFAULT_IMAGE = `${BASE_URL}/og/og-home.png`;

export default function SEOHead({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  type = "website",
}: SEOHeadProps) {
  const fullUrl = `${BASE_URL}${url}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content="ASSYSTU" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Head>
  );
}
