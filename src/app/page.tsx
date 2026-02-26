import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { GovernancePrincipleSection } from "@/components/GovernancePrincipleSection";

import { VenturesSection } from "@/components/VenturesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CollaborationCtaSection } from "@/components/CollaborationCtaSection";
import { FooterSection } from "@/components/FooterSection";
import { HomeAboutSection } from "@/components/HomeAboutSection";

export default function Home() {
  return (
    <main className="relative min-w-0 w-full max-w-full text-sm text-zinc-200">
      <Header />
      <HeroSection />
      <HomeAboutSection />
      <CapabilitiesSection />
      <ExpertiseSection />
      <GovernancePrincipleSection />
      <VenturesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CollaborationCtaSection />
      <FooterSection />
    </main>
  );
}
