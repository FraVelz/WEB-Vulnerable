import type { ReactNode } from "react";

export function InfoCard({
  title,
  iconColorClass = "text-lab-primary-400",
  children,
}: {
  title: string;
  iconColorClass?: string;
  children: ReactNode;
}) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
        <svg
          className={["w-5 h-5", iconColorClass].join(" ")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {title}
      </h3>
      {children}
    </div>
  );
}

