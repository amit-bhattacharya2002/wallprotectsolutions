"use client";

import { useState } from "react";

export interface PopularQuestion {
  category: string;
  question: string;
  answer: string;
}

interface PopularQuestionsAccordionProps {
  items: PopularQuestion[];
}

export default function PopularQuestionsAccordion({ items }: PopularQuestionsAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const key = item.question;
        const isOpen = openItem === key;

        return (
          <div
            key={key}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : key)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#f8fafc]"
            >
              <span className="min-w-0 flex-1">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                  {item.category}
                </span>
                <span className="block text-base font-medium leading-relaxed text-[#0f172a]">
                  {item.question}
                </span>
              </span>
              <svg
                className={`mt-1 h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 bg-[#f8fafc] px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
