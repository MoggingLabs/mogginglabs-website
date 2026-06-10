export interface ProcessStep {
  number: string;
  title: string;
  body: string;
  table: { youGet: string; weNeed: string; duration: string };
}

export const processIntro = {
  number: "03",
  title: "How an agent gets hired",
  sub: "No 90-day programs and no long-term contracts. Four clear steps, most of them measured in days.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    body: "We map where your pipeline leaks: response times, follow-up gaps, hours burned on manual work. You get a ranked list of what to automate first, with the math attached. It's free, and you keep it either way.",
    table: {
      youGet: "Your automation map, ranked by ROI",
      weNeed: "20 minutes + a look at your tools",
      duration: "Within 48 hours",
    },
  },
  {
    number: "02",
    title: "Build",
    body: "We build and install one to three agents directly into the tools you already run, like GoHighLevel, Meta, Slack, and your inbox. There are no new dashboards to learn and no migration projects, and most builds take a few weeks.",
    table: {
      youGet: "Agents live in production",
      weNeed: "Access + a Slack channel",
      duration: "1 to 3 weeks", // TODO_FOUNDER: confirm exact timeline
    },
  },
  {
    number: "03",
    title: "Prove",
    body: "Agents run alongside your team while we report against the audit baseline. You see response times, show rates, and hours saved in plain numbers instead of anecdotes.",
    table: {
      youGet: "Weekly numbers vs. baseline",
      weNeed: "Honest feedback",
      duration: "First 30 days",
    },
  },
  {
    number: "04",
    title: "Run",
    body: "We maintain, tune, and expand. Models change every quarter; your agents keep up without you thinking about it. Add the next agent when the first one has paid for itself.",
    table: {
      youGet: "Maintenance, tuning, upgrades",
      weNeed: "Nothing. We monitor.",
      duration: "Ongoing",
    },
  },
];
