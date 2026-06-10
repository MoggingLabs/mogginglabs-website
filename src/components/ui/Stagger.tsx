"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={cn(className)} variants={child}>
      {children}
    </motion.div>
  );
}

/** Per-word masked headline reveal. */
export function HeadlineWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {/* Mask: padding gives serif italics and descenders room so they
              are not cropped; negative margins cancel the layout cost. */}
          <span className="inline-block overflow-hidden align-bottom px-[0.1em] -mx-[0.1em] pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "130%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.06,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {/* Space lives outside the clipped box so it cannot be trimmed. */}
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}
