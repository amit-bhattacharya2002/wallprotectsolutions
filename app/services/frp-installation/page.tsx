import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const benefits = [
  {
    title: "Expert Team",
    description: "Our highly skilled installation team has years of experience with all types of FRP installations across diverse industries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Full Collaboration",
    description: "We work with you through the entire installation process to ensure you receive the highest quality results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Zero Headaches",
    description: "Our team is extremely cooperative and will work with you to accommodate your site needs and schedules.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Clean & Professional",
    description: "We clean up after ourselves daily and leave your site in perfect condition when the job is complete.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We meet with you to understand your requirements, assess the site, and provide expert recommendations.",
  },
  {
    step: "02",
    title: "Site Measurement",
    description: "Our team takes precise measurements at your site - at no additional cost to you.",
  },
  {
    step: "03",
    title: "Detailed Quote",
    description: "We provide a comprehensive quote based on your specifications and our site assessment.",
  },
  {
    step: "04",
    title: "Scheduling",
    description: "We work around your schedule to minimize disruption to your operations.",
  },
  {
    step: "05",
    title: "Professional Installation",
    description: "Our skilled team executes the installation with precision and efficiency.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    description: "We review the completed work with you and ensure your complete satisfaction.",
  },
];

const installationTypes = [
  {
    title: "Wall Installations",
    description: "Complete wall coverage for kitchens, bathrooms, corridors, and more.",
    applications: ["Commercial Kitchens", "Healthcare Facilities", "Food Processing", "Retail Spaces"],
  },
  {
    title: "Ceiling Installations",
    description: "Durable ceiling coverage for areas requiring easy cleaning and maintenance.",
    applications: ["Clean Rooms", "Laboratories", "Industrial Spaces", "Commercial Kitchens"],
  },
  {
    title: "Walk-in Coolers & Freezers",
    description: "Moisture-resistant installations for cold storage environments.",
    applications: ["Restaurants", "Grocery Stores", "Food Distribution", "Healthcare"],
  },
  {
    title: "Wet Areas",
    description: "Waterproof solutions for bathrooms, locker rooms, and similar spaces.",
    applications: ["Gyms", "Pools", "Spas", "Public Facilities"],
  },
];

const clientTypes = [
  "Owner Operators",
  "General Contractors",
  "Property Managers",
  "Facility Managers",
  "Architects",
  "Interior Designers",
];

export default function FRPInstallationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="FRP Installation"
          subtitle="Professional FRP panel installation for walls and ceilings across British Columbia."
          breadcrumb="Services / FRP Installation"
        />

        {/* Overview Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Professional Installation Services
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-normal mb-8">
                  <p>
                    We provide FRP Panel installation for walls and ceilings across British Columbia. 
                    Whether you are an owner operator or general contractor, our highly skilled 
                    installation team will work with you through the entire installation process.
                  </p>
                  <p>
                    We ensure you receive the highest quality installation with zero headaches on site. 
                    Our installation team is extremely cooperative and will work with you to accommodate 
                    your site needs, schedules, and any special requirements you may have.
                  </p>
                  <p>
                    From small commercial kitchens to large-scale industrial facilities, we have the 
                    experience and expertise to handle projects of any size. Our team takes pride in 
                    delivering quality workmanship on every job.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {clientTypes.map((type) => (
                    <span key={type} className="px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-gray-600 text-sm">
                      {type}
                    </span>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
                >
                  Schedule Installation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-[#0f172a] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="FRP Installation"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold text-[#0f172a]">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                Why Choose Our Installation Team
              </h2>
              <p className="text-gray-600 font-normal max-w-2xl mx-auto">
                Our commitment to quality and customer service sets us apart from the competition.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                  <div className="w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center text-white mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm font-normal leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Types Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Installation Types
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                We handle various types of FRP installations to meet your specific needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {installationTypes.map((type) => (
                <div key={type.title} className="p-8 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{type.title}</h3>
                  <p className="text-gray-600 font-normal mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app) => (
                      <span key={app} className="text-sm text-[#f97316] bg-orange-50 px-3 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Our Installation Process
              </h2>
              <p className="text-white/80 font-normal max-w-2xl mx-auto">
                A streamlined process designed to deliver quality results with minimal disruption.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item) => (
                <div key={item.step} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="text-[#f97316] text-sm font-medium mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 font-normal leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#f8fafc] rounded-3xl p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                    12-Month Installation Warranty
                  </h2>
                  <p className="text-gray-600 font-normal mb-8 leading-relaxed">
                    We stand behind our work. Every installation is warranted to be free from 
                    defects for a period of 12 months. If any issues arise during this time, 
                    we'll make it right at no additional cost to you.
                  </p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f97316] transition-all"
                  >
                    Request Installation Quote
                  </Link>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-[#0f172a] rounded-2xl p-10">
                    <div className="text-6xl font-bold text-white mb-2">12</div>
                    <div className="text-white/80 text-lg">Month Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#0f172a] mb-8">Other Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/frp-sales" className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Sales</h3>
                <p className="text-gray-600 font-normal">Premium FRP panels from leading manufacturers including Marlite, Crane, Graham, and Panolam.</p>
              </Link>
              <Link href="/services/frp-service" className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-[#f97316] transition-colors">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#f97316] transition-colors">FRP Service</h3>
                <p className="text-gray-600 font-normal">Consultation services, product recommendations, and ongoing support.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
