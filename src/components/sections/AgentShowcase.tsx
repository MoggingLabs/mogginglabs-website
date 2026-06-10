"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { agents, type Agent } from "@/content/agents";
import { MockUi } from "@/components/mock-ui";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function Dossier({ agent }: { agent: Agent }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
      <MockUi kind={agent.mockUi} />
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
            Personnel file · {agent.index}
          </p>
          <h3 className="mt-1 font-display text-3xl text-ink">{agent.name}</h3>
          <p className="text-sm text-accent">{agent.role}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink-2">{agent.description}</p>
        <dl className="border-t border-line">
          {agent.spec.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-3 border-b border-line py-2"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone shrink-0">
                {row.label}
              </dt>
              <dd className="font-mono text-[11px] text-ink text-right">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="rounded-lg bg-cream-2/70 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone">
            {agent.beforeAfter.label}
          </p>
          <p className="mt-1.5 font-mono text-sm">
            <span className="text-stone line-through">{agent.beforeAfter.before}</span>
            <span className="mx-2 text-stone" aria-hidden>→</span>
            <span className="text-accent font-medium">{agent.beforeAfter.after}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function AgentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = agents[activeIndex];

  return (
    <SectionShell id="agents">
      <Eyebrow number="02">Meet the team</Eyebrow>
      <Reveal className="mt-8 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Six agents, ready to join <span className="text-accent italic">your</span> team.
        </h2>
        <p className="mt-5 text-lg text-ink-2 leading-relaxed">
          Every agent below runs in production today. Select one to read its file. The interface
          shown is the one your team would actually use.
        </p>
      </Reveal>

      {/* Desktop: rail + dossier */}
      <div className="mt-12 hidden md:grid md:grid-cols-[240px_1fr] gap-10">
        <nav className="flex flex-col border-t border-line" aria-label="Agents">
          {agents.map((agent, i) => (
            <button
              key={agent.index}
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
              className={cn(
                "flex items-baseline gap-3 border-b border-line py-4 text-left transition-colors duration-200 cursor-pointer",
                i === activeIndex ? "text-ink" : "text-stone hover:text-ink",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] tracking-[0.14em]",
                  i === activeIndex ? "text-accent" : "text-stone",
                )}
              >
                {agent.index}
              </span>
              <span>
                <span className="block font-display text-lg leading-tight">{agent.name}</span>
                <span className="block text-xs">{agent.role}</span>
              </span>
            </button>
          ))}
        </nav>
        <div className="relative min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            >
              <Dossier agent={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: horizontal snap cards */}
      <div className="mt-10 md:hidden -mx-5 px-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {agents.map((agent) => (
          <div key={agent.index} className="w-[88vw] max-w-sm shrink-0 snap-center">
            <Dossier agent={agent} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
