import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Rutas relativas: permite desplegar en cualquier subcarpeta
  // (GitHub Pages, Vercel con project path, etc.) sin romper assets.
  base: './',
  plugins: [react()],
})
