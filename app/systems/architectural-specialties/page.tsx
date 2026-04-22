import { Header, Footer, PageHero } from "@/app/components";

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

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.name} className="p-8 border border-gray-200 rounded-xl hover:border-[#0d9488] transition-colors">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-4">{item.name}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
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
