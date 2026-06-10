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
 * context has produced its first frame — same box, zero layout shift.
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
    <div className="relative aspect-square w-full max-w-[480px] mx-auto lg:max-w-none" aria-hidden={ready}>
      {/* Fallback stays mounted underneath until the canvas has rendered,
          then fades out — avoids both an empty box and double-ghosting. */}
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
  );
}
