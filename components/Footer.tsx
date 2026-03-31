import Link from "next/link";
import { inter } from "@/lib/fonts";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${inter.className}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>ASSYSTU</span>
          <span className={styles.tagline}>Consultoría e implementación de IA</span>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/aldosoto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/kpsota/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@AldoSotoE" target="_blank" rel="noopener noreferrer">YouTube</a>
          <span className={styles.divider}>·</span>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/terminos">Términos</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
