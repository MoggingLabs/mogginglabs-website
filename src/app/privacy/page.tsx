import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
};

const sections = [
  {
    h: "What we collect",
    p: "When you apply for an audit we collect the information you submit through our application form (name, email, company details, and your answers) plus standard analytics data about how the site is used (pages viewed, approximate location, device type). We do not run third-party ad trackers on this site.",
  },
  {
    h: "How we use it",
    p: "We use your information to run your audit, respond to your inquiry, and, if you've asked us to, send you relevant follow-up email. Analytics data is used in aggregate to improve the site. We never sell your data, and we never share it with third parties except the processors below.",
  },
  {
    h: "Processors we rely on",
    p: "Form submissions are processed by Typeform. Hosting and analytics are provided by Vercel. Scheduling, email, and CRM data are processed by the tools we use to run our business. Each processor handles your data under its own privacy policy and our instructions.",
  },
  {
    h: "Email communications",
    p: "If you receive a cold or follow-up email from us, it's because we believe our service is relevant to your business. Every email includes a working unsubscribe mechanism, and opt-outs are honored immediately and permanently.",
  },
  {
    h: "Your rights",
    p: `You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it at any time by emailing ${CONTACT_EMAIL}. We respond to every request within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">Legal</p>
          <h1 className="mt-5 font-display text-4xl md:text-5xl tracking-tight">Privacy policy</h1>
          <p className="mt-4 font-mono text-xs text-stone">Last updated: June 2026</p>
          <div className="mt-12 flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-2xl text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink-2">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
