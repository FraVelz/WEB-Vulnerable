"use client";

import { useMemo, useState } from "react";

import { PageHeader } from "@/components/ui/PageHeader";
import { SearchBar } from "@/components/ui/SearchBar";
import { vulnerabilityCategories } from "@/lib/hacking/categories";

export default function HackingPage() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return vulnerabilityCategories;
    return vulnerabilityCategories.filter((c) => {
      const title = c.title.toLowerCase();
      const desc = c.description.toLowerCase();
      return title.includes(normalized) || desc.includes(normalized);
    });
  }, [normalized]);

  return (
    <div className="container-lab py-8 flex flex-col gap-6">
      <PageHeader
        title="Vulnerabilidades Web"
        subtitle="Practica hackiando esta web."
        gradient={true}
      />

      {/* SearchBar reutiliza IDs; lo conectamos con React */}
      <div
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            const input = document.getElementById("search-input") as HTMLInputElement | null;
            if (input) setQuery(input.value);
          }
        }}
        onClickCapture={(e) => {
          const target = e.target as HTMLElement | null;
          if (target?.id === "search-button") {
            const input = document.getElementById("search-input") as HTMLInputElement | null;
            if (input) setQuery(input.value);
          }
        }}
      >
        <SearchBar
          placeholder="Buscar conceptos de hacking web..."
          buttonText="Buscar"
          inputId="search-input"
          buttonId="search-button"
        />
      </div>

      {normalized ? (
        <div id="results-header" className="mb-8">
          <h2
            id="results-title"
            className="text-2xl font-bold text-white mb-2"
            dangerouslySetInnerHTML={{
              __html: `Resultados para: <span class="text-gradient">${normalized}</span>`,
            }}
          />
          <p className="text-slate-400">Resultados de tu búsqueda</p>
        </div>
      ) : null}

      {/* Flag oculta para DOM XSS (superficie educativa) */}
      <div id="flag" className="hidden" data-flag="FLAG{dom_xss_basico}"></div>

      <div id="concepts-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((category) => (
            <div
              key={category.id}
              className="card p-6 hover:border-lab-primary-500/50 transition-colors"
              data-category-id={category.id}
              data-category-title={category.title.toLowerCase()}
              data-category-description={category.description.toLowerCase()}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lab-primary-500/20 to-lab-accent-500/20 flex items-center justify-center border border-slate-700 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-lab-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

