import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Eye, Heart, Award, Users } from "lucide-react";
import heroAboutRoad from "@/assets/hero-about-road.jpg";

export default function About() {
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroAboutRoad})` }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RSA-Rising Stars Academy</h1>
            <p className="text-xl text-muted-foreground">Building the next generation of sporting excellence in Gujarat</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Rising Stars Academy (RSA) was founded with a singular vision: to create a world-class
                multi-sport training environment that nurtures young talent and builds champions. Located
                in the heart of Ahmedabad, Gujarat, we have become a beacon for aspiring athletes seeking
                excellence.
              </p>
              <p>
                What began as a specialized Roller Skating coaching center has evolved into a comprehensive
                sports academy offering training in multiple disciplines. Our flagship Roller Skating program
                continues to produce state and national-level competitors, while our expanding portfolio of
                sports programs serves hundreds of young athletes every year.
              </p>
              <p>
                At RSA, we believe that sports education goes beyond physical training. We focus on character
                building, discipline, teamwork, and the relentless pursuit of personal excellence. Every
                student who walks through our doors becomes part of the RSA family.
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
              <p className="text-slate-950">To inspire and nurture young athletes to reach their fullest potential — building champions in sport and character for life.</p>
            </div>

            <div className="text-center p-8 rounded-lg border bg-sky-950">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Our Mission</h3>
              <p className="text-slate-50">To provide world-class sports training, promote discipline and teamwork, and create an engaging environment where every child and youth can discover their passion, develop skills, and achieve excellence both on and off the field.</p>
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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Founder's Message</h2>
            <div className="bg-card p-8 md:p-12 rounded-lg border shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white">RSA</div>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground italic mb-4">"When we started RSA -Rising Stars Academy, our dream was simple: to create a place where young athletes could train with the best coaches, in the best facilities, and be part of a community that truly cares about their growth—not just as athletes, but as individuals."</p>
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "Every day, watching our students improve, win medals, and most importantly, develop
                    confidence and character, reminds us why we do this. RSA is more than an academy—it's
                    a family committed to excellence."
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-foreground">Founder Name</p>
                    <p className="text-sm text-muted-foreground">Founder & Director, RSA -Rising Stars Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>;
}