import FieldLabel from "./FieldLabel";
import { FieldError } from "./Field";

const TextArea = ({
  name,
  label,
  error,
  onBlur,
  requiredAria,
  optionalLabel,
  placeholder,
  required = true,
  rows = 6,
}) => (
  <label className="grid gap-2">
    <FieldLabel
      label={label}
      required={required}
      requiredAria={requiredAria}
      optionalLabel={optionalLabel}
    />
    <textarea
      required={required}
      name={name}
      rows={rows}
      placeholder={placeholder}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `err-${name}` : undefined}
      onBlur={onBlur}
      className={`rounded-btn border bg-white p-4 text-[1rem] text-navy outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
        error
          ? "border-orange focus:border-orange focus:ring-orange/20"
          : "border-gray-200 focus:border-navy focus:ring-navy/15"
      }`}
    />
    <FieldError id={`err-${name}`} message={error} />
  </label>
);

export default TextArea;
