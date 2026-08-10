import { LEGACY_REDIRECTS } from "./src/constants/legacyRedirects.js";
import { pathFor } from "./src/constants/paths.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(LEGACY_REDIRECTS).map(([from, key]) => ({
      source: from,
      destination: pathFor(key, "fr"),
      permanent: true,
    }));
  },
};

export default nextConfig;
