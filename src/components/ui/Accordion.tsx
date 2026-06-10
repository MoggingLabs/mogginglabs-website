"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer group"
            >
              <span
                className={cn(
                  "font-display text-lg md:text-xl transition-colors duration-300",
                  isOpen ? "text-accent" : "text-ink group-hover:text-accent",
                )}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-stone text-lg leading-none"
                aria-hidden
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-14 text-ink-2 leading-relaxed max-w-2xl">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
