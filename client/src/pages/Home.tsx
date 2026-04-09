/*
 * Home - 브랜드앤피플 메인 페이지
 * 디자인 철학: 따뜻한 에디토리얼 미니멀리즘 (Warm Editorial Minimalism)
 * 컬러: Cream #F9F6F0 + Coral #E87A5D + Sage #8A9A86 + Deep Brown #2C2416
 * 흐름: 공감 → 신뢰 → 해결책 → 증명 → 행동
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <StoriesSection />
      <AboutSection />
      <InsightsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
