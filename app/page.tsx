import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MemberGallerySection from "@/components/MemberGallerySection";
import OrgStructureSection from "@/components/OrgStructureSection";
import ProgramSection from "@/components/ProgramSection";
import VisionMissionSection from "@/components/VisionMissionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div data-aos="fade-up" data-aos-delay="0">
          <HeroSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="60">
          <AboutSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="80">
          <VisionMissionSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <ProgramSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="120">
          <OrgStructureSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="140">
          <MemberGallerySection />
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="100">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
