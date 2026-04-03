import { WritingClient } from "./WritingClient";
import { getFooterData } from "@/lib/footer";
import papers from "../../lib/leadershipPapers.mock.json";

export default async function LeadershipPapersPage() {
  const footerData = await getFooterData();
  return <WritingClient papers={papers} footerData={footerData} />;
}

