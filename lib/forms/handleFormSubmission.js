import { NextResponse } from "next/server";

import postToEndpoint from "@/lib/utils/postToEndpoint";
import { verifyTurnstileToken } from "@/lib/forms/verifyTurnstile";

/**
 * Shared POST handling for the contact and partner Route Handlers: honeypot
 * check, then Turnstile verification, then forward to the configured form
 * service. A filled honeypot returns the same fake-success shape as a real
 * submission, so a bot gets no signal it was caught.
 *
 * @param {Request} request
 * @param {{ endpoint: string | undefined, subject: (values: object) => string }} options
 */
export async function handleFormSubmission(request, { endpoint, subject }) {
  const payload = await request.json();

  if (payload._gotcha) {
    return NextResponse.json({ ok: true });
  }

  const { "cf-turnstile-response": turnstileToken, _gotcha, ...values } = payload;
  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const verified = await verifyTurnstileToken(turnstileToken, remoteIp);
  if (!verified) {
    return NextResponse.json({ ok: false, error: "turnstile" }, { status: 400 });
  }

  try {
    await postToEndpoint(endpoint, values, subject(values));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "endpoint" }, { status: 502 });
  }
}
