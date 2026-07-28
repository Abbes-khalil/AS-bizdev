export default function SectionHeading({ eyebrow, title, children, align = "center", className = "" }) {
  const alignClass = align === "left" ? "mx-0 text-left" : "mx-auto text-center";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 ${align === "left" ? "" : "justify-center"}`}>
          <span className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
          <p className="eyebrow text-orange">{eyebrow}</p>
        </div>
      )}
      {title && (
        <h2 className="mt-6 font-display display-lg font-semibold text-navy text-balance">
          {title}
        </h2>
      )}
      {children && (
        <div className="mt-6 text-pretty text-[1.0625rem] leading-[1.7] text-gray-700 lg:text-[1.125rem]">
          {children}
        </div>
      )}
    </div>
  );
}
