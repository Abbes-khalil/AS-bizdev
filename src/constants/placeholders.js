/**
 * Explicit placeholders required by the editorial brief (§16): when a fact has
 * not been confirmed by AS Biz Dev, the site says so rather than inventing it.
 * Never replace one of these with a plausible-sounding guess — replace it with
 * the validated fact, or leave it visible.
 */
export const TO_VALIDATE = {
  fr: "[INFORMATION À VALIDER PAR AS BIZ DEV]",
  en: "[INFORMATION TO BE CONFIRMED BY AS BIZ DEV]",
};

export const COUNTRY_TO_VALIDATE = {
  fr: "[PAYS À VALIDER]",
  en: "[COUNTRY TO BE CONFIRMED]",
};
