import Link from "next/link";

import { faqCategories } from "@/app/data/faq";
import { resourceArticles } from "@/app/data/resources";

const featuredArticles = resourceArticles.slice(0, 3);
const featuredFaqs = faqCategories.flatMap((category) =>
  category.items.slice(0, 1).map((item) => ({
    category: category.title,
    question: item.question,
  })),
).slice(0, 4);

export default function ResourcesPreview() {
  return (
    <section className="section-shell bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-header reveal mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Resources & FAQ</span>
          <h2 className="section-title mb-4">
            Technical guidance for specs, pricing, and product selection
          </h2>
          <p className="section-lead mx-auto">
            Practical content for general contractors, project managers, architects, and specification writers. Built to support real pre-construction conversations, not filler blog traffic.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16">
          <div>
            <div className="grid border-y border-slate-200">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group border-b border-slate-200 py-6 transition-colors last:border-b-0"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#134e4a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 max-md:flex max-md:justify-center md:block">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-medium text-[#134e4a] transition-all hover:gap-3"
              >
                Explore all technical resources
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-8 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.3)] lg:p-10">
            {/* Below lg, "View all FAQ" drops to its own row below the heading so
                the two don't wrap side-by-side awkwardly at tablet widths. */}
            <div className="mb-8 flex flex-col gap-4 max-lg:items-center max-lg:text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div>
                <span className="eyebrow mb-3">Popular Questions</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight">
                  Fast answers for project teams
                </h3>
              </div>
              <Link
                href="/faq"
                className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] hover:gap-3 transition-all"
              >
                View all FAQ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {featuredFaqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-lg border border-slate-200 bg-white px-5 py-5"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#134e4a] mb-2">
                    {item.category}
                  </div>
                  <p className="text-base text-[#0f172a] font-medium leading-relaxed">
                    {item.question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center lg:hidden">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] transition-all hover:gap-3"
              >
                View all FAQ
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
