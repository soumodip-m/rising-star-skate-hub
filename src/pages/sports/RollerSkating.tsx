import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import UtilityBar from "@/components/UtilityBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users, Zap } from "lucide-react";
import heroSkating from "@/assets/hero-skating-rsa.jpg";

const RollerSkating = () => {
  return (
    <div className="min-h-screen">
      <UtilityBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroSkating} 
            alt="Roller skating training at RSA" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-1 rounded-full text-accent mb-4">
            <span className="font-semibold">FLAGSHIP PROGRAM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Roller Skating
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            Master speed, balance, and race craft with our flagship program. Inline & Quad coaching for all levels.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Beginner Friendly</h3>
              <p className="text-muted-foreground">No prior experience needed. We start from the basics.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Speed Training</h3>
              <p className="text-muted-foreground">Advanced techniques for competitive racing.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Competition Prep</h3>
              <p className="text-muted-foreground">Training for state and national championships.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Batches</h3>
              <p className="text-muted-foreground">Multiple time slots for all age groups.</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">For Beginners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Basic skating stance and balance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Forward and backward skating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Stopping techniques and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Building confidence on wheels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">For Advanced</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Speed skating techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Race strategy and tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Endurance and stamina training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Competition preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default RollerSkating;
