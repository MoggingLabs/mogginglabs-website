import { MockFrame, LiveBadge } from "./Frame";

const rows = [
  { label: "Revenue (MTD)", value: "$84,210", delta: "+6.2%", warn: false },
  { label: "Ad spend (yday)", value: "$1,940", delta: "on pace", warn: false },
  { label: "Cost per lead", value: "$31.40", delta: "+18% ⚠", warn: true },
  { label: "Net margin (MTD)", value: "27.4%", delta: "-1.1pt", warn: true },
];

export function DigestCard() {
  return (
    <MockFrame title="ledger / daily margin digest">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">delivered 7:00 AM · owner inbox</span>
        <LiveBadge label="Daily" />
      </div>
      <div className="rounded-md border border-line bg-white">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`flex items-center justify-between px-3 py-2.5 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <p className="text-[11px] text-ink-2">{r.label}</p>
            <p className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-ink">{r.value}</span>
              <span className={`font-mono text-[10px] ${r.warn ? "text-accent" : "text-stone"}`}>
                {r.delta}
              </span>
            </p>
          </div>
        ))}
      </div>
      <p className="pt-3 text-[11px] leading-relaxed text-ink-2">
        CPL drift traced to one fatigued ad set — pausing recommendation drafted for your approval.
      </p>
    </MockFrame>
  );
}
