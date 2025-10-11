import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickIntro from "@/components/QuickIntro";
import FeaturedSports from "@/components/FeaturedSports";
import ProgramsSection from "@/components/ProgramsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import WellWishersSection from "@/components/WellWishersSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home" className="pt-[38px]">
        <HeroSection />
      </section>
      
      <QuickIntro />
      
      <FeaturedSports />
      
      <section id="programs">
        <ProgramsSection />
      </section>
      
      <section id="achievements">
        <AchievementsSection />
      </section>
      
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <SocialSection />
      <WellWishersSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
