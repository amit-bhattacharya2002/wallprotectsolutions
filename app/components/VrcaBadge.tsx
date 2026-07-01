import Image from "next/image";

interface VrcaBadgeProps {
  /** `white` for dark backgrounds, `color` (blue + black) for light ones. */
  variant?: "color" | "white";
  /** Wrapper classes — control the rendered width here (e.g. `w-44`). */
  className?: string;
  /**
   * Sizing classes for the underlying image. Defaults to `h-auto w-full`
   * (width driven by the wrapper). Pass a height-based value like
   * `h-10 w-auto` to size by height instead — useful when aligning next to
   * another badge.
   */
  imgClassName?: string;
  /**
   * Link the badge out to the VRCA website. Defaults to true — standard for
   * an association membership mark.
   */
  link?: boolean;
}

const SRC = {
  color: "/logos/vrca-proud-member-color.png",
  white: "/logos/vrca-proud-member-white.png",
} as const;

const ALT =
  "Proud member of the Vancouver Regional Construction Association (VRCA)";

/**
 * "Proud Member of VRCA" credential badge. The source art is the horizontal
 * lockup (3334×1000). Set the display width via `className` — height follows
 * from the intrinsic aspect ratio.
 */
export default function VrcaBadge({
  variant = "color",
  className,
  imgClassName,
  link = true,
}: VrcaBadgeProps) {
  const img = (
    <Image
      src={SRC[variant]}
      alt={ALT}
      width={3334}
      height={1000}
      sizes="(max-width: 768px) 12rem, 14rem"
      className={imgClassName ?? "h-auto w-full"}
    />
  );

  if (!link) {
    return <div className={className}>{img}</div>;
  }

  return (
    <a
      href="https://www.vrca.ca"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ALT}
      className={`inline-block transition-opacity hover:opacity-80 ${className ?? ""}`}
    >
      {img}
    </a>
  );
}
