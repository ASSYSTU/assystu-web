# PROJECT BRIEF — web-assystu
> Archivo de contexto portable. Uso: Claude Code · ChatGPT · Gemini/Antigravity  
> Fuente de verdad: Notion (solo accesible vía Claude)  
> Última actualización: 01/04/2026

---

## 1. Objetivo del proyecto

Rediseño completo del sitio web de ASSYSTU bajo el dominio `www.assystu.com`, migrando desde WordPress (HostGator) a Next.js + Netlify + GitHub.

**Objetivo en una frase:**  
Instalar claridad operacional y un sistema semanal que se sostiene: backlog de 30 días, ritual mínimo y un hub (Happy Brain) para que la operación no dependa de incendios ni WhatsApp.

**Estado actual:** En ejecución (Doing) — Fase 1 en curso.

---

## 2. Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | Next.js (App Router) |
| Deploy | Netlify (CI/CD automático desde GitHub) |
| Repo | github.com/ASSYSTU/assystu-web |
| DNS / dominio | HostGator → migrar a Netlify DNS |
| Formularios | Netlify Forms |
| Booking | Google Calendar + Netlify (pendiente configurar) |
| Analytics | Netlify Analytics (v1) — Google Analytics en v1.1 |
| Estilos | Tailwind CSS (asumido por stack) |
| Diseño base | Mockups generados con Google Stitch AI (HTML disponibles en Notion) |

---

## 3. Sitemap v1

```
/                   → Home (Hero Happy Brain)
/happy-brain        → Oferta principal
/transformaerp      → Mentoría ERP (1-pager, sin hard sell)
/contacto           → CTA + Booking + Netlify Forms (fallback)
/privacidad         → Legal
/terminos           → Legal
/cookies            → Legal
/lo-sentimos        → Custom 404 soft-landing para URLs legacy
```

**Nav (máx 4 links):**
- Happy Brain → `/happy-brain`
- TransformaERP → `/transformaerp`
- Contacto → `/contacto`
- Botón CTA: **Agendar diagnóstico** → [PENDIENTE: link booking]

---

## 4. Contenido clave

### Home — Hero
- **H1:** Método Happy Brain
- **Slogan:** Organiza tu vida. Baja la carga mental. Ejecuta semana a semana.
- **Bullets:**
  - Backlog de 30 días (8–15 acciones) con dueños
  - Ritual semanal mínimo + evidencia (sin evidencia no se revisa)
  - IA aplicada para acelerar, no para meter más ruido
- **CTA primario:** Agendar diagnóstico → [PENDIENTE]
- **CTA secundario:** Ver las 3 capas → `/happy-brain`

### Posicionamiento
- Marca: **ASSYSTU**
- Producto/metodología estrella: **Happy Brain**
- NO vender Notion como producto — vender método + capacidad mental + operación sostenible (Notion/Calendar/IA son habilitadores)

### TransformaERP
- 1-pager de mentoría ERP (agnóstico de plataforma)
- Tono: informativo, sin hard sell
- NO mencionar: venta SAP, educación SAP, claims de partner
- Casos/testimonios: no incluir en v1

### Footer
- Links legales: `/privacidad` · `/terminos` · `/cookies`
- LinkedIn: https://www.linkedin.com/in/aldosoto/
- Instagram: https://www.instagram.com/kpsota/
- YouTube: https://www.youtube.com/@AldoSotoE

---

## 5. Dominio y DNS

| Dominio | Destino |
|---|---|
| `www.assystu.com` | Canónico (Netlify) |
| `assystu.com` | Redirect 301 → `www.assystu.com` |
| `assystu.cl` | Redirect 301 → `www.assystu.com` |
| `www.assystu.cl` | Redirect 301 → `www.assystu.com` |

---

## 6. Redirects críticos (WordPress → Netlify)

Implementar en `netlify.toml` o `_redirects`.

### Prioritarios (301)
```
/contactanos/                                              → /contacto
/nuestros-servicios/                                       → /transformaerp
/nuestros-servicios/consultoria/                           → /transformaerp
/nuestros-servicios/consultoria/gestion-de-erp/            → /transformaerp
/nuestros-servicios/educacion/                             → /transformaerp
/novedades/                                                → /happy-brain
/quienes-somos/                                            → /happy-brain
/nuestros-clientes/                                        → /
/eventos/                                                  → /
/calendario-cursos/                                        → /transformaerp
/infoclientes/                                             → /
/intranetassystu/                                          → /
/timesheet-assystu/                                        → /
/trabaja-con-nosotros/                                     → /
```

### Wildcards
```
/nuestros-servicios/educacion/*                            → /transformaerp
/nuestros-servicios/educacion/formulario-curso-*           → /contacto
```

### Legacy no mapeado
- Todo lo no mapeado → `/lo-sentimos` (responde como 404 con look & feel del sitio nuevo)
- `/eventos/*` → 404 real (no redirect)

---

## 7. Página `/contacto`

- **Arriba:** embed o link al booking (Google Calendar — PENDIENTE configurar)
- **Abajo (fallback):** Netlify Forms
- **Campos formulario:** nombre, email, empresa (opcional), tamaño de equipo (opcional), mensaje
- CRM: pendiente definir dónde se guardan los leads en v1

---

