import { NextResponse } from "next/server";

import { sendFormEmail } from "@/lib/email/sendFormEmail";
import { verifyTurnstileToken } from "@/lib/forms/verifyTurnstile";

/**
 * Shared POST handling for the contact and partner Route Handlers: honeypot
 * check, then Turnstile verification, then the two Resend emails. A filled
 * honeypot returns the same fake-success shape as a real submission, so a
 * bot gets no signal it was caught. A notification failure is logged and
 * reported back as a genuine error — never masked as a success.
 *
 * @param {Request} request
 * @param {{ formType: "contact" | "partner" }} options
 */
export async function handleFormSubmission(request, { formType }) {
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
    await sendFormEmail(formType, values);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`Resend submission failed (${formType}):`, error);
    return NextResponse.json({ ok: false, error: "email" }, { status: 502 });
  }
}
