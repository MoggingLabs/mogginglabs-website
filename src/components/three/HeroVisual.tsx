"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroFallback } from "./HeroFallback";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

/** Headline + subhead + CTA reveals finish ≈1.5s after load; the canvas
 *  must not initialize before then or its main-thread work janks them. */
const INTRO_MS = 1700;

/**
 * Gates the 3D scene: desktop + fine pointer + no reduced-motion only.
 * Mounts strictly AFTER the hero text intro completes (then waits for an
 * idle slot), and crossfades over the static fallback once the WebGL
 * context has produced its first frame.
 *
 * Visually the scene is composed into the page rather than boxed: the
 * canvas bleeds far beyond the layout slot so nothing clips at an edge,
 * grounded by a radial wash and a hairline orbit ring.
 */
export function HeroVisual() {
  const [show3d, setShow3d] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const capable =
      window.innerWidth >= 768 &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!capable) return;

    let cancelled = false;
    let idle: number | undefined;
    const hasIdle = typeof window.requestIdleCallback === "function";

    const timer = window.setTimeout(() => {
      if (cancelled) return;
      if (hasIdle) {
        idle = window.requestIdleCallback(() => !cancelled && setShow3d(true), {
          timeout: 1500,
        });
      } else {
        setShow3d(true);
      }
    }, INTRO_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (hasIdle && idle !== undefined) window.cancelIdleCallback(idle);
    };
  }, []);

  return (
    <div aria-hidden className="relative select-none">
      <div className="relative h-[300px] sm:h-[380px] lg:h-[500px]">
        {/* Soft accent wash — the scene sits in light, not in a box */}
        <div
          className="absolute left-1/2 top-1/2 w-[160%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(232,80,26,0.07) 0%, rgba(232,80,26,0.025) 30%, transparent 62%)",
          }}
        />
        {/* Hairline orbit ring, editorial grounding */}
        <div className="absolute left-1/2 top-1/2 w-[112%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10" />
        <div className="absolute left-1/2 top-1/2 w-[86%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.05]" />

        {/* Bleed layer: much larger than the slot so drifting/tilting
            objects and shadows never hit a visible canvas edge. */}
        <div className="pointer-events-none absolute -inset-x-24 -inset-y-20 sm:-inset-x-32 sm:-inset-y-24">
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}
          >
            <HeroFallback />
          </div>
          {show3d && (
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
            >
              <HeroCanvas onReady={() => setReady(true)} />
            </div>
          )}
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
        Fig. 01 — your team, plus one agent
      </p>
    </div>
  );
}
