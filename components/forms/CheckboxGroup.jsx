import { FieldError } from "./Field";

/**
 * Multiple-choice control rendered as a fieldset, so assistive technology
 * announces the question once and the options as its answers.
 *
 * Every box shares the field name and carries an option id as its value: the
 * browser submits them as a list, which is exactly what the partner database
 * needs to filter on later.
 */
const CheckboxGroup = ({
  name,
  label,
  options,
  error,
  onBlur,
  requiredAria,
  required = true,
  columns = 2,
}) => (
  <fieldset
    aria-invalid={Boolean(error)}
    aria-describedby={error ? `err-${name}` : undefined}
  >
    <legend className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
      {label}
      {required && (
        <>
          {" "}
          <span className="text-orange" aria-label={requiredAria}>
            *
          </span>
        </>
      )}
    </legend>

    <div
      className={`mt-[0.875rem] grid gap-[0.625rem] ${
        columns === 2 ? "sm:grid-cols-2" : ""
      }`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-start gap-[0.75rem] rounded-btn border border-gray-200 bg-white p-[0.875rem] text-[0.9375rem] leading-[1.5] text-gray-700 transition-colors duration-200 hover:border-navy focus-within:border-navy focus-within:ring-4 focus-within:ring-navy/15"
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            onBlur={onBlur}
            className="mt-[0.15rem] h-[1.1rem] w-[1.1rem] shrink-0 cursor-pointer accent-orange focus-visible:outline-none"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>

    <div className="mt-2">
      <FieldError id={`err-${name}`} message={error} />
    </div>
  </fieldset>
);

export default CheckboxGroup;
