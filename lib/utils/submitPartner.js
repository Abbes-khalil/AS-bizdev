import { CONTACT_EMAIL } from "@/lib/constants/site";
import postToEndpoint from "./postToEndpoint";

/**
 * Partner registrations post to their own endpoint when one is configured, so
 * they can be routed to a different inbox — or, in phase B, to the partner
 * database — without touching the contact form.
 *
 *   NEXT_PUBLIC_PARTNER_ENDPOINT=https://formspree.io/f/xxxxxxx
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_PARTNER_ENDPOINT ?? process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

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
  const name = `${payload.firstName || ""} ${payload.lastName || ""}`.trim();
  return postToEndpoint(ENDPOINT, payload, `Référencement partenaire — ${name}`);
}
