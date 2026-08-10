/**
 * Outbound link with a small "opens elsewhere" icon — used for the LinkedIn
 * source attribution on articles (§24: link to the original post).
 */
const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 font-display text-[0.9rem] font-semibold text-navy link-underline ${className}`}
  >
    {children}
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 1H13V10M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
);

export default ExternalLink;
