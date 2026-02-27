export function ProfileRank({ rank }: { rank: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-lab-primary-500 to-lab-accent-500 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{rank}</h3>
      <p className="text-sm text-slate-400">Tu rango actual</p>
    </div>
  );
}

