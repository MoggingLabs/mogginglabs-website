export const site = {
  eyebrow: "AI implementation studio — for lead-gen teams",
  headline: ["AI employees for", "lead-gen teams."],
  headlineAccent: "Built, installed, and running inside your stack.",
  subhead:
    "MoggingLabs designs and installs custom AI agents for marketing and lead-gen teams doing $50k+/month — without the six-figure consulting engagement. Start with a free audit of where your pipeline leaks.",
  primaryCta: "Get your free AI audit",
  secondaryCta: "See the agents",
  trustLine:
    "Built by operators running live Meta + GoHighLevel pipelines. TODO_FOUNDER: one-line proof stat.",
  nav: [
    { label: "Agents", href: "#agents" },
    { label: "Process", href: "#process" },
    { label: "Proof", href: "#proof" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const proofStats = [
  // TODO_FOUNDER: replace with real, defensible numbers.
  { value: 60, suffix: "s", label: "median lead response time", todo: true },
  { value: 40, suffix: "+", label: "ad variants shipped weekly", todo: true },
  { value: 30, suffix: "h", label: "ops hours automated / week", todo: true },
  { value: 12, suffix: "", label: "systems live in production", todo: true },
] as const;

export const systemsMarquee = [
  "Ekko creative pipeline",
  "Scout B2B prospecting",
  "GoHighLevel automations",
  "Meta ads performance loops",
  "Multi-agent ops desk",
  "Speed-to-lead responders",
  "Client reporting agents",
  "Onboarding systems",
] as const;

export const problem = {
  number: "01",
  title: "Where lead-gen margin dies",
  pullQuote:
    "Your leads wait 47 minutes. Your competitors answer in 47 seconds.",
  pullQuoteNote: "TODO_FOUNDER: verify framing / source for response-time stat.",
  paragraphs: [
    {
      text: "Speed-to-lead decays by the minute. A lead answered within five minutes is dramatically more likely to convert than one answered an hour later — and most teams answer in hours.",
      stat: "5 min",
      statLabel: "the window that decides the deal",
    },
    {
      text: "Follow-up is where booked revenue leaks. No-shows never get re-worked, cold leads never get a third touch, and your setters are too busy chasing fresh leads to fix it.",
      stat: "80%",
      statLabel: "of conversions need 5+ touches",
    },
    {
      text: "Ops headcount eats the margin you fought for. Reporting, onboarding, creative briefs — hours of skilled work spent on tasks an agent does in seconds, every day, without being asked.",
      stat: "0.5–2",
      statLabel: "FTEs replaced per installed agent",
    },
  ],
} as const;

export const founderNote = {
  title: "A note from the founder",
  // TODO_FOUNDER: replace with your own words, ~120 words, plain and direct.
  body: [
    "TODO_FOUNDER: We run these systems on our own money before we sell them to you. Our ad pipelines, our prospecting, our reporting — agents handle them daily, and we see exactly where they save hours and where they don't.",
    "TODO_FOUNDER: That's the deal: we only install what we'd run ourselves, and we start with an audit you keep whether or not you hire us.",
  ],
  signature: "TODO_FOUNDER: Founder name",
  role: "Founder, MoggingLabs",
} as const;

export const auditCta = {
  number: "05",
  title: "Get your free AI audit",
  sub: "Twenty minutes, no deck, no pressure. We map your pipeline and tell you exactly what we'd automate first — you keep the map either way.",
  bullets: [
    "A 20-minute review of your current pipeline and stack",
    "A map of your three biggest automation gaps, ranked by ROI",
    "No pitch unless we both see a fit",
  ],
} as const;
