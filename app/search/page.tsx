import type { Metadata } from "next";
import { Footer, Header } from "@/app/components";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search products, services, systems, manufacturer partners, and project examples across FRP Installations Inc.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const initialQuery = typeof params.q === "string" ? params.q : "";

  return (
    <>
      <Header />
      <SearchPageClient initialQuery={initialQuery} />
      <Footer />
    </>
  );
}
