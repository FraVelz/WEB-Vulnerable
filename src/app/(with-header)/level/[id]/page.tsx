import { notFound } from "next/navigation";

import { BestPractices } from "@/components/level/BestPractices";
import { KeyConcepts } from "@/components/level/KeyConcepts";
import { LearningObjectives } from "@/components/level/LearningObjectives";
import { LevelHeader } from "@/components/level/LevelHeader";
import { LevelNavigation } from "@/components/level/LevelNavigation";
import { PracticeZone } from "@/components/level/PracticeZone";
import { EthicalBanner } from "@/components/common/EthicalBanner";
import { EDUCATIONAL_LEVELS, toComponentLevel } from "@/lib/levels";

export const dynamicParams = false;

export function generateStaticParams() {
  return EDUCATIONAL_LEVELS.map((l) => ({ id: String(l.id) }));
}

export default function LevelPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const educational = EDUCATIONAL_LEVELS.find((l) => l.id === id);
  if (!educational) notFound();

  const level = toComponentLevel(educational);

  return (
    <div className="container-lab py-8">
      <LevelHeader
        levelId={String(level.id)}
        category={level.category}
        difficulty={level.difficulty}
        title={level.title}
        description={level.description}
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <LearningObjectives objectives={level.learningObjectives ?? []} />
          <KeyConcepts concepts={level.concepts ?? []} />
          <PracticeZone />
        </div>

        <div className="space-y-6">
          <BestPractices practices={level.bestPractices ?? []} />
          <LevelNavigation currentLevelId={String(level.id)} />
          <EthicalBanner />
        </div>
      </div>
    </div>
  );
}

