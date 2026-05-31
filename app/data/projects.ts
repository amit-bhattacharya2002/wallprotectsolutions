import { legacyProjects } from "./legacy-projects";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  /** Empty string when project photos are not yet published. */
  image: string;
  gallery?: string[];
  signature?: boolean;
  details: {
    location?: string;
    squareFootage?: string;
    duration?: string;
    products?: string[];
  };
}

/** Featured hero on homepage projects section */
export const HOMEPAGE_FEATURED_SLUG = "dtes";

/** Three cards below featured on homepage */
export const HOMEPAGE_PROJECT_SLUGS = [
  "chilliwack-urgent-and-primary-care-center",
  "katsuya",
  "langley-urgent-and-primary-care-center",
] as const;

export const projects: Project[] = [
  {
    slug: "101-6470-201-street",
    title: "101-6470 201 Street",
    category: "Special Projects",
    description: "Interior wall protection package for a commercial build-out in Langley.",
    fullDescription:
      "Wall protection, FRP, and related interior systems supplied and installed for a commercial project at 101-6470 201 Street. Scope included coordinated submittals, product selection, and installation sequencing with the general contractor.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/101-6470-201-street/036.webp",
    details: {
      location: "Langley, BC",
      products: ["FRP Panels", "Wall Protection Systems", "Division Bars"],
    },
  },
  {
    slug: "bc-cancer-agency",
    title: "BC Cancer Agency",
    category: "Healthcare",
    description: "Healthcare-grade wall protection for a BC Cancer Agency facility.",
    fullDescription:
      "Supply and installation of hygienic wall protection and FRP systems for BC Cancer Agency. Materials and detailing selected to meet healthcare facility standards for cleanability, durability, and infection control in clinical environments.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/bc-cancer-agency/002.webp",
    details: {
      location: "British Columbia",
      products: ["Healthcare-Grade FRP", "Hygienic Wall Cladding", "Wall Protection Systems"],
    },
  },
  {
    slug: "breathe-medical-manufacturing",
    title: "Breathe Medical Manufacturing",
    category: "Healthcare",
    description: "Medical manufacturing facility wall protection meeting strict sanitary requirements.",
    fullDescription:
      "FRP and hygienic wall systems installed throughout Breathe Medical Manufacturing production areas. The scope supports sanitary, easy-to-clean surfaces required in medical device and healthcare-related manufacturing environments.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/breathe-medical-manufacturing/cover.webp",
    details: {
      location: "Lower Mainland, BC",
      products: ["Medical-Grade FRP", "Antimicrobial Panels", "Sealed Corners"],
    },
  },
  {
    slug: "chilliwack-urgent-and-primary-care-center",
    title: "Chilliwack Urgent and Primary Care Center",
    category: "Healthcare",
    description: "Full wall protection scope for a Fraser Health Urgent and Primary Care Centre.",
    fullDescription:
      "Comprehensive wall protection, hygienic cladding, and FRP installation for the Chilliwack Urgent and Primary Care Center. Work included examination rooms, corridors, and high-traffic clinical areas coordinated with health authority requirements and phased construction.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/chilliwack-urgent-and-primary-care-center/090.webp",
    details: {
      location: "Chilliwack, BC",
      products: ["Healthcare-Grade FRP", "Wall Protection Systems", "Hygienic Cladding"],
    },
  },
  {
    slug: "csn-pharma",
    title: "CSN Pharma",
    category: "Healthcare",
    description: "Pharmaceutical facility wall protection for controlled production environments.",
    fullDescription:
      "Wall protection and FRP systems for CSN Pharma, supporting sanitary, durable surfaces in pharmaceutical production and support areas. Installation coordinated around facility operations and clean-environment requirements.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/csn-pharma/cover.webp",
    details: {
      location: "British Columbia",
      products: ["FRP Panels", "Hygienic Wall Systems", "Sealed Joints"],
    },
  },
  {
    slug: "dtes",
    title: "DTES",
    category: "Healthcare",
    signature: true,
    description: "Signature healthcare interior protection package for a full community health centre build-out.",
    fullDescription:
      "DTES represents a major healthcare interior protection package including wall protection systems, hygienic cladding, FRP and FRL wall systems, wet wall solutions, and architectural specialties across a full health-centre build-out in Vancouver's Downtown Eastside. The project reflects the level of pre-construction coordination, submittal management, and installation execution required on major healthcare work.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/dtes/028.webp",
    details: {
      location: "Vancouver, BC",
      products: ["Wall Protection Systems", "Altro Whiterock", "FRP / FRL Panels", "Architectural Specialties"],
    },
  },
  {
    slug: "katsuya",
    title: "Katsuya",
    category: "Food & Beverage",
    description: "Full FRP wall protection package for a high-end restaurant build-out.",
    fullDescription:
      "Complete FRP wall protection installation for Katsuya, covering kitchen, prep, and back-of-house areas. The project required coordinated submittals, product selection, and installation sequencing to meet food-service sanitary standards while maintaining the design intent of the restaurant interior.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/katsuya/030.webp",
    details: {
      location: "Metro Vancouver, BC",
      products: ["FRP Panels", "Food-Grade Wall Systems", "Division Bars", "Inside Corners"],
    },
  },
  {
    slug: "langley-urgent-and-primary-care-center",
    title: "Langley Urgent and Primary Care Center",
    category: "Healthcare",
    description: "Wall protection and hygienic cladding for a Langley UPCC facility.",
    fullDescription:
      "Supply and install of wall protection systems, hygienic cladding, and FRP panels for the Langley Urgent and Primary Care Center. Scope covered clinical corridors, treatment areas, and back-of-house spaces built to healthcare facility standards.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/langley-urgent-and-primary-care-center/cover.webp",
    details: {
      location: "Langley, BC",
      products: ["Healthcare-Grade FRP", "Wall Protection Systems", "Impact-Resistant Panels"],
    },
  },
  {
    slug: "lions-gate-hospital-angiography-upgrade",
    title: "Lions Gate Hospital Angiography Upgrade",
    category: "Healthcare",
    description: "Wall protection for Lions Gate Hospital angiography suite upgrade.",
    fullDescription:
      "Interior wall protection and FRP installation supporting the Lions Gate Hospital angiography upgrade. Work was coordinated within an active hospital environment with attention to clinical standards, access constraints, and infection-control requirements.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/lions-gate-hospital-angiography-upgrade/cover.webp",
    details: {
      location: "North Vancouver, BC",
      products: ["Healthcare-Grade FRP", "Wall Protection Systems", "Hygienic Cladding"],
    },
  },
  {
    slug: "port-moody-urgent-and-primary-care-center",
    title: "Port Moody Urgent and Primary Care Center",
    category: "Healthcare",
    description: "Full interior protection package for a Port Moody UPCC.",
    fullDescription:
      "Wall protection, hygienic cladding, and FRP systems for the Port Moody Urgent and Primary Care Center. Installation included high-traffic corridors, clinical rooms, and support areas aligned with Fraser Health facility standards.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/port-moody-urgent-and-primary-care-center/053.webp",
    details: {
      location: "Port Moody, BC",
      products: ["Healthcare-Grade FRP", "Wall Protection Systems", "Hygienic Cladding"],
    },
  },
  {
    slug: "sd70-port-alberni-secondary-school",
    title: "SD70 - Port Alberni Secondary School",
    category: "Education",
    description: "FIBO and FRL wall protection for Port Alberni Secondary School.",
    fullDescription:
      "Combined FIBO and FRL wall protection scope at Port Alberni Secondary School for School District 70. The project includes durable FIBO protection for high-traffic corridors and support spaces, plus FRL decorative wall panels for public-facing school interiors.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/sd70-port-alberni-secondary-school-fibo/cover.webp",
    details: {
      location: "Port Alberni, BC",
      products: ["FIBO Wall Protection", "FRL Decorative Panels", "Impact-Resistant Panels", "Corner Guards"],
    },
  },
  {
    slug: "surrey-newton-urgent-and-primary-care-centre",
    title: "Surrey-Newton Urgent and Primary Care Centre",
    category: "Healthcare",
    description: "Healthcare wall protection for the Surrey-Newton UPCC.",
    fullDescription:
      "Comprehensive wall protection and hygienic cladding for the Surrey-Newton Urgent and Primary Care Centre. Work spanned clinical treatment areas, staff spaces, and public corridors within a new urgent and primary care facility.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/surrey-newton-urgent-and-primary-care-centre/cover.webp",
    details: {
      location: "Surrey, BC",
      products: ["Healthcare-Grade FRP", "Wall Protection Systems", "Hygienic Cladding"],
    },
  },
  {
    slug: "vgh-endoscopy",
    title: "VGH Endoscopy",
    category: "Healthcare",
    description: "Wall protection for Vancouver General Hospital endoscopy suite work.",
    fullDescription:
      "FRP and hygienic wall protection installed for VGH endoscopy suite upgrades. The scope supports sanitary, cleanable surfaces required in procedural healthcare environments within an operating hospital.",
    image: "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/vgh-endoscopy/cover.webp",
    details: {
      location: "Vancouver, BC",
      products: ["Healthcare-Grade FRP", "Hygienic Wall Cladding", "Sealed Systems"],
    },
  },
  ...legacyProjects as Project[],
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getHomepageFeaturedProject(): Project | undefined {
  return getProjectBySlug(HOMEPAGE_FEATURED_SLUG);
}

export function getHomepageProjects(): Project[] {
  return HOMEPAGE_PROJECT_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
    (p): p is Project => p !== undefined
  );
}

export function getProjectsBySlugs(slugs: readonly string[]): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}
