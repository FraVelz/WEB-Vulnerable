import type { ReactNode } from "react";

import "@/styles/global.css";
import { withBasePath } from "@/lib/base-path";

export const metadata = {
  title: {
    default: "Vulnerable Web",
    template: "%s | Vulnerable Web",
  },
  description:
    "Laboratorio educativo de seguridad web - Aprende sobre vulnerabilidades en un entorno controlado",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scrollbar-custom">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Prevenir caché en buscadores */}
        <meta httpEquiv="pragma" content="no-cache" />
        <meta name="revisit-after" content="0 days" />

        {/* Fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Meta de seguridad adicional */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="referrer" content="no-referrer" />

        <link rel="icon" type="image/svg+xml" href={withBasePath("/icon.svg")} />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
