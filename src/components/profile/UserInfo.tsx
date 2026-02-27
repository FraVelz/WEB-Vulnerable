export function UserInfo({
  username,
  email,
  role,
  joinedAt,
  lastLogin,
  avatar,
}: {
  username: string;
  email: string;
  role: string;
  joinedAt: string;
  lastLogin: string;
  avatar?: string;
}) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Información Personal
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lab-primary-600 to-lab-accent-600 flex items-center justify-center">
            {avatar ? (
              <img
                className="rounded-full w-full h-full object-cover"
                src={avatar}
                alt="Foto de perfil"
              />
            ) : (
              <span className="text-white text-2xl font-bold">
                {username[0]?.toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{username}</h3>
            <p className="text-sm text-slate-400">{email}</p>
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs bg-slate-700 text-slate-300">
              {role}
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-500 mb-1">Miembro desde</p>
            <p className="text-sm text-slate-300">{joinedAt}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Último acceso</p>
            <p className="text-sm text-slate-300">{lastLogin}</p>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <p className="text-gray-400 text-center text-sm">
            Los datos de la cuenta &quot;demo&quot; se almacenan en local, la cuenta
            &quot;admin&quot; tendrá los datos en la nube.
          </p>
        </div>
      </div>
    </div>
  );
}

