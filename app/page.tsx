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
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Homepage keeps the layout's default title; set only its self-canonical.
  alternates: { canonical: "/" },
};

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
