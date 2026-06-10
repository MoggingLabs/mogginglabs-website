import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyTypeform } from "@/components/conversion/LazyTypeform";
import { auditCta } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply for a free AI audit",
  description:
    "Four quick questions. If we're a fit, you book a call instantly, and you keep the audit either way.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">The free audit</p>
          <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            {auditCta.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{auditCta.sub}</p>
          <div className="mt-10">
            <LazyTypeform height={640} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
