import Link from "next/link";

import type { LevelDifficulty } from "@/types";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";

export function LevelHeader({
  levelId,
  category,
  difficulty,
  title,
  description,
}: {
  levelId: string;
  category: string;
  difficulty: LevelDifficulty;
  title: string;
  description: string;
}) {
  return (
    <>
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/hacking"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Panel de Niveles
            </Link>
          </li>
          <li className="text-slate-600">/</li>
          <li className="text-slate-300">Nivel {levelId}</li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs text-slate-500 uppercase tracking-wider">
            {category}
          </span>
          <DifficultyBadge difficulty={difficulty} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-lab-primary-400">Nivel {levelId}:</span> {title}
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl">{description}</p>
      </header>
    </>
  );
}

