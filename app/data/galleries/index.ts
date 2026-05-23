import type { ProjectGalleryData } from "./types";

import gallery0 from "./101-6470-201-street.json";
import gallery1 from "./bc-cancer-agency.json";
import gallery2 from "./breathe-medical-manufacturing.json";
import gallery3 from "./chilliwack-urgent-and-primary-care-center.json";
import gallery4 from "./csn-pharma.json";
import gallery5 from "./dtes.json";
import gallery6 from "./katsuya.json";
import gallery7 from "./langley-urgent-and-primary-care-center.json";
import gallery8 from "./lions-gate-hospital-angiography-upgrade.json";
import gallery9 from "./port-moody-urgent-and-primary-care-center.json";
import gallery10 from "./sd70-port-alberni-secondary-school.json";
import gallery11 from "./surrey-newton-urgent-and-primary-care-centre.json";
import gallery12 from "./vgh-endoscopy.json";

const galleries: Record<string, ProjectGalleryData> = {
  "101-6470-201-street": gallery0 as ProjectGalleryData,
  "bc-cancer-agency": gallery1 as ProjectGalleryData,
  "breathe-medical-manufacturing": gallery2 as ProjectGalleryData,
  "chilliwack-urgent-and-primary-care-center": gallery3 as ProjectGalleryData,
  "csn-pharma": gallery4 as ProjectGalleryData,
  "dtes": gallery5 as ProjectGalleryData,
  "katsuya": gallery6 as ProjectGalleryData,
  "langley-urgent-and-primary-care-center": gallery7 as ProjectGalleryData,
  "lions-gate-hospital-angiography-upgrade": gallery8 as ProjectGalleryData,
  "port-moody-urgent-and-primary-care-center": gallery9 as ProjectGalleryData,
  "sd70-port-alberni-secondary-school": gallery10 as ProjectGalleryData,
  "surrey-newton-urgent-and-primary-care-centre": gallery11 as ProjectGalleryData,
  "vgh-endoscopy": gallery12 as ProjectGalleryData,
};

export function getProjectGallery(slug: string): ProjectGalleryData | null {
  return galleries[slug] ?? null;
}

export function getProjectGalleryImages(slug: string) {
  return getProjectGallery(slug)?.images ?? [];
}
