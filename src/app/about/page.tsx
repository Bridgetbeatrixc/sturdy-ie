import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />
      <AboutSection />
      <FooterSection />
    </main>
  );
}

