/**
 * Hidden from users and screen readers, skipped by keyboard. Bots fill every
 * field, so a value here marks the submission as spam — checked server-side
 * in `lib/forms/handleFormSubmission.js` before Turnstile or the FormSubmit
 * relay ever run.
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
