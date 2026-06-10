"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroFallback } from "./HeroFallback";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

/**
 * Gates the 3D scene: desktop + fine pointer + no reduced-motion only,
 * mounted after first idle so the headline owns LCP. Everyone else gets
 * the static fallback — same box, zero layout shift.
 */
export function HeroVisual() {
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    const capable =
      window.innerWidth >= 768 &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!capable) return;

    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle
      ? window.requestIdleCallback(() => setShow3d(true), { timeout: 2000 })
      : window.setTimeout(() => setShow3d(true), 350);
    return () => {
      if (hasIdle) window.cancelIdleCallback(idle as number);
      else window.clearTimeout(idle);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[480px] mx-auto lg:max-w-none" aria-hidden={show3d}>
      {!show3d && <HeroFallback />}
      {show3d && <HeroCanvas />}
    </div>
  );
}
