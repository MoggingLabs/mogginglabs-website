import { faq, faqIntro } from "@/content/faq";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <SectionShell id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
        <div className="lg:sticky lg:top-28 self-start">
          <Eyebrow>FAQ</Eyebrow>
          <Reveal className="mt-8">
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight">
              {faqIntro.title.split(", ")[0]},<br />
              <span className="text-accent italic">{faqIntro.title.split(", ")[1]}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-2">{faqIntro.sub}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Accordion items={[...faq]} />
        </Reveal>
      </div>
    </SectionShell>
  );
}
