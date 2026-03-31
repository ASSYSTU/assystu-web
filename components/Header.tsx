import Link from "next/link";
import { inter } from "@/lib/fonts";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} ${inter.className}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>ASSYSTU</Link>
        <nav className={styles.nav}>
          <Link href="/happy-brain">Happy Brain</Link>
          <Link href="/transformaerp">TransformaERP</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <Link href="/contacto" className={styles.cta}>Agendar diagnóstico</Link>
      </div>
    </header>
  );
}
