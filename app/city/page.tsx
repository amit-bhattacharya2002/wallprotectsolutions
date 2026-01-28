import Link from "next/link";
import { Header, Footer } from "@/app/components";
import { cities, getCitiesByRegion } from "@/app/data/cities";

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
        {/* Hero Section */}
        <section className="relative bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
              Serving British Columbia
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
              FRP Installations provides professional wall protection services across all of British Columbia. 
              From Metro Vancouver to the Interior, we've got you covered.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">{cities.length}+</div>
                <div className="text-gray-600 text-sm">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">{regions.length}</div>
                <div className="text-gray-600 text-sm">Regions Covered</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#0f172a] mb-2">1M+</div>
                <div className="text-gray-600 text-sm">Sq Ft Installed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities by Region */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              {regions.map((region) => (
                <div key={region}>
                  <h2 className="text-2xl font-semibold text-[#0f172a] mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#f97316] rounded-full" />
                    {region}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {citiesByRegion[region].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/city/${city.slug}`}
                        className="group p-4 bg-[#f8fafc] rounded-xl border border-gray-100 hover:border-[#f97316] hover:bg-white transition-all"
                      >
                        <span className="text-[#0f172a] font-medium group-hover:text-[#f97316] transition-colors">
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
        <section className="py-16 lg:py-24 bg-[#1e293b]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Don't see your city?
            </h2>
            <p className="text-white/80 font-normal mb-10 max-w-2xl mx-auto">
              We serve all of British Columbia. Contact us to discuss your project location 
              and we'll be happy to provide a quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#f97316] hover:text-white transition-all"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white font-medium transition-colors"
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
