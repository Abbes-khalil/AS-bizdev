/** Renders one block of an article body: paragraph | heading | subheading | list | highlight. */
const ContentBlock = ({ block, id }) => {
  if (block.type === "heading") {
    return (
      <h3 className="pt-5 font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl">
        {block.text}
      </h3>
    );
  }

  if (block.type === "subheading") {
    return (
      <h4 className="pt-2 font-display text-xl font-semibold leading-tight text-navy">
        {block.text}
      </h4>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li
            key={`${id}-${i}`}
            className="flex items-start gap-3 text-[1rem] leading-8 text-gray-700"
          >
            <span
              className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "highlight") {
    return (
      <div className="border-l-4 border-orange bg-orange-50 px-5 py-4">
        <p className="font-medium leading-8 text-navy">{block.text}</p>
      </div>
    );
  }

  return <p className="text-[1rem] leading-8 text-gray-700">{block.text}</p>;
};

export default ContentBlock;
