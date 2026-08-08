import { CONTACT_EMAIL } from "../constants/site";
import postToEndpoint from "./postToEndpoint";

/**
 * Contact form submission — a plain POST to a form service (Formspree,
 * Web3Forms, …). No backend of our own to run or maintain.
 *
 * Configure the destination in `.env`:
 *   VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

/**
 * Fallback when the endpoint is missing or unreachable — opens the visitor's
 * mail client with what they already typed, so a lead is never lost.
 */
export const buildMailtoHref = ({ name, prenom, email, message }, subject) => {
  const body = [`${prenom || ""} ${name || ""}`.trim(), email, "", message]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitContact(payload) {
  const name = `${payload.prenom || ""} ${payload.name || ""}`.trim();
  return postToEndpoint(ENDPOINT, payload, `Nouveau contact — ${name}`);
}
