import { handleFormSubmission } from "@/lib/forms/handleFormSubmission";

export async function POST(request) {
  return handleFormSubmission(request, { formType: "partner" });
}
