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
  HealthcareApplications,
  ManufacturerStrip,
  PreConstructionCTA,
  ResourcesPreview,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        <Hero />
        <HeroTrustLine />
        <Services />
        <HealthcareApplications />
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
