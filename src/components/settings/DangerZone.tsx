export function DangerZone() {
  return (
    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
      <p className="font-medium text-red-400 mb-2">Zona de Peligro</p>
      <p className="text-sm text-slate-400 mb-4">
        Estas acciones son permanentes y no se pueden deshacer
      </p>
      <div className="space-y-2">
        <button className="btn-danger w-full text-sm" type="button">
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar Todos los Datos Locales
        </button>
        <button className="btn-danger w-full text-sm" type="button">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Eliminar Cuenta (Solo Admin)
        </button>
      </div>
    </div>
  );
}

