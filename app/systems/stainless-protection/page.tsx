import { Header, Footer, PageHero, SitePhoto, SystemProjectsList } from "@/app/components";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";
import { systemProjects } from "@/app/data/system-projects";

const stainlessProjects = systemProjects["stainless-protection"];

export const metadata = {
  title: "Stainless Protection | FRP Installations Inc. | Wall Protection Solutions",
  description: "Custom-fabricated stainless steel corner protection, wall end caps, and wall cladding for food processing, commercial kitchens, and industrial environments across BC.",
};

const products = ["Stainless steel corner protection", "Stainless wall end caps", "Stainless wall cladding panels", "Custom stainless fabrication to specification"];
const applications = ["Industrial food processing facilities", "Commercial kitchens with harsh chemical washdown", "Environments requiring premium metal aesthetic", "Spaces where plastic wall protection systems are not appropriate", "Agricultural processing facilities"];

export default function StainlessProtectionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.systems.stainless}
          eyebrow="Stainless Protection"
          title="Custom stainless steel wall protection"
          subtitle="Custom-fabricated stainless corner protection, wall end caps, and wall cladding for food processing, commercial kitchens, and environments where plastic wall protection systems are not appropriate."
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "Wall Protection Systems", href: "/systems/wall-protection" },
            { label: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
            { label: "All Systems", href: "/systems" },
            { label: "Get a Quote", href: "/quote" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-medium text-[#64A70B] tracking-wider uppercase mb-4 block">Products</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">Custom local fabrication</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">Stainless steel wall protection is fabricated locally to specification. Smaller volume than our plastic wall protection and hygienic cladding work, but an important capability signal — and often part of a larger wall protection scope.</p>
                <div className="space-y-3 mb-0">
                  {products.map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#64A70B] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{p}</span>
                    </div>
                  ))}
                </div>
                <SystemProjectsList
                  systemName={stainlessProjects.name}
                  projectSlugs={stainlessProjects.slugs}
                  className="mt-8"
                />
              </div>
              <div>
                <SitePhoto photo={sitePhotos.systems.stainless} overlay="gradient" className="mb-8 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
                <span className="text-sm font-medium text-[#64A70B] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-6">When stainless is the right choice</h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#005EB8] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f8fafc] py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Need stainless as part of a larger wall protection package?
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We often coordinate stainless corner guards and cladding with FRP, hygienic cladding, and Division 10 specialties under one accountable supply-and-install scope.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link href="/systems" className="btn-secondary">
                  Browse All Systems
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
