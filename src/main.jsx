import React from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/Layout";
import { ROUTES, ROUTE_ALIASES } from "./components/siteData";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import WhoIsWho from "./pages/WhoIsWho";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import "./styles.css";

function App() {
  const requested = window.location.pathname.replace(/\/$/, "") || "/";
  const path = ROUTE_ALIASES[requested] || requested;

  const routes = {
    [ROUTES.whoIsWho]: <WhoIsWho />,
    [ROUTES.values]: <ContentPage kind="values" />,
    [ROUTES.expertise]: <ContentPage kind="expertise" />,
    [ROUTES.solutions]: <ContentPage kind="solutions" />,
    [ROUTES.partners]: <Partners />,
    [ROUTES.news]: <News />,
    [ROUTES.contact]: <Contact />,
    [ROUTES.policy]: <Policy />,
  };

  return <Layout active={path}>{routes[path] || <Home />}</Layout>;
}

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
