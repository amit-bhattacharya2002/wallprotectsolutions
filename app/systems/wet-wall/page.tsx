import { Header, Footer, PageHero } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Wet Wall Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Avonite Wet Walls — solid surface wet wall systems for healthcare washrooms, shower rooms, and wet areas. Installed at multiple UPCC clinics across BC.",
};

export default function WetWallPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wet Wall Systems"
          title="Solid surface wet wall systems for healthcare environments"
          subtitle="Avonite Wet Walls for healthcare washrooms, shower rooms, and wet areas requiring a seamless, waterproof, durable wall surface."
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
            { label: "PVC Liner Systems", href: "/systems/pvc-liner" },
            { label: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
            { label: "All Systems", href: "/systems" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">Avonite Wet Walls</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">The right wet wall solution for healthcare washrooms</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-6">
                  Avonite Wet Walls is a solid surface wet wall system that provides a seamless, non-porous, fully waterproof wall surface for healthcare washrooms, shower rooms, and wet areas. We have installed Avonite Wet Walls at multiple UPCC clinics across BC, including all washrooms at Cloverdale UPCC.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  For high infection-control classification wet areas, we recommend either Avonite Wet Walls or Altro Whiterock welded hygienic cladding — the right choice depending on the clinical requirement, budget, and transition details.
                </p>
                <div className="space-y-3">
                  {["Healthcare washrooms and shower rooms", "UPCC clinic washrooms", "Wet areas in clinical environments", "Spaces requiring fully waterproof, non-porous surfaces"].map((app) => (
                    <div key={app} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#134e4a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-8 lg:p-10 border border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Project Reference</div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Cloverdale UPCC</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Avonite Wet Walls installed in all washrooms as part of the complete interior protection scope at Cloverdale UPCC — one of 16+ Urgent Primary Care Centres we have completed across BC.
                </p>
                <Link href="/healthcare" className="inline-flex items-center gap-2 text-[#134e4a] text-sm font-medium hover:gap-3 transition-all">
                  View healthcare experience
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
