import { Footer, Header, PageHero } from "@/app/components";
import Link from "next/link";

export const metadata = {
  title: "Wall Protection Systems & Products | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of wall protection systems, hygienic wall cladding, FRP/FRL panels, PVC liner systems, wet wall systems, stainless protection, and architectural specialties across British Columbia.",
};

const systems = [
  {
    number: "01",
    name: "Wall Protection Systems",
    href: "/systems/wall-protection",
    description: "Construction Specialties Acrovyn, Inpro, and Ricochet crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for C/S.",
    tags: ["Acrovyn", "Inpro", "Ricochet", "Crash Rails", "Corner Guards"],
  },
  {
    number: "02",
    name: "Hygienic Wall Cladding",
    href: "/systems/hygienic-wall-cladding",
    description: "Altro Whiterock welded seamless systems, Altro Puraguard, True North, and AM-Clad. Altro-trained and approved installer. The right system matched to the infection-control requirement.",
    tags: ["Altro Whiterock", "Puraguard", "True North", "AM-Clad", "Seamless"],
  },
  {
    number: "03",
    name: "FRP Wall Systems",
    href: "/systems/frp-wall-systems",
    description: "Traditional and decorative Fiberglass Reinforced Plastic panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), Marlite, Panolam, and Nudo.",
    tags: ["Glasbord", "Exceliner", "Glasliner", "Marlite", "Healthcare"],
  },
  {
    number: "04",
    name: "FRL / Decorative Wall Systems",
    href: "/systems/frl-decorative",
    description: "Panolam FRL (400+ colours), Formica HardStop, and Marlite decorative lines for healthcare corridors, public spaces, and institutional interiors requiring a finished appearance.",
    tags: ["Panolam FRL", "HardStop", "400+ Colours", "Healthcare Corridors"],
  },
  {
    number: "05",
    name: "PVC Liner Systems",
    href: "/systems/pvc-liner",
    description: "Direct-to-stud PVC structural liner systems from Octaform, Clean 16, EZ Liner, AG-Tuf, and DelPro for industrial, agricultural, food processing, and washdown environments.",
    tags: ["Octaform", "Clean 16", "Industrial", "Washdown", "Agricultural"],
  },
  {
    number: "06",
    name: "Wet Wall Systems",
    href: "/systems/wet-wall",
    description: "Avonite Wet Walls solid surface systems for healthcare washrooms, shower rooms, and wet areas requiring a seamless, waterproof, high-quality wall surface.",
    tags: ["Avonite", "Healthcare Washrooms", "Solid Surface", "Waterproof"],
  },
  {
    number: "07",
    name: "Architectural Specialties / Division 10",
    href: "/systems/architectural-specialties",
    description: "Expansion joint covers, entrance mat systems, cubicle curtain tracks and curtains, and door and frame protection — primarily through Construction Specialties and Inpro.",
    tags: ["Expansion Joints", "Entrance Mats", "Cubicle Tracks", "Division 10"],
  },
  {
    number: "08",
    name: "Stainless Protection",
    href: "/systems/stainless-protection",
    description: "Custom-fabricated stainless steel corner protection, wall end caps, and wall cladding for food processing, commercial kitchens, and environments requiring premium metal protection.",
    tags: ["Custom Fabrication", "Food Processing", "Commercial Kitchen"],
  },
];

export default function SystemsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Wall protection systems & products"
          subtitle="We supply and install the complete range of interior protection systems for healthcare, institutional, and commercial construction across British Columbia."
          subtitleClassName="text-lg md:text-xl"
          breadcrumb="Systems & Products"
          quickLinksTitle="Systems"
          quickLinks={[
            { label: "Wall Protection", href: "/systems/wall-protection" },
            { label: "Hygienic Wall Cladding", href: "/systems/hygienic-wall-cladding" },
            { label: "FRP Wall Systems", href: "/systems/frp-wall-systems" },
            { label: "FRL / Decorative", href: "/systems/frl-decorative" },
            { label: "PVC Liner", href: "/systems/pvc-liner" },
            { label: "Wet Wall", href: "/systems/wet-wall" },
          ]}
        />

        {/* Systems list */}
        <section className="section-shell bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-gray-500 leading-relaxed font-normal text-base md:text-lg">
                We focus on selecting the right system for the environment, not promoting a single manufacturer. Different systems perform best in different applications, budgets, and maintenance conditions.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {systems.map((system) => (
                <Link
                  key={system.number}
                  href={system.href}
                  className="group relative block px-4 py-10 md:py-12 border-b border-gray-200 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#2a4663] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  <div className="relative z-10 grid gap-4 md:grid-cols-12 md:gap-8 items-start md:items-center">
                    <div className="md:col-span-1">
                      <span className="text-sm text-gray-400 group-hover:text-white/60 font-medium transition-colors duration-300">
                        {system.number}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a] group-hover:text-[#0d9488] transition-colors duration-300 tracking-tight">
                        {system.name}
                      </h3>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-gray-600 group-hover:text-white/70 leading-relaxed font-normal transition-colors duration-300 text-sm md:text-base">
                        {system.description}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap gap-1.5">
                        {system.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 group-hover:bg-white/10 text-gray-500 group-hover:text-white/60 rounded text-xs transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-1 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
