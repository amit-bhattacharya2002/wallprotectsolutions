import Link from "next/link";
import { Header, Footer, PageHero, SitePhoto, SystemProjectsList } from "@/app/components";
import { sitePhotos } from "@/app/data/site-photos";
import { systemProjects } from "@/app/data/system-projects";

const wetWallProjects = systemProjects["wet-wall"];

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
          visual="photo"
          backgroundPhoto={sitePhotos.systems.wetWall}
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
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <Link href="/wall-protection/manufacturers/avonite" className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#64A70B] transition-colors hover:text-[#005EB8]">
                  Avonite Wet Walls
                </Link>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">The right wet wall solution for healthcare washrooms</h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-6">
                  Avonite Wet Walls is a solid surface wet wall system that provides a seamless, non-porous, fully waterproof wall surface for healthcare washrooms, shower rooms, and wet areas. We have installed wet wall and hygienic systems at UPCC clinics across BC, including the Chilliwack Urgent and Primary Care Centre.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  For high infection-control classification wet areas, we recommend either Avonite Wet Walls or Altro Whiterock welded hygienic cladding — the right choice depending on the clinical requirement, budget, and transition details.
                </p>
                <div className="space-y-3">
                  {["Healthcare washrooms and shower rooms", "UPCC clinic washrooms", "Wet areas in clinical environments", "Spaces requiring fully waterproof, non-porous surfaces"].map((app) => (
                    <div key={app} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#64A70B] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
                <SystemProjectsList
                  systemName={wetWallProjects.name}
                  projectSlugs={wetWallProjects.slugs}
                  className="mt-8"
                />
              </div>
              <div className="space-y-6">
                <SitePhoto photo={sitePhotos.systems.wetWall} overlay="gradient" className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
