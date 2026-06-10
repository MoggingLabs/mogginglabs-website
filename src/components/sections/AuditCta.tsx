import { auditCta } from "@/content/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { LazyTypeform } from "@/components/conversion/LazyTypeform";

export function AuditCta() {
  return (
    <SectionShell id="audit">
      <div className="rounded-2xl border-2 border-accent/60 p-6 md:p-12">
        <Eyebrow number={auditCta.number}>The free audit</Eyebrow>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {auditCta.title}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-2">{auditCta.sub}</p>
            <ul className="mt-8 flex flex-col gap-3">
              {auditCta.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="font-mono text-sm leading-relaxed text-ink">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <LazyTypeform />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
