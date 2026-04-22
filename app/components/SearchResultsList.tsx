"use client";

import Link from "next/link";
import { SearchEntry, getSearchGroupLabel, groupSearchResults } from "@/app/data/search-index";

interface SearchResultsListProps {
  results: SearchEntry[];
  compact?: boolean;
  onResultClick?: () => void;
}

const badgeStyles: Record<string, string> = {
  Systems: "bg-[#134e4a]/10 text-[#134e4a]",
  Services: "bg-[#2a4663]/8 text-[#0f172a]",
  Manufacturers: "bg-slate-100 text-slate-700",
  Projects: "bg-amber-50 text-amber-700",
  Pages: "bg-slate-100 text-slate-600",
};

export default function SearchResultsList({
  results,
  compact = false,
  onResultClick,
}: SearchResultsListProps) {
  const groupedResults = groupSearchResults(results);

  return (
    <div className={compact ? "space-y-5 pb-4" : "space-y-10"}>
      {groupedResults.map((section) => {
        const badgeClass = badgeStyles[section.label] ?? "bg-slate-100 text-slate-700";

        return (
          <div key={section.group} className={compact ? "space-y-2.5" : "space-y-3"}>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#134e4a]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {getSearchGroupLabel(section.group)}
              </p>
            </div>
            <div className={compact ? "space-y-2.5" : "grid gap-3 md:grid-cols-2"}>
              {section.items.map((result) => (
                <Link
                  key={`${result.group}-${result.href}-${result.title}`}
                  href={result.href}
                  onClick={onResultClick}
                  className={`group block w-full rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-[#0d9488]/30 hover:shadow-[0_18px_42px_-28px_rgba(15,23,42,0.34)] ${
                    compact ? "p-3.5 sm:p-4" : "p-5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${badgeClass}`}>
                        {result.badge ?? getSearchGroupLabel(result.group)}
                      </span>
                      <h3 className={`mt-3 font-semibold tracking-tight text-[#0f172a] group-hover:text-[#0d9488] ${
                        compact ? "text-[0.95rem] sm:text-base" : "text-lg"
                      }`}>
                        {result.title}
                      </h3>
                      <p className={`mt-2 text-slate-600 leading-relaxed ${
                        compact ? "text-[0.9rem]" : "text-[0.95rem]"
                      }`}>
                        {result.description}
                      </p>
                    </div>
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0d9488]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
