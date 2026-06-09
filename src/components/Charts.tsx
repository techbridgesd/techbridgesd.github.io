/**
 * Lightweight, dependency-free SVG charts used on the Research page.
 * Each chart is given an accessible role/label and a visible caption so the
 * data is conveyed without relying on color alone.
 */

export type BarDatum = { label: string; value: number; display?: string };

export function BarChart({
  data,
  unit = "",
  max,
  caption,
}: {
  data: BarDatum[];
  unit?: string;
  max?: number;
  caption?: string;
}) {
  const top = max ?? Math.max(...data.map((d) => d.value)) * 1.0;
  return (
    <figure className="w-full">
      <div
        className="space-y-4"
        role="img"
        aria-label={
          caption ??
          data.map((d) => `${d.label}: ${d.display ?? d.value}${unit}`).join("; ")
        }
      >
        {data.map((d) => {
          const pct = Math.max(2, Math.round((d.value / top) * 100));
          return (
            <div key={d.label}>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-foreground">{d.label}</span>
                <span className="text-primary font-semibold">
                  {d.display ?? d.value}
                  {unit}
                </span>
              </div>
              <div className="h-3.5 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {caption && (
        <figcaption className="mt-4 text-xs text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function DonutStat({
  percent,
  label,
  caption,
}: {
  percent: number;
  label: string;
  caption?: string;
}) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <figure className="flex flex-col items-center text-center">
      <svg
        viewBox="0 0 140 140"
        className="h-40 w-40"
        role="img"
        aria-label={`${percent}% — ${label}`}
      >
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="14"
        />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="14"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
        />
        <text
          x="70"
          y="78"
          textAnchor="middle"
          className="fill-primary font-bold"
          style={{ fontSize: "28px" }}
        >
          {percent}%
        </text>
      </svg>
      <p className="mt-2 font-semibold text-foreground max-w-[16rem]">{label}</p>
      {caption && (
        <figcaption className="mt-1 text-xs text-muted-foreground italic max-w-[16rem]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
