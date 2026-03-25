import { Footer, Header, PageHero } from "@/app/components";
import ProjectsGrid from "@/app/components/ProjectsGrid";

export const metadata = {
  title: "Projects | FRP Installations Inc. | Wall Protection Solutions",
  description: "700+ wall protection and hygienic cladding projects across British Columbia — hospitals, UPCC clinics, educational facilities, food service, and industrial environments.",
};

const stats = [
  { value: "700+", label: "Projects completed" },
  { value: "16+", label: "UPCC clinics" },
  { value: "75%+", label: "Healthcare portfolio" },
  { value: "20+", label: "Years in construction" },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="700+ projects across British Columbia"
          subtitle="Healthcare is the core of our portfolio: hospitals, UPCC clinics, and long-term care facilities across BC. We also work in education, food service, agriculture, and commercial environments."
          breadcrumb="Our Work"
          quickLinksTitle="Browse by sector"
          quickLinks={[
            { label: "Healthcare Projects", href: "/projects#healthcare" },
            { label: "Education", href: "/projects#education" },
            { label: "Food & Beverage", href: "/projects#food-beverage" },
            { label: "Agriculture", href: "/projects#agriculture" },
            { label: "View All Projects", href: "/projects#all" },
          ]}
          supportingContent={
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 px-6 py-5">
                  <div className="text-2xl font-semibold text-white tracking-tight">{s.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          }
        />

        {/* Projects grid with filter */}
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
