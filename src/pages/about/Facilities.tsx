import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    name: "Olympic-Size Skating Rink",
    description: "State-of-the-art roller skating facility with professional-grade surfaces",
    image: "/images/facilities-gym.jpg"
  },
  {
    name: "Multi-Purpose Sports Arena",
    description: "Indoor arena for basketball, badminton, and other sports",
    image: "/images/facilities-gym.jpg"
  },
  {
    name: "Training Gymnasium",
    description: "Fully equipped gym for strength and conditioning training",
    image: "/images/facilities-gym.jpg"
  },
  {
    name: "Cross-Training Pool",
    description: "Swimming pool for cross-training and recovery sessions",
    image: "/images/pool-cross-training.jpg"
  }
];

export default function Facilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure & Facilities</h1>
            <p className="text-xl">World-class training facilities for our athletes</p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <Card key={index} className="hover-lift overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p className="text-muted-foreground">{facility.description}</p>
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
