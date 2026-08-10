"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { findCountryByKey, findCountryBySlug } from "@/lib/data/countries";

/**
 * Shared by every market page (/marches, /marches/afrique,
 * /marches/moyen-orient): opens a market's modal in place, keeps
 * `?country=slug` in the URL for direct links, and cleans it up on close
 * without a full navigation.
 *
 * `next/navigation`'s `useSearchParams` is read-only, unlike react-router's —
 * writes go through `router.replace` on a manually rebuilt query string.
 */
export default function useMarketSelection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    const slug = searchParams.get("country");
    if (!slug) return;
    const match = findCountryBySlug(slug);
    if (match) setSelectedKey(match.key);
  }, [searchParams]);

  const updateParams = (mutate) => {
    const next = new URLSearchParams(searchParams.toString());
    mutate(next);
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const selectMarket = (key) => {
    setSelectedKey(key);
    const country = findCountryByKey(key);
    updateParams((next) => {
      if (country) next.set("country", country.slug);
    });
  };

  const closeModal = () => {
    setSelectedKey(null);
    updateParams((next) => next.delete("country"));
  };

  const selectedMarket = selectedKey ? findCountryByKey(selectedKey) : null;

  return { selectedKey, selectedMarket, selectMarket, closeModal };
}
