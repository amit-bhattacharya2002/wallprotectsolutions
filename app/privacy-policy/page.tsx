import { Header, Footer, PageHero } from "@/app/components";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for FRP Installations Inc. | Wall Protection Solutions — how we collect, use, and protect information submitted through our website.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "We collect information you voluntarily provide when you contact us, request a quote, schedule an on-site measurement, or otherwise communicate with us — such as your name, company, email address, phone number, and any project details you choose to share.",
      "We also collect limited technical information automatically when you visit the site, such as your browser type, device, and pages viewed, through standard web analytics.",
    ],
  },
  {
    heading: "How We Use Information",
    body: [
      "We use the information you provide to respond to inquiries, prepare quotes and proposals, schedule site visits, deliver our services, and communicate with you about your project.",
      "Automatically collected technical information is used to understand site usage and improve the performance and content of the website.",
    ],
  },
  {
    heading: "How We Share Information",
    body: [
      "We do not sell your personal information. We may share information with trusted service providers who help us operate our business and website (for example, hosting and analytics providers), and where required by law.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: [
      "The website may use cookies and similar technologies to support core functionality and to measure site usage. You can control cookies through your browser settings; disabling them may affect some site features.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We retain project and contact information for as long as necessary to fulfill the purposes described in this policy, to maintain business records, and to comply with legal obligations.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below. You may also opt out of non-essential communications at any time.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this privacy policy from time to time. Material changes will be reflected on this page with an updated revision date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          visual="editorial"
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="How FRP Installations Inc. | Wall Protection Solutions collects, uses, and protects the information you share with us."
          compact
        />

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="mb-10 text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>

            <p className="mb-10 leading-relaxed text-gray-600">
              This policy applies to the FRP Installations Inc. | Wall Protection Solutions
              website. It describes what information we collect and how we use it when you
              browse the site or get in touch about a project.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a] md:text-2xl">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="mb-3 leading-relaxed text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-[#0f172a] md:text-2xl">
                  Contact Us
                </h2>
                <p className="leading-relaxed text-gray-600">
                  If you have questions about this policy or the information we hold, contact us
                  at{" "}
                  <a href="mailto:info@frpinstallations.com" className="font-medium text-[#64A70B] hover:underline">
                    info@frpinstallations.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:604-715-9469" className="font-medium text-[#64A70B] hover:underline">
                    604-715-9469
                  </a>
                  . You can also reach us through our{" "}
                  <Link href="/contact" className="font-medium text-[#64A70B] hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
