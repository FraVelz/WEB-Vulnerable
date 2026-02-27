import Link from "next/link";

export function ErrorPage({
  code,
  title,
  message,
  primaryAction,
  secondaryAction,
}: {
  code: string;
  title: string;
  message: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
}) {
  return (
    <div className="max-w-2xl mx-auto text-center px-4">
      <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center shadow-lg glow-accent">
        <svg
          className="w-20 h-20 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="text-6xl md:text-8xl font-bold mb-4">
        <span className="text-gradient">{code}</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {title}
      </h2>

      <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">{message}</p>

      {primaryAction || secondaryAction ? (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction ? (
            <Link
              href={primaryAction.href}
              className="btn-primary text-lg px-8 py-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {primaryAction.text}
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className="btn-secondary text-lg px-8 py-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {secondaryAction.text}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

