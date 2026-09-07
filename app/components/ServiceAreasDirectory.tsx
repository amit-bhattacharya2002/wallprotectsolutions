"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cities, getCitiesByRegion, type City } from "@/app/data/cities";

function matchesQuery(city: City, query: string) {
  if (!query) return true;
  const haystack = `${city.name} ${city.region} ${city.slug}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export default function ServiceAreasDirectory() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");

  const citiesByRegion = useMemo(() => getCitiesByRegion(), []);
  const regions = useMemo(() => Object.keys(citiesByRegion).sort(), [citiesByRegion]);

  const grouped = useMemo(() => {
    const next: Record<string, City[]> = {};
    for (const name of regions) {
      if (region !== "all" && name !== region) continue;
      const matches = citiesByRegion[name].filter((city) => matchesQuery(city, query));
      if (matches.length) next[name] = matches;
    }
    return next;
  }, [citiesByRegion, query, region, regions]);

  const visibleRegions = Object.keys(grouped);
  const visibleCount = visibleRegions.reduce((sum, name) => sum + grouped[name].length, 0);
  const hasFilters = query.trim().length > 0 || region !== "all";

  const clearFilters = () => {
    setQuery("");
    setRegion("all");
  };

  return (
    <div>
      <div className="mb-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 md:p-5 lg:mb-12">
        <label htmlFor="city-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Search cities
        </label>
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
          </svg>
          <input
            id="city-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Vancouver, Kelowna, or Fraser Valley"
            autoComplete="off"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-4 pl-10 text-sm text-[#0f172a] outline-none transition-colors placeholder:text-slate-400 focus:border-[#005EB8] focus:ring-2 focus:ring-[#005EB8]/20"
          />
        </div>

        <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Filter by region
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter cities by region">
          <button
            type="button"
            onClick={() => setRegion("all")}
            aria-pressed={region === "all"}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              region === "all"
                ? "border-[#005EB8] bg-[#005EB8] text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0f172a]"
            }`}
          >
            All regions
          </button>
          {regions.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setRegion(name)}
              aria-pressed={region === name}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                region === name
                  ? "border-[#005EB8] bg-[#005EB8] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0f172a]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
          <p aria-live="polite">
            {visibleCount} {visibleCount === 1 ? "city" : "cities"}
            {region !== "all" ? ` in ${region}` : ""}
            {query.trim() ? ` matching “${query.trim()}”` : ""}
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="font-medium text-[#64A70B] transition-colors hover:text-[#4f8f16]"
            >
              Clear filters
            </button>
          ) : (
            <span>{cities.length} locations across {regions.length} regions</span>
          )}
        </div>
      </div>

      {visibleCount === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#0f172a]">No cities match that search</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
            We still serve all of British Columbia. Try another name, pick a region, or contact us about your project location.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#0f172a] hover:border-slate-300"
            >
              Reset search
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-[#005EB8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#004A91]"
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-16">
          {visibleRegions.map((name) => (
            <div key={name}>
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-[#0f172a]">
                <span className="h-px w-8 bg-[#005EB8]" />
                {name}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {grouped[name].map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city/${city.slug}`}
                    className="group py-2 text-sm font-medium text-[#0f172a] transition-colors hover:text-[#64A70B] sm:px-4"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
