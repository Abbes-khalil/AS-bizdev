import React from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import WhoIsWho from "./pages/WhoIsWho";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import "./styles.css";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const routes = {
    "/whoiswho": <WhoIsWho />,
    "/nosvaleurs": <ContentPage kind="values" />,
    "/notresavoirfaire": <ContentPage kind="expertise" />,
    "/nossolutions": <ContentPage kind="solutions" />,
    "/nospartenaire": <Partners />,
    "/news": <News />,
    "/contact": <Contact />,
    "/politiques-de-confidentialite": <Policy />,
  };
  return <Layout active={path}>{routes[path] || <Home />}</Layout>;
}
createRoot(document.getElementById("root")).render(<App />);
