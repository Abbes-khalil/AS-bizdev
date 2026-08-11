import Link from "next/link";

import ArrowIcon from "@/components/ui/ArrowIcon";
import BulletList from "@/components/ui/BulletList";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/lib/routes";

/**
 * One of the two offers, as shown on the home page and the solutions hub.
 * Bullets are optional: the home page states the promise, the hub details it.
 */
const OfferCard = ({ offer, index = 0, lang, moreLabel }) => (
  <RevealOnScroll
    as="article"
    variant="up"
    delay={0.05}
    index={index}
    className="group flex h-full flex-col rounded-card border border-gray-200 bg-white p-[2rem] transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:shadow-lift lg:p-[2.5rem]"
  >
    {offer.eyebrow && <p className="eyebrow text-orange">{offer.eyebrow}</p>}

    <h3 className="mt-[0.75rem] font-display text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy lg:text-[1.75rem]">
      {offer.title ?? offer.label}
    </h3>

    <p className="mt-[1rem] text-[1rem] leading-[1.7] text-gray-700">
      {offer.body}
    </p>

    {offer.bullets && (
      <BulletList items={offer.bullets} className="mt-[1.5rem]" />
    )}

    <Link
      href={ROUTES[offer.routeKey][lang]}
      className="btn-ghost mt-[2rem] self-start"
    >
      {moreLabel}
      <ArrowIcon />
    </Link>
  </RevealOnScroll>
);

export default OfferCard;
