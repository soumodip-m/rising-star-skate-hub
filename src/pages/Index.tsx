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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="programs">
        <ProgramsSection />
      </section>
      <section id="achievements">
        <AchievementsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <SocialSection />
      <section id="contact">
        <ContactSection />
      </section>
      <WellWishersSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
