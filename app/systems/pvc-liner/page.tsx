import { Header, Footer, PageHero } from "@/app/components";

export const metadata = {
  title: "PVC Liner Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of direct-to-stud PVC liner panel systems from Octaform, Clean 16, EZ Liner, AG-Tuf, and DelPro for industrial, agricultural, and washdown environments across BC.",
};

const manufacturers = ["Octaform — direct-to-stud PVC liner systems", "Clean 16 — PVC liner panel systems", "EZ Liner — PVC liner panel systems", "AG-Tuf — PVC liner panel systems", "DelPro — PVC liner panel systems"];

const applications = ["Agricultural barns and livestock facilities", "Food processing plants and packing facilities", "Commercial car washes", "Industrial utility and maintenance spaces", "Brewery and winery production areas", "Washdown and sanitation-intensive environments"];

export default function PVCLinerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="PVC Liner Systems"
          title="PVC structural liner systems for industrial and agricultural environments"
          subtitle="Direct-to-stud PVC liner panels for washdown, industrial, and food processing environments where a seamless, durable, cleanable wall surface is required."
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
            { label: "Wet Wall Systems", href: "/systems/wet-wall" },
            { label: "Stainless Protection", href: "/systems/stainless-protection" },
            { label: "All Systems", href: "/systems" },
          ]}
        />

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">Manufacturers</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-8">PVC liner manufacturers we work with</h2>
                <div className="space-y-3">
                  {manufacturers.map((m) => (
                    <div key={m} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#134e4a] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-[#134e4a] tracking-wider uppercase mb-4 block">Applications</span>
                <h2 className="text-3xl font-semibold text-[#0f172a] tracking-tight mb-8">Where PVC liner systems are used</h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#134e4a] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
