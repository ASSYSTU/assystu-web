# DoD post-go-live — www.assystu.com

> Correr después de cada deploy importante.
> Última revisión automatizada: 2026-04-29 ✅

---

## Parte A — Automatizada (scripts)

Ejecutar desde el repo con:

```bash
npm run qa:redirects   # smoke test de redirects
npm run qa:links       # link checker de rutas principales
```

### Último resultado (2026-04-29)

| Script | Resultado |
|--------|-----------|
| `qa:redirects` | ✅ 11/11 PASS — 0 FAIL |
| `qa:links` | ✅ 5/5 PASS — 0 FAIL — 3 WARN (páginas legales pendientes) |

**Nota WARN esperado:** `/terminos`, `/privacidad`, `/cookies` son 404 hasta completar Tarea 5. No bloquean el go-live.

### Variables de entorno en Netlify

Verificar en [Netlify Dashboard → web-assystu → Environment variables](https://app.netlify.com/projects/web-assystu/configuration/env):

- [ ] `NOTION_API_KEY` configurada
- [ ] `NOTION_PEOPLE_DB_ID` configurada
- [ ] `NOTION_OPP_DB_ID` configurada

---

## Parte B — Manual (Martín revisa)

### 1. DNS y HTTPS
- [ ] Abrir https://www.assystu.com en browser → carga con candado 🔒
- [ ] Abrir https://assystu.com → redirige a `www` (verificar barra de direcciones)
- [ ] Abrir http://assystu.com → redirige a `https://www.assystu.com`

### 2. Lighthouse mobile (performance > 70)
1. Abrir https://www.assystu.com en Chrome
2. DevTools (`F12`) → **Lighthouse** → Mode: Navigation → Device: **Mobile**
3. Correr análisis → verificar **Performance ≥ 70**
- [ ] Home `/` — score: ___
- [ ] `/happy-brain` — score: ___
- [ ] `/transformaerp` — score: ___
- [ ] `/contacto` — score: ___

### 3. Responsive mobile (iPhone)
Revisar en iPhone o con Chrome DevTools (toggle device toolbar):
- [ ] Home — hero, nav, CTAs se ven bien
- [ ] `/happy-brain` — secciones legibles, botones accesibles
- [ ] `/transformaerp` — secciones legibles, botones accesibles
- [ ] `/contacto` — formulario completo y enviable

### 4. Formulario end-to-end
1. Ir a https://www.assystu.com/contacto
2. Completar el formulario con datos de prueba (usar email real para poder rastrear):
   - Nombre: Test DoD
   - Teléfono: +56912345678
   - Email: martin.soto@assystu.com (o cualquier email)
   - Interés: seleccionar algún servicio
3. Enviar
4. Verificar:
   - [ ] Mensaje de confirmación aparece en el sitio
   - [ ] En Notion → **People & Biz** → aparece la persona creada
   - [ ] En Notion → **Oportunidades** → aparece la oportunidad relacionada (si se seleccionó interés)

### 5. GA4 pageview en producción
1. Instalar extensión **Tag Assistant Companion** en Chrome (si no está instalada)
2. Ir a https://tagassistant.google.com → conectar con la cuenta de Google
3. Ingresar URL del sitio → iniciar debug session
4. Navegar por el sitio
5. Verificar en GA4 → **Admin → DebugView**:
   - [ ] Llegan eventos `page_view` al navegar
   - [ ] Se registra la sesión correctamente

---

## IDs de referencia

| Servicio | ID |
|----------|----|
| GTM | GTM-WJXWQXRB |
| GA4 Measurement ID | G-RC5DXE8LM8 |
| Meta Pixel | 862199826900704 |
| LinkedIn Partner | 535280466 |
| Netlify site | web-assystu (`43572be0-4e77-43b8-abb1-674c9ee96b2c`) |

---

## Estado por tarea

| Tarea | Estado |
|-------|--------|
| ✅ T1 QA Redirects | Done 22/04 |
| ✅ T2 GTM + Píxeles | Done 28/04 |
| ✅ T3 Formulario + Notion | Done 28/04 |
| ✅ T4 DoD scripts | Done 29/04 |
| ⏳ T5 Páginas legales | Pendiente (sin fecha) |
| ⏳ T6 Intranet | Pendiente (due 12 may) |
