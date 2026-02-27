const ICON_COLOR_CLASSES = {
  green: "bg-green-500/10 text-green-400",
  yellow: "bg-yellow-500/10 text-yellow-400",
  blue: "bg-blue-500/10 text-blue-400",
  purple: "bg-purple-500/10 text-purple-400",
} as const;

export function SettingToggle({
  label,
  description,
  checked,
  iconColor = "green",
}: {
  label: string;
  description: string;
  checked: boolean;
  iconColor?: keyof typeof ICON_COLOR_CLASSES;
}) {
  return (
    <label className="flex items-center justify-between p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/70 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div
          className={[
            "w-10 h-10 rounded-lg flex items-center justify-center",
            ICON_COLOR_CLASSES[iconColor],
          ].join(" ")}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="font-medium text-white">{label}</p>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
      <input
        type="checkbox"
        defaultChecked={checked}
        readOnly
        className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-lab-primary-500 focus:ring-lab-primary-500"
      />
    </label>
  );
}

