import { track } from "@vercel/analytics";

type CtaLocation =
  | "header"
  | "hero"
  | "sticky"
  | "audit-section"
  | "process"
  | "faq"
  | "footer"
  | "lander";

export function trackAuditCta(location: CtaLocation) {
  track("audit_cta_click", { location });
}
