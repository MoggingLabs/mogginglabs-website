import { MockFrame, LiveBadge } from "./Frame";

export function ReportEmail() {
  return (
    <MockFrame title="brief / weekly client report">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">sent Mon 8:47 AM, before the client asked</span>
        <LiveBadge label="Sent" />
      </div>
      <div className="rounded-md border border-line bg-white p-3">
        <p className="text-[11px] text-stone">To: client@acmehome.com</p>
        <p className="mt-0.5 text-xs font-medium text-ink">Week 23 performance summary</p>
        <div className="mt-3 grid grid-cols-3 gap-2 border-y border-line py-2.5">
          {[
            ["CPA", "$41", "-14%"],
            ["ROAS", "3.8x", "+0.4"],
            ["Booked", "47", "+9"],
          ].map(([k, v, d]) => (
            <div key={k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone">{k}</p>
              <p className="font-mono text-sm text-ink">{v}</p>
              <p className="font-mono text-[10px] text-accent">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-[11px] leading-relaxed text-ink-2">
          CPA down 14% on the storm-damage angle. Two creatives are fatiguing, so four replacement
          variants are drafted and waiting for your approval.
        </p>
      </div>
    </MockFrame>
  );
}
