import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Trophy, Users, Clock, Award, ChevronRight } from "lucide-react";

// Hero background image
import heroRollerSkating from "@/assets/hero-roller-skating.jpg";
import rollerSkatingCollage from "@/assets/roller-skating-collage.jpg";
import inlineSkate from "@/assets/inline-skate.jpg";
import quadSkate from "@/assets/quad-skate.jpg";
import achievementsTeam1 from "@/assets/achievements-team-1.jpg";
import achievementsTeam2 from "@/assets/achievements-team-2.jpg";

// Training images
import training1 from "@/assets/training/training-1.jpg";
import training2 from "@/assets/training/training-2.jpg";
import training3 from "@/assets/training/training-3.jpg";
import training4 from "@/assets/training/training-4.jpg";
import training5 from "@/assets/training/training-5.jpg";
import training6 from "@/assets/training/training-6.jpg";
export default function RollerSkating() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const trainingImages = [training1, training2, training3, training4, training5, training6];
  const levels = [{
    name: "Beginner",
    duration: "3-6 months",
    sessions: "3 sessions/week",
    goals: "Basic balance, forward/backward skating, safe stops, fundamental posture",
    outcomes: "Build confidence, master basic techniques, develop proper form"
  }, {
    name: "Intermediate",
    duration: "6-12 months",
    sessions: "4 sessions/week",
    goals: "Speed development, cornering, crossovers, endurance building, race fundamentals",
    outcomes: "District-level competition readiness, improved stamina, advanced techniques"
  }, {
    name: "Advanced",
    duration: "Ongoing",
    sessions: "5-6 sessions/week",
    goals: "Race strategy, timing, starts & finishes, mental preparation, peak performance",
    outcomes: "State/National competition readiness, podium potential, elite athlete mindset"
  }];
  const achievements = [{
    title: "State Championships",
    count: "250+ Medals"
  }, {
    title: "National Qualifiers",
    count: "30+ Students"
  }, {
    title: "Best Timings",
    count: "Multiple Records"
  }, {
    title: "Years of Excellence",
    count: "25+ Years"
  }];
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Roller Skating Coaching Ahmedabad - Gujarat's No. 1 Skating Academy | Speed Skating Training</title>
        <meta name="description" content="Gujarat's no. 1 roller skating academy - Rising Stars Academy. Expert speed skating training, inline & quad skating classes for kids, beginner to advanced programs. Certified coaches, competition prep, safe training. Book your roller skating trial class in Ahmedabad today!" />
        <meta name="keywords" content="roller skating coaching Ahmedabad, speed skating training in Ahmedabad, inline skating classes for kids, quad skating lessons near me, roller skating academy in Gujarat, beginner to advanced roller skating program, speed skating coaching for competitions, inline vs quad skating coaching, roller skating rink training Ahmedabad, children's roller skating classes India, certified roller skating coaches, fitness and conditioning for skaters, safe roller skating training for beginners, after-school skating batches, weekend roller skating classes, girls roller skating coaching programs, inline speed skating techniques, roller skating academy admissions & fees, state and national speed skating prep, roller skating events and results, Indrajeet Sir's skating class, best skating academy in Gujarat, best skating academy in Ahmedabad, Gujarat's no. 1 skating academy, roller skates coaching, roller skating coach, best skating coach in Gujarat, स्केटिंग क्लासेज अहमदाबाद, અમદાવાદ સ્કેટિંગ ક્લાસેસ, best skating classes in Gujarat, summer skating camp ahmedabad, book a roller skating trial class, multi-sport coaching with roller skating, skate balance and endurance training" />
        <link rel="canonical" href="https://rsa.india.co.in/sports/roller-skating" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook / Instagram / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rising Stars Academy" />
        <meta property="og:title" content="Roller Skating Coaching Ahmedabad - Gujarat's No. 1 Skating Academy" />
        <meta property="og:description" content="Expert speed skating training, inline & quad skating classes for kids. Certified coaches, beginner to advanced programs in Ahmedabad. Book free trial!" />
        <meta property="og:url" content="https://rsa.india.co.in/sports/roller-skating" />
        <meta property="og:image" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:secure_url" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Roller Skating Training at Rising Stars Academy Ahmedabad" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="gu_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@risingstarsacademy" />
        <meta name="twitter:title" content="Roller Skating Coaching Ahmedabad - Gujarat's No. 1 Skating Academy" />
        <meta name="twitter:description" content="Expert speed skating training, inline & quad skating classes for kids. Certified coaches, beginner to advanced programs. Book free trial!" />
        <meta name="twitter:image" content="https://rsa.india.co.in/og-image.png" />
        <meta name="twitter:image:alt" content="Roller Skating Training at Rising Stars Academy Ahmedabad" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "Roller Skating Training Program",
            "description": "Comprehensive roller skating training program offering inline and quad skating for beginners to advanced competitive athletes",
            "sport": "Roller Skating",
            "offers": {
              "@type": "Offer",
              "name": "Free Trial Class",
              "url": "https://rsa.india.co.in/admissions/trial"
            }
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* Parallax Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          {/* Main Hero Image */}
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300" style={{
          backgroundImage: `url(${heroRollerSkating})`,
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`
        }} />

          {/* Gradient Overlays for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold rounded-full mb-8 shadow-lg shadow-primary/30 transition-all duration-300" style={{
            transform: `translateY(${scrollY * -0.15}px)`
          }}>
              FLAGSHIP PROGRAM
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl tracking-tight transition-all duration-300" style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}>
              Gujarat's No. 1 Skating Academy
            </h1>
            <p className="text-xl md:text-3xl text-white/95 mb-12 drop-shadow-lg leading-relaxed max-w-3xl mx-auto transition-all duration-300" style={{
            transform: `translateY(${scrollY * -0.05}px)`
          }}>
              Expert roller skating coaching in Ahmedabad - Speed skating training with certified coaches. Inline & quad skating classes for kids, beginner to advanced programs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center transition-all duration-300" style={{
            transform: `translateY(${scrollY * -0.03}px)`
          }}>
              <Link to="/admissions/trial">
                <Button variant="hero" size="lg" className="shadow-xl shadow-primary/40 backdrop-blur-sm">
                  Book Free Trial
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Inline vs Quad */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Path</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We offer both Inline and Quad skating programs
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-primary">Inline Skating</h3>
                <img src={inlineSkate} alt="Inline Skate" className="w-16 h-16 rounded-full object-cover border-2 border-primary transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              </div>
              <p className="text-muted-foreground mb-4">
                Focus on velocity, endurance, and race performance. Perfect for competitive athletes who want to
                participate in speed skating championships.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Specialized speed skating techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Time trials and race simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Competition preparation and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Endurance and strength training</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-secondary">Quad Skating</h3>
                <img src={quadSkate} alt="Quad Skate" className="w-16 h-16 rounded-full object-cover border-2 border-secondary transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              </div>
              <p className="text-muted-foreground mb-4">
                Emphasizes balance, control, artistic expression, and creative skating. Ideal for students interested in
                artistic skating and performances.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Ideal for beginners</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Balance and control exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Performance preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Creative expression and style</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Training Levels</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Structured progression from beginner to competitive athlete
          </p>

          {/* Scrolling Training Images */}
          <div className="mb-12 overflow-hidden relative">
            <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]" style={{
            width: "max-content"
          }}>
              {[...trainingImages, ...trainingImages, ...trainingImages].map((img, index) => <div key={index} className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10" onClick={() => setSelectedImage(img)}>
                  <img src={img} alt={`Training session ${index % trainingImages.length + 1}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {levels.map((level, index) => <div key={level.name} className="bg-card p-8 rounded-lg border hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{level.name}</h3>
                      <p className="text-sm text-muted-foreground">Level {index + 1}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{level.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{level.sessions}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Training Goals</h4>
                    <p className="text-sm">{level.goals}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">Expected Outcomes</h4>
                    <p className="text-sm">{level.outcomes}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0" style={{
        backgroundImage: `url(${achievementsTeam1}), url(${achievementsTeam2})`,
        backgroundSize: '50% 100%, 50% 100%',
        backgroundPosition: 'left center, right center',
        backgroundRepeat: 'no-repeat, no-repeat'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/70 to-muted/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-700">Achievements at a Glance</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {achievements.map(item => <div key={item.title} className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-lg border hover-lift">
                <Trophy className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.title}</div>
              </div>)}
          </div>
          
          <div className="text-center">
            <Link to="/achievements" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="default" size="lg" className="shadow-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <Award className="h-16 w-16 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join RSA's flagship Roller Skating program and experience world-class training
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/admissions/trial">
                    <Button variant="hero" size="lg">
                      Book Free Trial
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img src={rollerSkatingCollage} alt="RSA Roller Skating Team and Athletes" className="rounded-lg shadow-xl w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Magnify Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <img src={selectedImage || ""} alt="Training session" className="w-full h-auto rounded-lg" />
        </DialogContent>
      </Dialog>

      <WhatsAppButton />
      <Footer />
    </div>;
}