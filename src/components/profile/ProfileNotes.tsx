"use client";

import Link from "next/link";

import { PROFILE_NOTES } from "@/lib/data/profile";

export function ProfileNotes({
  noteId,
  currentUserParam,
}: {
  noteId: number | null;
  currentUserParam: string;
}) {
  const note =
    noteId != null
      ? PROFILE_NOTES[noteId as keyof typeof PROFILE_NOTES] ?? null
      : null;

  return (
    <div className="card p-6">
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Notas privadas
      </h2>

      {note ? (
        <div className="space-y-2 p-4 rounded-lg bg-slate-900/50 border border-slate-700">
          <p className="text-xs text-slate-500">Nota #{noteId}</p>
          <h3 className="font-medium text-white">{note.title}</h3>
          <p className="text-sm text-slate-400 whitespace-pre-wrap">
            {note.content}
          </p>
        </div>
      ) : (
        <p className="text-sm text-slate-400 mb-4">
          Selecciona una nota para verla. Solo deberías poder ver las tuyas.
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {[1, 2, 3].map((id) => (
          <Link
            key={id}
            href={`/profile?user=${currentUserParam}&note=${id}`}
            className="px-3 py-1.5 rounded-lg text-sm bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600"
          >
            Nota {id}
          </Link>
        ))}
      </div>
    </div>
  );
}

