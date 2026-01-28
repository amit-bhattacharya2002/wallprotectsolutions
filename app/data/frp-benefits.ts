export interface FRPBenefit {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  applications: string[];
  proTip?: string;
  icon: string;
}

export const frpBenefits: FRPBenefit[] = [
  {
    slug: "cost-effective",
    title: "Cost Effective",
    shortTitle: "Cost Effective",
    description: "FRP Panels are a cost effective, readily available, and easy to install building material system.",
    fullDescription: "FRP Panels are a cost effective, readily available, and easy to install building material system compared to other wall covering solutions. The combination of low material costs, quick installation, and minimal maintenance requirements makes FRP one of the most economical wall protection solutions available. Unlike ceramic tile or stainless steel, FRP panels can be installed quickly by experienced professionals, reducing labor costs significantly.",
    applications: [
      "Commercial kitchens looking for budget-friendly solutions",
      "Large-scale warehouse and industrial facilities",
      "Multi-unit residential developments",
      "Renovation projects with tight budgets",
      "Agricultural buildings and farm facilities",
    ],
    proTip: "FRP panels can often be installed over existing wall surfaces, saving on demolition and disposal costs.",
    icon: "dollar",
  },
  {
    slug: "corrosion-resistance",
    title: "Corrosion Resistance",
    shortTitle: "Corrosion Resistance",
    description: "FRP Panels are protected against corrosion by a wide range of chemicals and are unaffected by moisture.",
    fullDescription: "FRP Panels are protected against corrosion by a wide range of chemicals and are unaffected by moisture or being immersed in water making it ideal for areas where water spills and chemical spills may occur. The fiberglass reinforced polymer matrix creates an impenetrable barrier that resists acids, alkalis, and most industrial chemicals, making it the preferred choice for demanding environments.",
    applications: [
      "Restaurant and commercial kitchens",
      "Hospitals and healthcare facilities",
      "Laboratories and research facilities",
      "Doctor offices and medical clinics",
      "Food processing plants",
      "Chemical storage areas",
    ],
    proTip: "FRP offers different classes based on flame spread ratings and smoke spread ratings.",
    icon: "shield",
  },
  {
    slug: "impact-resistance",
    title: "Impact Resistance",
    shortTitle: "Impact Resistance",
    description: "FRP panels will not permanently deform or break under impact.",
    fullDescription: "FRP panels will not permanently deform or break under impact, making them ideal for high-traffic areas and environments where walls are subject to regular contact from carts, equipment, and personnel. The fiberglass reinforcement provides exceptional tensile strength while the polymer matrix absorbs and distributes impact energy, preventing cracks and damage that would occur with traditional wall materials.",
    applications: [
      "High-traffic corridors and hallways",
      "Loading docks and warehouse areas",
      "Hospital corridors and patient rooms",
      "School gymnasiums and cafeterias",
      "Retail back-of-house areas",
      "Manufacturing facilities",
    ],
    proTip: "For extreme impact environments, consider thicker FRP panels (0.120\" vs 0.090\") for added durability.",
    icon: "impact",
  },
  {
    slug: "lightweight",
    title: "Lightweight",
    shortTitle: "Lightweight",
    description: "FRP is a lightweight material that helps reduce installation and maintenance costs.",
    fullDescription: "FRP is a lightweight material that helps reduce installation and maintenance costs significantly. Compared to alternatives like ceramic tile or stainless steel, FRP panels are much easier to handle, transport, and install. This lightweight nature also reduces structural load on walls and allows for faster installation with fewer workers, translating directly to cost savings on any project.",
    applications: [
      "Ceiling applications where weight is a concern",
      "Retrofit projects on older buildings",
      "Mobile units and trailers",
      "Modular buildings and prefab structures",
      "Areas with limited structural support",
    ],
    proTip: "The lightweight nature of FRP makes it ideal for ceiling installations where heavier materials would require additional support.",
    icon: "feather",
  },
  {
    slug: "high-strength",
    title: "High Strength",
    shortTitle: "High Strength",
    description: "FRP Panels have great flexural strength, beating timber, and pound-for-pound is usually stronger than common metals.",
    fullDescription: "FRP Panels have great flexural strength, beating timber, and pound-for-pound is usually stronger than common metals. The combination of fiberglass reinforcement and polymer resin creates a composite material with exceptional strength-to-weight ratio. This high strength allows FRP panels to span greater distances without additional support and withstand significant stress without failure.",
    applications: [
      "Industrial environments with heavy equipment",
      "Cold storage facilities",
      "Loading areas and shipping docks",
      "Agricultural buildings",
      "Any application requiring durable, long-lasting walls",
    ],
    proTip: "FRP's high flexural strength means panels can bridge minor wall imperfections without cracking.",
    icon: "strength",
  },
  {
    slug: "flexibility",
    title: "Flexibility",
    shortTitle: "Flexibility",
    description: "FRP is more than three times as rigid as lumber and will not deform permanently.",
    fullDescription: "FRP is still more than three times as rigid as lumber and will not deform permanently, adapting to various surfaces and applications. This flexibility allows FRP panels to conform to slightly curved surfaces and accommodate building movement without cracking. Unlike rigid materials that can crack under stress, FRP's inherent flexibility ensures long-term performance even in buildings that experience thermal expansion and settling.",
    applications: [
      "Curved wall applications",
      "Buildings with settling or movement",
      "Environments with temperature fluctuations",
      "Retrofit installations on imperfect surfaces",
      "Seismic zones where flexibility is important",
    ],
    proTip: "FRP panels can be heat-formed for tighter radius curves when needed for special architectural applications.",
    icon: "flex",
  },
  {
    slug: "thermal-properties",
    title: "Thermal Properties",
    shortTitle: "Thermal Properties",
    description: "FRP has low thermal conductivity which makes it a good insulator.",
    fullDescription: "FRP has low thermal conductivity which makes it a good insulator for temperature-sensitive environments. Unlike metal panels that readily transfer heat and cold, FRP provides a thermal break that helps maintain consistent temperatures and reduces condensation. This property is particularly valuable in cold storage, food service, and climate-controlled environments where energy efficiency is important.",
    applications: [
      "Walk-in coolers and freezers",
      "Cold storage facilities",
      "Food processing plants",
      "Climate-controlled warehouses",
      "Pharmaceutical storage areas",
    ],
    proTip: "FRP's thermal properties help prevent condensation on wall surfaces in cold storage applications.",
    icon: "temperature",
  },
  {
    slug: "electrical-properties",
    title: "Electrical Properties",
    shortTitle: "Electrical Properties",
    description: "FRP Panels are non-conductive and do not need to be grounded due to their high dielectric capability.",
    fullDescription: "FRP Panels are non-conductive and do not need to be grounded due to their high dielectric capability. This makes FRP an excellent choice for electrical rooms, data centers, and any environment where electrical safety is a concern. Unlike metal panels that can conduct electricity and create hazards, FRP provides a safe, insulating barrier that protects both people and equipment.",
    applications: [
      "Electrical rooms and substations",
      "Data centers and server rooms",
      "Telecommunication facilities",
      "Industrial control rooms",
      "Any area with high-voltage equipment",
    ],
    proTip: "FRP's non-conductive properties eliminate the need for grounding, simplifying installation in electrical environments.",
    icon: "bolt",
  },
];

export function getBenefitBySlug(slug: string): FRPBenefit | undefined {
  return frpBenefits.find(b => b.slug === slug);
}

export function getAllBenefitSlugs(): string[] {
  return frpBenefits.map(b => b.slug);
}
