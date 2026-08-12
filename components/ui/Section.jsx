/**
 * Page section wrapper — consistent vertical rhythm and background tones so
 * pages alternate without every page re-inventing its own spacing.
 */
const TONES = {
  white: "bg-white",
  alt: "bg-surface-alt",
  navy: "bg-navy text-white",
};

const Section = ({
  tone = "white",
  className = "",
  containerClassName = "",
  id,
  children,
}) => (
  <section
    id={id}
    className={`${TONES[tone]} py-12 lg:py-16 ${className}`}
  >
    <div className={`container-x ${containerClassName}`}>{children}</div>
  </section>
);

export default Section;
