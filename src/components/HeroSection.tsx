import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";
import Logo from "@/components/Logo";
import heroImage from "@/assets/hero-skating-rsa.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Kids roller skating at Rising Star Academy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <div className="mb-6">
            <Logo size="xl" className="mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-primary-foreground mb-6 md:text-6xl">RSA-Rising Stars Academy</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Premier Roller Skating Academy • Ahmedabad, Gujarat
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Nurturing young champions in inline and quad roller skating for over 20 years. 
            Join our legacy of excellence with state and national level training.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">20+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
            <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Students Trained</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm">Training Batches</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="sports" size="lg" className="animate-glow">
            Start Your Journey
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            View Programs
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;