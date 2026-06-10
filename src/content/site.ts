export const site = {
  eyebrow: "AI implementation studio — for lead-gen teams",
  headline: ["AI agents for", "lead-gen teams."],
  headlineAccent: "Built, installed, and running inside the tools you already use.",
  subhead:
    "MoggingLabs designs, installs, and maintains custom AI agents for marketing and lead-generation teams doing $50k+ a month. We start with a free audit that shows you exactly where your pipeline loses time and revenue — yours to keep, whatever you decide.",
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
  title: "Where lead-gen teams lose time and revenue",
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
      text: "Operations work quietly absorbs your margin. Reporting, onboarding, creative briefs — hours of skilled time spent on tasks an agent handles in seconds, every day, without being asked.",
      stat: "0.5–2",
      statLabel: "full-time roles' worth of routine work per agent",
    },
  ],
} as const;

export const founderNote = {
  title: "A note from the founder",
  // TODO_FOUNDER: replace with your own words, ~120 words, plain and direct.
  body: [
    "TODO_FOUNDER: We run every system in our own business before we recommend it to anyone. Our ad pipelines, our prospecting, our reporting — agents handle them daily, and we see exactly where they save hours and where they don't.",
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
