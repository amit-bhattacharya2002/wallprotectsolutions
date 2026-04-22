import Link from "next/link";
import { Header, Footer, PageHero, BenefitIcon } from "@/app/components";
import { frpBenefits } from "@/app/data/frp-benefits";

export const metadata = {
  title: "Why FRP? Benefits of FRP Panels | FRP Installations",
  description:
    "Discover the benefits of FRP panels: cost effective, corrosion resistant, impact resistant, lightweight, high strength, flexible, and more.",
};

const heroQuickLinks = frpBenefits.map((benefit) => ({
  label: benefit.shortTitle,
  href: `/frp-benefits/${benefit.slug}`,
}));

const stats = [
  { value: `${frpBenefits.length}`, label: "Key benefits" },
  { value: "5+", label: "Manufacturers" },
  { value: "20+", label: "Applications" },
  { value: "12", label: "Month warranty" },
];

export default function FRPBenefitsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Why FRP?"
          subtitle="Fiberglass Reinforced Plastic panels are the preferred wall protection choice for commercial, industrial, and healthcare buildings — engineered for durability, hygiene, and long-term value."
          quickLinks={heroQuickLinks}
          quickLinksTitle="Jump to a benefit"
        />

        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-16">
              <span className="eyebrow">Panel benefits</span>
              <h2 className="section-title mb-5">
                Eight reasons specifiers choose FRP
              </h2>
              <p className="section-lead">
                Every benefit below links to a deeper page with applications,
                pro tips, and specification guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frpBenefits.map((benefit) => (
                <Link
                  key={benefit.slug}
                  href={`/frp-benefits/${benefit.slug}`}
                  className="group surface-card-muted p-8 hover:border-[#0d9488] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#134e4a]/10 text-[#134e4a] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0d9488]/15 group-hover:text-[#0d9488]">
                    <BenefitIcon name={benefit.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-normal leading-relaxed mb-5">
                    {benefit.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#134e4a] group-hover:text-[#0d9488] group-hover:gap-3 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell-lg section-shell-dark bg-[#2a4663] border-t border-white/5">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="eyebrow">Next steps</span>
                <h2 className="section-title section-title-dark mb-5">
                  Ready to experience the benefits of FRP?
                </h2>
                <p className="section-lead section-lead-dark mb-8">
                  Our team can help you select the right FRP products for your
                  specific application. We provide free on-site consultations
                  and measurements across British Columbia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-medium hover:bg-[#0d9488] hover:text-white transition-all"
                  >
                    Get a free quote
                  </Link>
                  <Link
                    href="/wall-protection"
                    className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:border-[#5eead4] hover:text-[#5eead4] hover:bg-white/5 transition-all"
                  >
                    View products
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="surface-card-dark p-6 text-center"
                  >
                    <div className="text-4xl font-semibold text-[#5eead4] mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
