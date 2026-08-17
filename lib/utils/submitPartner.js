import { CONTACT_EMAIL } from "@/lib/constants/site";

/**
 * Partner registrations post to our own `/api/partner` Route Handler
 * (honeypot + Turnstile check, then the FormSubmit relay — same mechanism
 * as the contact form, kept in its own route so it can be routed elsewhere
 * later, e.g. the partner database in phase B, without touching the
 * contact form).
 */

/** Human-readable fallback body, used only when the POST fails. */
export const buildPartnerMailto = (payload, subject) => {
  const body = [
    `${payload.firstName} ${payload.lastName}`.trim(),
    payload.company,
    payload.email,
    payload.phone,
    "",
    `${payload.baseCountry} — ${payload.coveredCountries?.join(", ") ?? ""}`,
    payload.sectors,
    "",
    payload.presentation,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitPartner(payload) {
  const response = await fetch("/api/partner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Partner submission failed: ${response.status}`);
  }

  return response;
}
