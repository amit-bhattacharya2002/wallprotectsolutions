import { Header, Footer, PageHero, RelatedHealthcareResources, SitePhoto, SystemProjectsList } from "@/app/components";
import Link from "next/link";
import { sitePhotos } from "@/app/data/site-photos";
import { systemProjects } from "@/app/data/system-projects";

const frpProjects = systemProjects["frp-wall-systems"];

export const metadata = {
  title: "FRP Wall Systems | FRP Installations Inc. | Wall Protection Solutions",
  description: "Supply and installation of traditional and decorative FRP wall panels from Valto (Glasbord), Stabilit/Graham (Exceliner, Glasliner), Marlite, Panolam, and Nudo across British Columbia.",
};

const manufacturers = [
  {
    name: "Valto (formerly Crane Composites)",
    products: ["Glasbord — traditional FRP, industry standard", "Varietex — decorative FRP line with printed surface patterns"],
  },
  {
    name: "Stabilit / Graham",
    products: ["Exceliner and Glasliner", "White pebbled and white smooth — major volume products in healthcare", "Reliable Western Canada supply and cost-effective AHJ-friendly options"],
  },
  {
    name: "Marlite",
    products: ["Standard FRP", "Induro (HPL-faced FRP)", "Symmetrix FRP (tile appearance)", "Artizan Max (decorative)"],
  },
  {
    name: "Panolam Surface Systems",
    products: ["Traditional FRP wall panel options", "Also available as FRL — see FRL / Decorative Systems"],
  },
  {
    name: "Nudo",
    products: ["Traditional FRP wall panel products"],
  },
];

const applications = [
  "Healthcare support spaces — soiled utility, clean utility, janitor rooms",
  "Hospital kitchens and food preparation areas",
  "Patient washrooms and change rooms",
  "Commercial restaurant and food service kitchens",
  "Agricultural and food processing facilities",
  "Industrial utility and washdown spaces",
  "School cafeterias and food prep areas",
];

function CheckBullet() {
  return (
    <svg className="h-4 w-4 shrink-0 translate-y-0.5 text-[#64A70B]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function FRPWallSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.systems.frp}
          eyebrow="FRP Wall Systems"
          title="Fiberglass Reinforced Plastic wall systems"
          subtitle="Traditional and decorative FRP wall panels for healthcare support spaces, food service, industrial, and utility environments. Multiple manufacturer options across all product types."
          compact
          quickLinksTitle="Related systems"
          quickLinks={[
            { label: "Wall Protection Systems", href: "/systems/wall-protection" },
            { label: "FRL / Decorative", href: "/systems/frl-decorative" },
            { label: "PVC Liner Systems", href: "/systems/pvc-liner" },
            { label: "All Systems", href: "/systems" },
          ]}
        />

        <section className="scroll-mt-28 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#64A70B]">Manufacturers</span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#0f172a] text-balance md:text-4xl">
                FRP manufacturers we work with
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              {manufacturers.map((mfr) => (
                <div key={mfr.name} className="border-l-2 border-[#64A70B] pl-6">
                  <h3 className="mb-3 text-lg font-semibold text-[#0f172a]">{mfr.name}</h3>
                  <ul className="space-y-2">
                    {mfr.products.map((product) => (
                      <li key={product} className="flex items-baseline gap-3 text-sm leading-relaxed text-gray-600">
                        <CheckBullet />
                        <span className="text-pretty">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 bg-[#f8fafc] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 grid items-start gap-16 lg:grid-cols-2">
              <SitePhoto photo={sitePhotos.systems.frp} overlay="gradient" className="shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)]" />
              <div>
                <div className="brand-blue-surface rounded-xl p-8 lg:p-10">
                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                    Need something more decorative? FRL (Fiberglass Reinforced Liner) panels offer 400+ colour options and a significantly more finished appearance — still with the moisture and impact resistance of a fibre-reinforced core.
                  </p>
                  <Link href="/systems/frl-decorative" className="inline-flex items-center gap-2 text-sm font-medium text-[#9BCB4A] transition-all hover:gap-3">
                    View FRL / Decorative Wall Systems
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <SystemProjectsList
                  systemName={frpProjects.name}
                  projectSlugs={frpProjects.slugs}
                  className="mt-8"
                />
              </div>
            </div>

            <div>
              <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#64A70B]">Applications</span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#0f172a] text-balance md:text-4xl">
                Where FRP is commonly installed
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {applications.map((app) => (
                  <div key={app} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3.5">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#005EB8]" />
                    <span className="text-sm leading-snug text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <RelatedHealthcareResources
              slugs={[
                "healthcare-sink-splash-zones",
                "frp-vs-frl",
                "altro-whiterock-vs-frp-healthcare",
                "healthcare-wall-finish-selection-guide",
              ]}
              className="mt-12"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
