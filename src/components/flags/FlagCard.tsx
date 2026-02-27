"use client";

import { useMemo, useState } from "react";

import type { LevelDifficulty } from "@/types";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";

export function FlagCard({
  id,
  title,
  description,
  category,
  difficulty,
  methodologies = [],
  correctFlag,
}: {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: LevelDifficulty;
  methodologies?: string[];
  correctFlag?: string;
}) {
  const storageKey = useMemo(() => `flag-${id}`, [id]);

  const initialSavedFlag =
    typeof window !== "undefined" && correctFlag
      ? (() => {
          const saved = localStorage.getItem(storageKey);
          return saved && saved === correctFlag ? saved : null;
        })()
      : null;

  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [savedFlag, setSavedFlag] = useState<string | null>(initialSavedFlag);
  const [completed, setCompleted] = useState(initialSavedFlag !== null);

  function verify() {
    const userFlag = value.trim();
    if (!userFlag) {
      setError("Por favor ingresa una flag");
      return;
    }
    if (!userFlag.startsWith("FLAG{") || !userFlag.endsWith("}")) {
      setError("Formato incorrecto. Debe ser FLAG{...}");
      return;
    }
    if (correctFlag && userFlag === correctFlag) {
      localStorage.setItem(storageKey, userFlag);
      setCompleted(true);
      setSavedFlag(userFlag);
      setError(null);
      window.dispatchEvent(new CustomEvent("flag-completed"));
      return;
    }

    setError("Flag incorrecta. Intenta de nuevo.");
    setValue("");
  }

  return (
    <div className="card p-6" data-flag-id={id}>
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-2 text-lg">{title}</h3>
            <p className="text-sm text-slate-400 mb-3">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <DifficultyBadge difficulty={difficulty} />
          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
            {category}
          </span>
        </div>

        {methodologies.length > 0 ? (
          <div className="mt-3 p-3 rounded-lg bg-slate-900/50 border border-slate-700">
            <p className="text-xs text-slate-500 font-medium mb-2">
              Metodologías:
            </p>
            <div className="flex flex-wrap gap-2">
              {methodologies.map((m) => (
                <span
                  key={m}
                  className="text-xs text-lab-primary-400 bg-lab-primary-500/10 px-2 py-1 rounded border border-lab-primary-500/20"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {completed ? (
        <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-2 mb-2">
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
            <span className="text-sm text-green-400 font-medium">
              Flag verificada correctamente
            </span>
          </div>
          <div className="mt-2 p-2 rounded bg-slate-900/50 border border-green-500/20">
            <p className="text-xs text-slate-400 mb-1">Flag capturada:</p>
            <code className="text-sm text-green-400 font-mono break-all">
              {savedFlag}
            </code>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Pega tu flag aquí (FLAG{...})"
              className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-lab-primary-500 focus:ring-1 focus:ring-lab-primary-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") verify();
              }}
            />
            <button className="btn-primary px-6 whitespace-nowrap" type="button" onClick={verify}>
              Verificar
            </button>
          </div>
          {error ? <div className="mt-2 text-sm text-red-400">{error}</div> : null}
        </div>
      )}
    </div>
  );
}

