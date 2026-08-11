/**
 * Hidden from users and screen readers, skipped by keyboard. Bots fill every
 * field, so a value here marks the submission as spam. Named `_gotcha` —
 * Formspree discards such submissions natively.
 */
const HoneypotField = () => (
  <div className="absolute left-[-9999px]" aria-hidden="true">
    <label>
      Website
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export default HoneypotField;
