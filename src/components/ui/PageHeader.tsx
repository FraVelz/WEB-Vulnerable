export function PageHeader({
  title,
  subtitle,
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}) {
  const [first, ...rest] = title.split(" ");
  const restText = rest.join(" ");

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {gradient ? (
          <>
            <span className="text-gradient">{first}</span>
            {restText ? <span className="text-white"> {restText}</span> : null}
          </>
        ) : (
          title
        )}
      </h1>
      {subtitle ? <p className="text-slate-400 text-lg">{subtitle}</p> : null}
    </div>
  );
}

