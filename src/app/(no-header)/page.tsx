import Link from "next/link";

import { withBasePath } from "@/lib/base-path";

export const metadata = {
  title: "Inicio",
};

export default function HomePage() {
  const title = "Vulnerable Web";
  const subtitle =
    "Aprende sobre seguridad web de manera práctica y segura. Un laboratorio educativo diseñado para entender vulnerabilidades en un entorno controlado.";

  return (
    <div className="flex justify-center items-center flex-1">
      <div className="flex flex-col items-center gap-6">
        <img
          className="size-44 rounded-full"
          src={withBasePath("/icon.svg")}
          alt="Logo de la pagina web"
        />

        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-gradient">{title.split(" ")[0]}</span>
          {title.split(" ").slice(1).length > 0 ? (
            <span className="text-white">
              {" "}
              {title.split(" ").slice(1).join(" ")}
            </span>
          ) : null}
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl text-center">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login" className="btn-primary text-lg px-8 py-3">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Acceder al Laboratorio
          </Link>

          <Link href="/legal" className="btn-secondary text-lg px-8 py-3">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Ver Términos de Uso
          </Link>
        </div>
      </div>
    </div>
  );
}

