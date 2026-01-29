# Vulnerable Web

Laboratorio educativo de seguridad web para aprender vulnerabilidades en un entorno controlado, hackiando la propia web, y guardando el progreso en la misma. Solo para formación en ciberseguridad/hacking.

## Tecnologías

- **Astro** 5.x
- **Tailwind CSS** 3.x
- TypeScript

## Requisitos

- Node.js 18 o superior
- pnpm o npm

## Instalación

```bash
git clone https://github.com/tu-usuario/WEB-Vulnerable.git
cd WEB-Vulnerable
pnpm install
```

## Comandos

| Comando        | Descripción                                              |
| -------------- | -------------------------------------------------------- |
| `pnpm dev`     | Servidor de desarrollo en http://localhost:4321          |
| `pnpm build`   | Genera el build estático en `dist/`                      |
| `pnpm preview` | Sirve el build localmente para probar antes de desplegar |

## Estructura del proyecto

``` text
src/
├── components/   # Componentes reutilizables (Header, Badge, etc.)
├── layouts/      # BaseLayout, Layout
├── pages/        # Rutas de la aplicación
├── lib/          # Constantes y datos (levels, etc.)
├── styles/       # global.css
└── utils/        # flags.ts, utils.ts
```

## Páginas y funcionalidad

### Inicio y acceso

- **/** — Página principal con enlace al laboratorio
- **/login** — Formulario de acceso (simulado)
- **/logout** — Cierre de sesión

### Vulnerabilidades (`/hacking`)

Panel de conceptos de hacking web con búsqueda. Cada concepto es una tarjeta con título y descripción. Incluye:

- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- File Upload
- Path Traversal
- SQL Injection
- SSTI (Server-Side Template Injection)
- IDOR
- SSRF
- Authentication Bypass

### Banderas / CTF (`/flags`)

Lista de desafíos por vulnerabilidad y dificultad (Básico, Intermedio, Avanzado). Cada desafío tiene:
- Título, descripción, categoría y metodologías
- Campo para pegar la flag encontrada y botón para verificar
- Si la flag es correcta, se marca como completada (estado guardado en `localStorage`)

Las flags tienen formato `FLAG{...}`.

### Otras rutas

- **/profile** — Perfil de usuario (simulado)
- **/settings** — Ajustes de cuenta
- **/users** — Listado de usuarios (área tipo admin)
- **/legal** — Términos de uso y aviso legal / uso ético
- **404** — Página de error no encontrada

## Despliegue en GitHub Pages

El workflow `.github/workflows/static.yml` despliega en GitHub Pages al hacer push a la rama `main`. Usa `npm install` y `npm run build`. La ruta base se calcula según el nombre del repositorio (si no es `usuario.github.io`, se usa `/<repositorio>/`).

## Información

**Licencia:** MIT

**Author:** Fravelz
