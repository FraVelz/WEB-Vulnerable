"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { withBasePath } from "@/lib/base-path";

export function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!acceptTerms) {
      setError("Debes aceptar los términos de uso para continuar.");
      return;
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

    if (username === "demo" && password === "demo123") {
      router.push("/hacking");
      return;
    }

    setError("Credenciales incorrectas. Usa las credenciales de demostración.");
    setIsLoading(false);
  }

  return (
    <div className="w-full max-w-md pt-7">
      <div className="text-center mb-8">
        <Link href="/" className="inline-block">
          <img
            className="size-28 rounded-full"
            src={withBasePath("/icon.svg")}
            alt="Logo de la pagina web"
          />
        </Link>
        <h1 className="text-2xl font-bold text-white">Acceso al Laboratorio</h1>
        <p className="text-slate-400 mt-2">
          Ingresa tus credenciales de laboratorio
        </p>
      </div>

      <div className="card p-8 mx-3 sm:mx-0">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Usuario de Laboratorio
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input"
              placeholder="usuario_lab"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="input pr-10"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                aria-label="Mostrar contraseña"
                onClick={() => setShowPassword((v) => !v)}
              >
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="accept-terms"
              name="accept-terms"
              className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-lab-primary-500 focus:ring-lab-primary-500"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <label htmlFor="accept-terms" className="text-sm text-slate-400">
              He leído y acepto el{" "}
              <Link
                href="/legal"
                className="text-lab-primary-400 hover:text-lab-primary-300 underline"
                target="_blank"
              >
                aviso legal
              </Link>{" "}
              y entiendo que este es un entorno educativo con vulnerabilidades
              intencionales.
            </label>
          </div>

          {error ? (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="btn-primary w-full py-3"
            disabled={isLoading}
          >
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
              ></path>
            </svg>
            {isLoading ? "Verificando..." : "Acceder al Laboratorio"}
          </button>
        </form>

        <div className="mt-6 p-4 rounded-lg bg-slate-900/50 border border-slate-700">
          <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
            Credenciales de demostración
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-slate-400">
              <span className="text-slate-500">Usuario:</span>{" "}
              <code className="text-lab-primary-400 bg-slate-800 px-1.5 py-0.5 rounded">
                demo
              </code>
            </p>
            <p className="text-slate-400">
              <span className="text-slate-500">Contraseña:</span>{" "}
              <code className="text-lab-primary-400 bg-slate-800 px-1.5 py-0.5 rounded">
                demo123
              </code>
            </p>
          </div>
        </div>
      </div>

      <p className="text-center my-6 text-sm text-slate-500">
        <Link
          href="/"
          className="text-slate-400 hover:text-white transition-colors"
        >
          ← Volver al inicio
        </Link>
      </p>
    </div>
  );
}

