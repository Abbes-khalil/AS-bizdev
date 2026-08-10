import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0, 0, 1] },
  },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.2, 0, 0, 1] },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.2, 0, 0, 1] },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.2, 0, 0, 1] },
  },
};

const VARIANTS = {
  up: variants,
  fade: fadeVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleVariants,
};

/**
 * RevealOnScroll — animates children when they enter the viewport.
 *
 * Uses Framer Motion's whileInView with sensible defaults:
 * - Triggers once when ~15% of the element is visible.
 * - Runs consistently with the site's explicitly enabled motion direction.
 * - Stagger children via the `index` prop.
 *
 * Props
 * - variant: "up" | "fade" | "left" | "right" | "scale"  (default: "up")
 * - delay: seconds before the animation starts            (default: 0)
 * - index: child index used to stagger                    (default: 0)
 * - amount: viewport ratio to trigger                     (default: 0.15)
 * - as: wrapper element tag                               (default: "div")
 * - className: passthrough classes
 */
const RevealOnScroll = ({
  children,
  variant = "up",
  delay = 0,
  index = 0,
  amount = 0.15,
  as = "div",
  className = "",
  ...rest
}) => {
  const selected = VARIANTS[variant] ?? variants;
  const totalDelay = delay + index * 0.08;
  const Component = motion[as] ?? motion.div;
  const reduceMotion = useReducedMotion();

  // Keep the same element/prop shape regardless of the motion preference so
  // server- and client-rendered markup never diverge: a reduced-motion client
  // that differed structurally from the SSR-rendered "hidden" markup left
  // opacity:0 stuck forever, since React doesn't patch that mismatch up.
  return (
    <Component
      data-scroll-reveal={variant}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? "visible" : undefined}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount }}
      variants={selected}
      transition={{ delay: totalDelay }}
      suppressHydrationWarning
      {...rest}
    >
      {children}
    </Component>
  );
};

export default RevealOnScroll;
