import { MockFrame, LiveBadge } from "./Frame";

const messages = [
  {
    who: "New lead: Maria G.",
    ai: false,
    time: "2:14 AM",
    text: "Hi, saw your ad. Do you do full roof replacements in Plano? Need a quote this week.",
  },
  {
    who: "Dash",
    ai: true,
    time: "2:14 AM",
    text: "Hi Maria, yes, we cover Plano. Most replacements run 1 to 2 days on site. I can get you a free inspection Thursday 10am or Friday 2pm. Which works better?",
  },
  {
    who: "New lead: Maria G.",
    ai: false,
    time: "2:16 AM",
    text: "Thursday 10am works.",
  },
  {
    who: "Dash",
    ai: true,
    time: "2:16 AM",
    text: "Booked for Thursday 10am. Confirmation just hit your phone. See you then.",
  },
];

export function SlackThread() {
  return (
    <MockFrame title="dash / inbound-leads">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">replied in 38 s</span>
        <LiveBadge />
      </div>
      <div className="flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className="flex gap-2.5">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-mono ${
                m.ai ? "bg-accent text-cream" : "bg-cream-2 text-ink-2"
              }`}
            >
              {m.ai ? "AI" : m.who[0]}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-ink leading-none">
                {m.who} <span className="ml-1 font-mono text-[10px] text-stone">{m.time}</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-2">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}
