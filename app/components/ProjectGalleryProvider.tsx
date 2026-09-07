"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import ProjectGalleryLightbox from "./ProjectGalleryLightbox";
import type { ProjectGalleryImage } from "@/app/data/galleries/types";

type ProjectGalleryContextValue = {
  images: ProjectGalleryImage[];
  coverImage: string;
  hasGallery: boolean;
  openGallery: (index?: number) => void;
};

const ProjectGalleryContext = createContext<ProjectGalleryContextValue | null>(null);

export function useProjectGallery() {
  const context = useContext(ProjectGalleryContext);
  if (!context) {
    throw new Error("useProjectGallery must be used within ProjectGalleryProvider");
  }
  return context;
}

function findCoverIndex(images: ProjectGalleryImage[], coverImage: string) {
  const index = images.findIndex((image) => image.src === coverImage);
  return index >= 0 ? index : 0;
}

export default function ProjectGalleryProvider({
  images,
  title,
  coverImage,
  children,
}: {
  images: ProjectGalleryImage[];
  title: string;
  coverImage: string;
  children: ReactNode;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openGallery = useCallback(
    (index?: number) => {
      if (images.length === 0) return;
      const next = typeof index === "number" ? index : findCoverIndex(images, coverImage);
      setLightboxIndex(Math.min(Math.max(next, 0), images.length - 1));
    },
    [coverImage, images],
  );

  const value = useMemo(
    () => ({
      images,
      coverImage,
      hasGallery: images.length > 0,
      openGallery,
    }),
    [coverImage, images, openGallery],
  );

  return (
    <ProjectGalleryContext.Provider value={value}>
      {children}
      {lightboxIndex !== null && (
        <ProjectGalleryLightbox
          images={images}
          activeIndex={lightboxIndex}
          title={title}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </ProjectGalleryContext.Provider>
  );
}
