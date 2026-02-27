import { DIFFICULTY_COLORS } from "@/lib/constants";
import type { LevelDifficulty } from "@/types";

export function DifficultyBadge({ difficulty }: { difficulty: LevelDifficulty }) {
  const cls =
    DIFFICULTY_COLORS[difficulty] ?? DIFFICULTY_COLORS["Básico"];
  return (
    <span className={["px-2 py-0.5 rounded-full text-xs font-medium border", cls].join(" ")}>
      {difficulty}
    </span>
  );
}

