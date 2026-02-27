"use client";

import { useEffect, useMemo, useState } from "react";

import flags from "@/utils/flags";
import { FlagCard } from "@/components/flags/FlagCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { InfoCard } from "@/components/common/InfoCard";

export default function FlagsPage() {
  const totalFlags = flags.length;

  const minimal = useMemo(
    () => flags.map((f) => ({ id: f.id, correctFlag: f.correctFlag })),
    [],
  );

  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    function update() {
      let count = 0;
      for (const f of minimal) {
        const saved = localStorage.getItem(`flag-${f.id}`);
        if (saved && saved === f.correctFlag) count++;
      }
      setCompletedCount(count);
    }

    update();
    window.addEventListener("storage", update);
    window.addEventListener("flag-completed", update as EventListener);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("flag-completed", update as EventListener);
    };
  }, [minimal]);

  return (
    <div className="container-lab py-8 flex flex-col gap-8">
      <PageHeader
        title="Captura la Bandera"
        subtitle="Hackea esta pagina, y registra aqui las banderas encontradas."
        gradient={true}
      />

      <div className="flex justify-center gap-4">
        <div className="w-full max-w-md">
          <div className="card p-6 bg-gradient-to-br from-lab-primary-500/10 to-lab-accent-500/10 border border-lab-primary-500/20">
            <div className="text-4xl font-bold text-white mb-2 text-center">
              <span>{completedCount}</span>/{totalFlags}
            </div>
            <div className="text-sm text-slate-400 text-center">
              Flags Completadas
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white mb-4">Desafíos</h2>
        {flags.map((flag) => (
          <FlagCard
            key={flag.id}
            id={flag.id}
            title={flag.title}
            description={flag.description}
            category={flag.category}
            difficulty={flag.difficulty}
            methodologies={flag.methodologies}
            correctFlag={flag.correctFlag}
          />
        ))}
      </div>

      <InfoCard title="¿Cómo funciona el CTF?">
        <div className="space-y-3 text-sm text-slate-400">
          <p>
            Cada desafío tiene una <strong className="text-white">flag</strong>{" "}
            que debes encontrar explotando una vulnerabilidad. Las flags tienen
            el formato:{" "}
            <code className="text-lab-primary-400 bg-slate-800 px-1.5 py-0.5 rounded">
              {`FLAG{texto_aqui}`}
            </code>
          </p>
          <p>
            Todos los desafíos están disponibles desde el inicio. Pega la flag
            que encuentres en el campo de texto y verifica si es correcta.
          </p>
          <p>
            <strong className="text-white">Tip:</strong> Cada desafío muestra
            las metodologías que debes usar. Estudia cada vulnerabilidad antes
            de intentar explotarla.
          </p>
        </div>
      </InfoCard>
    </div>
  );
}

