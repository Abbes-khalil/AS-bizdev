import { handleFormSubmission } from "@/lib/forms/handleFormSubmission";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function POST(request) {
  return handleFormSubmission(request, {
    endpoint: ENDPOINT,
    subject: (values) =>
      `Nouveau contact — ${`${values.prenom || ""} ${values.name || ""}`.trim()}`,
  });
}
