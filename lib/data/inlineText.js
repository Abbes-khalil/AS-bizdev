/**
 * Splits article text into plain, **bold** and [link](url) runs.
 * Only these two markers are understood; anything else stays literal text,
 * so a LinkedIn post that happens to contain an asterisk renders unchanged.
 * Links must be site-relative ("/contact") or https.
 * @param {string} text
 * @returns {({ type: "text" | "bold", text: string } | { type: "link", text: string, href: string })[]}
 */
export const parseInline = (text) => {
  const runs = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(((?:\/|https:\/\/)[^\s)]+)\)/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) runs.push({ type: "text", text: text.slice(last, match.index) });
    if (match[1] !== undefined) runs.push({ type: "bold", text: match[1] });
    else runs.push({ type: "link", text: match[2], href: match[3] });
    last = match.index + match[0].length;
  }
  if (last < text.length) runs.push({ type: "text", text: text.slice(last) });
  return runs;
};
