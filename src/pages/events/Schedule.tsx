import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const competitions = [
  {
    month: "March 2025",
    events: [
      { date: "15th", name: "State Roller Skating Championship", category: "All Age Groups" },
      { date: "22nd", name: "Inter-Academy Cricket Tournament", category: "U-14, U-16" }
    ]
  },
  {
    month: "April 2025",
    events: [
      { date: "5th", name: "Football League Matches", category: "U-12, U-14, U-16" },
      { date: "12th", name: "Tennis District Championship", category: "All Categories" },
      { date: "20th", name: "Basketball Inter-School Tournament", category: "U-14, U-16" }
    ]
  },
  {
    month: "May 2025",
    events: [
      { date: "8th", name: "National Badminton Championship Qualifier", category: "All Age Groups" },
      { date: "18th", name: "Athletics State Meet", category: "All Events" }
    ]
  }
];

export default function Schedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Competition Schedule</h1>
            <p className="text-xl">Stay updated with upcoming tournaments and competitions</p>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {competitions.map((monthData, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">{monthData.month}</h2>
                    </div>
                    <div className="space-y-4">
                      {monthData.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex gap-4 pb-4 border-b last:border-0">
                          <div className="bg-primary/10 rounded-lg p-3 text-center min-w-[60px]">
                            <div className="text-2xl font-bold text-primary">{event.date}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-1">{event.name}</h3>
                            <p className="text-sm text-muted-foreground">{event.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-8 bg-muted/50 p-6 rounded-lg">
              <p className="text-center text-muted-foreground">
                Competition dates are subject to change. Please check with your coach or contact 
                us for the latest updates and registration details.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
