import type { Project } from "@/app/data/projects";
import { getProjectGallery } from "@/app/data/galleries";
import type { ProjectGalleryData, ProjectGalleryImage } from "@/app/data/galleries/types";

export function resolveProjectGallery(project: Project): ProjectGalleryData {
  const blobGallery = getProjectGallery(project.slug);
  if (blobGallery) return blobGallery;

  const images: ProjectGalleryImage[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery.map((src, index) => ({
          src,
          alt: `${project.title} — Image ${index + 1}`,
        }))
      : [{ src: project.image, alt: project.title }];

  return {
    cover: project.image,
    images,
  };
}

export function getProjectCoverImage(project: Project): string {
  const galleryCover = getProjectGallery(project.slug)?.cover;
  if (galleryCover) return galleryCover;
  if (project.image) return project.image;
  return "/placeholders/avatar-neutral.svg";
}
