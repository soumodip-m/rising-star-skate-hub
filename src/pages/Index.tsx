import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChevronDown, Award, Users, Target, Calendar, Trophy, Building2, Dumbbell, Handshake, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SportCard from "@/components/SportCard";
import TestimonialCard from "@/components/TestimonialCard";
import SocialWall from "@/components/SocialWall";
import heroImage from "@/assets/hero-roller-skating.jpg";
import heroQuadImage from "@/assets/hero-quad-skating.jpg";
import bgTexture from "@/assets/bg-texture.jpg";
import bgWaves from "@/assets/bg-waves.png";
import skatingImage from "@/assets/Racer.jpg";
import trainingImage from "@/assets/training-facility.jpg";
import sportsSilhouettes from "@/assets/sports-silhouettes.png";
import otherSportsImage from "@/assets/other-sports.png";
import whyChooseImage from "@/assets/why-choose-rsa-enhanced.jpg";
import whyChooseTeam from "@/assets/why-choose-team.jpg";
import whyChooseTraining from "@/assets/why-choose-training.jpg";
import whyChooseRink from "@/assets/why-choose-rink.jpg";
import whyChooseAngelina from "@/assets/why-choose-angelina.jpg";
import whyChooseTeamMedals from "@/assets/why-choose-team-medals.jpg";
import whyChooseCoachAthletes from "@/assets/why-choose-coach-athletes.png";
import srLogo from "@/assets/wellwishers/sr-logo-color.png";
import rsfiLogo from "@/assets/wellwishers/rsfi-logo-color.png";
import grsaLogo from "@/assets/wellwishers/grsa-logo-color.jpg";
import dpsLogo from "@/assets/wellwishers/dps-logo-color.png";
export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWhyChooseSlide, setCurrentWhyChooseSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [otherSportsDialogOpen, setOtherSportsDialogOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      image: heroImage,
      title: "Rise Faster. ",
      highlight: "Shine Brighter.",
      description:
        "Ahmedabad's premier multi-sport academy with 25+ years of experience. Expert coaching, modern facilities, and a supportive culture.",
    },
    {
      image: heroQuadImage,
      title: "Every Star Deserves to ",
      highlight: "Shine",
      description: "Enroll today and let your child's inner star truly shine.",
    },
  ];
  const whyChooseImages = [whyChooseImage, whyChooseTeam, whyChooseTraining, whyChooseRink, whyChooseAngelina, whyChooseTeamMedals, whyChooseCoachAthletes];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    const whyChooseInterval = setInterval(() => {
      setCurrentWhyChooseSlide((prev) => (prev + 1) % whyChooseImages.length);
    }, 2000);

    // Auto-scroll testimonials
    const testimonialInterval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 2; // pixels per frame

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          // Reset to start
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    }, 30);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      clearInterval(heroInterval);
      clearInterval(whyChooseInterval);
      clearInterval(testimonialInterval);
    };
  }, [isPaused]);
  const sports = [
    {
      name: "Roller Skating",
      description:
        "Master speed, balance, and race craft with our flagship program. Inline & Quad coaching for all levels.",
      image: skatingImage,
      path: "/sports/roller-skating",
      featured: true,
    },
    {
      name: "Other Sports",
      description:
        "Explore our comprehensive range of sports including Cricket, Football, Basketball, Tennis, Badminton & more.",
      image: otherSportsImage,
      path: "/sports",
      featured: true,
      showBadge: false,
    },
  ];

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Rising Stars Academy - Premier Multi-Sport Academy in Ahmedabad | RSA</title>
        <meta name="description" content="RSA - Rising Stars Academy: Ahmedabad's premier multi-sport academy with 25+ years of experience in Roller Skating, Cricket, Football, Basketball, and more. Expert coaching, modern facilities, and proven results." />
        <meta name="keywords" content="sports academy ahmedabad, roller skating academy, multi-sport training, cricket coaching, football academy, basketball training, tennis lessons, badminton coaching, athletics training, rising stars academy" />
        <link rel="canonical" href="https://rsaindia.co.in/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rising Stars Academy - Premier Multi-Sport Academy in Ahmedabad" />
        <meta property="og:description" content="25+ years of excellence in sports training. Expert coaching in Roller Skating, Cricket, Football, Basketball, Tennis, Badminton & Athletics." />
        <meta property="og:url" content="https://rsaindia.co.in/" />
        <meta property="og:image" content="https://rsaindia.co.in/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rising Stars Academy - Premier Multi-Sport Academy in Ahmedabad" />
        <meta name="twitter:description" content="25+ years of excellence in sports training. Expert coaching in Roller Skating, Cricket, Football & more." />
        <meta name="twitter:image" content="https://rsaindia.co.in/og-image.png" />
        <meta name="twitter:image" content="https://rsaindia.co.in/images/hero-roller.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "Rising Stars Academy",
            "description": "Premier multi-sport academy offering professional training in Roller Skating, Cricket, Football, Basketball, Tennis, Badminton, and Athletics",
            "url": "https://rsaindia.co.in",
            "telephone": "+91 98242 34663",
            "email": "rsa4sports@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "DPS Skating Rink, Bopal",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380058",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.041544",
              "longitude": "72.456138"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/rising_stars_academy_",
              "https://www.facebook.com/people/Rising-Stars-Academy/100083315095392/"
            ]
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Multi-layered background */}
        <div className="absolute inset-0">
          {/* Layer 1: Bottom - Subtle texture */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${bgTexture})`,
            }}
          />

          {/* Layer 2: Hero images with crossfade */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Middle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              {/* Dark gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
          ))}

          {/* Layer 3: Top - Wave pattern for depth and motion */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-soft-light"
            style={{
              backgroundImage: `url(${bgWaves})`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Hero text with crossfade */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-x-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                {slide.title}
                <span className="text-gradient">{slide.highlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-[200px] md:mt-[180px]">
            <Link to="/admissions/trial">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Book a Trial
              </Button>
            </Link>
            <Link to="/admissions">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground"
              >
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
      <section className="relative py-16 bg-muted/50 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <img src={sportsSilhouettes} alt="Sports silhouettes" className="w-full max-w-4xl object-contain" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Champions, One Athlete at a Time</h2>
            <p className="text-lg leading-relaxed text-neutral-950">
              RSA – Rising Stars Academy helps young athletes learn faster and compete smarter. From our flagship Roller
              Skating program to multi-sport coaching, we blend certified training, modern facilities, and a supportive
              culture—right here in Ahmedabad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm border-2 border-primary rounded-3xl">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Coaches</h3>
              <p className="text-muted-foreground">Expert trainers with national-level experience</p>
            </div>
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm border-2 border-primary rounded-3xl">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
              <p className="text-muted-foreground">Purpose-built rinks, courts, and training zones</p>
            </div>
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm border-2 border-primary rounded-3xl">
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

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {sports.map((sport) => (
                sport.name === "Other Sports" ? (
                  <div key={sport.name} onClick={() => setOtherSportsDialogOpen(true)} className="cursor-pointer">
                    <SportCard {...sport} path="#" />
                  </div>
                ) : (
                  <SportCard key={sport.name} {...sport} />
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RSA Program */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RSA Program?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Slideshow with Ripple Effect */}
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg cursor-pointer group">
              {whyChooseImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`RSA Training Facility ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className={`w-full h-full object-cover rounded-lg shadow-xl border-4 border-primary transition-all duration-500 group-hover:scale-110 ${
                    currentWhyChooseSlide === index ? "relative animate-ripple" : "absolute inset-0 opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Features Grid */}
            <div className="order-1 lg:order-2 grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">30+ Years of Excellence</h3>
                  <p className="text-muted-foreground">
                    Three decades of proven success in roller skating training with a legacy of champions and
                    disciplined coaching.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">World-Class Facilities</h3>
                  <p className="text-muted-foreground">
                    Train in professional grounds and atmosphere with top-tier equipment & facilities, ensuring
                    performance, comfort, and safety.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fitness & Growth Focus</h3>
                  <p className="text-muted-foreground">
                    Programs designed to build strength, stamina, and confidence — nurturing both athletic and personal
                    growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inclusive & Safe Environment</h3>
                  <p className="text-muted-foreground">
                    Every athlete matters — we ensure equal opportunities, safety, and encouragement for all ages and
                    skill levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear from our Students & Parents</h2>
            <p className="text-lg text-muted-foreground">Stories That Inspire Us Every Day</p>
          </div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-max pb-4">
              <div className="w-80 flex-shrink-0">
                <TestimonialCard
                  quote="RSA's roller skating program transformed my daughter's confidence and skill. She's now competing at advanced level!"
                  name="Soumodip Mukherjee"
                  role="Parent"
                  achievement="Advanced Inline Skater"
                />
              </div>
              <div className="w-80 flex-shrink-0">
                <TestimonialCard
                  quote="The coaches here are amazing. They pushed me to achieve more than I thought possible."
                  name="Rudra Gol"
                  role="Student (16)"
                  achievement="National Medalist"
                />
              </div>
              <div className="w-80 flex-shrink-0">
                <TestimonialCard
                  quote="Best sports academy in Ahmedabad. Professional coaching, great facilities, and supportive environment."
                  name="Gourab Mitra"
                  role="Parent"
                  achievement="National Qualifier"
                />
              </div>
              <div className="w-80 flex-shrink-0">
                <TestimonialCard
                  quote="My son loves the inclusive atmosphere at RSA. The coaches are patient and truly care about every child's progress."
                  name="Priya Sharma"
                  role="Parent"
                  achievement="Beginner Skater"
                />
              </div>
            </div>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="mt-12">
            <div className="elfsight-app-efb1cfae-5194-4704-a5c9-7715b85f5cc0" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialWall />

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

      {/* Well Wishers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Well Wishers</h2>
            <p className="text-muted-foreground">Proudly supported by leading organizations</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-right gap-16 items-center justify-center">
              <img src={srLogo} alt="Simmons Rama" className="h-24 object-contain" />
              <img src={rsfiLogo} alt="Roller Skating Federation of India" className="h-24 object-contain" />
              <img src={grsaLogo} alt="Gujarat State Roller Skating Association" className="h-24 object-contain" />
              <img src={dpsLogo} alt="Delhi Public School Bopal" className="h-24 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="RSA Facility"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Other Sports Dialog */}
      <Dialog open={otherSportsDialogOpen} onOpenChange={setOtherSportsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
            <DialogDescription className="text-center pt-4 text-base">
              Exciting updates coming soon — contact us via phone or WhatsApp for details.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setOtherSportsDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
