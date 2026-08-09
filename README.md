# Portafolio — Analista de Datos (UI)

Interfaz de portafolio web en React + Vite. Solo diseño y estructura visual, sin backend ni lógica de negocio. Todo el contenido es de ejemplo (placeholder).

## Ejecutar

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Estructura

```
src/
  components/     un componente por carpeta (JSX + CSS)
  data/           contenido de ejemplo: projects.js, skills.js, certificates.js
  context/        ThemeContext (modo claro/oscuro)
  hooks/          useReveal (animación al hacer scroll)
public/
  cv-ana-rios.pdf placeholder del CV descargable
```

## Cómo agregar contenido

- **Proyecto nuevo:** añade un objeto al arreglo en `src/data/projects.js` (usa `featured: true` para destacarlo como proyecto principal).
- **Certificado nuevo:** añade un objeto al arreglo en `src/data/certificates.js`.
- **Habilidad nueva:** edita `src/data/skills.js` (`technicalSkills` o `softSkills`).
- **CV real:** reemplaza `public/cv-ana-rios.pdf` por el PDF definitivo (mismo nombre de archivo).
- **Enlaces de contacto:** edita `CHANNELS` en `src/components/Contact/Contact.jsx` y los links del `Footer`.
- **Foto e imágenes:** reemplaza las URLs `placehold.co` por tus propias imágenes (en `src/data/*.js` y `About.jsx`).

## Paleta y tipografía

- Colores: blanco / gris claro / azul profesional, definidos como variables CSS en `src/index.css` (`:root` y `[data-theme='dark']`).
- Tipografías: Space Grotesk (títulos), Inter (texto), JetBrains Mono (datos, etiquetas, tags).
