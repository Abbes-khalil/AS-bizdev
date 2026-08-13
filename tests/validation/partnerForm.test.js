import { describe, expect, it } from "vitest";

import { PARTNER_FIELDS } from "@/lib/constants/partnerForm";
import { validatePartnerForm } from "@/lib/validation/partnerForm";

const errors = {
  chooseOne: "choose one",
  required: "required",
  emailInvalid: "email invalid",
  urlInvalid: "url invalid",
  tooShort: "too short",
  consent: "consent required",
};

/** One valid value per field, built from the schema so it stays in sync with it. */
const validValues = Object.fromEntries(
  PARTNER_FIELDS.map((field) => {
    if (field.type === "checkboxGroup") return [field.id, [field.options[0]]];
    if (field.type === "email") return [field.id, "contact@example.com"];
    if (field.type === "url") return [field.id, "https://example.com"];
    if (field.id === "presentation") {
      return [field.id, "A".repeat(80)]; // MIN_PRESENTATION
    }
    return [field.id, "some value"];
  }),
);
validValues.consent = true;

describe("validatePartnerForm", () => {
  it("returns no errors for fully valid input", () => {
    expect(validatePartnerForm(validValues, errors)).toEqual({});
  });

  it("requires the consent checkbox", () => {
    const result = validatePartnerForm({ ...validValues, consent: false }, errors);
    expect(result.consent).toBe(errors.consent);
  });

  it("requires a presentation of at least 80 characters", () => {
    const result = validatePartnerForm({ ...validValues, presentation: "too short" }, errors);
    expect(result.presentation).toBe(errors.tooShort);
  });

  it("rejects a malformed email", () => {
    const result = validatePartnerForm({ ...validValues, email: "not-an-email" }, errors);
    expect(result.email).toBe(errors.emailInvalid);
  });

  it("rejects a malformed url", () => {
    const result = validatePartnerForm({ ...validValues, linkedin: "not-a-url" }, errors);
    expect(result.linkedin).toBe(errors.urlInvalid);
  });

  it("does not require optional url fields", () => {
    const result = validatePartnerForm({ ...validValues, linkedin: "" }, errors);
    expect(result.linkedin).toBeUndefined();
  });

  it("requires at least one option in a required checkbox group", () => {
    const result = validatePartnerForm({ ...validValues, networkTypes: [] }, errors);
    expect(result.networkTypes).toBe(errors.chooseOne);
  });

  // Every required PARTNER_FIELDS entry, exercised individually — 12 fields
  // plus the separately-handled consent checkbox is the 13 required items
  // the README documents for this form.
  it.each(PARTNER_FIELDS.filter((f) => f.required).map((f) => f.id))(
    "requires %s",
    (id) => {
      const emptyValue = PARTNER_FIELDS.find((f) => f.id === id).type === "checkboxGroup" ? [] : "";
      const result = validatePartnerForm({ ...validValues, [id]: emptyValue }, errors);
      expect(result[id]).toBeTruthy();
    },
  );

  it("has exactly 12 required PARTNER_FIELDS (13 with consent)", () => {
    expect(PARTNER_FIELDS.filter((f) => f.required)).toHaveLength(12);
  });
});
