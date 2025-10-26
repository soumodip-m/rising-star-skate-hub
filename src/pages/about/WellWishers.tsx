import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

// Import logos
import dpsLogo from "@/assets/wellwishers/dps-logo-color.png";
import grsaLogo from "@/assets/wellwishers/grsa-logo-color.jpg";
import rsfiLogo from "@/assets/wellwishers/rsfi-logo-color.png";
import srLogo from "@/assets/wellwishers/sr-logo-color.png";
import blueSkyLogo from "@/assets/wellwishers/blue-sky-logo.jpg";
import blueBuddhaLogo from "@/assets/wellwishers/blue-buddha-logo.jpg";

export default function WellWishers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const wellWishers = [
    { logo: rsfiLogo, name: "Roller Skating Federation of India", alt: "RSFI Logo" },
    { logo: grsaLogo, name: "Gujarat Roller Skating Association", alt: "GRSA Logo" },
    { logo: srLogo, name: "Speed Roller", alt: "Speed Roller Logo" },
    { logo: dpsLogo, name: "Delhi Public School", alt: "DPS Logo" },
    { logo: blueSkyLogo, name: "Blue Sky Overseas", alt: "Blue Sky Overseas Logo" },
    { logo: blueBuddhaLogo, name: "Blue Buddha London", alt: "Blue Buddha Logo" },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 1;
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Well-Wishers</h1>
            <p className="text-xl">Partners and supporters who make our mission possible</p>
          </div>
        </section>

        {/* Well-Wishers Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are grateful to our well-wishers, sponsors, and partners who have supported 
                Rising Stars Academy in our mission to nurture young athletic talent.
              </p>
            </div>

            {/* Scrolling Logo Cards */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              <div className="flex gap-6 min-w-max pb-4">
                {wellWishers.map((wellWisher, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <Card className="p-6 hover-lift h-full flex flex-col items-center justify-center">
                      <div className="w-full h-32 flex items-center justify-center mb-4">
                        <img 
                          src={wellWisher.logo} 
                          alt={wellWisher.alt}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-center font-semibold text-foreground">
                        {wellWisher.name}
                      </h3>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold mb-6 text-center">Special Thanks To</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Local Sports Authority for infrastructure support</li>
                  <li>• Community sponsors who fund scholarships for underprivileged athletes</li>
                  <li>• Parent volunteers who help organize events and competitions</li>
                  <li>• Former students who return to mentor current athletes</li>
                  <li>• Sports equipment manufacturers for providing quality gear</li>
                </ul>
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
