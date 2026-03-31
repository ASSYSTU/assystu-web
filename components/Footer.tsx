import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo-assystu.png"
            alt="ASSYSTU"
            width={160}
            height={30}
            unoptimized
          />
          <p className="font-body text-sm uppercase tracking-widest text-on-surface-variant">
            © 2026 ASSYSTU. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-body text-sm uppercase tracking-widest text-primary font-bold mb-1">Navegación</span>
          <Link href="/happy-brain" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">Happy Brain</Link>
          <Link href="/transformaerp" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">TransformaERP</Link>
          <Link href="/contacto" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">Contacto</Link>
        </div>
        <div className="flex flex-col gap-2 md:text-right">
          <span className="font-body text-sm uppercase tracking-widest text-primary font-bold mb-1">Legal & Social</span>
          <Link href="/privacidad" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">Privacidad</Link>
          <Link href="/terminos" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">Términos</Link>
          <a href="https://www.linkedin.com/in/aldosoto/" target="_blank" rel="noopener noreferrer" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/kpsota/" target="_blank" rel="noopener noreferrer" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">Instagram</a>
          <a href="https://www.youtube.com/@AldoSotoE" target="_blank" rel="noopener noreferrer" className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
