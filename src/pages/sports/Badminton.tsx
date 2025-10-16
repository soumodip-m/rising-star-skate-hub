import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Badminton() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Badminton Coaching</h1>
            <p className="text-xl mb-6">Excel in the fastest racquet sport</p>
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
                  alt="Badminton Training"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Badminton Program</h2>
                <p className="text-muted-foreground mb-4">
                  Our badminton program focuses on developing quick reflexes, powerful shots, 
                  strategic gameplay, and endurance. Training includes singles and doubles 
                  techniques with emphasis on competitive play.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>BWF-certified coaching staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Professional-grade indoor courts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Specialized footwork and agility training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Regular inter-club tournaments</span>
                  </li>
                </ul>
                <Link to="/admissions">
                  <Button className="gradient-primary">Join Badminton Program</Button>
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
