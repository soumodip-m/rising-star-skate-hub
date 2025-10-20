import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
const pastEvents = [
  {
    title: "National Roller Skating Championship 2024",
    date: "December 2024",
    achievement: "3 Gold, 5 Silver, 2 Bronze medals",
    image: "/images/events-medals.jpg",
  },
  {
    title: "Gujarat State Football Tournament",
    date: "November 2024",
    achievement: "Winners - Under-16 Category",
    image: "/images/coach-team.jpg",
  },
  {
    title: "Inter-School Cricket Championship",
    date: "October 2024",
    achievement: "Runners-Up",
    image: "/images/facilities-gym.jpg",
  },
  {
    title: "Summer Sports Camp 2024",
    date: "June 2024",
    achievement: "200+ participants across 7 sports",
    image: "/images/pool-cross-training.jpg",
  },
  {
    title: "Annual Sports Day 2024",
    date: "February 2024",
    achievement: "500+ attendees, 150+ student participants",
    image: "/images/hero-roller.jpg",
  },
];
export default function Past() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accomplishments in Media</h1>
            <p className="text-xl">Media coverage highlighting team RSA's efforts</p>
          </div>
        </section>

        {/* Past Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pastEvents.map((event, index) => (
                <Card key={index} className="hover-lift overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Trophy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                        <p className="text-primary font-semibold">{event.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
