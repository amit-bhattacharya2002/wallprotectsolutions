export interface Industry {
  slug: string;
  name: string;
  description: string;
  systems: string[];
  primary: boolean;
  /** Curated project slugs shown in the "See projects" block on /industries */
  featuredProjectSlugs: readonly string[];
  /** Hash link target on /projects for "View all" */
  projectsFilterHash: string;
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Hospitals, clinics, UPCC facilities, long-term care, and medical office buildings. Healthcare represents 75%+ of our overall business. We understand infection-control requirements, active-facility constraints, and the specification standards expected by health authorities across BC.",
    systems: ["Hygienic Wall Cladding", "Wall Protection Systems", "FRL / Decorative Wall Panels", "Wet Wall Systems", "Architectural Specialties"],
    primary: true,
    featuredProjectSlugs: [
      "port-moody-urgent-and-primary-care-center",
      "chilliwack-urgent-and-primary-care-center",
      "lions-gate-hospital-angiography-upgrade",
      "bc-cancer-agency",
    ],
    projectsFilterHash: "healthcare",
  },
  {
    slug: "education",
    name: "Education",
    description: "Post-secondary institutions, K-12 schools, and training facilities. Education projects typically require durable, impact-resistant wall protection in corridors and high-traffic areas, with FRP or FRL in support spaces.",
    systems: ["Wall Protection Systems", "FRP Wall Systems", "FRL / Decorative Wall Panels"],
    primary: false,
    featuredProjectSlugs: [
      "sd70-port-alberni-secondary-school",
      "tiny-hoppers-day-care",
      "bcit-cari-lab",
    ],
    projectsFilterHash: "education",
  },
  {
    slug: "food-service",
    name: "Food Service & Commercial Kitchens",
    description: "Restaurants, commercial kitchens, food processing facilities, and food retail environments. Requires moisture-resistant, cleanable wall systems compliant with CFIA and health authority requirements.",
    systems: ["FRP Wall Systems", "Stainless Protection", "PVC Liner Systems"],
    primary: false,
    featuredProjectSlugs: [
      "katsuya",
      "good-fortune-restaurant",
      "big-rock-urban-brewery",
      "craft-beer-market-kelowna",
    ],
    projectsFilterHash: "food-beverage",
  },
  {
    slug: "commercial-public",
    name: "Commercial & Public",
    description: "Office buildings, retail, recreation facilities, and public facilities where wall protection is required in corridors and high-traffic areas.",
    systems: ["Wall Protection Systems", "FRL / Decorative Wall Panels", "Architectural Specialties"],
    primary: false,
    featuredProjectSlugs: [
      "101-6470-201-street",
      "capital-city-arcade",
      "enterprise-kelowna",
      "milano-penthouses",
    ],
    projectsFilterHash: "special-projects",
  },
  {
    slug: "industrial-agricultural",
    name: "Industrial & Agricultural",
    description: "Agricultural facilities, industrial plants, warehouses, and processing environments where washdown-capable, moisture-resistant wall systems are required.",
    systems: ["PVC Liner Systems", "FRP Wall Systems", "Stainless Protection"],
    primary: false,
    featuredProjectSlugs: [
      "csn-pharma",
      "breathe-medical-manufacturing",
      "bc-hops-co-white-paneling-brewery",
      "langley-cannabis-producer",
    ],
    projectsFilterHash: "special-projects",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
