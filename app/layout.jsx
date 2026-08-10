import "../src/styles.css";

import Layout from "../src/components/Layout";
import { LanguageProvider } from "../src/i18n/LanguageProvider";

export const metadata = {
  icons: {
    icon: "/brand_assets/logo asbizdev.png",
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
