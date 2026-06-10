import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { AgentShowcase } from "@/components/sections/AgentShowcase";
import { Process } from "@/components/sections/Process";
import { AuditCta } from "@/components/sections/AuditCta";
import { Faq } from "@/components/sections/Faq";
import { AuditButton } from "@/components/conversion/AuditButton";
import { Reveal } from "@/components/ui/Reveal";
import { segments, getSegment } from "@/content/segments";

export function generateStaticParams() {
  return segments.map((s) => ({ segment: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>;
}): Promise<Metadata> {
  const segment = getSegment((await params).segment);
  if (!segment) return {};
  return {
    title: `AI agents ${segment.eyebrow.replace("For", "for")}`,
    description: segment.subhead,
  };
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const segment = getSegment((await params).segment);
  if (!segment) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-24 pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">{segment.eyebrow}</p>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] tracking-tight">
            {segment.headline.join(" ")}{" "}
            <span className="text-accent italic">{segment.headlineAccent}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">{segment.subhead}</p>
          <div className="mt-9">
            <AuditButton location="lander" size="lg">
              Get your free AI audit <span aria-hidden>→</span>
            </AuditButton>
          </div>
          <Reveal className="mt-14 grid gap-px bg-line border border-line md:grid-cols-3">
            {segment.pains.map((pain) => (
              <p key={pain} className="bg-cream p-6 text-base leading-relaxed text-ink-2">
                {pain}
              </p>
            ))}
          </Reveal>
        </section>
        <AgentShowcase />
        <Process />
        <AuditCta />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
