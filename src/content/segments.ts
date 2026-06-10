export interface Segment {
  slug: string;
  label: string;
  eyebrow: string;
  headline: string[];
  headlineAccent: string;
  subhead: string;
  pains: string[];
  agentIndexes: string[]; // which agents from agents.ts to feature
}

export const segments: Segment[] = [
  {
    slug: "roofing-lead-gen",
    label: "Roofing & home-services lead gen",
    eyebrow: "For roofing & home-services lead gen",
    headline: ["The first roofer", "to answer wins."],
    headlineAccent: "Your AI setter answers in 38 seconds.",
    subhead:
      "Storm leads don't wait. MoggingLabs installs AI agents into your existing CRM that respond to every lead in under a minute, work every no-show, and report what your ad spend actually bought.",
    pains: [
      "Leads from paid campaigns sit for hours before anyone calls back.",
      "No-shows and cold leads never get a third touch.",
      "You find out a campaign was unprofitable a month too late.",
    ],
    agentIndexes: ["A-01", "A-02", "A-06"],
  },
  {
    slug: "ppc-agencies",
    label: "PPC & paid-media agencies",
    eyebrow: "For PPC & paid-media agencies",
    headline: ["Scale clients,", "not headcount."],
    headlineAccent: "AI agents on every account.",
    subhead:
      "Every new client used to mean more setters, more reporting hours, more creative production. MoggingLabs installs agents that absorb the operational load, so the margin from your next ten clients stays yours.",
    pains: [
      "Reporting eats billable hours across every account, every week.",
      "Creative production can't keep up with fatigue on winning campaigns.",
      "Onboarding a new client takes days of admin before any work starts.",
    ],
    agentIndexes: ["A-03", "A-04", "A-05"],
  },
];

export function getSegment(slug: string) {
  return segments.find((s) => s.slug === slug);
}
