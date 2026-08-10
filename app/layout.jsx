import "@/styles/globals.css";

import Layout from "@/components/Layout";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

export const metadata = {
  icons: {
    icon: "/brand_assets/asbizdev.png",
  },
};

export const viewport = {
  themeColor: "#D9342B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
