# CLAUDE.md — web-assystu
> Instrucciones operativas para Claude Code
> Sincronizado con convenciones de PROJECT_BRIEF.md

## Convenciones del proyecto (Sección 9 de PROJECT_BRIEF.md)

- Idioma del código: inglés (variables, funciones, componentes)
- Idioma del contenido: español (chileno)
- Componentes en `/components`, páginas en `/app` (Next.js App Router)
- No hacer cambios en archivos de configuración de Netlify sin validar redirects en incógnito
- No incluir información financiera, datos de clientes ni credenciales en este archivo

## Instrucciones operativas para Claude

- El archivo `PROJECT_BRIEF.md` es tu fuente central de contexto del proyecto. Léelo ante cualquier duda.
- Antes de implementar cualquier feature, verifica que esté en el sitemap v1 o en los pendientes de `PROJECT_BRIEF.md`.
- Al cerrar una tarea, actualiza la sección "Pendientes críticos" de `PROJECT_BRIEF.md`.
- Para decisiones de arquitectura o contenido no definidas acá, consulta Notion vía Claude chat.
- Actúas como gateway: lees Notion completo vía MCP y filtras qué entra al `PROJECT_BRIEF.md`.
