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
  Testimonials,
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
        <Testimonials />
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
