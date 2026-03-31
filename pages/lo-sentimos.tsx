import Head from "next/head";
import Link from "next/link";
import { Newsreader, Inter } from "next/font/google";
import type { GetServerSideProps } from "next";
import styles from "@/styles/LoSentimos.module.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Retorna HTTP 404 real — el contenido se renderiza igual.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.statusCode = 404;
  return { props: {} };
};

export default function LoSentimos() {
  return (
    <>
      <Head>
        <title>Lo sentimos — ASSYSTU</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className={`${styles.page} ${inter.className}`}>
        <main className={styles.container}>
          <h1 className={`${styles.title} ${newsreader.className}`}>
            Lo sentimos
          </h1>
          <p className={styles.body}>
            Lo sentimos. La página que querías visitar ya no existe, pero te
            puede interesar esto.
          </p>
          <Link href="/transformaerp" className={styles.cta}>
            Ver TransformaERP
          </Link>
        </main>
      </div>
    </>
  );
}
