export interface CaseStudy {
  tag: string;
  title: string;
  context: string;
  installed: string;
  metrics: { label: string; before: string; after: string; todo?: boolean }[];
  takeaway: string;
}

export const casesIntro = {
  number: "04",
  title: "Results",
  sub: "Systems we've built and run, some for clients and some for our own operations. We've withheld the names, but the numbers are real.",
} as const;

export const cases: CaseStudy[] = [
  {
    tag: "Home-services lead gen",
    title: "Roofing lead-gen operation, Texas",
    context:
      "A roofing contractor running paid lead gen with slow manual follow-up and a website that didn't convert paid traffic.",
    installed:
      "Conversion-focused site rebuild plus speed-to-lead and follow-up automation in GoHighLevel.",
    metrics: [
      { label: "Lead response time", before: "Hours", after: "< 1 min", todo: true }, // TODO_FOUNDER
      { label: "Cost per booked job", before: "TODO", after: "TODO", todo: true }, // TODO_FOUNDER
    ],
    takeaway: "The fastest response usually wins the job. Now it's theirs.",
  },
  {
    tag: "Creative ops",
    title: "AI ad-creative pipeline (internal)",
    context:
      "Our own image-ad production for client campaigns: briefing, generating, reviewing, and launching creative was a full-time job.",
    installed:
      "An end-to-end creative pipeline that briefs, generates, reviews, launches, and audits, with human approval gates and Meta performance loops.",
    metrics: [
      { label: "Variants per week", before: "6", after: "40+", todo: true }, // TODO_FOUNDER
      { label: "Brief-to-launch", before: "Days", after: "Hours", todo: true }, // TODO_FOUNDER
    ],
    takeaway: "We run this on our own campaigns every week. It's how we know it works.",
  },
  {
    tag: "Prospecting",
    title: "B2B prospecting platform (internal)",
    context:
      "Outbound prospecting needed researched, qualified lists instead of scraped spam, plus a CRM that kept itself up to date.",
    installed:
      "A prospecting intelligence platform that researches companies, scores fit, and feeds a living CRM pipeline.",
    metrics: [
      { label: "Research time per account", before: "25 min", after: "Seconds", todo: true }, // TODO_FOUNDER
      { label: "Qualified accounts / week", before: "TODO", after: "TODO", todo: true }, // TODO_FOUNDER
    ],
    takeaway: "The same system we would install for a client is how we find our own.",
  },
];
