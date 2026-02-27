/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH ?? "/WEB-Vulnerable";

const nextConfig = {
  /**
   * Para GitHub Pages / despliegues bajo subpath.
   * Mantiene el mismo base path que usaba Astro.
   */
  basePath,
  assetPrefix: basePath,

  /**
   * Astro estaba en output: static; aquí replicamos con export estático.
   * Importante: las rutas dinámicas deben definirse con generateStaticParams.
   */
  output: "export",
  trailingSlash: true,

  /**
   * Para export estático es habitual desactivar optimización de imágenes.
   */
  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

