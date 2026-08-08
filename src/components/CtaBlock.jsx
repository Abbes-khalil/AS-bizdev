import ArrowIcon from "./ArrowIcon";
import Eyebrow from "./Eyebrow";
import RevealOnScroll from "./RevealOnScroll";
import RouteLink from "./RouteLink";

/**
 * Centred closing call-to-action, shared by every content page.
 * Targets a route key so the link follows the visitor's language.
 */
const CtaBlock = ({
  eyebrow,
  heading,
  label,
  routeKey = "contact",
  params,
  className = "",
}) => (
  <RevealOnScroll
    variant="up"
    className={`flex flex-col items-center gap-4 text-center ${className}`}
  >
    <Eyebrow>{eyebrow}</Eyebrow>

    <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
      {heading}
    </h2>

    <RouteLink routeKey={routeKey} params={params} className="btn-primary mt-2">
      {label}
      <ArrowIcon />
    </RouteLink>
  </RevealOnScroll>
);

export default CtaBlock;
