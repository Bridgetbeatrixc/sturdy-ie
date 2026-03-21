const API_URL = (process.env.PAYLOAD_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export type HeroData = {
  heading: string;
  headingHighlight: string;
  subheading: string;
  tagline: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  portrait: { url: string; alt: string } | null;
};

export async function getHeroData(): Promise<HeroData | null> {
  try {
    const url = `${API_URL}/api/hero?limit=1&depth=1`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const { docs } = await res.json();
    if (!Array.isArray(docs) || !docs.length) return null;

    const h = docs[0];

    return {
      heading:            h.heading ?? "",
      headingHighlight:   h.headingHighlight ?? "",
      subheading:         h.subheading ?? "",
      tagline:            h.tagline ?? "",
      description:        h.description ?? "",
      primaryCtaLabel:    h.primaryCtaLabel ?? "",
      primaryCtaHref:     h.primaryCtaHref ?? "/",
      secondaryCtaLabel:  h.secondaryCtaLabel ?? "",
      secondaryCtaHref:   h.secondaryCtaHref ?? "/",
      portrait: h.portrait?.url
        ? { url: `${API_URL}${h.portrait.url}`, alt: h.portrait.alt ?? "" }
        : null,
    };
  } catch {
    return null;
  }
}