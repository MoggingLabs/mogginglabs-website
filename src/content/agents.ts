export type MockUiKind =
  | "slack-thread"
  | "pipeline-board"
  | "creative-queue"
  | "report-email"
  | "onboarding-checklist"
  | "digest-card";

export interface Agent {
  index: string;
  name: string;
  role: string;
  description: string;
  mockUi: MockUiKind;
  spec: { label: string; value: string }[];
  beforeAfter: { label: string; before: string; after: string; todo?: boolean };
}

export const agents: Agent[] = [
  {
    index: "A-01",
    name: "Dash",
    role: "Speed-to-lead responder",
    description:
      "Answers every inbound lead by SMS and email in under a minute, around the clock. Qualifies the lead, handles the first questions, and offers appointment times while interest is still high.",
    mockUi: "slack-thread",
    spec: [
      { label: "Stack", value: "GHL · Twilio · Meta Lead Ads" },
      { label: "Responds in", value: "< 60 seconds, 24/7" },
      { label: "Replaces", value: "0.5 FTE setter" },
      { label: "Installed in", value: "1–2 weeks" },
    ],
    beforeAfter: {
      label: "Median response time",
      before: "47 min",
      after: "38 s",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
  {
    index: "A-02",
    name: "Cadence",
    role: "Appointment-setter follow-up",
    description:
      "Works no-shows and cold leads through multi-day, multi-channel sequences inside your CRM. Never forgets a third touch, never sounds like a template, hands off the moment a human should step in.",
    mockUi: "pipeline-board",
    spec: [
      { label: "Stack", value: "GoHighLevel · SMS · Email" },
      { label: "Sequences", value: "Multi-day, multi-channel" },
      { label: "Replaces", value: "0.5–1 FTE setter" },
      { label: "Installed in", value: "1–2 weeks" },
    ],
    beforeAfter: {
      label: "Show rate",
      before: "22%",
      after: "41%",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
  {
    index: "A-03",
    name: "Foundry",
    role: "Ad creative pipeline",
    description:
      "Runs your creative production end to end: brief, generate, review, launch, audit. Learns from your winning angles and prepares fresh variants before fatigue shows up in the metrics.",
    mockUi: "creative-queue",
    spec: [
      { label: "Stack", value: "Meta Ads · image gen · review queue" },
      { label: "Output", value: "Briefs → variants → launch packs" },
      { label: "Replaces", value: "1 FTE creative coordinator" },
      { label: "Installed in", value: "2–3 weeks" },
    ],
    beforeAfter: {
      label: "Ad variants shipped",
      before: "6 / wk",
      after: "40 / wk",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
  {
    index: "A-04",
    name: "Brief",
    role: "Client reporting agent",
    description:
      "Writes and sends weekly performance summaries before the client asks. Pulls the numbers, explains the why in plain English, and flags what needs a decision.",
    mockUi: "report-email",
    spec: [
      { label: "Stack", value: "Meta · GA4 · GHL · email" },
      { label: "Cadence", value: "Weekly, before Monday 9am" },
      { label: "Replaces", value: "3 h per client per week" },
      { label: "Installed in", value: "1 week" },
    ],
    beforeAfter: {
      label: "Reporting time per client",
      before: "3 h / wk",
      after: "0",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
  {
    index: "A-05",
    name: "Anchor",
    role: "Client onboarding agent",
    description:
      "Starts the moment a deal closes. Intake form, asset collection, kickoff checklist, channel setup — nothing falls through between the signature and the launch.",
    mockUi: "onboarding-checklist",
    spec: [
      { label: "Stack", value: "CRM webhook · Drive · Slack" },
      { label: "Trigger", value: "Deal-won, instant" },
      { label: "Replaces", value: "Manual onboarding admin" },
      { label: "Installed in", value: "1–2 weeks" },
    ],
    beforeAfter: {
      label: "Onboarding time",
      before: "9 days",
      after: "2 days",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
  {
    index: "A-06",
    name: "Ledger",
    role: "Margin digest",
    description:
      "Summarizes P&L, ad spend, and cost-per-lead into a daily digest in the owner's inbox. No end-of-month surprises — you see margin drift the day it starts.",
    mockUi: "digest-card",
    spec: [
      { label: "Stack", value: "Stripe · ad accounts · sheets" },
      { label: "Cadence", value: "Daily, 7:00 am" },
      { label: "Replaces", value: "Month-end reporting scramble" },
      { label: "Installed in", value: "1 week" },
    ],
    beforeAfter: {
      label: "Margin visibility",
      before: "Monthly surprise",
      after: "Daily 7am digest",
      todo: true, // TODO_FOUNDER: real metric
    },
  },
];
