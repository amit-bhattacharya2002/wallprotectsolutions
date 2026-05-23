const BLOB = "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects";

/** Approved project slugs for non-homepage site photography. */
export const APPROVED_PHOTO_SLUGS = {
  street201: "101-6470-201-street",
  breathe: "breathe-medical-manufacturing",
  chilliwack: "chilliwack-urgent-and-primary-care-center",
  csn: "csn-pharma",
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

/** Non-homepage site photography — limited to four approved projects. */
export const sitePhotos = {
  about: {
    story: photo(
      projectPhoto(S.chilliwack, "050"),
      "Wall protection installation at Chilliwack Urgent and Primary Care Centre",
      "Chilliwack UPCC",
    ),
    philosophy: photo(
      projectPhoto(S.csn, "004"),
      "Hygienic wall systems at CSN Pharma",
      "CSN Pharma",
    ),
  },
  healthcare: {
    featured: photo(
      projectPhoto(S.chilliwack, "045"),
      "Healthcare interior with wall protection at Chilliwack Urgent and Primary Care Centre",
    ),
    upcc: photo(
      projectPhoto(S.chilliwack, "090"),
      "UPCC interior with wall protection at Chilliwack Urgent and Primary Care Centre",
      "Chilliwack UPCC",
    ),
    hospital: photo(
      projectPhoto(S.breathe, "012"),
      "Healthcare-grade wall protection at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    trust: photo(
      projectPhoto(S.csn, "008"),
      "Pharmaceutical facility wall protection at CSN Pharma",
      "CSN Pharma",
    ),
  },
  preConstruction: photo(
    projectPhoto(S.chilliwack, "055"),
    "Healthcare construction with wall protection scope at Chilliwack UPCC",
    "Chilliwack UPCC",
  ),
  industries: {
    healthcare: photo(
      projectPhoto(S.chilliwack, "053"),
      "Healthcare corridor at Chilliwack Urgent and Primary Care Centre",
      "Chilliwack UPCC",
    ),
    education: photo(
      projectPhoto(S.street201, "020"),
      "Interior wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    "food-service": photo(
      projectPhoto(S.breathe, "015"),
      "Sanitary wall systems at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    "commercial-public": photo(
      projectPhoto(S.street201, "036"),
      "Commercial interior wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    "industrial-agricultural": photo(
      projectPhoto(S.breathe, "020"),
      "Industrial hygienic wall systems at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
  },
  systems: {
    wallProtection: photo(
      projectPhoto(S.chilliwack, "090"),
      "Wall protection systems and hygienic cladding at Chilliwack Urgent and Primary Care Centre",
      "Chilliwack UPCC — Wall Protection Systems",
    ),
    wallProtectionProducts: photo(
      projectPhoto(S.chilliwack, "045"),
      "Healthcare corridor with crash rails and wall guards at Chilliwack UPCC",
      "Chilliwack UPCC",
    ),
    hygienic: photo(
      projectPhoto(S.csn, "002"),
      "Hygienic wall cladding at CSN Pharma",
      "CSN Pharma",
    ),
    frp: photo(
      projectPhoto(S.breathe, "012"),
      "Medical-grade FRP wall panel installation at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    frl: photo(
      projectPhoto(S.street201, "030"),
      "Finished wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    pvcLiner: photo(
      projectPhoto(S.breathe, "020"),
      "Sanitary washdown wall systems at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    pvcLinerSecondary: photo(
      projectPhoto(S.street201, "027"),
      "Commercial interior wall liner at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    wetWall: photo(
      projectPhoto(S.chilliwack, "075"),
      "Healthcare washroom and wet-area finishes at Chilliwack UPCC",
      "Chilliwack UPCC",
    ),
    stainless: photo(
      projectPhoto(S.csn, "015"),
      "Pharmaceutical facility wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    architectural: photo(
      projectPhoto(S.chilliwack, "053"),
      "Complete interior protection scope at Chilliwack UPCC",
      "Chilliwack UPCC",
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
      projectPhoto(S.chilliwack, "030"),
      "Healthcare wall protection at Chilliwack UPCC",
      "Chilliwack UPCC",
    ),
  },
  wallProtection: photo(
    projectPhoto(S.breathe, "008"),
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
    projectPhoto(S.street201, "027"),
    "Wall protection installation at 101-6470 201 Street, Langley",
    "101-6470 201 Street, Langley",
  ),
  pages: {
    resources: photo(
      projectPhoto(S.chilliwack, "045"),
      "Healthcare corridor wall protection at Chilliwack UPCC — reference for technical specifications",
      "Chilliwack UPCC",
    ),
    faq: photo(
      projectPhoto(S.csn, "008"),
      "Pharmaceutical-grade wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    frpBenefits: photo(
      projectPhoto(S.breathe, "012"),
      "Medical-grade FRP panels at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    frpBenefitsCta: photo(
      projectPhoto(S.street201, "036"),
      "FRP and wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street",
    ),
    city: photo(
      projectPhoto(S.chilliwack, "090"),
      "Chilliwack Urgent and Primary Care Centre — wall protection across the Fraser Valley",
      "Chilliwack UPCC",
    ),
    citySecondary: photo(
      projectPhoto(S.street201, "036"),
      "Commercial wall protection at 101-6470 201 Street, Langley",
      "101-6470 201 Street, Langley",
    ),
  },
} as const;
