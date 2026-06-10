"use client";

import { useEffect, useRef, useState } from "react";
import { Widget } from "@typeform/embed-react";
import { TYPEFORM_ID, CONTACT_EMAIL } from "@/lib/constants";
import { useUtmParams } from "@/lib/useUtmParams";

const typeformReady = TYPEFORM_ID !== "TODO_FOUNDER";

/**
 * Mounts the Typeform widget only when the container nears the viewport,
 * so Typeform's script never blocks initial load. Falls back to a styled
 * placeholder until a real form ID is configured.
 */
export function LazyTypeform({ height = 560 }: { height?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const hidden = useUtmParams();

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [near]);

  return (
    <div ref={ref} style={{ height }} className="overflow-hidden rounded-xl border border-line bg-white">
      {typeformReady && near ? (
        <Widget id={TYPEFORM_ID} hidden={hidden} style={{ height: "100%" }} className="h-full" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
            Audit application
          </p>
          <p className="max-w-sm font-display text-2xl leading-snug text-ink">
            Four quick questions. If we&rsquo;re a fit, you book a call instantly.
          </p>
          <p className="text-sm text-ink-2">
            The application form is being finalized. In the meantime, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>{" "}
            and we&rsquo;ll set up your audit directly.
          </p>
        </div>
      )}
    </div>
  );
}
