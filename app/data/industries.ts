export interface Industry {
  slug: string;
  name: string;
  description: string;
  systems: string[];
  primary: boolean;
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Hospitals, clinics, UPCC facilities, long-term care, and medical office buildings. Healthcare represents 75%+ of our overall business. We understand infection-control requirements, active-facility constraints, and the specification standards expected by health authorities across BC.",
    systems: ["Hygienic Wall Cladding", "Wall Protection Systems", "FRL / Decorative Wall Panels", "Wet Wall Systems", "Architectural Specialties"],
    primary: true,
  },
  {
    slug: "education",
    name: "Education",
    description: "Post-secondary institutions, K-12 schools, and training facilities. Education projects typically require durable, impact-resistant wall protection in corridors and high-traffic areas, with FRP or FRL in support spaces.",
    systems: ["Wall Protection Systems", "FRP Wall Systems", "FRL / Decorative Wall Panels"],
    primary: false,
  },
  {
    slug: "food-service",
    name: "Food Service & Commercial Kitchens",
    description: "Restaurants, commercial kitchens, food processing facilities, and food retail environments. Requires moisture-resistant, cleanable wall systems compliant with CFIA and health authority requirements.",
    systems: ["FRP Wall Systems", "Stainless Protection", "PVC Liner Systems"],
    primary: false,
  },
  {
    slug: "commercial-public",
    name: "Commercial & Public",
    description: "Office buildings, retail, recreation facilities, and public facilities where wall protection is required in corridors and high-traffic areas.",
    systems: ["Wall Protection Systems", "FRL / Decorative Wall Panels", "Architectural Specialties"],
    primary: false,
  },
  {
    slug: "industrial-agricultural",
    name: "Industrial & Agricultural",
    description: "Agricultural facilities, industrial plants, warehouses, and processing environments where washdown-capable, moisture-resistant wall systems are required.",
    systems: ["PVC Liner Systems", "FRP Wall Systems", "Stainless Protection"],
    primary: false,
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
