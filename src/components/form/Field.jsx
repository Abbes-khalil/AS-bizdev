import FieldLabel from "./FieldLabel";

export const inputClasses = (hasError) =>
  `min-h-14 rounded-btn border bg-white px-4 text-[1rem] text-navy outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
    hasError
      ? "border-orange focus:border-orange focus:ring-orange/20"
      : "border-gray-200 focus:border-navy focus:ring-navy/15"
  }`;

export const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} className="text-xs text-orange">
      {message}
    </p>
  ) : null;

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
  optionalLabel,
  placeholder,
  required = true,
  type = "text",
  autoComplete,
  inputMode,
}) => (
  <label className="grid gap-2">
    <FieldLabel
      label={label}
      required={required}
      requiredAria={requiredAria}
      optionalLabel={optionalLabel}
    />
    <input
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `err-${name}` : undefined}
      onBlur={onBlur}
      className={inputClasses(Boolean(error))}
    />
    <FieldError id={`err-${name}`} message={error} />
  </label>
);

export default Field;
