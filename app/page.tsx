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
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroTrustLine />
        <Services />
        <FeaturedHealthcareProject />
        <WhyFRP />
        <ManufacturerStrip />
        <PreConstructionCTA />
        <Projects />
        <ContractorConfidence />
        <ResourcesPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
