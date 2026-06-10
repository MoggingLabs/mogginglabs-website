"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";
import { AuditButton } from "@/components/conversion/AuditButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleTextEffect } from "@/components/hero/ParticleTextEffect";

export function Hero() {
  const trustTodo = site.trustLine.includes("TODO_FOUNDER");
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-stone"
        >
          {site.eyebrow}
        </motion.p>

        {/* Real headline for SEO and assistive tech; the canvas is decorative. */}
        <h1 className="sr-only">
          {site.headline.join(" ")} {site.headlineAccent}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <ParticleTextEffect
            words={[...site.heroMessages]}
            className="block w-full h-[230px] sm:h-[300px] md:h-[360px] lg:h-[420px]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-2"
        >
          {site.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
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
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-stone"
          >
            {site.trustLine}
          </motion.p>
        )}
      </div>
    </section>
  );
}
