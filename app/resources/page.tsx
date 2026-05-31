import { Header, Footer, PageHero, SitePhoto } from "@/app/components";
import { resourceArticles } from "@/app/data/resources";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";

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

        <section className="border-b border-slate-200/80 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <SitePhoto
                photo={sitePhotos.pages.resources}
                overlay="gradient"
                className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
              />
              <div className="sticky-side">
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#134e4a]">
                  From the field
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Spec guidance grounded in installed work
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Our articles draw on real healthcare and institutional projects — including full wall protection
                  and hygienic cladding scopes at UPCC facilities like Chilliwack, pharmaceutical environments
                  like CSN Pharma, and medical manufacturing at Breathe Medical.
                </p>
              </div>
            </div>
          </div>
        </section>

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
