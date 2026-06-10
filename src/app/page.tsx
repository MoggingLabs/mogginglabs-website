import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Problem } from "@/components/sections/Problem";
import { AgentShowcase } from "@/components/sections/AgentShowcase";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FounderNote } from "@/components/sections/FounderNote";
import { AuditCta } from "@/components/sections/AuditCta";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Problem />
        <AgentShowcase />
        <Process />
        <CaseStudies />
        <FounderNote />
        <AuditCta />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
