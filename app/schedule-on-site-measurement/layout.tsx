import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule an On-Site Measurement",
  description:
    "Book an on-site measurement for your wall protection, FRP, or hygienic cladding project across British Columbia.",
  alternates: { canonical: "/schedule-on-site-measurement" },
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
