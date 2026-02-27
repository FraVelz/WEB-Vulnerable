export function KeyConcepts({
  concepts,
}: {
  concepts: { title: string; description: string }[];
}) {
  return (
    <section className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-lab-accent-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        Conceptos Clave
      </h2>
      <div className="grid gap-4">
        {concepts.map((concept) => (
          <div
            key={concept.title}
            className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50"
          >
            <h3 className="font-medium text-white mb-1">{concept.title}</h3>
            <p className="text-sm text-slate-400">{concept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

