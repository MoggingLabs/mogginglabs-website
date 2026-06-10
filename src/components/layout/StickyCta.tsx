"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AuditButton } from "@/components/conversion/AuditButton";

/** Docks bottom-right (mobile: bottom bar) once the user scrolls past the hero. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const nearAudit = (() => {
        const audit = document.getElementById("audit");
        if (!audit) return false;
        const rect = audit.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      })();
      setVisible(past && !nearAudit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 z-40"
        >
          <div className="md:shadow-[0_12px_40px_-12px_rgba(22,19,14,0.35)] rounded-full">
            <AuditButton location="sticky" size="lg" className="w-full md:w-auto">
              Free AI audit → 2 min
            </AuditButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
