import nodemailer from "nodemailer";

import { CONTACT_EMAIL } from "@/lib/constants/site";

let transporter;

/**
 * Lazily built and reused across requests (Fluid Compute keeps the module
 * warm), so we're not opening a fresh SMTP connection on every submission.
 */
const getTransporter = () => {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter;
};

/** "key: value" lines, skipping empty ones — the plain-text body of the notification email. */
const formatBody = (values) =>
  Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");

/**
 * Sends the submitted values straight to CONTACT_EMAIL over SMTP — no
 * third-party form service in the middle.
 *
 * Requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD in `.env`; throws
 * if SMTP isn't configured or the send fails, same as a forwarding failure
 * used to, so the existing mailto fallback in the UI still kicks in.
 *
 * @param {object} values
 * @param {string} subject
 */
export async function sendEmail(values, subject) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP is not configured");
  }

  await getTransporter().sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: CONTACT_EMAIL,
    replyTo: values.email || undefined,
    subject,
    text: formatBody(values),
  });
}
