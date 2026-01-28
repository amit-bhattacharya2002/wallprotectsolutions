import {
  Header,
  Hero,
  Services,
  WhyFRP,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyFRP />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
