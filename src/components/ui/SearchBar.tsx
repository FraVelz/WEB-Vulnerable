export function SearchBar({
  placeholder = "Buscar...",
  buttonText = "Buscar",
  inputId = "search-input",
  buttonId = "search-button",
}: {
  placeholder?: string;
  buttonText?: string;
  inputId?: string;
  buttonId?: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            id={inputId}
            placeholder={placeholder}
            className="input w-full pl-10"
          />
          <svg
            className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button id={buttonId} className="btn-primary px-8" type="button">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

