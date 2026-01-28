import { PageHero, Footer, Header } from "@/app/components";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Cities Served" },
  { number: "12", label: "Month Warranty" },
];

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We take pride in every installation, ensuring the highest standards of quality and attention to detail. Our installers are trained professionals who understand the importance of precision.",
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. We work with you through every step of the process, from initial consultation to final walkthrough, ensuring your vision becomes reality.",
  },
  {
    title: "Reliability",
    description: "On time, on budget, and always professional. We stand behind our work with a 12-month warranty and are known for cleaning up after ourselves daily.",
  },
  {
    title: "Expertise",
    description: "Our skilled team has extensive experience with all types of FRP and wall protection installations across diverse industries including healthcare, food service, and agriculture.",
  },
];

const team = [
  {
    role: "Sales & Consultation",
    description: "Our sales team provides expert guidance on product selection, taking the time to understand your specific requirements and recommending the most suitable solutions.",
  },
  {
    role: "Project Management",
    description: "Dedicated project managers coordinate every aspect of your installation, ensuring seamless communication between our team and your site requirements.",
  },
  {
    role: "Installation Crew",
    description: "Our highly skilled installers are the backbone of our operation, delivering quality craftsmanship with zero headaches on site.",
  },
];

const clients = [
  "Fraser Health Authority",
  "BCIT",
  "Crunch Fitness",
  "Starbucks",
  "Craft Beer Market",
  "Various Cannabis Producers",
  "Multiple Restaurant Chains",
  "Healthcare Facilities",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="About FRP Installations"
          subtitle="Your trusted partner for premium wall protection solutions across British Columbia since 2015."
          breadcrumb="About Us"
        />

        {/* Our Story Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed font-normal">
                  <p>
                    FRP Installations Inc. was founded with a simple mission: to provide British Columbia 
                    with the highest quality FRP panel installations and wall protection solutions. Based 
                    in Coquitlam, we serve businesses throughout the province.
                  </p>
                  <p>
                    Over the years, we've grown to become a trusted partner for businesses across diverse 
                    industries - from healthcare facilities and restaurants to cannabis cultivation centers 
                    and food processing plants. We've completed over 500 projects, covering more than a 
                    million square feet of wall protection.
                  </p>
                  <p>
                    Our team specializes in FRP Panel Installations and Wall Protection products. We work 
                    with leading manufacturers including Marlite, Crane Composites, Graham, Nudo, and Panolam 
                    to deliver solutions that meet the strictest health authority requirements.
                  </p>
                  <p>
                    What sets us apart is our commitment to customer service. We're known for coming through 
                    on short notice, staying on budget, and always cleaning up after ourselves. Our 12-month 
                    warranty on all installations demonstrates our confidence in our work.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-[#0f172a] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="FRP Installation Team"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#f97316] text-white p-6 rounded-xl">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-white/80">Years in Business</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Company Snapshot
              </h2>
              <p className="text-white/80 font-normal max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-semibold text-white mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Our Values
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                At FRP Installations, we're committed to delivering excellence in every project we undertake.
                These core values guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="p-8 border border-gray-200 rounded-xl hover:border-[#f97316] transition-colors">
                  <div className="text-sm text-[#f97316] font-medium mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{value.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-6">
                Our Team
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                Our installation team is extremely cooperative and will work with you to accommodate your 
                site needs. We're known for being professional, efficient, and thorough.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.role} className="bg-white p-8 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{member.role}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
                Clients We Serve
              </h2>
              <p className="text-gray-600 font-normal">
                We're proud to have worked with leading organizations across British Columbia.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-6 py-3 bg-[#f8fafc] border border-gray-200 rounded-full text-gray-700 font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
