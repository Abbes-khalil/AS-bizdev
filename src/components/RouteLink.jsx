import { Link } from "react-router-dom";

import { pathFor } from "../constants/routes";
import { useLang } from "../i18n/LanguageProvider";

/**
 * Link to an internal page by route key rather than by URL.
 *
 *   <RouteLink routeKey="pilotage">Pilotage commercial</RouteLink>
 *
 * The path is resolved in the active language, so the visitor never falls out
 * of their language tree and no URL is ever hard-coded twice.
 */
const RouteLink = ({ routeKey, params, className = "", children, ...rest }) => {
  const { lang } = useLang();

  return (
    <Link to={pathFor(routeKey, lang, params)} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default RouteLink;
