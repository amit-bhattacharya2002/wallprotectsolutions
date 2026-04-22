import { Header, Footer, PageHero } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Wall Protection Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of Acrovyn wall protection, Inpro, and Ricochet crash rails, corner guards, wall guards, handrails, and door protection for healthcare and institutional facilities across BC.",
};

const products = [
  {
    manufacturer: "Construction Specialties (C/S)",
    relationship: "BC Distributor",
    items: [
      "Acrovyn wall protection sheets and panels",
      "Crash rails, wall guards, corner guards",
      "Handrails, combination rails, column protectors",
      "Door and frame protection",
      "Cubicle curtain tracks",
      "Expansion joint covers and entrance mat systems",
      "Acrovyn by Design custom graphic systems",
    ],
    note: "C/S Acrovyn has been our leading wall protection product, with approximately $450K in sales in 2025. Widely specified by Canadian healthcare authorities.",
  },
  {
    manufacturer: "Inpro",
    relationship: "Full product access",
    items: [
      "PVC wall protection systems",
      "Crash rails, corner guards, wall guards, handrails",
      "Door and frame protection",
      "Cubicle curtain tracks",
      "Entrance systems and expansion joints",
      "Aspex custom graphic wall systems",
    ],
    note: "Inpro offers a comparable product range to C/S with competitive pricing and strong availability across all product types.",
  },
  {
    manufacturer: "Ricochet",
    relationship: "Part of Inpro lineup",
    items: [
      "Resilient wall protection products",
      "Impact-resistant rails and guards",
    ],
    note: "Ricochet provides higher-impact resilience for heavy-traffic applications — laundry, linen, loading areas, and corridors with exceptional wheeled cart exposure.",
  },
];

const applications = [
  "Healthcare corridors and nursing stations",
  "Hospital patient rooms and washrooms",
  "Clinical support spaces and utility rooms",
  "Education facilities and high-traffic hallways",
  "Commercial lobbies and reception areas",
  "Long-term care and assisted living facilities",
];

export default function WallProtectionSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wall Protection Systems"
          title="Wall protection systems for healthcare and institutional environments"
          subtitle="Supply and installation of crash rails, corner guards, wall guards, handrails, door and frame protection, and related architectural hardware — primarily through Construction Specialties and Inpro."
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
            { label: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
            { label: "FRL / Decorative", href: "/systems/frl-decorative" },
            { label: "All Systems", href: "/systems" },
          ]}
        />

        {/* Products */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">Manufacturer Partners</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Products we supply and install</h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                We work with both Construction Specialties and Inpro — which means we can recommend the best fit for your specification, budget, and availability requirements without being locked into a single brand.
              </p>
            </div>
            <div className="space-y-10">
              {products.map((product, index) => (
                <div key={product.manufacturer} className={`grid lg:grid-cols-2 gap-10 ${index > 0 ? "pt-10 border-t border-gray-200" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-[#0f172a]">{product.manufacturer}</h3>
                      <span className="px-3 py-1 bg-[#134e4a]/10 text-[#134e4a] text-xs font-medium rounded-full">{product.relationship}</span>
                    </div>
                    <ul className="space-y-2">
                      {product.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#134e4a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{product.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">Where wall protection systems are specified</h2>
                <div className="grid grid-cols-1 gap-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#134e4a] flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#2a4663] rounded-2xl p-10">
                <h3 className="text-xl font-semibold text-white mb-4">Acrovyn vs Inpro: Which is right for your project?</h3>
                <p className="text-white/70 leading-relaxed text-sm mb-4">
                  Both systems cover the same product categories. C/S Acrovyn has a longer heritage in Canadian healthcare and is widely specified by health authorities. Inpro offers competitive pricing and availability.
                </p>
                <p className="text-white/60 leading-relaxed text-sm mb-6">
                  We work with both and can recommend the best fit based on your specification, budget, and schedule. Where the spec names one product, we can often propose the other as an approved equal.
                </p>
                <Link href="/faq#wall-protection-systems" className="inline-flex items-center gap-2 text-[#5eead4] text-sm font-medium hover:gap-3 transition-all">
                  See the full FAQ on wall protection systems
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
