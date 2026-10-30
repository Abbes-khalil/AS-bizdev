/**
 * LinkedIn has no bold, so posts fake it with Unicode "mathematical bold"
 * letters (U+1D400–U+1D7FF). Google indexes them as different characters
 * than the plain words, and screen readers spell them out one by one. This
 * maps each of them back to its ordinary letter or digit (NFKC does exactly
 * that for this block) and recomposes accents written as combining marks,
 * so "𝐫𝐞́𝐬𝐞𝐚𝐮" becomes "réseau". Everything else is left untouched.
 * @param {string} text
 * @returns {string}
 */
export const plainLetters = (text) => {
  if (typeof text !== "string" || !/[\u{1D400}-\u{1D7FF}]/u.test(text)) return text;
  return text
    .replace(/[\u{1D400}-\u{1D7FF}]/gu, (char) => char.normalize("NFKC"))
    .normalize("NFC");
};
