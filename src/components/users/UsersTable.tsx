import { UserTableRow, type AdminUser } from "@/components/users/UserTableRow";

export function UsersTable({ users }: { users: AdminUser[] }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <svg
            className="w-5 h-5 text-lab-primary-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          Lista de Usuarios
        </h2>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm" type="button">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Exportar
          </button>
          <button className="btn-primary text-sm" type="button">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Nuevo Usuario
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Usuario
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Rol
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Estado
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Progreso
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Último Acceso
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Ubicación
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-300">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((u) => (
              <UserTableRow key={u.id} {...u} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

