import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
    /**
     * When set, only matching paths are allowed. Omit `search` so optional
     * query strings (e.g. logo cache-bust `?rev=`) are allowed on any local file.
     */
    localPatterns: [{ pathname: "/**" }],
  },
  // Next.js only shows its dev indicator (the bottom-left "N" badge) in
  // development; production builds suppress it by default. We disable the
  // indicator explicitly so future upgrades can't accidentally turn it back on
  // for the client.
  devIndicators: false,

  /**
   * 301 redirects from the legacy WordPress URL structure (the old
   * frpinstallations.com Yoast sitemap) to the current routes, so old indexed
   * URLs and inbound backlinks don't 404 and link equity is preserved.
   *
   * Every `source` here is a legacy path that does NOT exist as a real route in
   * this app, so none of these override a working page. Order matters: specific
   * rules precede their catch-alls (first match wins). Trailing slashes are
   * normalized away by Next before matching, so sources omit them.
   */
  async redirects() {
    return [
      // ── Legacy top-level pages ──
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/why-frp", destination: "/frp-benefits", permanent: true },
      { source: "/get-a-project-quote", destination: "/quote", permanent: true },
      { source: "/recent-frp-installations", destination: "/projects", permanent: true },
      { source: "/frp-service", destination: "/services/frp-service", permanent: true },
      { source: "/frp-installation", destination: "/services/frp-installation", permanent: true },
      { source: "/frp-sales", destination: "/services/frp-sales", permanent: true },

      // ── Legacy manufacturer / product detail pages → new manufacturer pages ──
      { source: "/wall-protection/frp-wall-protection/graham-frp-fiberglass-reinforced-plastic", destination: "/wall-protection/manufacturers/graham", permanent: true },
      { source: "/wall-protection/frp-wall-protection/crane-composites-frp-fiberglass-reinforced-plastic", destination: "/wall-protection/manufacturers/crane-composites", permanent: true },
      { source: "/wall-protection/frp-wall-protection/marlite-frp-fiberglass-reinforced-plastic", destination: "/wall-protection/manufacturers/marlite", permanent: true },
      { source: "/wall-protection/frp-wall-protection/nudo-fiberlite-frp-fiberglass-reinforced-plastic", destination: "/wall-protection/manufacturers/nudo", permanent: true },
      { source: "/wall-protection/frp-wall-protection/panolam-frp-fiberglass-reinforced-plastic-surface-systems", destination: "/wall-protection/manufacturers/panolam", permanent: true },
      { source: "/wall-protection/frl-wall-protection/panolam-frl-fiber-reinforced-laminate", destination: "/wall-protection/manufacturers/panolam", permanent: true },

      // Legacy PVC-liner product pages → PVC liner system (no per-product pages)
      { source: "/wall-protection/pvc-liner-panels/delpro-interlocking-pvc-panel", destination: "/systems/pvc-liner", permanent: true },
      { source: "/wall-protection/pvc-liner-panels/muralex-pvc-interlocking-liner-panels", destination: "/systems/pvc-liner", permanent: true },
      { source: "/wall-protection/pvc-liner-panels/octaform-quickliner", destination: "/systems/pvc-liner", permanent: true },
      { source: "/wall-protection/pvc-liner-panels/clean16-pvc-wall-and-ceiling-protection-paneling", destination: "/systems/pvc-liner", permanent: true },

      // Legacy specialty product pages → wall protection system
      { source: "/wall-protection/specialty-wall-protection/acrovyn-wall-covering-and-panels", destination: "/systems/wall-protection", permanent: true },
      { source: "/wall-protection/specialty-wall-protection/korogard-protective-wall-coverings", destination: "/systems/wall-protection", permanent: true },

      // ── Legacy wall-protection categories → new systems pages ──
      { source: "/wall-protection/frp-wall-protection", destination: "/systems/frp-wall-systems", permanent: true },
      { source: "/wall-protection/frl-wall-protection", destination: "/systems/frl-decorative", permanent: true },
      { source: "/wall-protection/pvc-liner-panels", destination: "/systems/pvc-liner", permanent: true },
      { source: "/wall-protection/specialty-wall-protection", destination: "/systems/wall-protection", permanent: true },
      { source: "/wall-protection/stainless-steel-paneling", destination: "/systems/stainless-protection", permanent: true },

      // ── Legacy FRP benefits (singular → plural; two renamed slugs first) ──
      { source: "/frp-benefit/weight", destination: "/frp-benefits/lightweight", permanent: true },
      { source: "/frp-benefit/strength", destination: "/frp-benefits/high-strength", permanent: true },
      { source: "/frp-benefit/:slug", destination: "/frp-benefits/:slug", permanent: true },
      { source: "/frp-benefit", destination: "/frp-benefits", permanent: true },

      // ── Legacy projects (slugs mostly changed; map the few matches, else index) ──
      { source: "/project/breathe-medical-manufacturing", destination: "/projects/breathe-medical-manufacturing", permanent: true },
      { source: "/project/bc-cancer-agency-x-ray-room", destination: "/projects/bc-cancer-agency", permanent: true },
      { source: "/project/port-alberni-secondary-school", destination: "/projects/sd70-port-alberni-secondary-school", permanent: true },
      { source: "/project/:slug*", destination: "/projects", permanent: true },

      // ── Legacy WordPress taxonomies (no 1:1 equivalent) ──
      { source: "/type/frp", destination: "/systems/frp-wall-systems", permanent: true },
      { source: "/type/frl", destination: "/systems/frl-decorative", permanent: true },
      { source: "/type/pvc", destination: "/systems/pvc-liner", permanent: true },
      { source: "/type/stainless-steel", destination: "/systems/stainless-protection", permanent: true },
      { source: "/type/acrovyn", destination: "/systems/wall-protection", permanent: true },
      { source: "/type/specialty", destination: "/systems/wall-protection", permanent: true },
      { source: "/type/:slug*", destination: "/systems", permanent: true },
      { source: "/sector/:slug*", destination: "/industries", permanent: true },
      { source: "/room/:slug*", destination: "/industries", permanent: true },
    ];
  },
};

export default nextConfig;
