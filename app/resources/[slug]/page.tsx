import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer, Header, PageHero } from "@/app/components";
import { getResourceArticle, resourceArticles } from "@/app/data/resources";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getResourceArticle(params.slug);

  if (!article) {
    return {
      title: "Resource Not Found | FRP Installations Inc. | Wall Protection Solutions",
    };
  }

  return {
    title: `${article.title} | Resources | FRP Installations Inc. | Wall Protection Solutions`,
    description: article.description,
  };
}

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const article = getResourceArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Resources"
          title={article.title}
          description={article.description}
          fullHeight={false}
          quickLinks={[
            { label: "All Resources", href: "/resources" },
            { label: "FAQ", href: "/faq" },
            { label: "Pre-Construction", href: "/pre-construction" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <section className="section-shell bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#f0fdfa] text-[#0d9488] text-xs font-semibold tracking-wide uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="surface-card p-8 lg:p-10 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight mb-5">
                Overview
              </h2>
              <div className="space-y-5 text-base text-gray-600 leading-relaxed">
                {article.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="surface-card-muted p-8 lg:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d9488] mb-4">
                Key Takeaways
              </div>
              <ul className="space-y-4">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#0d9488] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:gap-3 transition-all"
              >
                Back to all resources
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
              >
                Discuss your project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
