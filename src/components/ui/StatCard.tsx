const COLOR_CLASSES = {
  primary: "text-lab-primary-400",
  accent: "text-lab-accent-400",
  gradient: "text-gradient",
  yellow: "text-yellow-400",
  green: "text-green-400",
  red: "text-red-400",
} as const;

export function StatCard({
  value,
  label,
  color = "primary",
  className = "",
}: {
  value: string | number;
  label: string;
  color?: keyof typeof COLOR_CLASSES;
  className?: string;
}) {
  return (
    <div className={["card p-4 text-center", className].join(" ")}>
      <p className={["text-2xl font-bold", COLOR_CLASSES[color]].join(" ")}>
        {value}
      </p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  );
}

