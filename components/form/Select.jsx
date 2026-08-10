import FieldLabel from "./FieldLabel";
import { FieldError, inputClasses } from "./Field";

/**
 * Single-choice control. `options` are `{ value, label }`: the value is the
 * stable id stored in the payload, never the translated label.
 */
const Select = ({
  name,
  label,
  options,
  placeholder,
  error,
  onBlur,
  requiredAria,
  optionalLabel,
  required = true,
}) => (
  <label className="grid gap-2">
    <FieldLabel
      label={label}
      required={required}
      requiredAria={requiredAria}
      optionalLabel={optionalLabel}
    />
    <select
      required={required}
      name={name}
      defaultValue=""
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `err-${name}` : undefined}
      onBlur={onBlur}
      className={`${inputClasses(Boolean(error))} cursor-pointer appearance-none bg-[length:0.7rem] bg-[right_1.25rem_center] bg-no-repeat pr-10 [background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2010%206%27%3E%3Cpath%20d%3D%27M1%201l4%204%204-4%27%20stroke%3D%27%2364748B%27%20stroke-width%3D%271.5%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E")]`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <FieldError id={`err-${name}`} message={error} />
  </label>
);

export default Select;
