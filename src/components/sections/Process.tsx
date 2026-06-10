"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { processIntro, processSteps } from "@/content/process";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.7"],
  });

  return (
    <SectionShell id="process" className="bg-cream-2/50">
      <Eyebrow number={processIntro.number}>{processIntro.title}</Eyebrow>
      <Reveal className="mt-8 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
          From audit to running agent in <span className="text-accent italic">weeks</span>, not quarters.
        </h2>
        <p className="mt-5 text-lg text-ink-2 leading-relaxed">{processIntro.sub}</p>
      </Reveal>

      <div ref={ref} className="relative mt-16">
        {/* spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />
        <motion.div
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent"
          style={{ scaleY: scrollYProgress }}
          aria-hidden
        />
        <ol className="flex flex-col gap-14">
          {processSteps.map((step, i) => (
            <li key={step.number} className="relative pl-12">
              <span
                className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-accent bg-cream"
                aria-hidden
              />
              <Reveal delay={i * 0.05}>
                <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-2">{step.body}</p>
                  </div>
                  <dl className="self-start rounded-lg border border-line bg-cream p-4">
                    {[
                      ["You get", step.table.youGet],
                      ["We need", step.table.weNeed],
                      ["Duration", step.table.duration],
                    ].map(([label, value], j) => (
                      <div
                        key={label}
                        className={`flex justify-between gap-4 py-2 ${j > 0 ? "border-t border-line" : ""}`}
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone shrink-0 pt-0.5">
                          {label}
                        </dt>
                        <dd className="font-mono text-[11px] text-ink text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
