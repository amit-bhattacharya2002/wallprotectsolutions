export interface Manufacturer {
  slug: string;
  name: string;
  category: "wall-protection" | "hygienic-cladding" | "frp" | "frl-decorative" | "pvc-liner" | "wet-wall";
  relationship: string;
  products: string[];
  notes?: string;
  featured: boolean;
}

export const manufacturers: Manufacturer[] = [
  // Wall Protection Systems
  {
    slug: "construction-specialties",
    name: "Construction Specialties (C/S)",
    category: "wall-protection",
    relationship: "BC Distributor",
    products: [
      "Acrovyn wall protection sheets and panels",
      "Crash rails, wall guards, corner guards",
      "Handrails, combination rails, column protectors",
      "Door and frame protection",
      "Cubicle curtain tracks",
      "Expansion joint covers and entrance mat systems",
      "Acrovyn by Design custom graphic systems",
    ],
    notes: "Acrovyn is the company's leading wall protection product. Approx. $450K in wall protection sales in 2025.",
    featured: true,
  },
  {
    slug: "inpro",
    name: "Inpro",
    category: "wall-protection",
    relationship: "Full product access",
    products: [
      "PVC wall protection systems",
      "Crash rails, corner guards, wall guards, handrails",
      "Door and frame protection",
      "Cubicle curtain tracks",
      "Entrance systems and expansion joints",
      "Aspex custom graphic wall systems",
    ],
    featured: true,
  },
  {
    slug: "ricochet",
    name: "Ricochet",
    category: "wall-protection",
    relationship: "Part of Inpro lineup",
    products: [
      "Resilient wall protection products",
      "Impact-resistant rails and guards",
    ],
    notes: "Should be visible as a differentiator — not buried inside generic Inpro wording.",
    featured: false,
  },
  // Hygienic Wall Cladding
  {
    slug: "altro",
    name: "Altro",
    category: "hygienic-cladding",
    relationship: "Trained / Approved Installer",
    products: [
      "Altro Whiterock — welded seams, thermoformed corners, seamless hygienic wall system",
      "Altro Puraguard — trim-finished hygienic panel system for lower hygienic requirement areas",
    ],
    notes: "Manufacturer training completed in Toronto. Manufacturer support and technical guidance available.",
    featured: true,
  },
  {
    slug: "true-north",
    name: "True North Premium Wall Cladding",
    category: "hygienic-cladding",
    relationship: "Supplier",
    products: [
      "Weldable and thermoformable hygienic wall system",
      "Very similar in performance to Altro Whiterock",
    ],
    notes: "Less expensive and more open-market than Altro.",
    featured: false,
  },
  {
    slug: "am-clad",
    name: "AM-Clad",
    category: "hygienic-cladding",
    relationship: "Approved Installer",
    products: [
      "Weldable and thermoformable hygienic wall system",
      "Very similar in performance to Altro Whiterock",
    ],
    notes: "Less expensive. List but do not over-feature due to local distribution through a competitor-affiliated supply business.",
    featured: false,
  },
  // FRP
  {
    slug: "valto",
    name: "Valto (formerly Crane Composites)",
    category: "frp",
    relationship: "Supplier",
    products: [
      "Glasbord — traditional FRP",
      "Varietex — decorative FRP line",
    ],
    featured: false,
  },
  {
    slug: "stabilit-graham",
    name: "Stabilit / Graham",
    category: "frp",
    relationship: "Supplier",
    products: [
      "Exceliner and Glasliner",
      "White pebbled and white smooth — major volume products",
    ],
    notes: "Reliable Western Canada supply and cost-effective healthcare / AHJ-friendly options.",
    featured: false,
  },
  {
    slug: "marlite",
    name: "Marlite",
    category: "frp",
    relationship: "Supplier",
    products: [
      "Traditional FRP",
      "Induro (HPL-faced FRP)",
      "Symmetrix FRP",
      "Artizan Max",
    ],
    featured: false,
  },
  {
    slug: "nudo",
    name: "Nudo",
    category: "frp",
    relationship: "Supplier",
    products: ["Traditional FRP wall panel products"],
    featured: false,
  },
  // FRL / Decorative
  {
    slug: "panolam",
    name: "Panolam Surface Systems",
    category: "frl-decorative",
    relationship: "Distributor",
    products: [
      "FRL wall panels — 400+ colours",
      "Traditional FRP wall panel options",
    ],
    notes: "Approx. $200K of FRL purchased last year, all in healthcare work. Important manufacturer / distributor relationship.",
    featured: true,
  },
  {
    slug: "formica",
    name: "Formica",
    category: "frl-decorative",
    relationship: "Supplier",
    products: ["HardStop FRL wall panels"],
    featured: false,
  },
  // PVC Liner
  {
    slug: "octaform",
    name: "Octaform",
    category: "pvc-liner",
    relationship: "Supplier",
    products: ["Direct-to-stud PVC liner systems"],
    featured: false,
  },
  {
    slug: "clean-16",
    name: "Clean 16",
    category: "pvc-liner",
    relationship: "Supplier",
    products: ["PVC liner panel systems"],
    featured: false,
  },
  {
    slug: "ez-liner",
    name: "EZ Liner",
    category: "pvc-liner",
    relationship: "Supplier",
    products: ["PVC liner panel systems"],
    featured: false,
  },
  {
    slug: "ag-tuf",
    name: "AG-Tuf",
    category: "pvc-liner",
    relationship: "Supplier",
    products: ["PVC liner panel systems"],
    featured: false,
  },
  {
    slug: "delpro",
    name: "DelPro",
    category: "pvc-liner",
    relationship: "Supplier",
    products: ["PVC liner panel systems"],
    featured: false,
  },
  // Wet Wall
  {
    slug: "avonite",
    name: "Avonite",
    category: "wet-wall",
    relationship: "Supply and Install",
    products: ["Avonite Wet Walls"],
    notes: "Installed at Cloverdale UPCC in all washrooms.",
    featured: false,
  },
];

export function getManufacturerBySlug(slug: string): Manufacturer | undefined {
  return manufacturers.find((m) => m.slug === slug);
}

export function getManufacturersByCategory(category: Manufacturer["category"]): Manufacturer[] {
  return manufacturers.filter((m) => m.category === category);
}

export function getFeaturedManufacturers(): Manufacturer[] {
  return manufacturers.filter((m) => m.featured);
}
