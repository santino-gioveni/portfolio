# Portfolio de Santino Gioveni — código fuente

Proyecto TanStack Start (React 19 + Vite 7 + Tailwind CSS v4).

## Cómo correrlo
```bash
bun install   # o npm install
bun run dev   # abre en http://localhost:8080
bun run build # build de producción
bun run test  # pruebas
```

## Dónde se edita el contenido
- `src/data/portfolio.ts` — todo el contenido: hitos, proyectos, logros, experiencia y perfil. Es el único archivo que hay que tocar para cambiar textos, cifras o enlaces.
- `src/routes/index.tsx` — la página: hero, línea de tiempo, logros, proyectos, experiencia, perfil, contacto y el modal de cada proyecto.
- `src/routes/__root.tsx` — etiquetas de la página (título, descripción) y carga de las tipografías Fraunces y Manrope.
- `src/styles.css` — paleta (colores en `:root`), tipografías y animaciones.

## La foto de perfil
La imagen real está en `src/assets/san.png`. En Lovable se importa a través de
`src/assets/san.png.asset.json`; para usarla directo en otro entorno, reemplazá en
`src/routes/index.tsx`:

```ts
import photo from "@/assets/san.png.asset.json"; // en Lovable
// por:
import photo from "@/assets/san.png";            // afuera de Lovable
```
