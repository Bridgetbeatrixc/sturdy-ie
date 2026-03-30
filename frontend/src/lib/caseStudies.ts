const API_URL = (process.env.PAYLOAD_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export interface CaseStudyIndex {
  slug: string;
  title: string;
  summary: any;
  theme: string;
  period: string;
  date: string;
  img: string;
}

export interface CaseStudySection {
  heading: string;
  body: any;
}

export interface CaseStudyDetail extends CaseStudyIndex {
  sections: CaseStudySection[];
}

// ✅ shared helper — handles both absolute and relative URLs
function resolveImageUrl(url?: string): string {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

function mapBackendDocToIndex(c: any): CaseStudyIndex {
  return {
    slug:    c.slug,
    title:   c.title,
    summary: c.summary ?? { root: { children: [] } },
    theme:   c.theme,
    period:  c.period ?? "",
    date:    c.date   ?? "",
    img:     resolveImageUrl(c.image?.url), 
  };
}

function mapBackendDocToDetail(c: any): CaseStudyDetail {
  return {
    slug:     c.slug,
    title:    c.title,
    summary:  c.summary ?? { root: { children: [] } }, 
    theme:    c.theme,
    period:   c.period ?? "",
    date:     c.date   ?? "",
    img:      resolveImageUrl(c.image?.url), 
    sections: Array.isArray(c.sections) ? c.sections : [],
  };
}

export async function getCaseStudiesIndex(): Promise<CaseStudyIndex[]> {
  const url = `${API_URL}/api/case-studies?limit=100&depth=1`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const { docs } = await res.json();
  if (!Array.isArray(docs)) return [];
  return docs.map(mapBackendDocToIndex);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyDetail | null> {
  const url = `${API_URL}/api/case-studies?where[slug][equals]=${slug}&depth=1&limit=1`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch case study — ${res.status} ${res.statusText}`);
  const { docs } = await res.json();
  if (!docs.length) return null;
  return mapBackendDocToDetail(docs[0]);
}