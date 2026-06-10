import { founderNote } from "@/content/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/ui/Reveal";

export function FounderNote() {
  return (
    <SectionShell className="bg-cream-2/50">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">{founderNote.title}</p>
        <div className="mt-8 flex flex-col gap-6">
          {founderNote.body.map((paragraph, i) => (
            <p key={i} className="font-display text-xl md:text-2xl leading-relaxed text-ink">
              {paragraph.replace("TODO_FOUNDER: ", "")}
            </p>
          ))}
        </div>
        <p className="mt-10 font-display text-lg italic text-accent">
          — {founderNote.signature.replace("TODO_FOUNDER: ", "")}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
          {founderNote.role}
        </p>
      </Reveal>
    </SectionShell>
  );
}
