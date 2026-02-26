import { Header } from "@/components/Header";
import { HomeAboutSection } from "@/components/HomeAboutSection";
import { ExecutiveProfileSection } from "@/components/ExecutiveProfileSection";
import { CardAboutSection } from "@/components/CardAboutSection";
import { ExploreWorkSection } from "@/components/ExploreWorkSection";
import { FooterSection } from "@/components/FooterSection";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />
      <HomeAboutSection />
      <ExecutiveProfileSection />
      <CardAboutSection />
      <ExploreWorkSection />
      <FooterSection />
    </main>
  );
}

