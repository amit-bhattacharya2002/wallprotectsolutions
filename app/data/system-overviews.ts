import { photo, type SitePhotoMeta } from "@/app/data/site-photos";
import { getProjectGallery } from "@/app/data/galleries";

export interface SystemOverviewContent {
  name: string;
  summary: string;
  includes: string[];
  usedFor: string[];
  photo: SitePhotoMeta;
  projectHref: string;
}

function galleryCover(slug: string, alt: string, caption: string): SitePhotoMeta {
  const gallery = getProjectGallery(slug);
  const src = gallery?.cover ?? gallery?.images[0]?.src ?? "";
  return photo(src, alt, caption);
}

export const systemOverviews: Record<string, SystemOverviewContent> = {
  "wall-protection": {
    name: "Wall protection systems",
    summary:
      "Impact hardware that sits on the wall — crash rails, corner guards, wall guards, handrails, and door protection — so beds, carts, and equipment hit the product instead of the finish. This is corridor and high-traffic protection, not a full-height hygienic wall system.",
    includes: [
      "Crash rails and wall guards",
      "Corner guards",
      "Handrails and combination rails",
      "Door and frame protection",
      "Sheet goods and panels",
    ],
    usedFor: [
      "Healthcare corridors",
      "Patient rooms and nursing stations",
      "Schools and high-traffic hallways",
      "Lobbies and long-term care",
    ],
    photo: galleryCover(
      "port-moody-urgent-and-primary-care-center",
      "Corridor wall protection at Port Moody Urgent and Primary Care Centre",
      "Port Moody UPCC",
    ),
    projectHref: "/projects/port-moody-urgent-and-primary-care-center",
  },
  "hygienic-wall-cladding": {
    name: "Hygienic wall cladding",
    summary:
      "Full-height sheet systems made to be cleaned constantly. Welded systems (Altro Whiterock) give a seamless, crevice-free surface for high infection-control rooms. Trim-finished systems cover lower-risk spaces without the cost of welding. The system is matched to the room, not applied the same way everywhere.",
    includes: [
      "Welded seamless sheets",
      "Thermoformed corners",
      "Trim-finished hygienic panels",
      "Sealed penetrations and transitions",
    ],
    usedFor: [
      "Procedure and OR-adjacent rooms",
      "Utility and wash rooms",
      "Clinical corridors",
      "High-cleanability support spaces",
    ],
    photo: galleryCover(
      "vgh-endoscopy",
      "Hygienic wall cladding in the VGH Endoscopy suite",
      "VGH Endoscopy",
    ),
    projectHref: "/projects/vgh-endoscopy",
  },
  "frp-wall-systems": {
    name: "FRP wall systems",
    summary:
      "Fiberglass reinforced plastic panels — a rigid, washable wall finish for kitchens, utility rooms, and washdown spaces. FRP is the workhorse where moisture and impact matter more than a decorative face. Traditional pebbled or smooth white panels are the volume product; decorative FRP is available when a pattern is required.",
    includes: [
      "Traditional FRP sheets",
      "Decorative FRP options",
      "Trim, mouldings, and fasteners",
      "Sealed joints at floors and fixtures",
    ],
    usedFor: [
      "Commercial kitchens",
      "Soiled and clean utility rooms",
      "Janitor and washdown rooms",
      "Food processing and support spaces",
    ],
    photo: galleryCover(
      "katsuya",
      "FRP wall panels in the commercial kitchen at Katsuya",
      "Katsuya",
    ),
    projectHref: "/projects/katsuya",
  },
  "frl-decorative": {
    name: "FRL / decorative wall systems",
    summary:
      "Fibre-reinforced panels with a finished face — hundreds of colours and patterns — for corridors and public rooms that still need impact and moisture resistance. FRL looks more architectural than traditional FRP, which is why it shows up in healthcare waiting areas, school corridors, and finished institutional interiors.",
    includes: [
      "Panolam FRL (400+ colours)",
      "Formica HardStop",
      "Marlite decorative lines",
      "Custom graphic wall systems",
    ],
    usedFor: [
      "Healthcare corridors and reception",
      "School and institutional hallways",
      "Public-facing interiors",
      "Spaces that need a finished look plus durability",
    ],
    photo: photo(
      "https://2u8xhjuusb19t6ck.public.blob.vercel-storage.com/projects/sd70-port-alberni-secondary-school-frl/cover.webp",
      "FRL wall panels in a corridor at SD70 Port Alberni Secondary School",
      "SD70 Port Alberni Secondary School",
    ),
    projectHref: "/projects/sd70-port-alberni-secondary-school",
  },
  "pvc-liner": {
    name: "PVC liner systems",
    summary:
      "Thick PVC panels that fasten directly to studs. This is a structural liner, not a thin finish over drywall. It is used in barns, processing plants, car washes, and other rooms that get hosed down, where the wall itself has to take moisture and abuse.",
    includes: [
      "Direct-to-stud PVC panels",
      "Trim and joining details",
      "Washdown-capable joints",
      "Systems from Octaform, Clean 16, EZ Liner, AG-Tuf, and DelPro",
    ],
    usedFor: [
      "Agricultural and livestock buildings",
      "Food processing and packing",
      "Breweries and production rooms",
      "Car washes and industrial utility spaces",
    ],
    photo: galleryCover(
      "breathe-medical-manufacturing",
      "Washdown-capable wall systems at Breathe Medical Manufacturing",
      "Breathe Medical Manufacturing",
    ),
    projectHref: "/projects/breathe-medical-manufacturing",
  },
  "wet-wall": {
    name: "Wet wall systems",
    summary:
      "Solid-surface wall assemblies for showers and washrooms. The surface is seamless, non-porous, and waterproof — a step beyond FRP or tile in healthcare wet rooms. We install Avonite Wet Walls, including at multiple UPCC clinics across BC.",
    includes: [
      "Solid-surface wet wall panels",
      "Seamless joints",
      "Waterproof detailing at floors and fixtures",
      "Avonite Wet Walls",
    ],
    usedFor: [
      "Healthcare washrooms",
      "Shower rooms",
      "UPCC clinic wet areas",
      "Clinical spaces that need a fully waterproof wall",
    ],
    photo: galleryCover(
      "surrey-newton-urgent-and-primary-care-centre",
      "Wet-area wall finishes at Surrey-Newton Urgent and Primary Care Centre",
      "Surrey-Newton UPCC",
    ),
    projectHref: "/projects/surrey-newton-urgent-and-primary-care-centre",
  },
  "architectural-specialties": {
    name: "Architectural specialties / Division 10",
    summary:
      "The extras that usually travel with a wall protection package: expansion joint covers, entrance mats, cubicle curtain tracks, and door and frame protection. On healthcare jobs we supply and install them as one coordinated Division 10 scope with the wall systems, not as a separate leftover trade.",
    includes: [
      "Expansion joint covers",
      "Entrance mat systems",
      "Cubicle curtain tracks and curtains",
      "Door and frame protection",
    ],
    usedFor: [
      "Healthcare build-outs",
      "Patient privacy bays",
      "Building movement joints",
      "Primary entrances and door openings",
    ],
    photo: galleryCover(
      "langley-urgent-and-primary-care-center",
      "Interior protection package at Langley Urgent and Primary Care Centre",
      "Langley UPCC",
    ),
    projectHref: "/projects/langley-urgent-and-primary-care-center",
  },
  "stainless-protection": {
    name: "Stainless protection",
    summary:
      "Custom-fabricated stainless steel corners, end caps, and cladding for kitchens and processing rooms where plastic wall protection is the wrong material. Volume is smaller than FRP or Acrovyn, but it is often part of the same supply-and-install package.",
    includes: [
      "Stainless corner protection",
      "Wall end caps",
      "Stainless cladding panels",
      "Local fabrication to spec",
    ],
    usedFor: [
      "Commercial kitchens",
      "Food processing rooms",
      "Harsh chemical washdown",
      "Areas where plastic systems are not accepted",
    ],
    photo: galleryCover(
      "csn-pharma",
      "Installed wall protection at CSN Pharma",
      "CSN Pharma",
    ),
    projectHref: "/projects/csn-pharma",
  },
};
