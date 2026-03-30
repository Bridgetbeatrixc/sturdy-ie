const API_URL = (process.env.PAYLOAD_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export type AboutData = {
  id: string;
  heading: string;
  subtitle: string;
};

export async function getAboutData(): Promise<AboutData[]> {
  try {
    const res = await fetch(`${API_URL}/api/about?limit=100&depth=0`, {
      cache: "no-store",
    });
    if (!res.ok) return [];

    const { docs } = await res.json();
    if (!Array.isArray(docs)) return [];

    return docs.map((d: any) => ({
      id:       d.id       ?? "",
      heading:  d.heading  ?? "About",
      subtitle: d.subtitle ?? "",
    }));
  } catch {
    return [];
  }
}