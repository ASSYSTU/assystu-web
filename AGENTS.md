# AGENTS.md — web-assystu
> Archivo de instrucciones para agentes OpenAI (Codex, o1, ChatGPT con herramientas, etc.)
> Equivalente a CLAUDE.md para el ecosistema OpenAI
> Última actualización: 01/04/2026

---

## Contexto del proyecto

Este repo contiene el sitio web de ASSYSTU (`www.assystu.com`), construido en Next.js + Netlify.
La fuente de verdad del proyecto es `PROJECT_BRIEF.md` en la raíz del repo.

**Leer `PROJECT_BRIEF.md` antes de cualquier tarea.**

---

## Stack

- Framework: Next.js (App Router)
- Deploy: Netlify (CI/CD desde GitHub)
- Estilos: Tailwind CSS
- Formularios: Netlify Forms
- Analytics: Netlify Analytics (v1)

---

## Convenciones de código

- Idioma del código: **inglés** (variables, funciones, componentes, comentarios)
- Idioma del contenido: **español chileno**
- Componentes en `/components`
- Páginas en `/app` (App Router)
- Nombres de componentes: PascalCase
- Nombres de funciones y variables: camelCase
- No usar `any` en TypeScript

---

## Rol de este agente en el sistema multi-IA

Este repo es operado por un equipo de tres IAs con roles distintos:

- **Claude Code** → núcleo: arquitectura, integración al repo, decisiones técnicas, documentación en Notion
- **ChatGPT / agentes OpenAI** → ejecución táctica: componentes puntuales, funciones, endpoints, debugging
- **Gemini / Antigravity** → escala: cambios globales, auditoría de consistencia, operaciones multiarchivo

**Como agente OpenAI, tu rol es generar bloques de código autocontenidos y listos para integrar.**

---

## Instrucciones operativas

1. Leer `PROJECT_BRIEF.md` para entender el estado actual del proyecto antes de cualquier tarea
2. Cada entrega debe ser un bloque autocontenido: un componente, una función, un endpoint o un fix
3. No modificar archivos de configuración de Netlify (`netlify.toml`, `_redirects`) sin indicación explícita
4. No modificar `next.config.js` sin indicación explícita
5. No asumir contexto que no esté en `PROJECT_BRIEF.md` — si falta información, indicarlo
6. No incluir credenciales, tokens ni datos sensibles en ningún archivo

---

## Lo que NO hacer

- No cambiar el sitemap definido en `PROJECT_BRIEF.md` sin validación
- No agregar dependencias nuevas sin indicación explícita
- No generar páginas o rutas fuera del sitemap v1
- No mencionar Notion, SAP, ni claims de partner en contenido de la web
- No incluir casos o testimonios en la página `/transformaerp` (v1)

---

## Referencia rápida — sitemap v1

```
/                → Home
/happy-brain     → Oferta principal
/transformaerp   → Mentoría ERP (1-pager)
/contacto        → Booking + formulario fallback
/privacidad      → Legal
/terminos        → Legal
/cookies         → Legal
/lo-sentimos     → Custom 404 soft-landing
```
