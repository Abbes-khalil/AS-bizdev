import "../src/styles.css";

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
      <body>{children}</body>
    </html>
  );
}