## 8. Pendientes críticos (bloqueantes para go-live)

- [x] Integrar imágenes en páginas principales (`/`, `/transformaerp`, `/contacto`) — ✅ 01/04/2026
- [ ] Crear link público de agendamiento (Google Calendar Appointment Schedule o Calendly)
- [ ] Nombre definitivo del repo GitHub (actualmente: `assystu-web`)
- [ ] Variables de entorno (si aplica)
- [ ] Confirmar si dominio ya apunta a Netlify o sigue en HostGator antes de activar redirects
- [ ] Decisión: ¿se mantienen assets de marca actuales o se renuevan para identidad Happy Brain?
- [ ] Definir campos exactos del formulario de contacto y destino de leads (v1)
- [ ] Analytics: confirmar activación de Netlify Analytics post-deploy

---

## 9. Convenciones del proyecto

- Idioma del código: inglés (variables, funciones, componentes)
- Idioma del contenido: español (chileno)
- Componentes en `/components`, páginas en `/app` (Next.js App Router)
- No hacer cambios en archivos de configuración de Netlify sin validar redirects en incógnito
- No incluir información financiera, datos de clientes ni credenciales en este archivo

---

## 10. Referencias Notion (solo lectura via Claude)

> Estos links son de uso interno — no compartir con IAs externas sin filtrar el contenido primero.

| Documento | URL |
|---|---|
| Proyecto principal | https://www.notion.so/b19de1b34e7b4092941c4a5899917341 |
| Info para la web (copy + estructura) | https://www.notion.so/2040f3fc519d4c0aa84139128ca0ec1d |
| Setup técnico (checklist + configs) | https://www.notion.so/a3e376e0bbc34cd7bfb7ddc6a9c5dc6b |
| Pendientes por fase | https://www.notion.so/9798a30fffb04770b5409b4ef3f75744 |
| Inspiración visual | https://www.notion.so/e009766e68634da8b2d24b7162a8292e |

---

## 11. Arquitectura de archivos del sistema

El repo opera con archivos de contexto distintos según el ecosistema de cada IA:

| Archivo | Propósito | Cómo se usa |
|---|---|---|
| `PROJECT_BRIEF.md` | Contexto universal del proyecto | Se pasa manualmente como contexto a cualquier IA |
| `CLAUDE.md` | Reglas operativas para Claude Code | Claude Code lo lee **automáticamente** al iniciar sesión |
| `AGENTS.md` | Equivalente de CLAUDE.md para agentes OpenAI | Leído automáticamente por Codex y agentes OpenAI compatibles |

**Distinción clave:**
- `CLAUDE.md` y `AGENTS.md` tienen semántica especial para sus ecosistemas — definen comportamiento, no solo documentación
- `PROJECT_BRIEF.md` es texto plano sin semántica especial — funciona para todas las IAs pero debe pasarse explícitamente
- Los tres deben estar sincronizados: si cambia la arquitectura, se actualizan los tres

**Gemini / Antigravity:** no usa archivos `.md` del repo como contexto automático. Su equivalente son las **Rules** y **Workflows** configurados dentro de la interfaz de Antigravity. Deben replicar las convenciones de la sección 9 de este archivo. No viven en el repo.

### Zonas de privacidad en Notion

| Zona | Contenido | ¿Accesible por IAs externas? |
|---|---|---|
| AI_SAFE | Arquitectura, stack, copy, sitemap, tareas técnicas | Sí — via PROJECT_BRIEF filtrado por Claude |
| PRIVATE | Finanzas, datos de clientes, contratos, credenciales | No — solo Claude vía MCP directo |

**Claude actúa como gateway:** lee Notion completo vía MCP y filtra qué entra al PROJECT_BRIEF.

---

## 12. Instrucciones por IA

### Claude Code
- Este archivo es tu fuente de contexto del proyecto
- Antes de implementar cualquier feature, verificar que esté en el sitemap v1 o en los pendientes
- Al cerrar una tarea, actualizar la sección "Pendientes críticos" de este archivo
- Para decisiones de arquitectura o contenido no definidas acá, consultar Notion vía Claude chat

### ChatGPT
- Leer las secciones 2 (stack), 3 (sitemap) y 9 (convenciones) antes de generar código
- Cada entrega debe ser un bloque autocontenido (componente, endpoint o función) listo para pegar en Claude Code
- No generar archivos de configuración de Netlify ni modificar `next.config.js` sin indicación explícita
- Si necesitas contexto adicional que no está en este archivo, indicarlo — no asumir

### Gemini / Antigravity

- Leer este archivo completo antes de cualquier operación sobre el repo
- Usar la sección 9 (convenciones) como reglas de estilo y estructura
- Operaciones habilitadas: revisión de consistencia, cambios globales de naming, aplicación de patrones en múltiples archivos
- No modificar redirects ni configuración de dominio sin validación explícita

---

## 13. Próximos pasos del sistema (meta)

- [ ] Subir este archivo a la raíz del repo `assystu-web` junto al `CLAUDE.md`
- [ ] Sincronizar el `CLAUDE.md` existente con las convenciones de este brief (sección 9)
- [ ] Crear `SYSTEM.md` cuando el proyecto escale — documento de infraestructura del equipo de IAs que describa el workflow completo, reglas de cambio de IA, y criterios de decisión
