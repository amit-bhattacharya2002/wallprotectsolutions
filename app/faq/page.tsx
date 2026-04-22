"use client";

import { Header, Footer, PageHero } from "@/app/components";
import Link from "next/link";
import { useState } from "react";
import { faqCategories } from "@/app/data/faq";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleCategories = activeCategory === "all"
    ? faqCategories
    : faqCategories.filter((c) => c.slug === activeCategory);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Technical reference for GCs, project managers, estimators, and design teams. Answers to common questions about wall protection systems, hygienic cladding, pre-construction, and documentation."
          quickLinksTitle="Categories"
          quickLinks={[
            { label: "General", href: "/faq" },
            { label: "Pre-Construction", href: "/faq" },
            { label: "Submittals", href: "/faq" },
            { label: "Healthcare & Hygienic", href: "/faq" },
            { label: "Wall Protection Systems", href: "/faq" },
          ]}
        />

        {/* Category filter + FAQ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-14">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-[#2a4663] text-white" : "bg-[#f8fafc] text-gray-600 hover:bg-gray-200"}`}
              >
                All Questions
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.slug ? "bg-[#2a4663] text-white" : "bg-[#f8fafc] text-gray-600 hover:bg-gray-200"}`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* FAQ items */}
            <div className="space-y-12">
              {visibleCategories.map((category) => (
                <div key={category.slug}>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-6 pb-3 border-b border-gray-200">
                    {category.title}
                  </h2>
                  <div className="space-y-2">
                    {category.items.map((item) => {
                      const key = `${category.slug}-${item.question}`;
                      const isOpen = openItem === key;
                      return (
                        <div key={key} className="border border-gray-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setOpenItem(isOpen ? null : key)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f8fafc] transition-colors"
                          >
                            <span className="font-medium text-[#0f172a] pr-4">{item.question}</span>
                            <svg
                              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 pt-2 bg-[#f8fafc] border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed font-normal">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-4">Have a question that isn't answered here?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 font-normal">Get in touch — we are happy to discuss your project's specific requirements.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2a4663] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3a597b] transition-colors">Contact Us</Link>
              <Link href="/pre-construction" className="inline-flex items-center gap-2 text-[#134e4a] font-medium hover:gap-3 transition-all">
                Pre-Construction Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
