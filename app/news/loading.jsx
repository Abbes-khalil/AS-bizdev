/** Skeleton for the /news grid while Supabase data streams in. */
const SkeletonCard = () => (
  <div className="overflow-hidden rounded-card border border-gray-200 bg-white shadow-soft">
    <div className="h-44 w-full animate-pulse bg-surface-alt" />
    <div className="space-y-3 p-6 lg:p-7">
      <div className="h-3 w-20 animate-pulse rounded-full bg-surface-alt" />
      <div className="h-5 w-5/6 animate-pulse rounded-full bg-surface-alt" />
      <div className="h-4 w-full animate-pulse rounded-full bg-surface-alt" />
      <div className="h-4 w-2/3 animate-pulse rounded-full bg-surface-alt" />
    </div>
  </div>
);

export default function NewsLoading() {
  return (
    <main>
      <div className="bg-navy py-16 lg:py-24" aria-hidden="true" />
      <section className="bg-white py-12 lg:py-20">
        <div className="container-x">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-gray-200 pb-6">
            <div className="h-3 w-32 animate-pulse rounded-full bg-surface-alt" />
            <div className="h-3 w-24 animate-pulse rounded-full bg-surface-alt" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
