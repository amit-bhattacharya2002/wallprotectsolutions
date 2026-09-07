const PRODUCT_LINKS: Record<string, string> = {
  "FRP Panels": "/systems/frp-wall-systems",
  "Healthcare-Grade FRP": "/systems/frp-wall-systems",
  "Medical-Grade FRP": "/systems/frp-wall-systems",
  "FRP / FRL Panels": "/systems/frp-wall-systems",
  "Food-Grade Wall Systems": "/systems/frp-wall-systems",
  "Division Bars": "/systems/frp-wall-systems",
  "Inside Corners": "/systems/frp-wall-systems",
  "Graham Exceliner": "/systems/frp-wall-systems",
  "Crane Composites": "/systems/frp-wall-systems",
  "Crane Composites Glasbord": "/systems/frp-wall-systems",

  "Wall Protection Systems": "/systems/wall-protection",
  "FIBO Wall Protection": "/systems/wall-protection",
  "Impact-Resistant Panels": "/systems/wall-protection",
  "Corner Guards": "/systems/wall-protection",
  "Crash Rails": "/systems/wall-protection",
  "Acrovyn Wall Protection": "/systems/wall-protection",

  "Hygienic Wall Cladding": "/systems/hygienic-wall-cladding",
  "Hygienic Cladding": "/systems/hygienic-wall-cladding",
  "Hygienic Wall Systems": "/systems/hygienic-wall-cladding",
  "Altro Whiterock": "/systems/hygienic-wall-cladding",
  "Antimicrobial Panels": "/systems/hygienic-wall-cladding",
  "Sealed Corners": "/systems/hygienic-wall-cladding",
  "Sealed Joints": "/systems/hygienic-wall-cladding",
  "Sealed Systems": "/systems/hygienic-wall-cladding",

  "FRL Decorative Panels": "/systems/frl-decorative",

  "Architectural Specialties": "/systems/architectural-specialties",

  "Octaform Quickliner": "/systems/pvc-liner",
  "PVC Liner Systems": "/systems/pvc-liner",

  "Stainless Steel Panels": "/systems/stainless-protection",
  "Stainless Steel Corner Guards": "/systems/stainless-protection",
  "Stainless Door Protection": "/systems/stainless-protection",
};

const PRODUCT_PATTERNS: { test: RegExp; href: string }[] = [
  { test: /acrovyn|korogard|crash rail|corner guard|fibo/i, href: "/systems/wall-protection" },
  { test: /frl|panolam|pionite|nevamar|laminate/i, href: "/systems/frl-decorative" },
  { test: /octaform|quickliner|pvc|muralex|delpro|clean16/i, href: "/systems/pvc-liner" },
  { test: /stainless/i, href: "/systems/stainless-protection" },
  { test: /altro|whiterock|hygienic/i, href: "/systems/hygienic-wall-cladding" },
  { test: /avonite|wet wall/i, href: "/systems/wet-wall" },
  { test: /frp|graham|exceliner|crane|glasbord|glasboard|nudo|marlite/i, href: "/systems/frp-wall-systems" },
];

export function getProductHref(product: string): string {
  if (PRODUCT_LINKS[product]) return PRODUCT_LINKS[product];
  const match = PRODUCT_PATTERNS.find((entry) => entry.test.test(product));
  return match?.href ?? "/systems";
}
