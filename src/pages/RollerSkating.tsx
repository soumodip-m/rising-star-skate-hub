import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Clock, Award, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-roller-skating.jpg";
export default function RollerSkating() {
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
    count: "200+ Medals"
  }, {
    title: "National Qualifiers",
    count: "15+ Students"
  }, {
    title: "Best Timings",
    count: "Multiple Records"
  }, {
    title: "Years of Excellence",
    count: "15+ Years"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold rounded-full mb-6">
              FLAGSHIP PROGRAM
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Speed Skating</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Master balance, speed, and race craft with certified coaches. Choose Inline or Quad and
              progress through comprehensive training levels with clear milestones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions/trial">
                <Button variant="hero" size="lg">
                  Book Free Trial
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                  Join Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inline vs Quad */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Path</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">We offer both Inline and Quad skating programs</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-primary">Inline Skating</h3>
              <p className="text-muted-foreground mb-4">
                Focus on velocity, endurance, and race performance. Perfect for competitive athletes
                who want to participate in speed skating championships.
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
              <h3 className="text-2xl font-bold mb-4 text-secondary">Quad Skating</h3>
              <p className="text-muted-foreground mb-4">
                Emphasizes balance, control, artistic expression, and creative skating. Ideal for
                students interested in artistic skating and performances.
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
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">
                      Training Goals
                    </h4>
                    <p className="text-sm">{level.goals}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">
                      Expected Outcomes
                    </h4>
                    <p className="text-sm">{level.outcomes}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Roller Skating Achievements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map(item => <div key={item.title} className="text-center p-6 bg-card rounded-lg border hover-lift">
                <Trophy className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                <div className="text-sm text-muted-foreground">{item.title}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl border">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join RSA's flagship Roller Skating program and experience world-class training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>;
}
