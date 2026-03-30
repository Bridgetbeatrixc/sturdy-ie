import { Header } from "../../components/Header";
import { AboutSection } from "../../components/AboutSection";
import { ExecutiveProfileSection } from "../../components/ExecutiveProfileSection";
import { CardAboutSection } from "../../components/CardAboutSection";
import { ExploreWorkSection } from "../../components/ExploreWorkSection";
import { FooterSection } from "../../components/FooterSection";
import { getFooterData } from "@/lib/footer";

export default async function AboutPage() {

  const [
    footerData,
  ] = await Promise.all([
    getFooterData(),
  ]);

  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />
      <AboutSection />
      <ExecutiveProfileSection />
      <CardAboutSection />
      <ExploreWorkSection />
      <FooterSection data={footerData} />
    </main>
  );
}

