import { Badge } from "@/components/ui/Badge";

export function AdminHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Panel de Administración
              </h1>
              <p className="text-slate-400">Gestión de Usuarios del Sistema</p>
            </div>
          </div>
        </div>
        <Badge text="Acceso Restringido" variant="danger" />
      </div>

      <div className="legal-banner p-4">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
          <div>
            <p className="text-sm text-amber-200 font-medium mb-1">
              Acceso Restringido
            </p>
            <p className="text-xs text-amber-200/70">
              Esta sección es solo para personal autorizado. Todas las acciones
              son registradas y auditadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

