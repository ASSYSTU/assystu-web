import { useState } from "react";

const INTERES_OPTIONS = [
  { value: "", label: "¿En qué estás interesado?" },
  { value: "blueprint", label: "Blueprint Happy Brain" },
  { value: "mentoring-4w", label: "Mentoring 4W" },
  { value: "mentoring-6m", label: "Mentoring 6M" },
  { value: "transforma-erp", label: "TransformaERP · Workshop" },
  { value: "otro", label: "Otro / No estoy seguro" },
];

interface ContactFormProps {
  defaultInteres?: string;
  onSuccess?: (hasInterest: boolean) => void;
}

export default function ContactForm({ defaultInteres = "", onSuccess }: ContactFormProps) {
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    interes: defaultInteres,
    bot_field: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactError, setContactError] = useState(false);

  const set = (k: keyof typeof fields, v: string) =>
    setFields((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.telefono.trim() && !fields.email.trim()) {
      setContactError(true);
      return;
    }
    setContactError(false);
    setStatus("loading");
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        onSuccess?.(json.hasInterest as boolean);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 space-y-4">
        <span className="material-symbols-outlined text-5xl text-on-tertiary-container">check_circle</span>
        <h3 className="font-headline text-2xl font-bold text-primary">¡Recibimos tu mensaje!</h3>
        <p className="text-on-surface-variant">Te contactaremos en menos de 48 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — invisible para humanos, atrapabots */}
      <input
        type="text"
        name="bot_field"
        value={fields.bot_field}
        onChange={(e) => set("bot_field", e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
            Nombre
          </label>
          <input
            type="text"
            required
            value={fields.nombre}
            onChange={(e) => set("nombre", e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
            Apellido
          </label>
          <input
            type="text"
            value={fields.apellido}
            onChange={(e) => set("apellido", e.target.value)}
            placeholder="Tu apellido"
            className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
          Teléfono
        </label>
        <input
          type="tel"
          value={fields.telefono}
          onChange={(e) => { set("telefono", e.target.value); setContactError(false); }}
          placeholder="+56 9 1234 5678"
          className={`w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none ${contactError ? "ring-2 ring-red-400" : ""}`}
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
          Email
        </label>
        <input
          type="email"
          value={fields.email}
          onChange={(e) => { set("email", e.target.value); setContactError(false); }}
          placeholder="tu@empresa.com"
          className={`w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none ${contactError ? "ring-2 ring-red-400" : ""}`}
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
          Interés <span className="normal-case tracking-normal opacity-60">(opcional)</span>
        </label>
        <select
          value={fields.interes}
          onChange={(e) => set("interes", e.target.value)}
          className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all outline-none"
        >
          {INTERES_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {contactError && (
        <p className="text-sm text-red-500 text-center">
          Ingresa al menos un teléfono o email para contactarte.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          Hubo un error al enviar. Por favor intenta nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-editorial-gradient text-on-primary py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Agendar diagnóstico"}
      </button>

      <p className="text-[10px] text-center text-outline uppercase tracking-tighter">
        Sin compromiso · Respuesta en menos de 48h hábiles
      </p>
    </form>
  );
}
