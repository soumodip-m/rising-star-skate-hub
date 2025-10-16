import { Link } from "react-router-dom";
import { ChevronDown, Award, Users, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SportCard from "@/components/SportCard";
import TestimonialCard from "@/components/TestimonialCard";
import SocialMediaSection from "@/components/SocialMediaSection";
import heroImage from "@/assets/hero-roller-skating.jpg";
import trainingImage from "@/assets/training-facility.jpg";
export default function Index() {
  const sports = [{
    name: "Roller Skating",
    description: "Master speed, balance, and race craft with our flagship program. Inline & Quad coaching for all levels.",
    image: heroImage,
    path: "/sports/roller-skating",
    featured: true
  }, {
    name: "Cricket",
    description: "Professional cricket coaching with focus on technique, fitness, and match strategy.",
    image: trainingImage,
    path: "/sports/cricket"
  }, {
    name: "Football",
    description: "Comprehensive football training from grassroots to competitive level.",
    image: trainingImage,
    path: "/sports/football"
  }, {
    name: "Basketball",
    description: "Develop fundamental skills, team play, and competitive edge in basketball.",
    image: trainingImage,
    path: "/sports/basketball"
  }, {
    name: "Tennis",
    description: "Expert tennis coaching for beginners to advanced players.",
    image: trainingImage,
    path: "/sports/tennis"
  }, {
    name: "Badminton",
    description: "Structured badminton training with certified coaches.",
    image: trainingImage,
    path: "/sports/badminton"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in">
            Rise Faster. <span className="text-gradient">Shine Brighter.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">Ahmedabad's premier multi-sport academy with 20+ years of experience. Expert coaching, modern facilities, and a supportive culture.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/admissions/trial">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Book a Trial
              </Button>
            </Link>
            <Link to="/admissions">
              <Button variant="outline" size="lg" className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                Join Now
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Champions, One Athlete at a Time
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RSA – Rising Stars Academy helps young athletes learn faster and compete smarter. From our flagship
              Roller Skating program to multi-sport coaching, we blend certified training, modern facilities, and
              a supportive culture—right here in Ahmedabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Coaches</h3>
              <p className="text-muted-foreground">Expert trainers with national-level experience</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
              <p className="text-muted-foreground">Purpose-built rinks, courts, and training zones</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">State and national championship winners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sports */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sports Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of sports programs, each designed to help you excel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map(sport => <SportCard key={sport.name} {...sport} />)}
          </div>

          <div className="text-center mt-10">
            <Link to="/sports">
              <Button variant="outline" size="lg">
                View All Sports
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">Hear from our athletes and parents</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard quote="RSA's roller skating program transformed my daughter's confidence and skill. She's now competing at state level!" name="Priya Sharma" role="Parent" achievement="State Medalist" />
            <TestimonialCard quote="The coaches here are amazing. They pushed me to achieve more than I thought possible." name="Arjun Patel" role="Student (14)" achievement="National Qualifier" />
            <TestimonialCard quote="Best sports academy in Ahmedabad. Professional coaching, great facilities, and supportive environment." name="Rajesh Kumar" role="Parent" />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Quick Trial Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Trial</h2>
              <p className="text-lg text-muted-foreground">
                Experience our world-class coaching firsthand. No commitment required.
              </p>
            </div>

            <form className="space-y-4 bg-card p-8 rounded-lg border shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name *</label>
                  <Input placeholder="Full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age *</label>
                  <Input type="number" placeholder="Age" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Parent's Phone *</label>
                  <Input type="tel" placeholder="+91" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="email@example.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sport of Interest *</label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background" required>
                  <option value="">Select a sport</option>
                  <option value="roller-skating">Roller Skating (Flagship)</option>
                  <option value="cricket">Cricket</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                  <option value="badminton">Badminton</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <Textarea placeholder="Any questions or special requirements?" rows={3} />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I agree to be contacted via phone, email, and WhatsApp regarding my trial booking. *
                </label>
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit">
                Book Free Trial
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>;
}