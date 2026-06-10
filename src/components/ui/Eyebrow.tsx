"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  number,
  children,
  className,
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone whitespace-nowrap">
        {number ? `${number} — ` : ""}
        {children}
      </span>
      <motion.span
        className="h-px flex-1 bg-line origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      />
    </div>
  );
}
