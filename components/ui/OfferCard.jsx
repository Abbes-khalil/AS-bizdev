"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";

import ArrowIcon from "@/components/ui/ArrowIcon";
import BulletList from "@/components/ui/BulletList";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/lib/routes";

/**
 * One of the two offers, as shown on the home page and the solutions hub.
 * Bullets are optional: the home page states the promise, the hub details it.
 *
 * whileHover is always passed (never conditionally omitted) so its presence
 * — and the tabindex framer-motion adds alongside a gesture prop — never
 * differs between server and client; only the animated `y` value drops to 0
 * under prefers-reduced-motion, same rule RevealOnScroll follows elsewhere.
 */
const OfferCard = ({ offer, index = 0, lang, moreLabel, variant = "up" }) => {
  const reduceMotion = useReducedMotion();

  return (
    <RevealOnScroll
      as="article"
      variant={variant}
      delay={0.05}
      index={index}
      className="group flex h-full flex-col rounded-card border border-gray-200 bg-white p-[1.75rem] transition-colors duration-500 hover:border-navy lg:p-[2.25rem]"
      whileHover={{
        y: reduceMotion ? 0 : -6,
        boxShadow: "0 8px 24px rgba(29,61,109,0.18)",
      }}
      transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
    >
      {offer.eyebrow && <p className="eyebrow text-orange">{offer.eyebrow}</p>}

      <h3 className="mt-[0.75rem] font-display text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy lg:text-[1.75rem]">
        {offer.title ?? offer.label}
      </h3>

      <p className="mt-[1rem] text-[1rem] leading-[1.7] text-gray-700">
        {offer.body}
      </p>

      {offer.bullets && (
        <BulletList items={offer.bullets} className="mt-[1.25rem]" />
      )}

      <Link
        href={ROUTES[offer.routeKey][lang]}
        className="btn-ghost mt-[1.75rem] self-start"
      >
        {moreLabel}
        <ArrowIcon />
      </Link>
    </RevealOnScroll>
  );
};

export default OfferCard;
