import { MockFrame, LiveBadge } from "./Frame";

const steps = [
  { label: "Call recap summarized & pinned", time: "0:02", done: true },
  { label: "Drive folder + asset intake created", time: "0:04", done: true },
  { label: "Slack channel opened, team invited", time: "0:05", done: true },
  { label: "Kickoff checklist sent to client", time: "0:09", done: true },
  { label: "Welcome sequence scheduled", time: "0:11", done: true },
  { label: "Launch brief drafted for creative", time: "0:34", done: false },
];

export function OnboardingChecklist() {
  return (
    <MockFrame title="anchor / acme-partners onboarding">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">elapsed 34 min · 5 of 6 complete</span>
        <LiveBadge label="Running" />
      </div>
      <div className="flex flex-col gap-1.5">
        {steps.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] ${
                  s.done ? "bg-accent text-cream" : "border border-line text-transparent"
                }`}
                aria-hidden
              >
                ✓
              </span>
              <p className={`text-[11px] ${s.done ? "text-ink" : "text-stone"}`}>{s.label}</p>
            </div>
            <span className="font-mono text-[10px] text-stone">{s.time}</span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}
