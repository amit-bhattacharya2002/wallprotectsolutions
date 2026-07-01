import Link from "next/link";
import { Header, Footer, PageHero, SitePhoto } from "@/app/components";
import { cities, getCitiesByRegion } from "@/app/data/cities";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Service Areas | FRP Installations | British Columbia",
  description: "FRP Installations serves all of British Columbia including Metro Vancouver, Fraser Valley, Vancouver Island, Okanagan, Kootenays, and Northern BC.",
};

export default function ServiceAreasPage() {
  const citiesByRegion = getCitiesByRegion();
  const regions = Object.keys(citiesByRegion).sort();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Serving British Columbia"
          subtitle="Wall protection, hygienic cladding, FRP, FRL, and interior protection systems delivered across Metro Vancouver, the Fraser Valley, Vancouver Island, the Interior, and beyond."
          breadcrumb="Service Areas"
          quickLinksTitle="Explore"
          quickLinks={[
            { label: "Healthcare Experience", href: "/healthcare" },
            { label: "Systems", href: "/systems" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ]}
          fullHeight={false}
        />

        <section className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <SitePhoto
                photo={sitePhotos.pages.city}
                overlay="gradient"
                className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
              />
              <div className="sticky-side">
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#64A70B]">
                  BC-wide coverage
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Local crews, province-wide reach
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  From Fraser Valley healthcare projects like Chilliwack UPCC to commercial builds in Langley
                  and pharmaceutical facilities across Metro Vancouver — we deliver wall protection and hygienic
                  cladding wherever your project is located in British Columbia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-shell bg-[#f8fafc] border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="surface-card p-6">
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">{cities.length}+</div>
                <div className="text-slate-500 text-sm">Cities Served</div>
              </div>
              <div className="surface-card p-6">
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">{regions.length}</div>
                <div className="text-slate-500 text-sm">Regions Covered</div>
              </div>
              <div className="surface-card p-6">
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">500+</div>
                <div className="text-slate-500 text-sm">Projects Completed</div>
              </div>
              <div className="surface-card p-6">
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">5M+</div>
                <div className="text-slate-500 text-sm">Sq Ft Installed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities by Region */}
        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start mb-16">
              <div className="max-w-2xl">
                <span className="eyebrow">Find your city</span>
                <h2 className="section-title mb-5">
                  Service areas across British Columbia
                </h2>
                <p className="section-lead">
                  Select your city for local project information, or contact us if your location
                  is not listed — we serve the entire province.
                </p>
              </div>
              <SitePhoto
                photo={sitePhotos.pages.citySecondary}
                overlay="gradient"
                className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
              />
            </div>
            <div className="space-y-16">
              {regions.map((region) => (
                <div key={region}>
                  <h2 className="text-2xl font-semibold text-[#0f172a] mb-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#005EB8]" />
                    {region}
                  </h2>
                  <div className="grid border-y border-slate-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {citiesByRegion[region].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/city/${city.slug}`}
                        className="group border-b border-slate-200 py-3 text-sm font-medium text-[#0f172a] transition-colors hover:text-[#64A70B] sm:px-4 xl:[&:nth-last-child(-n+6)]:border-b-0"
                      >
                        <span>
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-shell-lg section-shell-dark brand-blue-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Don&apos;t see your city?
            </h2>
            <p className="text-white/80 font-normal mb-10 max-w-2xl mx-auto">
              We serve all of British Columbia. Contact us to discuss your project location
              and we&apos;ll be happy to provide a quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#64A70B] hover:text-white transition-all"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link> */}
              <Link
                href="/contact"
                className="inline-flex items-center  gap-3 border border-white/25 text-white/85 px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
