import { Header } from "@/components/Header";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FooterSection } from "@/components/FooterSection";

export default function CaseStudiesPage() {
  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />
      <CaseStudiesSection />
      <FooterSection />
    </main>
  );
}

