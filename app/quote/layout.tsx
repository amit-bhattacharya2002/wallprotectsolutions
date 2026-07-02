import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free project quote for wall protection, FRP, hygienic cladding, and interior protection systems across British Columbia. Supply and install.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
