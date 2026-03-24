const API_URL = (process.env.PAYLOAD_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export type ResponseCardData = {
  indexLabel: string;
  title: string;
  body: string;
  bars: number;
};

const FALLBACK_CARDS: ResponseCardData[] = [
  {
    indexLabel: "01",
    title: "Governance by Design",
    body: "Embedding policy and control into system architecture",
    bars: 1,
  },
  {
    indexLabel: "02",
    title: "Standards-Led Infrastructure",
    body: "Aligning systems with regulatory frameworks",
    bars: 2,
  },
  {
    indexLabel: "03",
    title: "Institutional Collaboration",
    body: "Enabling trusted data exchange across organisations",
    bars: 3,
  },
];

export async function getResponseCardData(): Promise<ResponseCardData[]> {
  try {
    const res = await fetch(`${API_URL}/api/response_card?limit=10&depth=0&sort=indexLabel`, {
      cache: "no-store",
    });
    if (!res.ok) return FALLBACK_CARDS;

    const { docs } = await res.json();
    if (!Array.isArray(docs) || !docs.length) return FALLBACK_CARDS;

    return docs.map((d: any): ResponseCardData => ({
      indexLabel: d.indexLabel ?? "01",
      title:      d.title      ?? "",
      body:       d.body       ?? "",
      bars:       parseInt(d.bars ?? "1", 10),
    }));
  } catch {
    return FALLBACK_CARDS;
  }
}