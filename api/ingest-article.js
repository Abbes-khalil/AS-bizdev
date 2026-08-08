/**
 * Fully automated LinkedIn ingestion (§24) — Vercel serverless function.
 *
 * True zero-touch LinkedIn API sync isn't available without LinkedIn Partner
 * approval, so the automation lives one layer up: an n8n workflow (run on the
 * user's own infrastructure, not this repo) watches an RSS bridge on AS Biz
 * Dev's LinkedIn company page and POSTs each new post's URL here. This
 * endpoint pulls the Open Graph metadata (title, summary, image, published
 * date) LinkedIn exposes for link previews, commits a new `article-XX.js`
 * straight to the default branch with `status: "published"`, and updates the
 * `ARTICLES` index so it's picked up by the next build — no human step, no
 * PR to merge.
 *
 * This is deliberately called only server-to-server (n8n's HTTP Request
 * node, credential stored in n8n) — never from a public browser page — so
 * the shared secret never ships inside anything a visitor's browser loads.
 *
 * Env vars required: INGEST_TOKEN, GITHUB_TOKEN, GITHUB_REPO ("owner/repo"),
 * GITHUB_DEFAULT_BRANCH (optional, defaults to "master").
 */
import { ARTICLES } from "../src/i18n/content/news/index.js";

const GITHUB_API = "https://api.github.com";

const decodeHtmlEntities = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const extractMeta = (html, property) => {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const propMatch =
      tag.match(/property=["']([^"']+)["']/i) ?? tag.match(/name=["']([^"']+)["']/i);
    if (propMatch?.[1] === property) {
      const contentMatch = tag.match(/content=["']([^"']*)["']/i);
      if (contentMatch) return decodeHtmlEntities(contentMatch[1]);
    }
  }
  return null;
};

const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 80);

const nextArticleKey = () => {
  const numbers = ARTICLES.map((a) => Number(a.number));
  const next = (numbers.length ? Math.max(...numbers) : 0) + 1;
  return String(next).padStart(2, "0");
};

/** Already ingested? Checked against the ARTICLES snapshot bundled at deploy
 * time — good enough for a low-frequency poller, not a hard lock against a
 * near-simultaneous duplicate before the next deploy. */
const alreadyIngested = (url) =>
  ARTICLES.some((article) => article.source?.url === url);

const githubRequest = async (path, options = {}) => {
  const res = await fetch(`${GITHUB_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${path} failed (${res.status}): ${body}`);
  }
  return res.json();
};

/**
 * Inserts the new article's import + array entry into index.js's source
 * text. Tolerates CRLF (the repo's checked-out line ending on Windows) as
 * well as LF, since either could arrive depending on how the file was last
 * committed.
 */
const withArticleRegistered = (indexSource, key) => {
  const varName = key.replace("article-", "article");
  const eol = indexSource.includes("\r\n") ? "\r\n" : "\n";
  const importLine = `import ${varName} from "./${key}.js";`;

  const importBlock = /(^import article\d+ from "\.\/article-\d+\.js";\r?\n)+/m;
  const withImport = indexSource.replace(
    importBlock,
    (match) => `${match}${importLine}${eol}`,
  );

  const arrayBlock = /(export const ARTICLES = \[\r?\n)([\s\S]*?)(\]\s*;)/;
  return withImport.replace(arrayBlock, (_match, open, body, close) => {
    const trimmed = body.replace(/\s+$/, "");
    return `${open}${trimmed}${eol}  ${varName},${eol}${close}`;
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (req.headers["x-ingest-token"] !== process.env.INGEST_TOKEN) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const {
    url,
    lang = "fr",
    themes = [],
    zones = [],
    countries = [],
  } = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};

  if (!url || !/^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(url)) {
    res.status(400).json({ error: "A public linkedin.com post URL is required" });
    return;
  }

  if (alreadyIngested(url)) {
    res.status(200).json({ ok: true, skipped: true, reason: "duplicate source.url" });
    return;
  }

  try {
    const pageRes = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AS-Biz-Dev-Ingest/1.0)" },
    });
    if (!pageRes.ok) {
      throw new Error(`Could not fetch the LinkedIn URL (HTTP ${pageRes.status})`);
    }
    const html = await pageRes.text();

    const title = extractMeta(html, "og:title");
    const preview = extractMeta(html, "og:description");
    const image = extractMeta(html, "og:image");
    const publishedAt = extractMeta(html, "article:published_time");

    if (!title) {
      throw new Error(
        "Could not read a title from this URL's Open Graph tags — add it manually instead.",
      );
    }

    const number = nextArticleKey();
    const key = `article-${number}`;
    const slug = slugify(title);
    const copy = {
      title,
      preview: preview ?? "",
      content: [{ type: "paragraph", text: preview ?? "" }],
    };

    const article = {
      number,
      key,
      slug: { fr: slug, en: slug },
      status: "published",
      publishedAt: publishedAt ? publishedAt.slice(0, 10) : null,
      author: null,
      image: image ?? null,
      source: { type: "linkedin-post", url },
      themes,
      zones,
      countries,
      // Only the source language is filled from the scrape; the other
      // language mirrors it as a starting point rather than shipping empty —
      // [INFORMATION À VALIDER PAR AS BIZ DEV]: translation not yet reviewed.
      fr: copy,
      en: copy,
    };

    const repo = process.env.GITHUB_REPO;
    const base = process.env.GITHUB_DEFAULT_BRANCH ?? "master";
    const articlePath = `src/i18n/content/news/${key}.js`;
    const indexPath = "src/i18n/content/news/index.js";

    const fileContents = [
      "/**",
      ` * ${key} — auto-ingested from LinkedIn via the n8n pipeline.`,
      " * Translation into the other language is a straight copy from the",
      " * source post and has not been reviewed.",
      " *",
      " * Content blocks: paragraph | heading | subheading | list | highlight.",
      " */",
      `const article = ${JSON.stringify(article, null, 2)};`,
      "",
      "export default article;",
      "",
    ].join("\n");

    await githubRequest(`/repos/${repo}/contents/${articlePath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Ingest LinkedIn post: ${title}`,
        content: Buffer.from(fileContents, "utf8").toString("base64"),
        branch: base,
      }),
    });

    const currentIndex = await githubRequest(
      `/repos/${repo}/contents/${indexPath}?ref=${base}`,
    );
    const currentIndexSource = Buffer.from(currentIndex.content, "base64").toString(
      "utf8",
    );
    const nextIndexSource = withArticleRegistered(currentIndexSource, key);

    await githubRequest(`/repos/${repo}/contents/${indexPath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Register ${key} in ARTICLES`,
        content: Buffer.from(nextIndexSource, "utf8").toString("base64"),
        sha: currentIndex.sha,
        branch: base,
      }),
    });

    res.status(200).json({ ok: true, article: key, slug });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
