import Image from "next/image";

export type ProjectImageVariant = "card" | "hero" | "gallery" | "related";

const SIZES: Record<ProjectImageVariant, string> = {
  card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  hero: "(max-width: 1024px) 100vw, 66vw",
  gallery: "(max-width: 768px) 50vw, 33vw",
  related: "(max-width: 768px) 100vw, 50vw",
};

interface ProjectImageProps {
  src: string;
  alt: string;
  variant?: ProjectImageVariant;
  priority?: boolean;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  variant = "card",
  priority = false,
  className = "object-cover",
}: ProjectImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={SIZES[variant]}
      priority={priority}
      className={className}
    />
  );
}
