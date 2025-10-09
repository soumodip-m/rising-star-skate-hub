import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import WellWishersSection from "@/components/WellWishersSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about" className="relative bg-[image:var(--gradient-layer-1)]">
        <div className="absolute inset-0 bg-[image:var(--gradient-layer-2)] pointer-events-none"></div>
        <div className="relative z-10">
          <AboutSection />
        </div>
      </section>
      <section id="programs" className="relative">
        <div className="absolute inset-0 bg-[image:var(--gradient-layer-3)] pointer-events-none"></div>
        <div className="relative z-10">
          <ProgramsSection />
        </div>
      </section>
      <section id="achievements" className="relative bg-[image:var(--gradient-layer-1)]">
        <div className="absolute inset-0 bg-[image:var(--gradient-layer-2)] pointer-events-none opacity-50"></div>
        <div className="relative z-10">
          <AchievementsSection />
        </div>
      </section>
      <section id="testimonials" className="relative">
        <div className="absolute inset-0 bg-[image:var(--gradient-layer-3)] pointer-events-none opacity-70"></div>
        <div className="relative z-10">
          <TestimonialsSection />
        </div>
      </section>
      <section id="blog" className="relative bg-[image:var(--gradient-layer-1)]">
        <div className="relative z-10">
          <BlogSection />
        </div>
      </section>
      <SocialSection />
      <section id="contact" className="relative">
        <div className="absolute inset-0 bg-[image:var(--gradient-layer-2)] pointer-events-none opacity-60"></div>
        <div className="relative z-10">
          <ContactSection />
        </div>
      </section>
      <WellWishersSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
