/** Skeleton for an article detail page while Supabase data streams in. */
export default function ArticleLoading() {
  return (
    <main>
      <section className="bg-surface-alt py-12 lg:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 h-4 w-24 animate-pulse rounded-full bg-white" />

            <article className="overflow-hidden rounded-[1rem] border border-gray-200 bg-white shadow-soft">
              <div className="flex items-start gap-3 p-6">
                <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-surface-alt" />
                <div className="min-w-0 flex-1 space-y-2 pt-1">
                  <div className="h-4 w-32 animate-pulse rounded-full bg-surface-alt" />
                  <div className="h-3 w-24 animate-pulse rounded-full bg-surface-alt" />
                </div>
              </div>

              <div className="space-y-3 px-6 pb-6">
                <div className="h-5 w-4/5 animate-pulse rounded-full bg-surface-alt" />
                <div className="h-4 w-full animate-pulse rounded-full bg-surface-alt" />
                <div className="h-4 w-full animate-pulse rounded-full bg-surface-alt" />
                <div className="h-4 w-2/3 animate-pulse rounded-full bg-surface-alt" />
              </div>

              <div className="h-64 w-full animate-pulse bg-surface-alt" />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
