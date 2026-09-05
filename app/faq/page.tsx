"use client";

import { Header, Footer, PageHero, SitePhoto } from "@/app/components";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { faqCategories } from "@/app/data/faq";
import { sitePhotos } from "@/app/data/site-photos";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const baseId = useId();

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && faqCategories.some((category) => category.slug === hash)) {
        setActiveCategory(hash);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const visibleCategories = activeCategory === "all"
    ? faqCategories
    : faqCategories.filter((c) => c.slug === activeCategory);

  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="editorial"
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Technical reference for GCs, project managers, estimators, and design teams. Answers to common questions about wall protection systems, hygienic cladding, pre-construction, and documentation."
          quickLinksTitle="Categories"
          quickLinks={[
            { label: "General", href: "/faq#general" },
            { label: "Pre-Construction", href: "/faq#pre-construction" },
            { label: "Submittals", href: "/faq#submittals" },
            { label: "Healthcare & Hygienic", href: "/faq#healthcare-hygienic" },
            { label: "Wall Protection Systems", href: "/faq#wall-protection-systems" },
          ]}
        />

        {/* Category filter + FAQ */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
              <aside className="lg:sticky lg:top-28">
                <SitePhoto
                  photo={sitePhotos.pages.faq}
                  overlay="gradient"
                  className="mb-5 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
                />
                <div className="border-l-2 border-[#64A70B] bg-[#f8fafc] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64A70B] mb-2">
                    Field Notes
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Answers grounded in installed healthcare and pharmaceutical work, including CSN Pharma,
                    Chilliwack UPCC, Breathe Medical Manufacturing, and 101-6470 201 Street.
                  </p>
                </div>
              </aside>

              <div className="max-w-3xl">
            {/* Category tabs */}
            <div className="mb-8 border-b border-gray-200 pb-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                Filter by topic
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  window.history.replaceState(null, "", "/faq");
                }}
                className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeCategory === "all" ? "border-[#005EB8] text-[#005EB8]" : "border-transparent text-gray-600 hover:text-[#0f172a]"}`}
              >
                All Questions
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    window.history.replaceState(null, "", `/faq#${cat.slug}`);
                  }}
                  className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeCategory === cat.slug ? "border-[#005EB8] text-[#005EB8]" : "border-transparent text-gray-600 hover:text-[#0f172a]"}`}
                >
                  {cat.title}
                </button>
              ))}
              </div>
            </div>

            {/* FAQ items */}
            <div className="space-y-8">
              {visibleCategories.map((category) => (
                <div key={category.slug} id={category.slug} className="scroll-mt-28">
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-4">
                    {category.title}
                  </h2>
                  <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {category.items.map((item, itemIndex) => {
                      const key = `${category.slug}-${item.question}`;
                      const isOpen = openItem === key;
                      const panelId = `${baseId}-${category.slug}-${itemIndex}-panel`;
                      const buttonId = `${baseId}-${category.slug}-${itemIndex}-button`;
                      return (
                        <div key={key}>
                          <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenItem(isOpen ? null : key)}
                            className="w-full flex items-center justify-between px-0 py-5 text-left hover:text-[#64A70B] transition-colors"
                          >
                            <span className="font-medium text-[#0f172a] pr-4">{item.question}</span>
                            <svg
                              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="pb-6 pr-6 text-gray-600 leading-relaxed font-normal">{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-16 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-4">Have a question that isn&apos;t answered here?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 font-normal">Get in touch — we are happy to discuss your project&apos;s specific requirements.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary rounded-none">Contact Us</Link>
              <Link href="/pre-construction" className="inline-flex items-center gap-2 text-[#64A70B] font-medium hover:gap-3 transition-all">
                Pre-Construction Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
