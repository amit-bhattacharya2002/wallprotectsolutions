"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { normalizeSearchValue, searchSite, type SearchEntry } from "@/app/data/search-index";

type SearchMode = "page" | "site";

const pageEntries: SearchEntry[] = [
  {
    title: "UPCC Portfolio",
    href: "/healthcare#upcc",
    group: "page",
    badge: "This page",
    description: "Urgent Primary Care Centre experience, clinic project pattern, and healthcare delivery proof.",
    keywords: ["upcc", "urgent primary care", "clinic", "portfolio", "projects", "healthcare work"],
  },
  {
    title: "Hospital Experience",
    href: "/healthcare#hospitals",
    group: "page",
    badge: "This page",
    description: "Major hospital environments, live-site renovation experience, and clinical project credibility.",
    keywords: ["hospital", "hospitals", "live site", "renovation", "clinical", "health authority"],
  },
  {
    title: "Healthcare Systems",
    href: "/healthcare#systems",
    group: "page",
    badge: "This page",
    description: "Wall protection, hygienic wall cladding, FRP, stainless protection, and support-space systems.",
    keywords: ["systems", "wall protection", "hygienic cladding", "frp", "stainless", "altro", "acrovyn"],
  },
  {
    title: "Pre-Construction Support",
    href: "/pre-construction",
    group: "page",
    badge: "Related",
    description: "Specification review, budgeting, submittals, and product selection support before install.",
    keywords: ["pre construction", "specification", "budget", "submittal", "pricing", "coordination"],
  },
  {
    title: "Get a Quote",
    href: "/quote",
    group: "page",
    badge: "Action",
    description: "Submit drawings, photos, project notes, or specifications for pricing support.",
    keywords: ["quote", "pricing", "estimate", "proposal", "submit", "project specifications"],
  },
];

function searchPage(query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return pageEntries.slice(0, 3);
  }

  const terms = normalizedQuery.split(" ").filter(Boolean);

  return pageEntries
    .map((entry) => {
      const haystack = normalizeSearchValue(
        [entry.title, entry.description, entry.href, entry.badge, ...entry.keywords].filter(Boolean).join(" ")
      );
      const matchesAllTerms = terms.every((term) => haystack.includes(term));

      if (!matchesAllTerms) return { entry, score: -1 };

      let score = 0;
      if (normalizeSearchValue(entry.title).includes(normalizedQuery)) score += 20;
      if (entry.keywords.some((keyword) => normalizeSearchValue(keyword).includes(normalizedQuery))) score += 14;
      if (normalizeSearchValue(entry.description).includes(normalizedQuery)) score += 8;

      return { entry, score };
    })
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .map((item) => item.entry);
}

export default function HealthcareHeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<SearchMode>("page");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const trimmedQuery = query.trim();

  const results = useMemo(() => {
    if (mode === "page") return searchPage(trimmedQuery);
    return trimmedQuery ? searchSite(trimmedQuery, 5) : searchSite("healthcare", 5);
  }, [mode, trimmedQuery]);

  const helperText =
    mode === "page"
      ? "Search this healthcare page first, then jump to the matching section."
      : "Search systems, services, manufacturers, projects, and resources across the website.";

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "site") {
      router.push(trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search");
      return;
    }

    if (results[0]) {
      router.push(results[0].href);
      setIsOpen(false);
    } else if (trimmedQuery) {
      setMode("site");
    }
  }

  return (
    <>
      <div className="mt-7 max-w-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex w-full items-center justify-between gap-4 rounded-full border border-white/24 bg-[#071522]/66 px-5 py-4 text-left text-white shadow-[0_22px_62px_-38px_rgba(0,18,35,0.9)] backdrop-blur-md transition-colors hover:border-[#9BCB4A]/60 hover:bg-[#071522]/82 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BCB4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071522]"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span className="flex min-w-0 items-center gap-3">
            <svg className="h-5 w-5 shrink-0 text-[#9BCB4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
            </svg>
            <span className="truncate text-sm font-semibold text-white/88 sm:text-base">
              Search healthcare systems, hospitals, UPCCs, or pricing
            </span>
          </span>
          <span className="hidden shrink-0 rounded-full border border-white/16 px-3 py-1.5 text-xs font-semibold text-white/62 sm:inline-flex">
            This page + site
          </span>
        </button>
      </div>

      {typeof document !== "undefined" && isOpen ? createPortal(
        <div
          className="fixed inset-0 z-[1000] flex items-start justify-center bg-[#071522]/62 px-4 py-6 backdrop-blur-md sm:py-24"
          role="dialog"
          aria-modal="true"
          aria-label="Search healthcare page"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label="Close search"
          />

          <div className="relative flex max-h-[calc(100dvh-3rem)] w-full max-w-2xl flex-col overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white text-[#0f172a] shadow-[0_36px_110px_-42px_rgba(2,6,23,0.72)]">
            <div className="border-b border-slate-200 bg-white p-4 sm:p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                    Healthcare Search
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Start with this page, then switch to the whole website.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#0f172a]"
                  aria-label="Close search"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-3 px-2">
                    <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0Z" />
                    </svg>
                    <input
                      ref={inputRef}
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search healthcare systems, hospitals, UPCCs, or pricing"
                      className="w-full bg-transparent text-base font-medium text-[#0f172a] placeholder:text-slate-400 focus:outline-none"
                      aria-label="Search healthcare page or website"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-1 rounded-full border border-slate-200 bg-slate-100 p-1">
                    {[
                      ["page", "This page"],
                      ["site", "Whole site"],
                    ].map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setMode(value as SearchMode)}
                        className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                          mode === value ? "bg-[#005EB8] text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-[#0f172a]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </div>

            <div className="min-h-0 overflow-y-auto p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-medium leading-relaxed text-slate-500">{helperText}</p>
                {mode === "site" && trimmedQuery ? (
                  <Link href={`/search?q=${encodeURIComponent(trimmedQuery)}`} className="shrink-0 text-xs font-semibold text-[#005EB8] transition-colors hover:text-[#64A70B]">
                    Full results
                  </Link>
                ) : null}
              </div>

              <div className="grid gap-2">
                {results.length > 0 ? (
                  results.slice(0, 5).map((result) => (
                    <Link
                      key={`${result.href}-${result.title}`}
                      href={result.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-start justify-between gap-4 rounded-[0.85rem] border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-[#64A70B]/45 hover:bg-[#f8fafc]"
                    >
                      <span className="min-w-0">
                        <span className="mb-1 block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#64A70B]">
                          {result.badge ?? (mode === "page" ? "This page" : "Result")}
                        </span>
                        <span className="block text-sm font-semibold text-[#0f172a]">{result.title}</span>
                        <span className="mt-1 line-clamp-2 block text-xs leading-5 text-slate-500">{result.description}</span>
                      </span>
                      <svg className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#64A70B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ))
                ) : (
                  <button
                    type="button"
                    onClick={() => setMode("site")}
                    className="rounded-[0.85rem] border border-slate-200 bg-white px-4 py-4 text-left text-sm font-semibold text-[#0f172a] transition-colors hover:border-[#64A70B]/45 hover:bg-[#f8fafc]"
                  >
                    No matches on this page. Search the whole site instead.
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}
