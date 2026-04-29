import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/happy-brain", label: "Happy Brain" },
    { href: "/transformaerp", label: "TransformaERP" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[60] bg-surface-container-lowest">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 max-w-7xl mx-auto gap-4">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo-assystu.png"
            alt="ASSYSTU"
            width={200}
            height={37}
            priority
            className="w-36 sm:w-44 md:w-[200px] h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-headline font-bold text-lg tracking-tight transition-colors duration-200 ${
                  active
                    ? "text-tertiary border-b-2 border-tertiary pb-0.5"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="bg-editorial-gradient text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-body font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity shadow-sm shrink-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Agendar<span className="hidden sm:inline"> diagnóstico</span>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 shrink-0"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-on-surface transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-headline font-bold text-xl py-2 transition-colors duration-200 ${
                  active ? "text-tertiary" : "text-on-surface-variant"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
