import Link from "next/link";
import { site } from "@/content/site";
import { CONTACT_EMAIL } from "@/lib/constants";
import { AuditButton } from "@/components/conversion/AuditButton";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream-2/60 overflow-hidden">
      {/* Final CTA band */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
              Next step
            </p>
            <p className="mt-4 max-w-xl font-display text-3xl md:text-4xl leading-[1.1] tracking-tight text-ink">
              Start with the free audit.{" "}
              <span className="text-accent italic">Twenty minutes, a clear map, yours to keep.</span>
            </p>
          </div>
          <div className="shrink-0">
            <AuditButton location="footer" size="lg">
              Get your free AI audit <span aria-hidden>→</span>
            </AuditButton>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl tracking-tight text-ink">
            Mogging<span className="text-accent">Labs</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
            An AI implementation studio. We design, install, and maintain custom AI agents for
            marketing and lead-generation teams — inside the tools you already use.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            Serving US teams · built and run from our own pipelines
          </p>
        </div>

        <nav className="md:col-span-2" aria-label="Site">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Site</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={`/${item.href}`} className="text-ink-2 hover:text-accent transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label="Get started">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Start</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/apply" className="text-ink-2 hover:text-accent transition-colors">
                Apply for an audit
              </Link>
            </li>
            <li>
              <Link href="/for/ppc-agencies" className="text-ink-2 hover:text-accent transition-colors">
                For PPC agencies
              </Link>
            </li>
            <li>
              <Link href="/for/roofing-lead-gen" className="text-ink-2 hover:text-accent transition-colors">
                For roofing lead gen
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-2 hover:text-accent transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="text-stone">Replies within one business day.</li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            © {new Date().getFullYear()} MoggingLabs · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone hidden sm:block">
              Built and maintained with our own agents
            </p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cropped at the baseline */}
      <div className="relative select-none" aria-hidden>
        <p className="mx-auto max-w-6xl px-5 md:px-8 font-display tracking-tight leading-none text-[clamp(4rem,14.5vw,13rem)] text-ink/[0.07] whitespace-nowrap -mb-[0.24em]">
          Mogging<span className="text-accent/20">Labs</span>
        </p>
      </div>
    </footer>
  );
}
