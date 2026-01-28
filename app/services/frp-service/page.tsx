import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const services = [
  {
    title: "Product Consultation",
    description: "Based on your requirements, we recommend the most suitable FRP panel products for your specific application. We consider factors like environment, traffic levels, and regulatory requirements.",
    features: ["Application assessment", "Product recommendations", "Code compliance guidance", "Budget considerations"],
  },
  {
    title: "Accessory Selection",
    description: "Expert guidance on selecting the right accessories and adhesives for a hassle-free, long-lasting wall protection system. We ensure all components work together seamlessly.",
    features: ["End caps & trim", "Corner treatments", "Adhesive selection", "Finishing options"],
  },
  {
    title: "Site Assessment",
    description: "Our team can attend your site to take measurements at your convenience. We assess the space, identify potential challenges, and provide accurate quotes based on actual conditions.",
    features: ["Free site visits", "Precise measurements", "Challenge identification", "Detailed quotes"],
  },
  {
    title: "Project Planning",
    description: "We help you plan your project timeline and coordinate with other trades to ensure smooth execution and minimal disruption to your operations.",
    features: ["Timeline planning", "Trade coordination", "Phased installation", "Minimal disruption"],
  },
];

const warrantyDetails = [
  {
    title: "What's Covered",
    items: [
      "Installation workmanship defects",
      "Panel adhesion issues",
      "Trim and accessory installation",
      "Seam and joint integrity",
    ],
  },
  {
    title: "Our Commitment",
    items: [
      "Prompt response to any issues",
      "No-cost repairs during warranty period",
      "Professional assessment",
      "Quality materials for repairs",
    ],
  },
];

const faq = [
  {
    question: "How long does a typical installation take?",
    answer: "Installation time varies based on project size. A small commercial kitchen might take 2-3 days, while larger facilities can take 2-4 weeks. We'll provide a detailed timeline with your quote.",
  },
  {
    question: "Do you work around business hours?",
    answer: "Yes, we can work around your business operations. We're flexible with scheduling and can work evenings or weekends if needed to minimize disruption.",
  },
  {
    question: "What's included in your quote?",
    answer: "Our quotes include all materials (panels, accessories, adhesives), labor, site preparation, and cleanup. There are no hidden costs.",
  },
  {
    question: "How do I maintain FRP panels?",
    answer: "FRP panels are easy to maintain. Regular cleaning with mild soap and water is usually sufficient. We provide care instructions with every installation.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "We can help coordinate with local authorities and ensure our installations meet all applicable codes and regulations.",
  },
];

const supportOptions = [
  {
    title: "Phone Support",
    description: "Call us directly for immediate assistance with any questions or concerns.",
    contact: "604-715-9469",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email Support",
    description: "Send us your questions and we'll respond within 24 business hours.",
    contact: "info@frpinstallations.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Site Visits",
    description: "We'll come to your location at no extra cost to assess your needs.",
    contact: "Schedule a Visit",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function FRPServicePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="FRP Service"
          subtitle="Expert consultation, ongoing support, and a 12-month warranty on all installations."
          breadcrumb="Services / FRP Service"
        />

        {/* Overview Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Comprehensive Support Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-normal">
                <p>
                  We provide FRP Panel consultation services and based on your requirements, 
                  we can recommend the most suitable FRP panel products, accessories, and 
                  adhesives for a hassle-free and long-lasting wall protection system.
                </p>
                <p>
                  Our commitment to service doesn't end when the installation is complete. 
                  We stand behind our work and warranty our installation to be free from 
                  defects for a period of 12 months.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="p-8 border border-gray-200 rounded-xl hover:border-[#f97316] transition-colors">
                  <div className="text-sm text-[#f97316] font-medium mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-normal mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Site Visits Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Free On-Site Measurements
                </h2>
                <p className="text-gray-600 leading-relaxed font-normal mb-6">
                  We strive to provide quotations according to your deadlines based on the 
                  project specifications provided. Alternatively, our team can attend your 
                  site to take on-site measurements at your convenience.
                </p>
                <p className="text-gray-600 leading-relaxed font-normal mb-8">
                  <strong className="text-[#0f172a]">There are no additional costs</strong> for 
                  our team to make site visits and we would be pleased to meet with you anytime 
                  to review your wall protection needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
                  >
                    Schedule Site Visit
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 border border-gray-300 text-[#0f172a] px-8 py-4 rounded-full font-medium hover:border-[#0f172a] transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {supportOptions.map((option) => (
                  <div key={option.title} className="bg-white p-6 rounded-xl text-center border border-gray-200">
                    <div className="w-12 h-12 bg-[#f8fafc] rounded-lg flex items-center justify-center text-[#0f172a] mx-auto mb-4">
                      {option.icon}
                    </div>
                    <h3 className="font-semibold text-[#0f172a] mb-2 text-sm">{option.title}</h3>
                    <p className="text-gray-600 text-xs">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="py-20 lg:py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#f97316] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                Our Guarantee
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                12-Month Installation Warranty
              </h2>
              <p className="text-white/80 font-normal max-w-2xl mx-auto">
                We stand behind our work. Every installation is warranted to be free from 
                defects for a full 12 months.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {warrantyDetails.map((detail) => (
                <div key={detail.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">{detail.title}</h3>
                  <ul className="space-y-3">
                    {detail.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                Find answers to common questions about our services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {faq.map((item) => (
                <div key={item.question} className="p-8 bg-[#f8fafc] rounded-xl">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{item.question}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
              Have questions about your project?
            </h2>
            <p className="text-gray-600 font-normal mb-10 max-w-2xl mx-auto">
              Our team is here to help. Contact us for expert advice and a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
              >
                Contact Us
              </Link>
              <a
                href="tel:604-715-9469"
                className="inline-flex items-center justify-center gap-3 border border-gray-300 text-[#0f172a] px-8 py-4 rounded-full font-medium hover:border-[#0f172a] transition-all"
              >
                Call 604-715-9469
              </a>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-8">Other Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/frp-sales" className="group p-8 bg-[#f8fafc] rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Sales</h3>
                <p className="text-gray-600 font-normal">Premium FRP panels from leading manufacturers including Marlite, Crane, Graham, and Panolam.</p>
              </Link>
              <Link href="/services/frp-installation" className="group p-8 bg-[#f8fafc] rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Installation</h3>
                <p className="text-gray-600 font-normal">Professional panel installation for walls and ceilings across British Columbia.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
