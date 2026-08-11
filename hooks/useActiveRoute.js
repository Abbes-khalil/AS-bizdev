"use client";

import { usePathname } from "next/navigation";

import { activeRouteKeyFor } from "@/lib/routes";

/**
 * Route key of the page currently displayed — "acceleration", "news", …
 * Used to mark the active navigation entry, including its parent.
 */
export default function useActiveRoute() {
  const pathname = usePathname();
  return activeRouteKeyFor(pathname);
}

/** True when the entry itself, or one of its children, is the current page. */
export const isEntryActive = (entry, activeKey) =>
  entry.key === activeKey ||
  Boolean(entry.children?.some((child) => child.key === activeKey));
