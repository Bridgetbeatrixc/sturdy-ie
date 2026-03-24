const API_URL = (process.env.PAYLOAD_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export type ExpertiseItem = {
  title: string;
  body: string;
  icon: 'governance' | 'infrastructure' | 'collaboration' | 'interoperability';
};

export type ChallengeData = {
  badge: string;
  heading: string;
  headingHighlight: string;
  intro: string;
  expertiseItems: ExpertiseItem[];
  image: { url: string; alt?: string };
  imageCaption: string;
  ctaLabel: string;
  ctaHref: string;
};

function lexicalToText(content: any): string {
  if (!content?.root?.children) return "";

  function extractText(node: any): string {
    if (node.type === "text") return node.text ?? "";
    if (node.children) return node.children.map(extractText).join("");
    return "";
  }

  return content.root.children
    .map((block: any) => extractText(block).trim())
    .filter(Boolean)
    .join("\n\n");
}

export async function getChallengeData(): Promise<ChallengeData | null> {
  try {
    const url = `${API_URL}/api/challenge?limit=1&depth=1`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const { docs } = await res.json();
    if (!Array.isArray(docs) || !docs.length) return null;

    const c = docs[0];

    return {
      badge: c.badge ?? "",
      heading: c.heading ?? "",
      headingHighlight: c.headingHighlight ?? "",
      intro: lexicalToText(c.intro),
      expertiseItems: Array.isArray(c.expertiseItems)
        ? c.expertiseItems.map((item: any): ExpertiseItem => ({
          title: item.title ?? "",
          body: item.body ?? "",
          icon: item.icon ?? "governance",
        }))
        : [],
      image: {
        url: c.image?.url
          ? c.image.url.startsWith("http")
            ? c.image.url
            : `${API_URL}${c.image.url}`
          : "",
        alt: c.image?.alt ?? "",
      },
      imageCaption: c.imageCaption ?? "",
      ctaLabel: c.ctaLabel ?? "",
      ctaHref: c.ctaHref ?? "",
    };
  } catch {
    return null;
  }
}