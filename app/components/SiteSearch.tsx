"use client";

import Link from "next/link";
import { useDeferredValue, useEffect, useState } from "react";
import { getFeaturedSearchEntries, searchSite } from "@/app/data/search-index";
import SearchResultsList from "./SearchResultsList";

interface SiteSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteSearch({ isOpen, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const trimmedQuery = deferredQuery.trim();
  const results = trimmedQuery ? searchSite(trimmedQuery, 10) : getFeaturedSearchEntries(8);

  function handleClose() {
    setQuery("");
    onClose();
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        className="absolute inset-0 bg-[#020617]/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close search"
      />
      <div className="relative flex min-h-full items-start justify-center px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f172a] shadow-[0_40px_120px_-48px_rgba(2,6,23,0.95)] sm:max-h-[calc(100dvh-4rem)]">
          <div className="border-b border-white/10 px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5eead4]">
                  Search
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-3xl">
                  Find systems, products, services, and brands
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-[0.95rem]">
                  Search for terms like Acrovyn, Altro Whiterock, FRP panels, crash rails, hygienic wall cladding, or project pricing.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close search"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/6 p-2">
              <div className="flex flex-col gap-3 rounded-[1.1rem] bg-white px-4 py-3 shadow-[0_16px_44px_-32px_rgba(15,23,42,0.6)] sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products, systems, manufacturers, or services"
                  className="w-full bg-transparent text-base text-[#0f172a] placeholder:text-slate-400 focus:outline-none sm:text-lg"
                />
                </div>
                <Link
                  href={trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search"}
                  onClick={handleClose}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0f172a] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e293b] sm:px-5"
                >
                  Full results
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto bg-[#f8fafc] px-5 py-5 sm:px-7 sm:py-6">
            {results.length > 0 ? (
              <SearchResultsList results={results} compact onResultClick={handleClose} />
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
                <p className="text-lg font-semibold tracking-tight text-[#0f172a]">
                  No close matches found
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Try broader terms like FRP, wall protection, hygienic cladding, Altro, or quotation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
