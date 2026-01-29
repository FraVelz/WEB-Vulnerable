import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // URL del sitio - se sobrescribe en producción con variable de entorno
  site: 'https://fravelz.github.io/WEB-Vulnerable/',
  base: '/WEB-Vulnerable/',

  // Build output para despliegue controlado
  output: 'static',
  integrations: [tailwind()],
});
