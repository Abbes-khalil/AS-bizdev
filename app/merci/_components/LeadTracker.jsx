"use client";

import { useEffect } from "react";

import { consumeFormSubmitted, trackLeadWhenReady } from "@/lib/analytics/formLead";

/** Sends one GA4 `generate_lead` per confirmed submission (see lib/analytics/formLead.js). Renders nothing. */
export default function LeadTracker({ lang }) {
  useEffect(() => {
    const formType = consumeFormSubmitted();
    if (!formType) return undefined;
    return trackLeadWhenReady(formType, lang);
  }, [lang]);

  return null;
}
