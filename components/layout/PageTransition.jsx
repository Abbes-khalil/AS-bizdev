"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Fade/slide between routes on client-side navigation.
 *
 * The very first page load must render into its final, visible state with
 * no opacity:0 flash — search engines read the server-rendered HTML
 * directly, not this client transition, but a mismatched `initial` style
 * between server and client also trips a React hydration error. `hasMounted`
 * starts false on both server and first client render, so that first
 * motion.div gets `initial={false}` (server and client agree: fully
 * visible). The effect flips it to true right after mount — since the
 * pathname/key hasn't changed yet, framer-motion doesn't retroactively
 * animate the already-visible page, it just arms `initial` for the *next*
 * route change, which is when the fade/slide actually plays.
 *
 * The wrapper element itself is never conditionally rendered on
 * `reduceMotion` — only the animation values are. `useReducedMotion` reads
 * `matchMedia`, which isn't available during SSR (always resolves false
 * there) but can already be true on the client's very first render, so
 * branching the *element tree* on it — like an early `return children` —
 * would make server and client disagree on structure, not just style, and
 * trip a hydration error. Same rule RevealOnScroll follows.
 */
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const animated = hasMounted && !reduceMotion;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={animated ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        exit={animated ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
        suppressHydrationWarning
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
