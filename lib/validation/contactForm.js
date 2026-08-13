import { EMAIL_PATTERN } from "@/lib/constants/validation";

/** Reads the contact form's plain field values off a real <form> element. */
export const readContactValues = (form) => ({
  name: form.name.value.trim(),
  prenom: form.prenom.value.trim(),
  email: form.email.value.trim(),
  message: form.message.value.trim(),
});

/**
 * Pure validation, decoupled from the DOM so it's testable with plain
 * objects. `t` is the `contact` dictionary's `errors` copy (`t.errors.*`).
 *
 * @param {{ name: string, prenom: string, email: string, message: string }} values
 * @param {Record<string, string>} errors - `t.errors` from the contact dictionary
 * @returns {Record<string, string>} field name -> error message, empty when valid
 */
export const validateContactForm = (values, errors) => {
  const next = {};
  const { name, prenom, email, message } = values;

  if (!name) next.name = errors.nameRequired;
  else if (name.length < 2) next.name = errors.nameShort;

  // Prénom is optional on the origin site — only validated when filled in.
  if (prenom && prenom.length < 2) next.prenom = errors.firstNameShort;

  if (!email) next.email = errors.emailRequired;
  else if (!EMAIL_PATTERN.test(email)) next.email = errors.emailInvalid;

  if (!message) next.message = errors.messageRequired;
  else if (message.length < 10) next.message = errors.messageShort;

  return next;
};
