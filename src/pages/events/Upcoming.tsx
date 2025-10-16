import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    title: "State Roller Skating Championship",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "RSA Sports Complex",
    description: "Annual state-level roller skating competition with participants from across Gujarat"
  },
  {
    title: "Inter-Academy Cricket Tournament",
    date: "March 22, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "City Cricket Ground",
    description: "Friendly cricket matches between top sports academies in the region"
  },
  {
    title: "Football Skills Workshop",
    date: "April 5, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "RSA Training Grounds",
    description: "Special workshop by professional football coach focusing on advanced techniques"
  },
  {
    title: "Parents Day & Sports Exhibition",
    date: "April 20, 2025",
    time: "3:00 PM - 8:00 PM",
    location: "RSA Campus",
    description: "Showcase event where students demonstrate their skills to parents and guests"
  }
];

export default function Upcoming() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl">Join us for exciting sports events and competitions</p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Link to="/contact">
                      <Button variant="outline">Get More Information</Button>
                    </Link>
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
