/**
 * Contact form relay — receives the form POST and emails it to the team.
 *
 * Uses the Web-standard Request/Response signature, so it runs unchanged on
 * Vercel (Edge Functions), Netlify Functions v2 and Cloudflare Workers.
 * No dependencies: delivery goes through Resend's REST API via fetch.
 *
 * Required environment variable on the host:
 *   RESEND_API_KEY   — from resend.com (free tier covers this volume)
 * Optional:
 *   CONTACT_TO       — recipient (defaults to contact@asbizdev.com)
 *   CONTACT_FROM     — verified sender domain (defaults to onboarding@resend.dev)
 */

const TO = process.env.CONTACT_TO || "contact@asbizdev.com";
const FROM = process.env.CONTACT_FROM || "AS Biz Dev <onboarding@resend.dev>";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value = "") =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );

export default async function handler(request) {
  if (request.method !== "POST") return json(405, { error: "Method not allowed" });

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const name = (payload.name || "").trim();
  const prenom = (payload.prenom || "").trim();
  const email = (payload.email || "").trim();
  const message = (payload.message || "").trim();

  // Honeypot: real users never see this field, bots fill it in. Report success
  // so the bot doesn't retry, but send nothing.
  if (payload.website) return json(200, { ok: true });

  if (!name || !email || !message) return json(400, { error: "Missing required fields" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { error: "Invalid email" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return json(500, { error: "Mail service not configured" });

  const fullName = `${prenom} ${name}`.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Nouveau contact — ${fullName}`,
      html: `
        <h2>Nouvelle demande depuis asbizdev.com</h2>
        <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return json(502, { error: "Delivery failed" });
  }

  return json(200, { ok: true });
}
