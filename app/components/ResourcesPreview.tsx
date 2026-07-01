import Link from "next/link";

import PopularQuestionsAccordion from "@/app/components/PopularQuestionsAccordion";
import { faqCategories } from "@/app/data/faq";
import { resourceArticles } from "@/app/data/resources";

const healthcareResourceSlugs = [
  "healthcare-sink-splash-zones",
  "clean-utility-vs-soiled-utility-surface-considerations",
  "healthcare-wall-finish-selection-guide",
];

const featuredArticles = healthcareResourceSlugs
  .map((slug) => resourceArticles.find((article) => article.slug === slug))
  .filter((article): article is (typeof resourceArticles)[number] => Boolean(article));
const featuredFaqs = faqCategories.flatMap((category) =>
  category.items.slice(0, 1).map((item) => ({
    category: category.title,
    question: item.question,
    answer: item.answer,
  })),
).slice(0, 4);

export default function ResourcesPreview() {
  return (
    <section className="section-shell bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="section-header reveal mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Healthcare Knowledge Centre</span>
          <h2 className="section-title mb-4">
            Field-informed guidance for healthcare wall protection
          </h2>
          <p className="section-lead mx-auto">
            Practical content for general contractors, project managers, architects, and specification writers working through clinical room requirements, hygienic wall systems, and long-term maintenance decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f8f16]">Selected healthcare notes</p>
              </div>
              <span className="hidden text-xs font-medium uppercase tracking-[0.14em] text-slate-400 sm:block">Clinical rooms / surfaces / systems</span>
            </div>
            <div className="grid">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group grid gap-4 border-b border-slate-200 py-6 transition-colors last:border-b-0 md:grid-cols-[4rem_1fr] md:gap-6"
                >
                  <div className="text-xs font-semibold tabular-nums tracking-[0.18em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4f8f16]"
                      >
                        {tag}
                      </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#64A70B] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 max-md:flex max-md:justify-center md:block">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-medium text-[#64A70B] transition-all hover:gap-3 hover:text-[#4f8f16]"
              >
                Explore the healthcare knowledge centre
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="sticky-side border-l border-slate-200 pl-6 lg:pl-10">
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
                className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] hover:gap-3 hover:text-[#4f8f16] transition-all"
              >
                View all FAQ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <PopularQuestionsAccordion items={featuredFaqs} />

            <div className="mt-6 flex justify-center lg:hidden">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] transition-all hover:gap-3 hover:text-[#4f8f16]"
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
