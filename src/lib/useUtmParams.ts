"use client";

import { useEffect, useState } from "react";

/**
 * Reads UTM + segment params from the URL on the client so they can be
 * forwarded to Typeform hidden fields for cold-email attribution.
 * Avoids useSearchParams to keep pages statically prerenderable.
 */
export function useUtmParams() {
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const picked: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "segment"]) {
      const value = sp.get(key);
      if (value) picked[key] = value;
    }
    setParams(picked);
  }, []);

  return params;
}
