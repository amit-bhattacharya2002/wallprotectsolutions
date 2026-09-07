const fadeMask = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.38) 48%, rgba(0,0,0,0.72) 74%, black 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.38) 48%, rgba(0,0,0,0.72) 74%, black 100%)",
} as const;

/** Light frost that eases into the photo so the image still reads through. */
export default function FrostWash() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 bg-white/14 backdrop-blur-[8px] backdrop-saturate-125"
        style={fadeMask}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#07162c]/58 from-0% via-[#07162c]/32 via-40% via-[#07162c]/12 via-70% to-transparent" />
    </div>
  );
}
