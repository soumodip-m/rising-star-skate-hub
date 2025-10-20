import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Eye, Heart, Award, Users } from "lucide-react";
import heroAboutRoad from "@/assets/hero-about-road.jpg";
import founderPhoto from "@/assets/founder-photo.jpg";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroAboutRoad})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">About RSA-Rising Stars Academy</h1>
            <p className="text-xl text-slate-50">Building the next generation of sporting excellence in Gujarat</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-[#ddf6f1]">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Rising Stars Academy (RSA) was founded in 1998 with just 9 passionate young skaters and a dream — to
                create a world-class multi-sport training environment that nurtures talent and builds champions. What
                began as a small Roller Skating coaching center has now grown into one of Gujarat’s leading sports
                academies, recognized as the No. 1 team in the state and among the top in India.
              </p>
              <p>
                Located in the heart of Ahmedabad, Gujarat, RSA has become a beacon for aspiring athletes seeking
                excellence. Our flagship Roller Skating program has produced numerous state and national-level
                champions, inspiring hundreds of young athletes every year. Over the years, we have expanded beyond
                skating to offer professional training in multiple sports disciplines, helping students develop their
                full athletic potential.
              </p>
              <p>
                At RSA, we believe that true sports education extends beyond physical skill. Our philosophy emphasizes
                character building, discipline, teamwork, and the relentless pursuit of personal excellence. Every
                student who joins RSA becomes part of a passionate family committed to pushing boundaries, achieving
                dreams, and representing our academy with pride and integrity.
              </p>
              <p>
                From humble beginnings in 1998 to becoming Gujarat’s top-performing team today — our journey is a
                testament to dedication, unity, and an unshakable belief in the power of sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-lg border bg-amber-400">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-950">
                To inspire and nurture young athletes to reach their fullest potential — building champions in sport and
                character for life.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border bg-orange-400">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-50">
                To provide world-class sports training, promote discipline and teamwork, and create an engaging
                environment where every child and youth can discover their passion, develop skills, and achieve
                excellence both on and off the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We pursue the highest standards in coaching, facilities, and student development
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                We maintain honesty, transparency, and ethical conduct in all our dealings
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discipline</h3>
              <p className="text-sm text-muted-foreground">
                We instill structured routines and focused dedication in every training session
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                We foster a supportive family environment where everyone grows together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section id="founders-message" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Founder's Message</h2>
            <div className="bg-card p-8 md:p-12 rounded-lg border shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={founderPhoto}
                    alt="Indrajeet Sinh Gol, Founder of RSA"
                    className="h-40 w-40 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "When we started RSA -Rising Stars Academy, our dream was simple: to create a place where young
                    athletes could train with the best coaches, in the best facilities, and be part of a community that
                    truly cares about their growth—not just as athletes, but as individuals."
                  </p>
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "Every day, watching our students improve, win medals, and most importantly, develop confidence and
                    character, reminds us why we do this. RSA is more than an academy—it's a family committed to
                    excellence."
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-foreground">Indrajeet Sinh Gol</p>
                    <p className="text-sm text-muted-foreground">Founder & Head Coach, RSA -Rising Stars Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
