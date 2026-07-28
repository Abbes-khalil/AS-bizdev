import Navbar from "./Navbar";
import Footer from "./Footer";

export function Layout({ active, children }) {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Navbar active={active} />
      <main id="main" className="pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
}
