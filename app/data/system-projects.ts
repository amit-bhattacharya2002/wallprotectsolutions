/** Curated projects per system page — used in "See projects that used …" blocks. */
export const systemProjects = {
  "wall-protection": {
    name: "Wall Protection Systems",
    slugs: [
      "port-moody-urgent-and-primary-care-center",
      "chilliwack-urgent-and-primary-care-center",
      "langley-urgent-and-primary-care-center",
      "lions-gate-hospital-angiography-upgrade",
    ],
  },
  "hygienic-wall-cladding": {
    name: "Hygienic Wall Cladding",
    slugs: [
      "chilliwack-urgent-and-primary-care-center",
      "bc-cancer-agency",
      "csn-pharma",
      "vgh-endoscopy",
    ],
  },
  "frp-wall-systems": {
    name: "FRP Wall Systems",
    slugs: [
      "katsuya",
      "breathe-medical-manufacturing",
      "csn-pharma",
      "101-6470-201-street",
    ],
  },
  "frl-decorative": {
    name: "FRL / Decorative Wall Systems",
    slugs: [
      "sd70-port-alberni-secondary-school",
      "langley-urgent-and-primary-care-center",
      "port-moody-urgent-and-primary-care-center",
      "dtes",
    ],
  },
  "pvc-liner": {
    name: "PVC Liner Systems",
    slugs: [
      "breathe-medical-manufacturing",
      "bc-hops-co-white-paneling-brewery",
      "langley-cannabis-producer",
      "big-rock-urban-brewery",
    ],
  },
  "wet-wall": {
    name: "Wet Wall Systems",
    slugs: [
      "chilliwack-urgent-and-primary-care-center",
      "port-moody-urgent-and-primary-care-center",
      "langley-urgent-and-primary-care-center",
      "surrey-newton-urgent-and-primary-care-centre",
    ],
  },
  "architectural-specialties": {
    name: "Architectural Specialties",
    slugs: [
      "chilliwack-urgent-and-primary-care-center",
      "port-moody-urgent-and-primary-care-center",
      "lions-gate-hospital-angiography-upgrade",
      "bc-cancer-agency",
    ],
  },
  "stainless-protection": {
    name: "Stainless Protection",
    slugs: [
      "bc-hops-co-stainless-steel-paneling-kiln-room",
      "csn-pharma",
      "katsuya",
      "hello-fresh-abbotsford-warehouse",
    ],
  },
} as const;

export type SystemProjectKey = keyof typeof systemProjects;
