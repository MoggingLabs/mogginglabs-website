import type { MockUiKind } from "@/content/agents";
import { SlackThread } from "./SlackThread";
import { PipelineBoard } from "./PipelineBoard";
import { CreativeQueue } from "./CreativeQueue";
import { ReportEmail } from "./ReportEmail";
import { OnboardingChecklist } from "./OnboardingChecklist";
import { DigestCard } from "./DigestCard";

export const mockUiMap: Record<MockUiKind, React.ComponentType> = {
  "slack-thread": SlackThread,
  "pipeline-board": PipelineBoard,
  "creative-queue": CreativeQueue,
  "report-email": ReportEmail,
  "onboarding-checklist": OnboardingChecklist,
  "digest-card": DigestCard,
};

export function MockUi({ kind }: { kind: MockUiKind }) {
  const Component = mockUiMap[kind];
  return <Component />;
}
