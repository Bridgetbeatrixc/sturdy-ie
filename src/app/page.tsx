import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { GovernanceFocusSection } from "@/components/GovernanceFocusSection";
import { ImageDescriptionSection } from "@/components/ImageDescriptionSection";
import { GovernancePrincipleSection } from "@/components/GovernancePrincipleSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { VenturesSection } from "@/components/VenturesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CollaborationCtaSection } from "@/components/CollaborationCtaSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden text-sm text-zinc-200">
      <Header />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <GovernanceFocusSection />
      <ImageDescriptionSection />
      <GovernancePrincipleSection />
      <PrinciplesSection />
      <VenturesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CollaborationCtaSection />
      <FooterSection />
    </main>
  );
}
