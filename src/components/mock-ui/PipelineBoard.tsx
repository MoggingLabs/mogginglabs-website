import { MockFrame, LiveBadge } from "./Frame";

const columns = [
  {
    title: "No-show",
    count: 3,
    cards: [
      { name: "J. Alvarez", note: "Touch 3 of 5 · SMS sent 9:02" },
      { name: "T. Brooks", note: "Touch 1 of 5 · queued" },
    ],
  },
  {
    title: "Re-engaged",
    count: 5,
    cards: [
      { name: "K. Patel", note: "Replied — wants Thu" },
      { name: "S. Nguyen", note: "Replied — pricing Q" },
    ],
  },
  {
    title: "Rebooked",
    count: 4,
    cards: [
      { name: "M. Carter", note: "Fri 11:00 confirmed" },
      { name: "D. Romero", note: "Tue 3:30 confirmed" },
    ],
  },
];

export function PipelineBoard() {
  return (
    <MockFrame title="cadence / follow-up pipeline">
      <div className="flex items-center justify-between pb-3">
        <span className="font-mono text-[11px] text-stone">12 leads worked overnight</span>
        <LiveBadge label="Running" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {columns.map((col) => (
          <div key={col.title} className="rounded-lg bg-cream-2/60 p-2">
            <p className="flex items-center justify-between px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
              {col.title}
              <span className="text-ink-2">{col.count}</span>
            </p>
            <div className="flex flex-col gap-1.5">
              {col.cards.map((card) => (
                <div key={card.name} className="rounded-md border border-line bg-white p-2">
                  <p className="text-[11px] font-medium text-ink">{card.name}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-stone">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}
