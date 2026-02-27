const VARIANT_CLASSES = {
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  danger: "badge-danger",
  locked: "badge-locked",
} as const;

const SIZE_CLASSES = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
} as const;

export function Badge({
  text,
  variant = "info",
  size = "md",
}: {
  text: string;
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
}) {
  return (
    <span className={[VARIANT_CLASSES[variant], SIZE_CLASSES[size]].join(" ")}>
      {text}
    </span>
  );
}

