const BLOB = "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects";

/** Approved project slugs for non-homepage site photography. */
export const APPROVED_PHOTO_SLUGS = {
  street201: "101-6470-201-street",
  breathe: "breathe-medical-manufacturing",
  csn: "csn-pharma",
  katsuya: "katsuya",
  portMoody: "port-moody-urgent-and-primary-care-center",
  sd70: "sd70-port-alberni-secondary-school-fibo",
  dtes: "dtes",
} as const;

/** Build a numbered project photo URL on Vercel Blob. */
export function projectPhoto(slug: string, file: string): string {
  return `${BLOB}/${slug}/${file}.webp`;
}

export type SitePhotoMeta = {
  src: string;
  alt: string;
  caption?: string;
};

export function photo(src: string, alt: string, caption?: string): SitePhotoMeta {
  return { src, alt, caption };
}

const S = APPROVED_PHOTO_SLUGS;

/** Non-homepage site photography — three approved projects, one unique photo per slot. */
export const sitePhotos = {
  about: {
    story: photo(
      projectPhoto(S.breathe, "001"),
      "Wall protection installation at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    philosophy: photo(
      projectPhoto(S.csn, "001"),
      "Hygienic wall systems at CSN Pharma",
      "CSN Pharma",
    ),
  },
  healthcare: {
    featured: photo(
      projectPhoto(S.dtes, "028"),
      "Interior wall protection at Lily's Community Health Centre, DTES Vancouver",
      "Lily's DTES Health Centre",
    ),
    upcc: photo(
      projectPhoto(S.breathe, "009"),
      "Clinical interior with hygienic wall protection at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    hospital: photo(
      projectPhoto(S.breathe, "012"),
      "Healthcare-grade wall protection at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    trust: photo(
      projectPhoto(S.csn, "003"),
      "Pharmaceutical facility wall protection at CSN Pharma",
      "CSN Pharma",
    ),
  },
  preConstruction: photo(
    projectPhoto(S.street201, "001"),
    "Commercial build-out with wall protection scope at 101-6470 201 Street, Langley",
    "101-6470 201 Street",
  ),
  industries: {
    healthcare: photo(
      projectPhoto(S.portMoody, "045"),
      "Healthcare corridor with wall protection at Port Moody Urgent and Primary Care Center",
      "Port Moody UPCC",
    ),
    education: photo(
      projectPhoto(S.sd70, "005"),
      "FIBO wall protection in a school corridor at SD70 Port Alberni Secondary School",
      "SD70 Port Alberni Secondary School",
    ),
    "food-service": photo(
      projectPhoto(S.katsuya, "030"),
      "FRP wall protection for a commercial kitchen at Katsuya",
      "Katsuya",
    ),
    "commercial-public": photo(
      projectPhoto(S.street201, "036"),
      "Commercial interior wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    "industrial-agricultural": photo(
      projectPhoto(S.csn, "005"),
      "Industrial hygienic wall systems at CSN Pharma",
      "CSN Pharma",
    ),
  },
  systems: {
    wallProtection: photo(
      projectPhoto(S.csn, "006"),
      "Wall protection systems and hygienic cladding at CSN Pharma",
      "CSN Pharma — Wall Protection Systems",
    ),
    wallProtectionProducts: photo(
      projectPhoto(S.csn, "007"),
      "Installed wall protection panels at CSN Pharma",
      "CSN Pharma",
    ),
    hygienic: photo(
      projectPhoto(S.csn, "002"),
      "Hygienic wall cladding at CSN Pharma",
      "CSN Pharma",
    ),
    frp: photo(
      projectPhoto(S.breathe, "017"),
      "Medical-grade FRP wall panel installation at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    frl: photo(
      projectPhoto(S.street201, "030"),
      "Finished wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    pvcLiner: photo(
      projectPhoto(S.breathe, "018"),
      "Sanitary washdown wall systems at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    pvcLinerSecondary: photo(
      projectPhoto(S.street201, "027"),
      "Commercial interior wall liner at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    wetWall: photo(
      projectPhoto(S.csn, "009"),
      "Washroom and wet-area wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    stainless: photo(
      projectPhoto(S.csn, "015"),
      "Pharmaceutical facility wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    architectural: photo(
      projectPhoto(S.street201, "022"),
      "Complete interior protection scope at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    architecturalSecondary: photo(
      projectPhoto(S.street201, "014"),
      "Wall protection and division bars at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
  },
  services: {
    installation: photo(
      projectPhoto(S.breathe, "008"),
      "Professional FRP installation at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    sales: photo(
      projectPhoto(S.street201, "010"),
      "FRP wall panels at 101-6470 201 Street commercial build-out",
      "101-6470 201 Street",
    ),
    service: photo(
      projectPhoto(S.breathe, "019"),
      "Healthcare wall protection at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
  },
  wallProtection: photo(
    projectPhoto(S.breathe, "021"),
    "FRP panel installation at Breathe Medical Manufacturing",
    "Breathe Medical Manufacturing",
  ),
  manufacturers: photo(
    projectPhoto(S.csn, "004"),
    "Healthcare hygienic wall systems at CSN Pharma",
    "CSN Pharma",
  ),
  careers: photo(
    projectPhoto(S.breathe, "005"),
    "Active wall protection work at Breathe Medical Manufacturing",
    "Breathe Medical Manufacturing",
  ),
  alsoSupplyInstall: photo(
    projectPhoto(S.street201, "023"),
    "Wall protection installation at 101-6470 201 Street, Langley",
    "101-6470 201 Street, Langley",
  ),
  pages: {
    resources: photo(
      projectPhoto(S.csn, "010"),
      "Wall protection at CSN Pharma — reference for technical specifications",
      "CSN Pharma",
    ),
    faq: photo(
      projectPhoto(S.csn, "011"),
      "Pharmaceutical-grade wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    frpBenefits: photo(
      projectPhoto(S.breathe, "022"),
      "Medical-grade FRP panels at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    frpBenefitsCta: photo(
      projectPhoto(S.street201, "024"),
      "FRP and wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    city: photo(
      projectPhoto(S.breathe, "023"),
      "Healthcare wall protection project across British Columbia",
      "Breathe Medical Manufacturing",
    ),
    citySecondary: photo(
      projectPhoto(S.street201, "025"),
      "Commercial wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street, Langley",
    ),
  },
} as const;
