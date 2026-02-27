import Link from "next/link";

import { InfoCard } from "@/components/common/InfoCard";

export function SettingsSidebar() {
  return (
    <div className="space-y-6">
      <div className="card p-6 sticky top-24">
        <h3 className="font-semibold text-white mb-4">Acciones</h3>
        <div className="space-y-2">
          <button className="btn-primary w-full" type="button">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Guardar Cambios
          </button>
          <button className="btn-secondary w-full" type="button">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Restaurar Valores por Defecto
          </button>
        </div>
      </div>

      <InfoCard title="Información">
        <div className="space-y-3 text-sm text-slate-400">
          <p>
            Los cambios se guardan automáticamente en tu navegador (localStorage)
            para la cuenta &quot;demo&quot;.
          </p>
          <p>
            La cuenta &quot;admin&quot; guarda los datos en la nube y requiere
            autenticación.
          </p>
          <div className="pt-3 border-t border-slate-700">
            <p className="text-xs text-slate-500">
              Versión: 1.0.0
              <br />
              Última actualización: Enero 2026
            </p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Navegación">
        <div className="space-y-2">
          <Link href="/profile" className="btn-ghost w-full text-sm text-left">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Ir al Perfil
          </Link>
          <Link href="/hacking" className="btn-ghost w-full text-sm text-left">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Ir a Hacking
          </Link>
        </div>
      </InfoCard>
    </div>
  );
}

