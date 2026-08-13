import { PARTNER_FIELDS } from "@/lib/constants/partnerForm";
import { EMAIL_PATTERN } from "@/lib/constants/validation";

const URL_PATTERN = /^https?:\/\/.+/i;
const MIN_PRESENTATION = 80;

/**
 * Pure validation, decoupled from the DOM so it's testable with plain
 * objects — driven entirely by `PARTNER_FIELDS` (lib/constants/partnerForm.js),
 * so a field added there is validated here automatically.
 *
 * @param {Record<string, string | string[] | boolean>} values - one entry per PARTNER_FIELDS id, plus `consent`
 * @param {{ chooseOne: string, required: string, emailInvalid: string, urlInvalid: string, tooShort: string, consent: string }} errors - `t.errors` from the partner dictionary
 * @returns {Record<string, string>} field id -> error message, empty when valid
 */
export const validatePartnerForm = (values, errors) => {
  const next = {};

  for (const field of PARTNER_FIELDS) {
    const value = values[field.id];

    if (field.type === "checkboxGroup") {
      if (field.required && value.length === 0) next[field.id] = errors.chooseOne;
      continue;
    }

    if (field.required && !value) {
      next[field.id] = errors.required;
      continue;
    }

    if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
      next[field.id] = errors.emailInvalid;
    }

    if (field.type === "url" && value && !URL_PATTERN.test(value)) {
      next[field.id] = errors.urlInvalid;
    }
  }

  if (
    values.presentation &&
    values.presentation.length < MIN_PRESENTATION &&
    !next.presentation
  ) {
    next.presentation = errors.tooShort;
  }

  if (!values.consent) next.consent = errors.consent;

  return next;
};
