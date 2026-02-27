export function LegalListItem({
  text,
  variant = "allowed",
}: {
  text: string;
  variant?: "allowed" | "prohibited";
}) {
  return (
    <li className="flex items-start gap-3">
      {variant === "allowed" ? (
        <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm flex-shrink-0">
          ✓
        </span>
      ) : (
        <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm flex-shrink-0">
          ✗
        </span>
      )}
      <span className="text-slate-300">{text}</span>
    </li>
  );
}

