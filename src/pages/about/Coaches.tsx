import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const coaches = [
  {
    name: "Coach Rajesh Kumar",
    specialty: "Roller Skating",
    experience: "12 years",
    image: "/images/coach-team.jpg"
  },
  {
    name: "Coach Priya Sharma",
    specialty: "Cricket",
    experience: "10 years",
    image: "/images/coach-team.jpg"
  },
  {
    name: "Coach Amit Patel",
    specialty: "Football",
    experience: "8 years",
    image: "/images/coach-team.jpg"
  },
  {
    name: "Coach Sneha Reddy",
    specialty: "Basketball",
    experience: "9 years",
    image: "/images/coach-team.jpg"
  }
];

export default function Coaches() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coaches & Trainers</h1>
            <p className="text-xl">Expert guidance from certified professionals</p>
          </div>
        </section>

        {/* Coaches Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {coaches.map((coach, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                    <p className="text-primary font-semibold mb-1">{coach.specialty}</p>
                    <p className="text-muted-foreground">{coach.experience} experience</p>
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
