import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Basketball() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Basketball Training</h1>
            <p className="text-xl mb-6">Elevate your game to the next level</p>
            <Link to="/admissions/trial">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book a Trial Session
              </Button>
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="/images/facilities-gym.jpg"
                  alt="Basketball Training"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Basketball Program</h2>
                <p className="text-muted-foreground mb-4">
                  Our basketball program emphasizes fundamental skills, team strategy, and physical 
                  conditioning. Players develop shooting, dribbling, passing, and defensive techniques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Professional indoor basketball courts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Skill-based training programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Competitive league participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Strength and agility conditioning</span>
                  </li>
                </ul>
                <Link to="/admissions">
                  <Button className="gradient-primary">Join Basketball Program</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
