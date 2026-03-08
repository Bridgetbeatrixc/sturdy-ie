import { WritingClient } from "./WritingClient";
import { getMyInsightsIndex } from "../../lib/myInsight";

export default async function WritingPage() {
  const myInsights = await getMyInsightsIndex();
  return <WritingClient myInsights={myInsights} />;
}