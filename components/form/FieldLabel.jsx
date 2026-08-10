/**
 * Label text shared by every control: same typography, same required marker,
 * same optional hint — so a long form reads as one form.
 */
const FieldLabel = ({ label, required, requiredAria, optionalLabel, as = "span" }) => {
  const Tag = as;

  return (
    <Tag className="font-display text-[0.8125rem] font-medium tracking-wide text-gray-700">
      {label}
      {required ? (
        <>
          {" "}
          <span className="text-orange" aria-label={requiredAria}>
            *
          </span>
        </>
      ) : (
        optionalLabel && (
          <span className="ml-2 text-[0.75rem] font-normal text-gray-400">
            ({optionalLabel})
          </span>
        )
      )}
    </Tag>
  );
};

export default FieldLabel;
