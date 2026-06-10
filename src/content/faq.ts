export interface FaqItem {
  q: string;
  a: string;
}

export const faqIntro = {
  title: "Common questions, straight answers",
  sub: "If your question isn't here, ask on the audit call. If AI can't help you right now, we'll say so.",
} as const;

export const faq: FaqItem[] = [
  {
    q: "Why is there no pricing page?",
    a: "Because every build is scoped from the audit. What we can say: typical engagements cost a fraction of one hire's salary, there's no long-term retainer requirement, and you'll know the exact number before any work starts.", // TODO_FOUNDER: confirm pricing posture wording
  },
  {
    q: "What happens after the audit?",
    a: "You get your automation map within 48 hours, and it's yours to keep with no strings attached. If we both see a fit, we scope the first build with a fixed price and timeline. If not, you still walk away knowing exactly what to automate first.",
  },
  {
    q: "Will this work with our stack?",
    a: "If you run GoHighLevel, Meta Ads, HubSpot, Slack, Google Workspace, or anything with an API, then yes. Agents are installed into your existing tools, so you won't need new dashboards or a migration.",
  },
  {
    q: "How fast is an agent live?",
    a: "Most single agents are in production within one to three weeks of the audit. The first install is always the one with the clearest ROI, so you see payback before you spend more.",
  },
  {
    q: "Does this replace my team?",
    a: "It takes over the work your team shouldn't be doing: the 2am lead replies, the fourth follow-up, the Monday-morning reporting. Your people focus on closing deals and keeping clients. The agents handle the rest.",
  },
  {
    q: "What about our data?",
    a: "Agents run on your accounts with scoped credentials you control and can revoke at any time. We don't train models on your data, and we don't pool it across clients.",
  },
  {
    q: "Who maintains the agents when models change?",
    a: "We do. Models and APIs shift every quarter; maintenance and tuning are part of every engagement, so your agents keep working without you thinking about them.",
  },
];
