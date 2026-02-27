export function LearningObjectives({ objectives }: { objectives: string[] }) {
  return (
    <section className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        Objetivos de Aprendizaje
      </h2>
      <ul className="space-y-3">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-lab-primary-500/20 text-lab-primary-400 flex items-center justify-center text-sm font-medium flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-slate-300">{objective}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

