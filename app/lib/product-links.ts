const PRODUCT_LINKS: Record<string, string> = {
  "FRP Panels": "/systems/frp-wall-systems",
  "Healthcare-Grade FRP": "/systems/frp-wall-systems",
  "Medical-Grade FRP": "/systems/frp-wall-systems",
  "FRP / FRL Panels": "/systems/frp-wall-systems",
  "Food-Grade Wall Systems": "/systems/frp-wall-systems",
  "Division Bars": "/systems/frp-wall-systems",
  "Inside Corners": "/systems/frp-wall-systems",

  "Wall Protection Systems": "/systems/wall-protection",
  "FIBO Wall Protection": "/systems/wall-protection",
  "Impact-Resistant Panels": "/systems/wall-protection",
  "Corner Guards": "/systems/wall-protection",

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
};

export function getProductHref(product: string): string {
  return PRODUCT_LINKS[product] ?? "/systems";
}
