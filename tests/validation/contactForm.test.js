import { describe, expect, it } from "vitest";

import { validateContactForm } from "@/lib/validation/contactForm";

const errors = {
  nameRequired: "name required",
  nameShort: "name short",
  firstNameShort: "first name short",
  emailRequired: "email required",
  emailInvalid: "email invalid",
  messageRequired: "message required",
  messageShort: "message short",
};

const validValues = {
  name: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@example.com",
  message: "Bonjour, je cherche un distributeur au Sénégal.",
};

describe("validateContactForm", () => {
  it("returns no errors for fully valid input", () => {
    expect(validateContactForm(validValues, errors)).toEqual({});
  });

  it("requires a name", () => {
    const result = validateContactForm({ ...validValues, name: "" }, errors);
    expect(result.name).toBe(errors.nameRequired);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = validateContactForm({ ...validValues, name: "A" }, errors);
    expect(result.name).toBe(errors.nameShort);
  });

  it("does not require prénom (optional field)", () => {
    const result = validateContactForm({ ...validValues, prenom: "" }, errors);
    expect(result.prenom).toBeUndefined();
  });

  it("validates prénom only when filled in", () => {
    const result = validateContactForm({ ...validValues, prenom: "A" }, errors);
    expect(result.prenom).toBe(errors.firstNameShort);
  });

  it("requires an email", () => {
    const result = validateContactForm({ ...validValues, email: "" }, errors);
    expect(result.email).toBe(errors.emailRequired);
  });

  it.each([
    "not-an-email",
    "missing-at.com",
    "missing-domain@",
    "spaces in@email.com",
  ])("rejects malformed email %s", (email) => {
    const result = validateContactForm({ ...validValues, email }, errors);
    expect(result.email).toBe(errors.emailInvalid);
  });

  it.each([
    "jean@example.com",
    "j.dupont+contact@example.co.uk",
  ])("accepts well-formed email %s", (email) => {
    const result = validateContactForm({ ...validValues, email }, errors);
    expect(result.email).toBeUndefined();
  });

  it("requires a message", () => {
    const result = validateContactForm({ ...validValues, message: "" }, errors);
    expect(result.message).toBe(errors.messageRequired);
  });

  it("rejects a message shorter than 10 characters", () => {
    const result = validateContactForm({ ...validValues, message: "too short" }, errors);
    expect(result.message).toBe(errors.messageShort);
  });
});
