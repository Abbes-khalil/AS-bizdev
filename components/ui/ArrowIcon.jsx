/**
 * The diagonal arrow used on every link and button across the site.
 */
const ArrowIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className={`rtl:-scale-x-100 ${className}`}
  >
    <path
      d="M1 7H13M13 7L7 1M13 7L7 13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
