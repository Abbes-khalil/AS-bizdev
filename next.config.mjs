import { LEGACY_REDIRECTS } from "./lib/constants/legacyRedirects.js";
import { ROUTES } from "./lib/routes.js";

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
