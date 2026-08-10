import RouteLink from "../RouteLink";
import { isEntryActive } from "../../hooks/useActiveRoute";

const LINK_BASE =
  "group relative whitespace-nowrap rounded-btn px-3 py-2 font-display text-[0.875rem] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const Underline = ({ active }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-orange transition-transform duration-300 ease-out ${
      active
        ? "scale-x-100"
        : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
    }`}
  />
);

const Chevron = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    className="ml-1 inline-block transition-transform duration-200 group-hover/item:rotate-180"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Primary navigation on large screens.
 *
 * Submenus open on hover *and* on focus-within, so they are reachable with the
 * keyboard without a JavaScript menu widget: the parent stays a real link to
 * the hub page, and the children are a nested list beneath it.
 */
const DesktopNav = ({ items, activeKey, ariaLabel }) => (
  <nav className="hidden items-center gap-1 xl:flex" aria-label={ariaLabel}>
    {items.map((entry) => {
      const active = isEntryActive(entry, activeKey);

      if (!entry.children) {
        return (
          <RouteLink
            key={entry.key}
            routeKey={entry.key}
            aria-current={active ? "page" : undefined}
            className={`${LINK_BASE} ${active ? "text-navy" : "text-gray-700 hover:text-navy"}`}
          >
            {entry.label}
            <Underline active={active} />
          </RouteLink>
        );
      }

      return (
        <div key={entry.key} className="group/item relative">
          <RouteLink
            routeKey={entry.key}
            aria-current={active ? "page" : undefined}
            className={`${LINK_BASE} inline-flex items-center ${active ? "text-navy" : "text-gray-700 hover:text-navy"}`}
          >
            {entry.label}
            <Chevron />
            <Underline active={active} />
          </RouteLink>
          

          <ul
            role="list"
            aria-label={entry.label}
            className="invisible absolute left-0 top-full z-50 w-[19rem] translate-y-1 rounded-card border border-gray-200 bg-white p-2 opacity-0 shadow-lift transition-all duration-200 ease-emphasized group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100"
          >
            {entry.children.map((child) => (
              <li key={child.key}>
                <RouteLink
                  routeKey={child.key}
                  aria-current={child.key === activeKey ? "page" : undefined}
                  className={`block rounded-btn px-4 py-3 font-display text-[0.875rem] font-medium leading-[1.4] tracking-tight transition-colors duration-200 hover:bg-surface-alt hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                    child.key === activeKey ? "text-navy" : "text-gray-700"
                  }`}
                >
                  {child.label}
                </RouteLink>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </nav>
);

export default DesktopNav;
