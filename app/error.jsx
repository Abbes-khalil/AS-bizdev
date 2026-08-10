"use client";

const COPY = {
  title: "Something went wrong",
  body: "This page could not load right now. Please try again.",
  retry: "Try again",
};

export default function GlobalError({ reset }) {
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
