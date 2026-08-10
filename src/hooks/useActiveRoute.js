"use client";

import { usePathname } from "next/navigation";

import { matchRoute } from "../constants/routes";

/**
 * Route key of the page currently displayed — "acceleration", "country", …
 * Used to mark the active navigation entry, including its parent.
 */
export default function useActiveRoute() {
  const pathname = usePathname();
  return matchRoute(pathname)?.key ?? null;
}

/** True when the entry itself, or one of its children, is the current page. */
export const isEntryActive = (entry, activeKey) =>
  entry.key === activeKey ||
  Boolean(entry.children?.some((child) => child.key === activeKey));
