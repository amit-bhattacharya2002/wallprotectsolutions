import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FRP Installations Inc. for wall protection, FRP, and hygienic cladding projects across British Columbia. Call 604-715-9469 or request a project quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
