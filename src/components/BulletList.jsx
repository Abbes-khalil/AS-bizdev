const MARKERS = {
  check: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cross: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  dash: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
};

/**
 * Plain list of factual statements — the interventions, the covered functions,
 * the "what we do / what we don't" columns.
 *
 * @param marker "check" | "cross" | "dash"
 * @param columns 1 or 2
 */
const BulletList = ({
  items,
  marker = "check",
  columns = 1,
  tone = "light",
  className = "",
}) => (
  <ul
    role="list"
    className={`grid gap-[0.875rem] ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`}
  >
    {items.map((item) => (
      <li key={item} className="flex items-start gap-[0.75rem]">
        <span
          className={`mt-[0.2rem] shrink-0 ${
            marker === "cross" ? "text-gray-400" : "text-orange"
          }`}
        >
          {MARKERS[marker]}
        </span>
        <span
          className={`text-[0.9375rem] leading-[1.6] ${
            tone === "dark" ? "text-white/80" : "text-gray-700"
          }`}
        >
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export default BulletList;
