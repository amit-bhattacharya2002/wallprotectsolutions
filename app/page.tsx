import {
  Header,
  Hero,
  HeroTrustLine,
  Services,
  WhyFRP,
  Projects,
  ContractorConfidence,
  Contact,
  Footer,
  FeaturedHealthcareProject,
  ManufacturerStrip,
  PreConstructionCTA,
  ResourcesPreview,
  Testimonial,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroTrustLine />
        <Services />
        <Projects />
        <FeaturedHealthcareProject />
        <WhyFRP />
        {/* TODO: replace with real testimonial */}
        <Testimonial
          quote="[Placeholder quote — replace with real GC or architect testimonial.]"
          attribution="Project Manager"
          firm="[Client Firm — placeholder]"
          headshotSrc="/placeholders/avatar-neutral.svg"
        />
        <ManufacturerStrip />
        <PreConstructionCTA />
        <ContractorConfidence />
        <ResourcesPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
