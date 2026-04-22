"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getFeaturedSearchEntries, searchSite } from "@/app/data/search-index";
import SearchResultsList from "@/app/components/SearchResultsList";

interface SearchPageClientProps {
  initialQuery: string;
}

export default function SearchPageClient({ initialQuery }: SearchPageClientProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const deferredQuery = useDeferredValue(query);
  const trimmedQuery = deferredQuery.trim();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const nextHref = trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search";
    router.replace(nextHref, { scroll: false });
  }, [trimmedQuery, router]);

  const results = useMemo(
    () => (trimmedQuery ? searchSite(trimmedQuery, 24) : getFeaturedSearchEntries(12)),
    [trimmedQuery]
  );

  return (
    <main>
      <section className="relative overflow-hidden bg-[#2a4663] pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="absolute inset-0 bg-linear-to-br from-[#2a4663] via-[#3a597b] to-[#2a4663]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-1/4 right-0 h-[360px] w-[360px] rounded-full bg-[#134e4a]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#0d9488]">Search</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Find the right system, product, or service faster
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/74">
              Search across wall protection systems, hygienic cladding, FRP products, manufacturer partners, services, and representative project work.
            </p>
          </div>

          <div className="mt-10 max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/6 p-3 backdrop-blur-sm">
            <div className="flex flex-col gap-3 rounded-[1.25rem] bg-white p-4 shadow-[0_24px_80px_-48px_rgba(2,6,23,0.7)] sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search for products, systems, manufacturers, or services"
                  className="w-full bg-transparent text-base text-[#0f172a] placeholder:text-slate-400 focus:outline-none sm:text-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-[#134e4a]/10 px-3 py-1.5 text-xs font-medium text-[#5eead4]">
                  Acrovyn
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  Altro Whiterock
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  FRP panels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {trimmedQuery ? "Search results" : "Featured search paths"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                {trimmedQuery ? `Results for "${trimmedQuery}"` : "Popular systems and service paths"}
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>
          </div>

          {results.length > 0 ? (
            <SearchResultsList results={results} />
          ) : (
            <div className="surface-card mx-auto max-w-3xl p-10 text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
                Nothing close matched that search
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Try broader terms like wall protection, FRP, Altro, crash rails, hygienic wall cladding, or quotation.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
