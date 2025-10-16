import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "RSA Official Jersey",
    price: "₹899",
    description: "Premium quality training jersey with academy logo",
    image: "/images/facilities-gym.jpg",
    category: "Apparel"
  },
  {
    name: "RSA Sports Bag",
    price: "₹1,499",
    description: "Durable sports bag with multiple compartments",
    image: "/images/coach-team.jpg",
    category: "Accessories"
  },
  {
    name: "RSA Track Pants",
    price: "₹799",
    description: "Comfortable training pants for all sports",
    image: "/images/pool-cross-training.jpg",
    category: "Apparel"
  },
  {
    name: "Professional Roller Skates",
    price: "₹4,999",
    description: "High-performance inline skates for competitive training",
    image: "/images/hero-roller.jpg",
    category: "Equipment"
  },
  {
    name: "RSA Water Bottle",
    price: "₹299",
    description: "Insulated sports bottle with academy branding",
    image: "/images/training-facility.jpg",
    category: "Accessories"
  },
  {
    name: "Training Kit Bundle",
    price: "₹2,499",
    description: "Complete training kit including jersey, shorts, and socks",
    image: "/images/events-medals.jpg",
    category: "Bundles"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RSA Official Store</h1>
            <p className="text-xl">Get your official RSA merchandise and sports equipment</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="hover-lift overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button className="gradient-primary">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Shopping Information</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-bold mb-2">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">On orders above ₹1,000</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">7-day return policy</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">100% secure transactions</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  For bulk orders or custom requirements, please contact us at{" "}
                  <a href="mailto:shop@rsaacademy.com" className="text-primary hover:underline">
                    shop@rsaacademy.com
                  </a>
                </p>
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
