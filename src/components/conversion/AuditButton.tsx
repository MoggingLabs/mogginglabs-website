"use client";

import { PopupButton } from "@typeform/embed-react";
import { TYPEFORM_ID } from "@/lib/constants";
import { buttonClasses } from "@/components/ui/Button";
import { trackAuditCta } from "@/lib/analytics";
import { useUtmParams } from "@/lib/useUtmParams";

const typeformReady = TYPEFORM_ID !== "TODO_FOUNDER";

type Props = {
  location: Parameters<typeof trackAuditCta>[0];
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

/**
 * Primary conversion control. Opens the Typeform popup when a form ID is
 * configured; until then it scrolls to the inline audit section so the
 * site is fully navigable pre-launch.
 */
export function AuditButton({ location, variant = "primary", size = "md", className, children }: Props) {
  const hidden = useUtmParams();
  const classes = buttonClasses({ variant, size, className });

  if (!typeformReady) {
    return (
      <a
        href="#audit"
        className={classes}
        onClick={() => trackAuditCta(location)}
      >
        {children}
      </a>
    );
  }

  return (
    <PopupButton
      id={TYPEFORM_ID}
      hidden={hidden}
      className={classes}
      onReady={() => trackAuditCta(location)}
    >
      {children}
    </PopupButton>
  );
}
