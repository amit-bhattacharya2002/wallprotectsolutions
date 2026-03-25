import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/app/components";
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

// Icon components
const icons: Record<string, React.ReactNode> = {
  dollar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  impact: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  feather: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
    </svg>
  ),
  strength: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),
  flex: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  temperature: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  bolt: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

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
        {/* Hero Section */}
        <section className="relative min-h-dvh bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-left">
            <div className="max-w-3xl">
              <Link 
                href="/wall-protection" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Wall Protection
              </Link>
              <span className="text-[#f97316] text-sm font-medium uppercase tracking-wider block mb-4">
                FRP Benefits
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                {benefit.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </section>

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
                        <div className="w-8 h-8 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
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
                  <div className="mt-10 p-6 bg-[#0f172a] rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                        <svg className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f97316] transition-colors"
                    >
                      Submit Project Specs
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-[#0f172a] px-6 py-3 rounded-full font-medium hover:border-[#f97316] hover:text-[#f97316] transition-colors"
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
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] hover:shadow-lg transition-all"
                >
                  <div className="text-[#f97316] mb-4">
                    {icons[b.icon]}
                  </div>
                  <h3 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">
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
        <section className="py-16 lg:py-24 bg-[#0f172a]">
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
