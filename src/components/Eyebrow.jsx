/**
 * Small orange label above a heading, optionally preceded by a short bar.
 * Used by both PageHero and SectionHeading.
 */
const Eyebrow = ({ children, bar = true }) => (
  <div className="inline-flex items-center gap-3">
    {bar && (
      <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
    )}
    <p className="eyebrow text-orange">{children}</p>
  </div>
);

export default Eyebrow;
