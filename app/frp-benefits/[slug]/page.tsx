import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer, PageHero, BenefitIcon } from "@/app/components";
import { frpBenefits, getBenefitBySlug, getAllBenefitSlugs } from "@/app/data/frp-benefits";

// Generate static params for all benefits
export function generateStaticParams() {
  return getAllBenefitSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each benefit
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const benefit = getBenefitBySlug(slug);
  if (!benefit) return { title: "Benefit Not Found" };
  
  return {
    title: `FRP Benefits: ${benefit.title} | FRP Installations`,
    description: benefit.description,
  };
}

export default async function BenefitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const benefit = getBenefitBySlug(slug);
  
  if (!benefit) {
    notFound();
  }

  // Get other benefits (excluding current)
  const otherBenefits = frpBenefits.filter(b => b.slug !== benefit.slug);

  return (
    <>
      <Header />
      <main>
        <PageHero
          backLink={{ href: "/frp-benefits", label: "Back to Why FRP" }}
          eyebrow="FRP Benefits"
          title={benefit.title}
          subtitle={benefit.description}
          subtitleClassName="text-lg md:text-xl"
          quickLinksTitle="Other benefits"
          quickLinks={otherBenefits.slice(0, 6).map((b) => ({
            label: b.shortTitle,
            href: `/frp-benefits/${b.slug}`,
          }))}
        />

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed font-normal text-lg mb-10">
                    {benefit.fullDescription}
                  </p>
                </div>

                {/* Applications */}
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Common Applications</h2>
                  <div className="space-y-4">
                    {benefit.applications.map((application, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-[#134e4a]/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#134e4a]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip */}
                {benefit.proTip && (
                  <div className="mt-10 p-6 bg-[#2a4663] rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#5eead4]/20 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#5eead4]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Pro Tip</h3>
                        <p className="text-white/70 font-normal">{benefit.proTip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#f8fafc] rounded-2xl p-8 sticky top-32">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-6">General Contractors Corner</h3>
                  <p className="text-gray-600 font-normal mb-6 text-sm leading-relaxed">
                    Are you quoting a new project that specifies FRP or Wall Protection? Get in touch with our expert team for a detailed quotation.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Class A & Class C Panels Available",
                      "Popular Colours In-Stock",
                      "Experienced & Professional Installers",
                      "Knowledgeable Sales Team",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <svg className="w-5 h-5 text-[#134e4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2a4663] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d9488] transition-colors"
                    >
                      Submit Project Specs
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-[#0f172a] px-6 py-3 rounded-full font-medium hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
                    >
                      Schedule Site Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Benefits */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-8">Other FRP Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherBenefits.map((b) => (
                <Link
                  key={b.slug}
                  href={`/frp-benefits/${b.slug}`}
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#0d9488] hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#134e4a]/10 text-[#134e4a] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#0d9488]/15 group-hover:text-[#0d9488]">
                    <BenefitIcon name={b.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition-colors">
                    {b.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal line-clamp-2">
                    {b.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#2a4663]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-white/80 font-normal mb-10 max-w-xl mx-auto">
              Get a free quote today. Our team will attend your site for measurements at no additional cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#0d9488] hover:text-white transition-all"
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
