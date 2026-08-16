import { handleFormSubmission } from "@/lib/forms/handleFormSubmission";

const ENDPOINT =
  process.env.NEXT_PUBLIC_PARTNER_ENDPOINT ?? process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function POST(request) {
  return handleFormSubmission(request, {
    endpoint: ENDPOINT,
    subject: (values) =>
      `Référencement partenaire — ${`${values.firstName || ""} ${values.lastName || ""}`.trim()}`,
  });
}
