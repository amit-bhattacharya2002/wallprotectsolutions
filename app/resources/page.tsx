import { Header, Footer, PageHero } from "@/app/components";
import { resourceArticles } from "@/app/data/resources";
import Link from "next/link";

export const metadata = {
  title: "Resources & Technical Articles | FRP Installations Inc. | Wall Protection Solutions",
  description: "Technical articles on wall protection systems, hygienic cladding, FRP vs FRL, Altro Whiterock, and product selection for healthcare and institutional construction in BC.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Resources"
          title="Technical resources"
          subtitle="Practical technical articles for GCs, project managers, architects, and specification writers. Written for real project environments — not homeowners."
          quickLinksTitle="Quick links"
          quickLinks={[
            { label: "Healthcare Experience", href: "/healthcare" },
            { label: "Pre-Construction Support", href: "/pre-construction" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {resourceArticles.map((article) => (
                <Link
                  href={`/resources/${article.slug}`}
                  key={article.slug}
                  className="group p-8 border border-gray-200 rounded-xl hover:border-[#0d9488] transition-colors"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-[#f8fafc] text-gray-500 text-xs font-medium rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal mb-4">{article.description}</p>
                  <div className="flex items-center gap-2 text-[#134e4a] text-sm font-medium">
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
