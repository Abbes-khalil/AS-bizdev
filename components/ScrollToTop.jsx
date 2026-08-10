"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Client-side navigation keeps the scroll position by default, which lands the
 * visitor mid-page on the next one. Reset it — anchor-targeted navigations
 * (hash present) are left to the browser's own scroll-into-view behavior.
 */
const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
