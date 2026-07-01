import { Header, Footer, PageHero, SitePhoto } from "@/app/components";
import { resourceArticles } from "@/app/data/resources";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Healthcare Knowledge Centre | FRP Installations Inc. | Wall Protection Solutions",
  description: "Healthcare wall systems knowledge centre for GCs, architects, and project teams. Guidance on sink splash zones, utility rooms, hygienic cladding, FRP, FRL, Acrovyn, and wall protection systems.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="editorial"
          eyebrow="Healthcare Knowledge Centre"
          title="Healthcare wall systems knowledge centre"
          subtitle="Field-informed guidance for GCs, project managers, architects, and specification writers working with healthcare wall protection, hygienic surfaces, and clinical interior finish decisions."
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
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#64A70B]">
                  From the field
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Knowledge grounded in installed healthcare work
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  These resources draw on real healthcare and institutional projects, including UPCC facilities,
                  pharmaceutical environments, medical manufacturing spaces, utility rooms, corridors, and
                  clinical support areas across British Columbia.
                </p>
                <p className="mt-5 border-l-2 border-[#64A70B] pl-4 text-sm leading-relaxed text-slate-500">
                  Final requirements vary by project specifications, health authority standards, and Infection Prevention & Control review. These articles are planning resources, not design directives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Articles and guides
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                Practical healthcare surface guidance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resourceArticles.map((article) => (
                <Link
                  href={`/resources/${article.slug}`}
                  key={article.slug}
                  className="group border border-gray-200 p-6 transition-colors hover:border-[#64A70B]"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-[#f8fafc] text-gray-500 text-xs font-medium rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3 group-hover:text-[#64A70B] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal mb-4">{article.description}</p>
                  <div className="flex items-center gap-2 text-[#64A70B] text-sm font-medium">
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
