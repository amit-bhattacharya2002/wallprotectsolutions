import { Header, Footer, PageHero, SitePhoto, SystemProjectsList } from "@/app/components";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";
import { systemProjects } from "@/app/data/system-projects";

const architecturalProjects = systemProjects["architectural-specialties"];

export const metadata = {
  title: "Architectural Specialties / Division 10 | FRP Installations Inc. | Wall Protection Solutions",
  description: "Expansion joint covers, entrance mat systems, cubicle curtain tracks, and door and frame protection. Division 10 architectural specialties through Construction Specialties and Inpro across BC.",
};

const items = [
  { name: "Expansion Joint Covers", description: "Interior and exterior expansion joint cover systems wherever building movement joints intersect wall, floor, and ceiling surfaces. Especially important in healthcare where continuity of hygienic surfaces across movement joints must be maintained. Primarily through Construction Specialties." },
  { name: "Entrance Mat Systems", description: "Recessed entrance mat and grid systems at primary building entrances. Primarily through Construction Specialties." },
  { name: "Cubicle Curtain Tracks & Curtains", description: "Ceiling-mounted cubicle curtain track systems and cubicle curtains for patient privacy in healthcare environments. Through Construction Specialties and Inpro." },
  { name: "Door & Frame Protection", description: "Kickplates, edge guards, and frame protection products to protect door openings from cart and equipment impact. Primarily through Construction Specialties Acrovyn and Inpro product lines." },
];

export default function ArchitecturalSpecialtiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.systems.architectural}
          eyebrow="Architectural Specialties / Division 10"
          title="Architectural specialties and Division 10 systems"
          subtitle="Expansion joint covers, entrance mat systems, cubicle curtain tracks, and door and frame protection — primarily through our Construction Specialties and Inpro relationships."
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "Wall Protection Systems", href: "/systems/wall-protection" },
            { label: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
            { label: "All Systems", href: "/systems" },
            { label: "Get a Quote", href: "/quote" },
          ]}
        />

        <section className="border-b border-slate-200/80 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <SitePhoto
                photo={sitePhotos.systems.architectural}
                overlay="gradient"
                className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]"
              />
              <div>
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.16em] text-[#64A70B]">
                  Complete healthcare packages
                </span>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Division 10 as part of a single accountable scope
                </h2>
                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  On major healthcare projects such as the Chilliwack Urgent and Primary Care Centre, architectural
                  specialties — door and frame protection, cubicle tracks, expansion joints — are supplied and installed
                  alongside wall protection and hygienic cladding as one coordinated subcontract.
                </p>
                <SystemProjectsList
                  systemName={architecturalProjects.name}
                  projectSlugs={architecturalProjects.slugs}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start mb-14">
              <div>
                <span className="text-sm font-medium text-[#64A70B] tracking-wider uppercase mb-4 block">Division 10</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                  Systems we supply and install
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Door and frame protection, expansion joint covers, entrance mat systems, and cubicle curtain tracks
                  are commonly specified alongside wall protection on healthcare and institutional projects.
                </p>
              </div>
              <SitePhoto photo={sitePhotos.systems.architecturalSecondary} overlay="gradient" className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.name} className="p-8 border border-gray-200 rounded-xl hover:border-[#64A70B] transition-colors">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-4">{item.name}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f8fafc] py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                  Specifying Division 10 with wall protection?
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We package architectural specialties with hygienic cladding and wall protection so GCs get one coordinated supply-and-install scope.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link href="/systems" className="btn-secondary">
                  Browse All Systems
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
