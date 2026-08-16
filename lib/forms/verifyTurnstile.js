const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Server-side check of a Cloudflare Turnstile token before a submission is
 * accepted. Fails open (skips verification) when `TURNSTILE_SECRET_KEY`
 * isn't configured, so local/staging environments without the key don't
 * lose the contact and partner forms.
 *
 * @param {string | undefined} token - value of the `cf-turnstile-response` field
 * @param {string | undefined} remoteIp
 * @returns {Promise<boolean>}
 */
export async function verifyTurnstileToken(token, remoteIp) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch(VERIFY_URL, { method: "POST", body });
  if (!response.ok) return false;

  const data = await response.json();
  return data.success === true;
}
