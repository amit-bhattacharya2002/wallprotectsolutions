import { Header, Footer, PageHero, SitePhoto, SystemProjectsList } from "@/app/components";
import { sitePhotos } from "@/app/data/site-photos";
import { systemProjects } from "@/app/data/system-projects";

const pvcProjects = systemProjects["pvc-liner"];

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

        <section className="border-b border-slate-200/80 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <SitePhoto
                photo={sitePhotos.systems.pvcLiner}
                overlay="gradient"
                className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
              />
              <div>
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#134e4a]">
                  Washdown environments
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Sanitary wall systems for production facilities
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  At Breathe Medical Manufacturing we installed FRP and hygienic wall systems throughout
                  production areas — the same washdown-capable, easy-to-clean surfaces PVC liner systems
                  are specified for in food processing, agricultural, and industrial environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                <SystemProjectsList
                  systemName={pvcProjects.name}
                  projectSlugs={pvcProjects.slugs}
                  className="mt-8"
                />
              </div>
              <div>
                <SitePhoto photo={sitePhotos.systems.pvcLinerSecondary} overlay="gradient" className="mb-8 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
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
