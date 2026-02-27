export function ProfileStats({
  flagsCaptured,
  totalFlags,
  points,
  totalTime = "—",
  vulnerabilitiesCompleted = 0,
  totalVulnerabilities = 25,
}: {
  flagsCaptured: number;
  totalFlags: number;
  points: number;
  totalTime?: string;
  vulnerabilitiesCompleted?: number;
  totalVulnerabilities?: number;
}) {
  const flagsPct = totalFlags ? (flagsCaptured / totalFlags) * 100 : 0;
  const vulnsPct = totalVulnerabilities
    ? (vulnerabilitiesCompleted / totalVulnerabilities) * 100
    : 0;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="card p-6 text-center">
        <p className="text-3xl font-bold text-gradient">
          <span id="profile-flags">
            {flagsCaptured}/{totalFlags}
          </span>
        </p>
        <p className="text-sm text-slate-400 mt-1">Flags Capturadas</p>
        <div className="mt-3 progress-bar">
          <div
            id="profile-flags-bar"
            className="progress-bar-fill"
            style={{ width: `${flagsPct}%` }}
          />
        </div>
      </div>

      <div className="card p-6 text-center">
        <p className="text-3xl font-bold text-lab-primary-400">
          {vulnerabilitiesCompleted}/{totalVulnerabilities}
        </p>
        <p className="text-sm text-slate-400 mt-1">Vulnerabilidades</p>
        <div className="mt-3 progress-bar">
          <div className="progress-bar-fill" style={{ width: `${vulnsPct}%` }} />
        </div>
      </div>

      <div className="card p-6 text-center">
        <p className="text-3xl font-bold text-lab-accent-400">
          <span id="profile-points">{points}</span>
        </p>
        <p className="text-sm text-slate-400 mt-1">Puntos Totales</p>
        <p
          id="profile-points-flag"
          className="hidden mt-2 text-xs text-amber-200/80 font-mono"
        >
          FLAG{`{client_side_points}`}
        </p>
      </div>

      <div className="card p-6 text-center">
        <p className="text-3xl font-bold text-yellow-400">{totalTime}</p>
        <p className="text-sm text-slate-400 mt-1">Tiempo Total</p>
      </div>
    </div>
  );
}

