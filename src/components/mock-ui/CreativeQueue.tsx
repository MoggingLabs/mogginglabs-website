import { MockFrame, LiveBadge } from "./Frame";

const variants = [
  { name: "V-12 · Storm damage angle", status: "Approved", winner: true },
  { name: "V-13 · Financing hook", status: "In review", winner: false },
  { name: "V-14 · Before/after proof", status: "In review", winner: false },
  { name: "V-15 · Neighborhood social proof", status: "Generating", winner: false },
];

export function CreativeQueue() {
  return (
    <MockFrame title="foundry / creative-queue">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">batch built in 8m 22s · 14 assets</span>
        <LiveBadge label="Shipping" />
      </div>
      <div className="flex flex-col gap-1.5">
        {variants.map((v) => (
          <div
            key={v.name}
            className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`h-8 w-8 shrink-0 rounded ${
                  v.winner ? "bg-accent/15 border border-accent/40" : "bg-cream-2 border border-line"
                }`}
                aria-hidden
              />
              <p className="truncate text-[11px] font-medium text-ink">{v.name}</p>
            </div>
            <span
              className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] ${
                v.winner ? "text-accent" : "text-stone"
              }`}
            >
              {v.status}
            </span>
          </div>
        ))}
      </div>
      <p className="pt-3 text-[11px] text-ink-2">
        <span className="font-medium text-accent">V-12 predicted +38% CTR</span> vs. control. Queued
        for launch pending approval.
      </p>
    </MockFrame>
  );
}
