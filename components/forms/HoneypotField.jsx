/**
 * Hidden from users and screen readers, skipped by keyboard. Bots fill every
 * field, so a value here marks the submission as spam. Named `_honey` —
 * FormSubmit's own honeypot convention: it silently drops any submission
 * where this field isn't empty, no backend of ours involved.
 */
const HoneypotField = () => (
  <div className="absolute start-[-9999px]" aria-hidden="true">
    <label>
      Website
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export default HoneypotField;
