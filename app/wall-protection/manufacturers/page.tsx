import Link from "next/link";
import { Footer, Header, PageHero } from "@/app/components";
import { sitePhotos } from "@/app/data/site-photos";

export const metadata = {
  title: "Wall Protection Manufacturers | FRP Installations Inc.",
  description:
    "Manufacturer pages for Construction Specialties Acrovyn, Altro, Inpro, Panolam, Marlite, Valto, Graham, Nudo, and related wall protection system partners.",
};

const manufacturerPages = [
  {
    name: "Construction Specialties Acrovyn",
    href: "/wall-protection/manufacturers/construction-specialties",
    description: "Acrovyn sheets, crash rails, wall guards, corner guards, handrails, door protection, and Acrovyn by Design systems.",
  },
  {
    name: "Altro",
    href: "/wall-protection/manufacturers/altro",
    description: "Whiterock welded hygienic wall systems and Puraguard trim-finished hygienic panels for healthcare environments.",
  },
  {
    name: "Inpro",
    href: "/wall-protection/manufacturers/inpro",
    description: "Wall protection systems including crash rails, wall guards, corner guards, handrails, door protection, and specialty interior products.",
  },
  {
    name: "Panolam",
    href: "/wall-protection/manufacturers/panolam",
    description: "FRP, FRL, and decorative wall panel options with strong healthcare and institutional relevance.",
  },
  {
    name: "Marlite",
    href: "/wall-protection/manufacturers/marlite",
    description: "Traditional and decorative FRP options, including Symmetrix, Induro, and specialty finishes.",
  },
  {
    name: "Valto",
    href: "/wall-protection/manufacturers/valto",
    description: "Glasbord FRP and Varietex decorative wall systems from the manufacturer formerly known as Crane Composites.",
  },
  {
    name: "Crane Composites",
    href: "/wall-protection/manufacturers/crane-composites",
    description: "Legacy route for Glasbord and Sequentia FRP searches, now aligned with the Valto manufacturer identity.",
  },
  {
    name: "Graham",
    href: "/wall-protection/manufacturers/graham",
    description: "Commercial-grade FRP wall panels for sanitation, durability, and day-to-day impact protection.",
  },
  {
    name: "Nudo",
    href: "/wall-protection/manufacturers/nudo",
    description: "FRP panel products for demanding environments, including liner and specialty panel applications.",
  },
  {
    name: "Avonite",
    href: "/wall-protection/manufacturers/avonite",
    description: "Solid surface wet wall systems for healthcare washrooms, shower rooms, and wet-area applications.",
  },
];

export default function WallProtectionManufacturersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="photo"
          backgroundPhoto={sitePhotos.wallProtection}
          eyebrow="Manufacturer Pages"
          title="Wall protection manufacturer pages"
          subtitle="A focused hub for manufacturer pages across impact protection, hygienic cladding, FRP, FRL, PVC liner, and wet wall systems."
          quickLinksTitle="Manufacturers"
          quickLinks={manufacturerPages.map((manufacturer) => ({
            label: manufacturer.name,
            href: manufacturer.href,
          }))}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">
                Manufacturer references
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
                Manufacturer references for wall protection systems
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                These pages support product searches while connecting visitors back to the broader system and
                manufacturer partner sections of the site.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {manufacturerPages.map((manufacturer) => (
                <Link
                  key={manufacturer.href}
                  href={manufacturer.href}
                  className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition-colors hover:border-[#64A70B]"
                >
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a] group-hover:text-[#64A70B]">
                    {manufacturer.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{manufacturer.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#64A70B] transition-all group-hover:gap-3">
                    View manufacturer
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 border-l-2 border-[#64A70B] bg-[#f8fafc] px-5 py-4">
              <p className="text-sm leading-relaxed text-slate-600">
                For the complete manufacturer relationship overview, including Construction Specialties, Altro,
                Inpro, Panolam, Marlite, Valto, Formica, Avonite, and others, visit{" "}
                <Link href="/manufacturers" className="font-medium text-[#64A70B] hover:underline">
                  Manufacturer Partners
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
