import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import RevealOnScroll from "./RevealOnScroll";

/**
 * Centred closing call-to-action, shared by the long-form content pages and
 * the partners page.
 */
const CtaBlock = ({ eyebrow, heading, label, href, className = "" }) => (
  <RevealOnScroll
    variant="up"
    className={`flex flex-col items-center gap-4 text-center ${className}`}
  >
    <Eyebrow>{eyebrow}</Eyebrow>

    <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
      {heading}
    </h2>

    <a href={href} className="btn-primary mt-2">
      {label}
      <ArrowIcon />
    </a>
  </RevealOnScroll>
);

export default CtaBlock;
