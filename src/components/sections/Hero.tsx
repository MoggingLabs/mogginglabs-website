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
      {/* Full-bleed particle field: the canvas covers the whole section so
          its edges coincide with the viewport and no frame is visible.
          Particles fly in from off-screen and the words form mid-section. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0"
      >
        <ParticleTextEffect
          words={[...site.heroMessages]}
          textYRatio={0.42}
          className="block h-full w-full"
        />
      </motion.div>

      {/* Content overlay. pointer-events pass through to the canvas except
          on the interactive elements themselves. */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col items-center px-5 md:px-8 pt-10 md:pt-14 pb-14 text-center">
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

        {/* Open space where the particle messages assemble. */}
        <div className="flex-1" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-2xl text-lg leading-relaxed text-ink-2"
        >
          {site.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4"
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
