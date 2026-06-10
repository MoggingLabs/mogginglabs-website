"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { AuditButton } from "@/components/conversion/AuditButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 h-16 md:h-[72px]">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          Mogging<span className="text-accent">Labs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <AuditButton location="header" size="md">
            {site.primaryCta}
          </AuditButton>
        </nav>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center text-ink cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-px w-full bg-ink transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-300",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-cream transition-opacity duration-300",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2 px-5 pt-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 font-display text-2xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6" onClick={() => setMenuOpen(false)}>
            <AuditButton location="header" size="lg" className="w-full">
              {site.primaryCta}
            </AuditButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
