"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";
import { agents } from "@/content/agents";
import { HeadlineWords } from "@/components/ui/Stagger";
import { AuditButton } from "@/components/conversion/AuditButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleTextEffect } from "@/components/hero/ParticleTextEffect";

const AGENT_NAMES = agents.map((agent) => agent.name.toUpperCase());

export function Hero() {
  const trustTodo = site.trustLine.includes("TODO_FOUNDER");
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 pt-14 md:pt-24 pb-16 md:pb-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-stone"
          >
            {site.eyebrow}
          </motion.p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] tracking-tight text-ink">
            <HeadlineWords text={site.headline.join(" ")} />
            <br />
            <HeadlineWords
              text={site.headlineAccent}
              delay={0.35}
              className="text-accent italic"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2"
          >
            {site.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <AuditButton location="hero" size="lg">
                {site.primaryCta} <span aria-hidden>→</span>
              </AuditButton>
            </MagneticButton>
            <a
              href="#agents"
              className="text-ink-2 hover:text-accent transition-colors duration-200 text-base"
            >
              {site.secondaryCta} <span aria-hidden>↓</span>
            </a>
          </motion.div>
          {!trustTodo && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-stone"
            >
              {site.trustLine}
            </motion.p>
          )}
        </div>
        <div className="lg:col-span-5 relative self-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ParticleTextEffect words={AGENT_NAMES} />
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
              Fig. 01 — the team, by name
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
