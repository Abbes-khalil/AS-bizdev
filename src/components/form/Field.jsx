export const inputClasses = (hasError) =>
  `min-h-14 rounded-btn border bg-white px-4 text-[1rem] text-navy outline-none transition-all focus:bg-white focus:ring-4 ${
    hasError
      ? "border-orange focus:border-orange focus:ring-orange/20"
      : "border-gray-200 focus:border-navy focus:ring-navy/15"
  }`;

/**
 * Labelled text input with inline error message.
 *
 * Keep this at module scope (never declare it inside a component) — an inline
 * component remounts on every render and would clear the field mid-typing.
 */
const Field = ({
  name,
  label,
  error,
  onBlur,
  requiredAria,
  required = true,
  type = "text",
  autoComplete,
  inputMode,
}) => (
  <label className="grid gap-2">
    <span className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
      {label}
      {required && (
        <>
          {" "}
          <span className="text-orange" aria-label={requiredAria}>
            *
          </span>
        </>
      )}
    </span>
    <input
      required={required}
      type={type}
      name={name}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `err-${name}` : undefined}
      onBlur={onBlur}
      className={inputClasses(Boolean(error))}
    />
    {error && (
      <p id={`err-${name}`} className="text-xs text-orange">
        {error}
      </p>
    )}
  </label>
);

export default Field;
