"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Fade/slide between routes on client-side navigation. `initial={false}` on
 * AnimatePresence means the very first page load renders straight into its
 * final, visible state — no opacity:0 flash waiting on JS/hydration, so
 * search engines (which read the server-rendered HTML directly, not this
 * client transition) and slow-JS visitors never see delayed content. Only
 * subsequent route changes animate.
 */
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
