import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  children,
  className,
  bleed = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-36", className)}>
      <div className={cn(!bleed && "mx-auto max-w-6xl px-5 md:px-8")}>{children}</div>
    </section>
  );
}
