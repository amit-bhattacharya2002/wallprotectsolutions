import { Footer, Header, PageHero } from "@/app/components";
import Link from "next/link";
import { manufacturers } from "@/app/data/manufacturers";

export const metadata = {
  title: "Manufacturer Partners | FRP Installations Inc. | Wall Protection Solutions",
  description: "Construction Specialties, Altro, Inpro, Panolam, Marlite, Valto, and more. Manufacturer partners for wall protection, hygienic cladding, FRP, FRL, and wet wall systems across BC.",
};

const categoryLabels: Record<string, string> = {
  "wall-protection": "Wall Protection Systems",
  "hygienic-cladding": "Hygienic Wall Cladding",
  "frp": "FRP Wall Systems",
  "frl-decorative": "FRL / Decorative Wall Systems",
  "pvc-liner": "PVC Liner Systems",
  "wet-wall": "Wet Wall Systems",
};

const categories = ["wall-protection", "hygienic-cladding", "frp", "frl-decorative", "pvc-liner", "wet-wall"] as const;

export default function ManufacturersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Manufacturer partners"
          subtitle="We regularly work with products from leading manufacturers including Construction Specialties, Altro, Inpro, Panolam, Marlite, and others, always selecting based on the right fit for the project, not a preferred brand arrangement."
          breadcrumb="Manufacturer Partners"
          quickLinksTitle="By category"
          quickLinks={[
            { label: "Wall Protection", href: "/systems/wall-protection" },
            { label: "Hygienic Cladding", href: "/systems/hygienic-wall-cladding" },
            { label: "FRP Systems", href: "/systems/frp-wall-systems" },
            { label: "FRL / Decorative", href: "/systems/frl-decorative" },
            { label: "PVC Liner", href: "/systems/pvc-liner" },
            { label: "Wet Wall", href: "/systems/wet-wall" },
          ]}
        />

        {/* Philosophy strip */}
        <section className="py-8 bg-linear-to-r from-[#134e4a] via-[#0f3a36] to-[#134e4a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-white text-center font-medium text-sm">
              Over the years we have developed particularly strong relationships with Construction Specialties and Altro — whose products are widely used in healthcare and institutional environments. We remain product-neutral and application-focused.
            </p>
          </div>
        </section>

        {/* Manufacturers by category */}
        <section className="section-shell-lg bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((cat) => {
                const catManufacturers = manufacturers.filter((m) => m.category === cat);
                if (catManufacturers.length === 0) return null;
                return (
                  <div key={cat}>
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight">{categoryLabels[cat]}</h2>
                      <Link href={`/systems/${cat === "frp" ? "frp-wall-systems" : cat === "frl-decorative" ? "frl-decorative" : cat === "pvc-liner" ? "pvc-liner" : cat === "wet-wall" ? "wet-wall" : cat === "hygienic-cladding" ? "hygienic-wall-cladding" : "wall-protection"}`} className="text-sm text-[#134e4a] hover:underline">
                        View system →
                      </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catManufacturers.map((mfr) => (
                        <div key={mfr.slug} className={`surface-card p-6 ${mfr.featured ? "border-[#134e4a]" : ""}`}>
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-base font-semibold text-[#0f172a]">{mfr.name}</h3>
                            {mfr.featured && <span className="px-2 py-0.5 bg-[#134e4a]/10 text-[#134e4a] text-xs font-medium rounded-full ml-2 flex-shrink-0">Key Partner</span>}
                          </div>
                          <p className="text-xs text-gray-500 font-medium mb-3">{mfr.relationship}</p>
                          <ul className="space-y-1">
                            {mfr.products.slice(0, 4).map((p) => (
                              <li key={p} className="text-gray-600 text-xs flex items-start gap-2">
                                <span className="text-[#134e4a] mt-0.5 flex-shrink-0">—</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                          {mfr.notes && (
                            <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed italic">{mfr.notes}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
