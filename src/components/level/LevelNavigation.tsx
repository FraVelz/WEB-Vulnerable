import Link from "next/link";

export function LevelNavigation({ currentLevelId }: { currentLevelId: string }) {
  const current = parseInt(currentLevelId, 10);
  const prev = Number.isFinite(current) ? current - 1 : null;
  const next = Number.isFinite(current) ? current + 1 : null;

  return (
    <div className="card p-6">
      <h3 className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">
        Navegación
      </h3>
      <div className="flex flex-col gap-2">
        {prev && prev > 0 ? (
          <Link href={`/level/${prev}`} className="btn-ghost text-left">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Nivel {prev}
          </Link>
        ) : null}
        {next && next <= 5 ? (
          <Link href={`/level/${next}`} className="btn-ghost text-left">
            Nivel {next}
            <svg
              className="w-4 h-4 ml-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : null}
        <Link href="/hacking" className="btn-secondary mt-2">
          Volver al Panel
        </Link>
      </div>
    </div>
  );
}

