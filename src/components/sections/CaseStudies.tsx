import { cases, casesIntro } from "@/content/cases";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <SectionShell id="proof">
      <Eyebrow number={casesIntro.number}>{casesIntro.title}</Eyebrow>
      <Reveal className="mt-8 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Built, shipped, <span className="text-accent italic">measured</span>.
        </h2>
        <p className="mt-5 text-lg text-ink-2 leading-relaxed">{casesIntro.sub}</p>
      </Reveal>

      <div className="mt-14 grid gap-px bg-line border border-line lg:grid-cols-3">
        {cases.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 0.1} className="bg-cream">
            <article className="flex h-full flex-col p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{cs.tag}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{cs.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">{cs.context}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                <span className="font-medium text-ink">Installed:</span> {cs.installed}
              </p>
              <dl className="mt-6 border-t border-line">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="border-b border-line py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone">
                      {m.label}
                    </dt>
                    <dd className="mt-1 font-mono text-sm">
                      <span className="text-stone line-through">{m.before}</span>
                      <span className="mx-2 text-stone" aria-hidden>→</span>
                      <span className="text-accent font-medium">{m.after}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-auto pt-6 font-display text-base italic text-ink-2">“{cs.takeaway}”</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
