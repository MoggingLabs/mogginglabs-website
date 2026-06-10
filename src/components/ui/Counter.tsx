"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!inView) return;
    if (reduced) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, reduced]);

  return (
    <span ref={ref} className={cn("font-mono tabular-nums", className)}>
      {prefix}0{suffix}
    </span>
  );
}
