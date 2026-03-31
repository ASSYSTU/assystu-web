# assystu-web

Sitio web corporativo ASSYSTU — [assystu.com](https://assystu.com)

## Stack

- Next.js (Pages Router) + TypeScript
- Deploy automático en Netlify desde `main`

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev
# → http://localhost:3000

# Build de producción
npm run build

# Ejecutar build local
npm run start
```

## Páginas

| Ruta | Archivo |
|------|---------|
| `/` | `pages/index.tsx` |
| `/happy-brain` | `pages/happy-brain.tsx` |
| `/transformaerp` | `pages/transformaerp.tsx` |
| `/contacto` | `pages/contacto.tsx` |

## Deploy

Cada push a `main` gatilla un deploy automático en Netlify.

- Repo: https://github.com/ASSYSTU/assystu-web
- Netlify: https://app.netlify.com/projects/web-assystu/overview
- Sitio: https://web-assystu.netlify.app
