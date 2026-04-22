import { Header, Footer, PageHero } from "@/app/components";
import Link from "next/link";
import { industries } from "@/app/data/industries";

export const metadata = {
  title: "Industries Served | FRP Installations Inc. | Wall Protection Solutions",
  description: "Healthcare, education, food service, commercial, and industrial wall protection across British Columbia. 75%+ healthcare focus. 700+ projects completed.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Industries served"
          subtitle="Healthcare is the core of our business — 75%+ of our work. We also serve education, food service, commercial, and industrial sectors across British Columbia."
          quickLinksTitle="Industries"
          quickLinks={[
            { label: "Healthcare", href: "/healthcare" },
            { label: "Education", href: "/industries" },
            { label: "Food Service", href: "/industries" },
            { label: "Commercial", href: "/industries" },
            { label: "Industrial", href: "/industries" },
            { label: "View all systems", href: "/systems" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {industries.map((industry, index) => (
                <div key={industry.slug} className={`grid lg:grid-cols-2 gap-12 items-start ${index > 0 ? "pt-12 border-t border-gray-200" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight">{industry.name}</h2>
                      {industry.primary && (
                        <span className="px-3 py-1 bg-[#134e4a]/10 text-[#134e4a] text-xs font-medium rounded-full">Primary Focus</span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed font-normal mb-6">{industry.description}</p>
                    {industry.slug === "healthcare" && (
                      <Link href="/healthcare" className="inline-flex items-center gap-2 text-[#134e4a] font-medium hover:gap-3 transition-all text-sm">
                        View healthcare experience
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Systems commonly installed</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.systems.map((sys) => (
                        <span key={sys} className="px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
