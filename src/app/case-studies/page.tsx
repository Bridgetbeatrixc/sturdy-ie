import { Header } from "@/components/Header";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { CaseStudyBlogSection } from "@/components/CaseStudyBlogSection";
import { FooterSection } from "@/components/FooterSection";

export default function CaseStudiesPage() {
  return (
    <main className="relative w-full text-sm text-zinc-200">
      <Header />
      <CaseStudyCarousel />
      <CaseStudyBlogSection />
      <FooterSection />
    </main>
  );
}

