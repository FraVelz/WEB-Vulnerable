export function BestPractices({ practices }: { practices: string[] }) {
  return (
    <section className="card p-6">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Buenas Prácticas
      </h2>
      <ul className="space-y-3">
        {practices.map((practice) => (
          <li key={practice} className="flex items-start gap-2 text-sm">
            <svg
              className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"
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
            <span className="text-slate-400">{practice}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

