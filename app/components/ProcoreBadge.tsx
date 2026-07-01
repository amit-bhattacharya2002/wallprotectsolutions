interface ProcoreBadgeProps {
  /** Wrapper classes — control the rendered width here (e.g. `w-32`). */
  className?: string;
  /** Sizing classes for the badge image. Defaults to `h-auto w-full`. */
  imgClassName?: string;
}

const PROCORE_PROFILE_HREF =
  "https://network.procore.com/p/frp-installations-coquitlam";
const PROCORE_BADGE_SRC =
  "https://network.procore.com/assets/static/procore-white-badge.svg";

/**
 * "Find us on Procore" network badge. The asset is a self-contained white card
 * (dark wordmark + orange mark), so it reads on both light and dark surfaces.
 */
export default function ProcoreBadge({
  className,
  imgClassName,
}: ProcoreBadgeProps) {
  return (
    <a
      href={PROCORE_PROFILE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Find us on Procore (opens in new tab)"
      className={`inline-block transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- third-party Procore badge asset */}
      <img
        src={PROCORE_BADGE_SRC}
        alt="Find us on Procore — FRP Installations on the Procore Construction Network"
        width={200}
        height={120}
        className={imgClassName ?? "h-auto w-full"}
      />
    </a>
  );
}
