"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-[#0f172a] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-[#f97316] text-sm font-medium uppercase tracking-wider mb-4">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
