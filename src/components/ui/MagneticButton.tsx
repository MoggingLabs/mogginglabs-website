"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/** Subtle magnetic hover for primary CTAs only. Max 6px pull, pointer-fine only. */
export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-6, Math.min(6, dx * 0.12)));
    y.set(Math.max(-6, Math.min(6, dy * 0.12)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
