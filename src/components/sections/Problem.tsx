import { problem } from "@/content/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Problem() {
  return (
    <SectionShell>
      <Eyebrow number={problem.number}>{problem.title}</Eyebrow>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <blockquote className="font-display text-3xl md:text-4xl leading-[1.15] tracking-tight text-ink max-w-md lg:sticky lg:top-28">
            “{problem.pullQuote}”
          </blockquote>
        </Reveal>
        <div className="flex flex-col gap-10">
          {problem.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-l-2 border-line pl-6">
                <p className="font-mono text-2xl text-accent">{p.stat}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone mt-1">
                  {p.statLabel}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink-2">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
