import type { Metadata } from "next";
import { faqCategories } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about wall protection, FRP, hygienic cladding, installation, submittals, and working with FRP Installations Inc. across British Columbia.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data — eligible for FAQ rich results in Google.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
