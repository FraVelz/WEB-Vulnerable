import type { ReactNode } from "react";

const VARIANT_CLASSES = {
  default: "card p-6",
  warning: "card p-6 bg-red-500/5 border-red-500/20",
  danger: "card p-6 border-red-500/30",
  info: "card p-6 bg-lab-primary-500/5 border-lab-primary-500/20",
} as const;

export function LegalSection({
  title,
  iconPath,
  iconColorClass = "text-lab-primary-400",
  variant = "default",
  children,
}: {
  title: string;
  iconPath: string;
  iconColorClass?: string;
  variant?: keyof typeof VARIANT_CLASSES;
  children: ReactNode;
}) {
  return (
    <section className={VARIANT_CLASSES[variant]}>
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
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
            d={iconPath}
          />
        </svg>
        {title}
      </h2>
      {children}
    </section>
  );
}

