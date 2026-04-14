import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export interface CapaModalData {
  title: string;
  duration: string;
  desc: string;
  includes: string[];
  deliverables: string[];
  notIncludes: string[];
  ctaLabel: string;
  ctaHref: string;
}

interface ServiceModalProps {
  capas: CapaModalData[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ServiceModal({ capas, activeIndex, onClose, onNavigate }: ServiceModalProps) {
  const isOpen = activeIndex !== null;
  const capa = isOpen ? capas[activeIndex] : null;

  // Escape + flechas de teclado
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && activeIndex !== null && activeIndex > 0) onNavigate(activeIndex - 1);
      if (e.key === "ArrowRight" && activeIndex !== null && activeIndex < capas.length - 1) onNavigate(activeIndex + 1);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, activeIndex, capas.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && capa && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Contenedor posicionador en columna:
               - h-28 empuja el contenido por debajo del header (~72px) + margen visible (~40px)
               - flex-1 con items-center centra el modal en el espacio disponible restante */}
          <div className="fixed inset-0 z-50 pointer-events-none flex flex-col">
            {/* Espaciador: header + margen visible (solo desktop) */}
            <div className="hidden md:block h-28 flex-shrink-0" />

            {/* Área de centrado */}
            <div className="flex-1 flex items-end justify-center md:items-center md:justify-center md:px-8 md:pb-8 overflow-hidden">
            <motion.div
              key={activeIndex}
              className="pointer-events-auto bg-background w-full
                         max-h-[92vh] rounded-t-2xl
                         md:max-w-2xl md:h-[680px] md:max-h-[680px] md:rounded-2xl
                         overflow-hidden flex flex-col shadow-2xl"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle bar (solo mobile) */}
              <div className="md:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-12 h-1.5 rounded-full bg-outline-variant/40" />
              </div>

              {/* Header */}
              <div className="px-8 pt-6 pb-5 border-b border-outline-variant/20 flex-shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container bg-tertiary-container/20 px-3 py-1.5 rounded-full">
                    {capa.duration}
                  </span>
                  <button
                    onClick={onClose}
                    className="text-on-surface-variant hover:text-primary transition-colors flex-shrink-0"
                    aria-label="Cerrar"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <h2 className="font-headline text-2xl font-bold text-primary mt-4">{capa.title}</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-1">{capa.desc}</p>
              </div>

              {/* Body scrolleable */}
              <div className="overflow-y-auto flex-1 px-8 py-6 space-y-6">

                {/* Qué incluye */}
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-on-tertiary-container mb-3">
                    Qué incluye
                  </h3>
                  <ul className="space-y-2">
                    {capa.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Entregables */}
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-on-tertiary-container mb-3">
                    Entregables
                  </h3>
                  <ul className="space-y-2">
                    {capa.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5">
                          draft
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qué no incluye */}
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant/50 mb-3">
                    Qué no incluye
                  </h3>
                  <ul className="space-y-2">
                    {capa.notIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-on-surface-variant/50 text-sm">
                        <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5">
                          remove
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Aclaración delivery */}
                <div className="bg-surface-container-low rounded-xl p-4 border-l-2 border-outline-variant/40">
                  <p className="text-on-surface-variant/70 text-xs italic leading-relaxed">
                    Guiamos al equipo para que pongan el sistema en uso con sus propios recursos. No ejecutamos dentro de los sistemas del cliente.
                  </p>
                </div>
              </div>

              {/* Footer con flechas y CTA */}
              <div className="px-8 py-5 border-t border-outline-variant/20 flex-shrink-0 flex items-center justify-between gap-4">
                {/* Flechas de navegación */}
                <div className="flex gap-2">
                  <button
                    onClick={() => activeIndex !== null && activeIndex > 0 && onNavigate(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Capa anterior"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </button>
                  <button
                    onClick={() => activeIndex !== null && activeIndex < capas.length - 1 && onNavigate(activeIndex + 1)}
                    disabled={activeIndex === capas.length - 1}
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Capa siguiente"
                  >
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>

                {/* CTA */}
                <Link
                  href={capa.ctaHref}
                  onClick={onClose}
                  className="bg-editorial-gradient text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  {capa.ctaLabel}
                </Link>
              </div>
            </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
