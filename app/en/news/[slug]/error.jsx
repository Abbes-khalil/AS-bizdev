"use client";

const COPY = {
  title: "Couldn't load this article",
  body: "Something went wrong while fetching this article. Please try again.",
  retry: "Try again",
};

export default function ArticleError({ reset }) {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-2xl font-semibold text-navy">
          {COPY.title}
        </h1>
        <p className="mt-3 text-[0.95rem] text-gray-600">{COPY.body}</p>
        <button type="button" onClick={() => reset()} className="btn-primary mt-6">
          {COPY.retry}
        </button>
      </div>
    </main>
  );
}
