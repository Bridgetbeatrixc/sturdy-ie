import { Header } from "@/components/Header";
import { VenturesSection } from "@/components/VenturesSection";
import { FooterSection } from "@/components/FooterSection";

export default function VenturesPage() {
  return (
    <main className="relative w-full overflow-x-hidden text-sm text-zinc-200">
      <Header />
      <VenturesSection />
      <FooterSection />
    </main>
  );
}

