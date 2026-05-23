export interface ShowcaseSystem {
  id: string;
  number: string;
  name: string;
  manufacturer: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  pinPosition: { x: number; y: number };
}

export const SYSTEMS: ShowcaseSystem[] = [
  {
    id: "wall-protection",
    number: "01",
    name: "Wall Protection Systems",
    manufacturer: "Construction Specialties · Inpro · Ricochet",
    description:
      "Supply and installation of Acrovyn wall protection sheets, crash rails, corner guards, wall guards, handrails, and door and frame protection. BC distributor for Construction Specialties; full access to Inpro and Ricochet product lines.",
    href: "/systems/wall-protection",
    imageSrc: "/images/showcase/wall-protection.jpg",
    imageAlt: "Healthcare corridor with Acrovyn wall protection wainscot",
    pinPosition: { x: 72, y: 55 },
  },
  {
    id: "hygienic-wall-cladding",
    number: "02",
    name: "Hygienic Wall Cladding",
    manufacturer: "Altro Whiterock · Puraguard · True North · AM-Clad",
    description:
      "Altro-trained and approved installer for Whiterock seamless welded systems and Puraguard. Also supply and install True North and AM-Clad hygienic wall systems — helping specify the right system for the infection-control requirement and budget.",
    href: "/systems/hygienic-wall-cladding",
    imageSrc: "/images/showcase/hygienic-cladding.jpg",
    imageAlt: "Food processing facility with seamless hygienic wall cladding",
    pinPosition: { x: 65, y: 25 },
  },
  {
    id: "frp-wall-systems",
    number: "03",
    name: "FRP & FRL Wall Systems",
    manufacturer: "Valto · Stabilit/Graham · Marlite · Panolam",
    description:
      "Traditional and decorative FRP wall panels from Valto (Glasbord, Varietex), Stabilit/Graham (Exceliner, Glasliner), and Marlite. Panolam FRL distributor relationship for 400+ colour decorative wall panel options in healthcare and institutional interiors.",
    href: "/systems/frp-wall-systems",
    imageSrc: "/images/showcase/frp-systems.jpg",
    imageAlt: "Healthcare facility with decorative wood-grain FRP wall panels",
    pinPosition: { x: 75, y: 55 },
  },
];

export const SYSTEMS_COUNT = SYSTEMS.length;
