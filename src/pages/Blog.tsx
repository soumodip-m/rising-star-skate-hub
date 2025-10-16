import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Benefits of Starting Sports Training Early",
    excerpt: "Discover why early sports training is crucial for child development and how it shapes future athletic success.",
    author: "Coach Rajesh",
    date: "March 10, 2025",
    category: "Training Tips",
    image: "/images/coach-team.jpg"
  },
  {
    title: "How to Choose the Right Sport for Your Child",
    excerpt: "A comprehensive guide to help parents identify which sport best suits their child's interests and abilities.",
    author: "Admin",
    date: "March 5, 2025",
    category: "Parent Guide",
    image: "/images/facilities-gym.jpg"
  },
  {
    title: "Nutrition Tips for Young Athletes",
    excerpt: "Essential nutrition guidelines to fuel performance and support healthy growth in young sports enthusiasts.",
    author: "Nutritionist Priya",
    date: "February 28, 2025",
    category: "Health & Wellness",
    image: "/images/pool-cross-training.jpg"
  },
  {
    title: "Success Story: From Beginner to National Champion",
    excerpt: "Follow the inspiring journey of one of our roller skating students who achieved national recognition.",
    author: "Coach Team",
    date: "February 20, 2025",
    category: "Success Stories",
    image: "/images/events-medals.jpg"
  },
  {
    title: "The Importance of Cross-Training in Sports",
    excerpt: "Learn why diversifying athletic activities can prevent injuries and improve overall performance.",
    author: "Coach Amit",
    date: "February 15, 2025",
    category: "Training Tips",
    image: "/images/training-facility.jpg"
  },
  {
    title: "Preparing for Your First Competition",
    excerpt: "Expert advice on mental preparation, physical readiness, and strategies for competition success.",
    author: "Coach Sneha",
    date: "February 10, 2025",
    category: "Competition",
    image: "/images/hero-roller.jpg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RSA Blog</h1>
            <p className="text-xl">Insights, tips, and stories from the world of sports training</p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover-lift overflow-hidden flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <Button variant="ghost" className="w-full justify-between group">
                      Read More 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, training tips, and academy updates delivered to your inbox
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-md border border-input bg-background"
                />
                <Button className="gradient-primary">Subscribe</Button>
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
