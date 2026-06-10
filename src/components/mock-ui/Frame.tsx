import { cn } from "@/lib/utils";

/** Shared window chrome for all mock UIs — light, paper-like, crisp. */
export function MockFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-white shadow-[0_18px_50px_-24px_rgba(22,19,14,0.25)] overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-cream-2/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone truncate">
          {title}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function LiveBadge({ label = "Live" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {label}
    </span>
  );
}
