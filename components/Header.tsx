import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  const navLinks = [
    { href: "/happy-brain", label: "Happy Brain" },
    { href: "/transformaerp", label: "TransformaERP" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 max-w-7xl mx-auto gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-assystu.png"
            alt="ASSYSTU"
            width={200}
            height={37}
            priority
            unoptimized
            className="w-36 sm:w-44 md:w-[200px] h-auto"
          />
        </Link>
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
        <Link
          href="/contacto"
          className="bg-editorial-gradient text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-body font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity shadow-sm shrink-0 text-center"
        >
          Agendar<span className="hidden sm:inline"> diagnóstico</span>
        </Link>
      </div>
    </nav>
  );
}
