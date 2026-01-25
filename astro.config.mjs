import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'http://localhost:4321',
  // Configuración de seguridad para entorno educativo
  server: {
    host: true, // Permite acceso desde red local para laboratorio
    port: 4321
  },
  // Build output para despliegue controlado
  output: 'static',
  build: {
    // No generar sourcemaps en producción
    inlineStylesheets: 'auto'
  }
});
