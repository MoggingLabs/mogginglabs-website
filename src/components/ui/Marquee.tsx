import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="inline-flex animate-marquee items-center gap-0 hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-[0.18em] text-stone px-6 flex items-center gap-6"
          >
            {item}
            <span aria-hidden className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
