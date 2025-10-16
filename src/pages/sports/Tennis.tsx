import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Tennis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tennis Coaching</h1>
            <p className="text-xl mb-6">Master the techniques of tennis with expert coaching</p>
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
                  src="/images/training-facility.jpg"
                  alt="Tennis Training"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Tennis Program</h2>
                <p className="text-muted-foreground mb-4">
                  Our tennis program offers comprehensive training in stroke technique, footwork, 
                  court positioning, and match strategy. Students receive personalized coaching 
                  to improve their game at all levels.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>ITF-certified professional coaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Multiple indoor and outdoor courts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Tournament preparation programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Video analysis and technique improvement</span>
                  </li>
                </ul>
                <Link to="/admissions">
                  <Button className="gradient-primary">Join Tennis Program</Button>
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
