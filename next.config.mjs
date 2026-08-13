import { LEGACY_REDIRECTS } from "./lib/constants/legacyRedirects.js";
import { assertServerEnv } from "./lib/env.js";
import { ROUTES } from "./lib/routes.js";

// Fails `next dev` / `next build` immediately with a clear message if a
// required server env var is missing, instead of surfacing as an opaque
// error the first time a page or the ingest API route runs in production.
assertServerEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(LEGACY_REDIRECTS).map(([from, key]) => ({
      source: from,
      destination: ROUTES[key].fr,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/brand_assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
