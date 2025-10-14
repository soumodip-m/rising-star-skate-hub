import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹3,000",
    period: "per month",
    features: [
      "3 sessions per week",
      "Access to basic facilities",
      "Group training",
      "Performance tracking"
    ]
  },
  {
    name: "Standard",
    price: "₹5,000",
    period: "per month",
    popular: true,
    features: [
      "5 sessions per week",
      "Access to all facilities",
      "Group & semi-private training",
      "Performance tracking",
      "Monthly progress reports",
      "Nutrition guidance"
    ]
  },
  {
    name: "Premium",
    price: "₹8,000",
    period: "per month",
    features: [
      "Unlimited sessions",
      "Access to all facilities",
      "One-on-one coaching",
      "Performance tracking",
      "Weekly progress reports",
      "Nutrition & fitness plans",
      "Priority tournament selection"
    ]
  }
];

export default function Fees() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fees & Packages</h1>
            <p className="text-xl">Choose the package that fits your goals</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={pkg.popular ? "border-primary border-2 relative" : ""}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/admissions/register">
                      <Button 
                        className={`w-full mt-6 ${pkg.popular ? 'gradient-primary' : ''}`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Choose {pkg.name}
                      </Button>
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
