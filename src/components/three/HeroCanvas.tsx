"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";

/**
 * The actual R3F canvas. Only ever imported dynamically (ssr: false) and
 * only mounted on pointer-fine desktop without reduced motion.
 * Pauses the frameloop when scrolled out of view.
 */
export default function HeroCanvas({ onReady }: { onReady?: () => void }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setFrameloop(entries.some((e) => e.isIntersecting) ? "always" : "never"),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={frameloop}
        gl={{ antialias: true, powerPreference: "low-power", alpha: true }}
        camera={{ position: [0, 0.2, 4.2], fov: 38 }}
        onCreated={() => {
          // Signal readiness on the next frame so the crossfade starts
          // only once the scene has actually drawn.
          requestAnimationFrame(() => onReady?.());
        }}
      >
        <HeroScene pointer={pointer} />
      </Canvas>
    </div>
  );
}
