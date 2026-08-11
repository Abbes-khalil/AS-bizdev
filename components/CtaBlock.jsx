import Link from "next/link";

import ArrowIcon from "@/components/ArrowIcon";
import Eyebrow from "@/components/Eyebrow";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ROUTES } from "@/lib/routes";

/**
 * Centred closing call-to-action, shared by every content page.
 * Every page uses this to point at Contact — that's the only place it's
 * ever pointed, so it just needs to know which language it's in.
 */
const CtaBlock = ({ eyebrow, heading, label, lang, className = "" }) => (
  <RevealOnScroll
    variant="up"
    className={`flex flex-col items-center gap-4 text-center ${className}`}
  >
    <Eyebrow>{eyebrow}</Eyebrow>

    <h2 className="font-display display-md font-semibold tracking-tight text-navy text-balance">
      {heading}
    </h2>

    <Link href={ROUTES.contact[lang]} className="btn-primary mt-2">
      {label}
      <ArrowIcon />
    </Link>
  </RevealOnScroll>
);

export default CtaBlock;
