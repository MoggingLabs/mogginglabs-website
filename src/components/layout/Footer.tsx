import Link from "next/link";
import { site } from "@/content/site";
import { CONTACT_EMAIL, SITE_DESCRIPTION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-tight">
            Mogging<span className="text-accent">Labs</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
            {SITE_DESCRIPTION.split("—")[0].trim()}.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {site.nav.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="text-ink-2 hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
          <Link href="/apply" className="text-ink-2 hover:text-accent transition-colors">
            Apply for an audit
          </Link>
          <Link href="/privacy" className="text-ink-2 hover:text-accent transition-colors">
            Privacy
          </Link>
        </nav>
        <div className="text-sm text-stone md:text-right">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-2 hover:text-accent transition-colors">
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} MoggingLabs
          </p>
        </div>
      </div>
    </footer>
  );
}
