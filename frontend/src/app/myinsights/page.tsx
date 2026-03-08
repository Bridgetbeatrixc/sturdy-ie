import { WritingClient } from "@/app/myinsight/WritingClient";
import { getMyInsightsIndex } from "../../lib/myInsight";

export default async function InsightsPage() {
  const myInsights = await getMyInsightsIndex();
  return <WritingClient myInsights={myInsights} />;
}