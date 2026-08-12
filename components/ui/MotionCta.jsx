"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion.create(Link);

/**
 * Wraps the site's btn-primary / btn-secondary / btn-navy links with a
 * subtle hover/tap lift on top of their existing Tailwind color/shadow
 * transitions — used on the main calls to action (Contact, Devenir
 * partenaire). Skips the transform entirely under prefers-reduced-motion,
 * same rule RevealOnScroll follows.
 */
const MotionCta = ({ className = "", children, ...rest }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      className={className}
      whileHover={reduceMotion ? undefined : { scale: 1.035 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      {...rest}
    >
      {children}
    </MotionLink>
  );
};

export default MotionCta;
