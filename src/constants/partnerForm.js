/**
 * Partner registration schema (§13).
 *
 * The form is a *database entry form*, not an email: every answer is stored
 * under a stable, language-independent id, and every closed question stores
 * option ids rather than the label the visitor happened to read. That is what
 * makes "Sénégal + énergie + accès grands comptes industriels" filterable
 * later (§14) and queryable in natural language (§15) without re-collecting
 * anything.
 *
 * Option lists only contain values the brief itself spells out. Sectors are
 * deliberately free text: the targeted industrial sectors are still to be
 * validated by AS Biz Dev (§22.2), so inventing a taxonomy here is not an
 * option.
 */

export const PROFILE_TYPES = [
  "independentBizDev",
  "salesAgent",
  "salesConsultant",
  "distributor",
  "integrator",
  "sectorExpert",
  "salesRepresentationCompany",
  "introductionCapability",
];

export const NETWORK_TYPES = [
  "industrials",
  "keyAccounts",
  "smes",
  "distributors",
  "integrators",
  "epc",
  "administrations",
  "institutions",
  "other",
];

export const CAPABILITIES = [
  "prospectIdentification",
  "prospecting",
  "appointmentSetting",
  "commercialRepresentation",
  "distributorManagement",
  "accountDevelopment",
  "distributorSearch",
  "opportunityFollowUp",
  "marketWatch",
  "negotiationSupport",
];

export const EXPERIENCE_RANGES = ["lt5", "5to10", "10to20", "gt20"];

/**
 * Sections rendered in order. `type` drives which control is used:
 * text | email | tel | url | textarea | select | checkboxGroup.
 */
export const PARTNER_FORM_SECTIONS = [
  {
    id: "identity",
    fields: [
      { id: "firstName", type: "text", required: true, autoComplete: "given-name" },
      { id: "lastName", type: "text", required: true, autoComplete: "family-name" },
      { id: "company", type: "text", autoComplete: "organization" },
      { id: "role", type: "text", autoComplete: "organization-title" },
      { id: "email", type: "email", required: true, autoComplete: "email" },
      { id: "phone", type: "tel", autoComplete: "tel" },
      { id: "linkedin", type: "url" },
      { id: "website", type: "url" },
    ],
  },
  {
    id: "location",
    fields: [
      { id: "baseCountry", type: "text", required: true, autoComplete: "country-name" },
      { id: "city", type: "text", autoComplete: "address-level2" },
      { id: "coveredCountries", type: "textarea", required: true, rows: 3 },
    ],
  },
  {
    id: "expertise",
    fields: [
      { id: "profileType", type: "checkboxGroup", options: PROFILE_TYPES, required: true },
      { id: "sectors", type: "textarea", required: true, rows: 3 },
      { id: "experience", type: "select", options: EXPERIENCE_RANGES, required: true },
      { id: "languages", type: "text", required: true },
    ],
  },
  {
    id: "network",
    fields: [
      { id: "networkTypes", type: "checkboxGroup", options: NETWORK_TYPES, required: true },
    ],
  },
  {
    id: "capabilities",
    fields: [
      { id: "capabilities", type: "checkboxGroup", options: CAPABILITIES, required: true },
    ],
  },
  {
    id: "presentation",
    fields: [
      { id: "presentation", type: "textarea", required: true, rows: 7 },
      { id: "references", type: "textarea", rows: 3 },
    ],
  },
];

export const PARTNER_FIELDS = PARTNER_FORM_SECTIONS.flatMap(
  (section) => section.fields,
);

/** Status values the back-office will use in phase B (§14). Stored at intake. */
export const INITIAL_PARTNER_STATUS = "new";
