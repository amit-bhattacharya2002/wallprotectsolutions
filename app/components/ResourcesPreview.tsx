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
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16">
          <div>
            <div className="section-header mb-10">
              <span className="eyebrow">Resources & FAQ</span>
              <h2 className="section-title mb-4">
                Technical guidance for specs, pricing, and product selection
              </h2>
              <p className="section-lead">
                Practical content for general contractors, project managers, architects, and specification writers. Built to support real pre-construction conversations, not filler blog traffic.
              </p>
            </div>

            <div className="grid gap-4">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group surface-card p-6 hover:border-[#0d9488] transition-colors"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#f0fdfa] text-[#0d9488] text-[11px] font-semibold tracking-wide uppercase"
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

            <Link
              href="/resources"
              className="inline-flex items-center gap-2 mt-8 text-[#0d9488] font-medium hover:gap-3 transition-all"
            >
              Explore all technical resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="surface-card-muted p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow mb-3">Popular Questions</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight">
                  Fast answers for project teams
                </h3>
              </div>
              <Link
                href="/faq"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0d9488] hover:gap-3 transition-all"
              >
                View all FAQ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {featuredFaqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[1.15rem] border border-slate-200 bg-white px-5 py-5"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d9488] mb-2">
                    {item.category}
                  </div>
                  <p className="text-base text-[#0f172a] font-medium leading-relaxed">
                    {item.question}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/faq"
              className="md:hidden inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#0d9488] hover:gap-3 transition-all"
            >
              View all FAQ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
