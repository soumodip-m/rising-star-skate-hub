import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, Wrench } from "lucide-react";

const featuredProducts = [
  {
    name: "Rollerblade Maxxum Edge 90",
    brand: "Rollerblade",
    type: "Inline Skates",
    level: "Intermediate",
    description: "High-performance fitness skates with 90mm wheels",
    price: "₹15,000 - ₹20,000",
    recommended: true
  },
  {
    name: "Powerslide Imperial Megacruiser",
    brand: "Powerslide",
    type: "Speed Skates",
    level: "Advanced",
    description: "Professional speed skating boots with carbon frame",
    price: "₹35,000 - ₹45,000",
    recommended: true
  },
  {
    name: "Sure-Grip Boardwalk",
    brand: "Sure-Grip",
    type: "Quad Skates",
    level: "Beginner",
    description: "Classic quad skates perfect for beginners",
    price: "₹8,000 - ₹12,000",
    recommended: false
  }
];

const buyingGuide = [
  {
    level: "Beginner",
    budget: "₹8,000 - ₹15,000",
    recommendations: [
      "Recreational inline skates with good ankle support",
      "Soft-shell boots for comfort",
      "80-82A wheel hardness",
      "ABEC 5-7 bearings sufficient"
    ]
  },
  {
    level: "Intermediate",
    budget: "₹15,000 - ₹30,000",
    recommendations: [
      "Fitness or urban inline skates",
      "Semi-hard shell boots for better support",
      "84-86A wheel hardness",
      "ABEC 7-9 bearings recommended"
    ]
  },
  {
    level: "Advanced",
    budget: "₹30,000+",
    recommendations: [
      "Professional speed or racing skates",
      "Carbon fiber or hard shell boots",
      "88A+ wheel hardness for speed",
      "High-precision Swiss bearings"
    ]
  }
];

const retailers = [
  {
    name: "Decathlon India",
    type: "Recreational Equipment",
    features: ["Physical stores", "Good for beginners", "Affordable prices"],
    url: "decathlon.in"
  },
  {
    name: "Skating India",
    type: "All Levels",
    features: ["Wide selection", "Expert advice", "Professional equipment"],
    url: "skatingindia.com"
  },
  {
    name: "Amazon India",
    type: "General Marketplace",
    features: ["Quick delivery", "Multiple brands", "Customer reviews"],
    url: "amazon.in"
  }
];

const maintenanceTips = [
  {
    title: "Regular Cleaning",
    description: "Clean wheels and bearings after every 10-15 skating sessions"
  },
  {
    title: "Wheel Rotation",
    description: "Rotate wheels every 20-30 hours to ensure even wear"
  },
  {
    title: "Bearing Maintenance",
    description: "Lubricate bearings every 3-6 months for optimal performance"
  },
  {
    title: "Boot Care",
    description: "Keep boots dry and clean, replace worn-out parts promptly"
  }
];

export default function Equipment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Equipment Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Skates & Equipment Guide
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Everything you need to know about buying, maintaining, and caring for your roller skates, from budget-friendly options to professional racing equipment.
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Equipment</h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredProducts.map((product, index) => (
                <Card key={index}>
                  <CardHeader>
                    {product.recommended && (
                      <Badge className="w-fit mb-2">Recommended</Badge>
                    )}
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">{product.type}</Badge>
                      <Badge variant="outline">{product.level}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Buying Guide by Skill Level</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Choose the right equipment based on your skating experience and goals
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {buyingGuide.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{guide.level} Level</CardTitle>
                    <p className="text-2xl font-bold text-primary">{guide.budget}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {guide.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ShoppingCart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Where to Buy Skates in India</h2>
              <p className="text-muted-foreground mb-8">
                Trusted retailers and online stores for skating equipment
              </p>
              <div className="space-y-6">
                {retailers.map((retailer, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{retailer.name}</CardTitle>
                      <Badge>{retailer.type}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {retailer.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {retailer.url}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Maintenance & Care</h2>
                  <p className="text-muted-foreground">Keep your equipment in top condition</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {maintenanceTips.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
