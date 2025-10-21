import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Zap, Trophy, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Book,
    title: "Rich History",
    description: "Explore the fascinating evolution of roller skating from 1760 to modern speed skating.",
    link: "/blog/history",
  },
  {
    icon: Zap,
    title: "Types & Techniques",
    description: "Master both inline and quad skating with expert guidance and practice tips.",
    link: "/blog/types",
  },
  {
    icon: Trophy,
    title: "Global Competitions",
    description: "Stay updated with international championships and competitions worldwide.",
    link: "/blog/competitions",
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Structured programs from beginner to advanced with exercise routines.",
    link: "/blog/training",
  },
];

const quickLinks = [
  "Complete equipment buying and maintenance guide",
  "SGFI National and RSFI information for India",
  "International competition calendar",
  "Expert training tips and exercise routines",
  "Global skating community blogs and insights",
];

const stats = [
  { number: "100+", label: "Years of Skating History" },
  { number: "50+", label: "Countries Competing" },
  { number: "1M+", label: "Active Skaters Worldwide" },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Welcome to Speed Skating World
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Master the Art of Speed Skating</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
              Your complete guide to roller skating - from history and techniques to equipment and competitions. Join
              the global community of speed skating enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/blog/types">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/blog/equipment">Equipment Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Button variant="ghost" className="group p-0" asChild>
                      <Link to={feature.link}>
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Explore All Pages Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Explore All Pages</h2>
                  <p className="text-muted-foreground">Quick access to all sections of Speed Skating Hub</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg hover-lift">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <p>{link}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Whether you're a complete beginner or looking to improve your technique, we have the resources and
              community to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/blog/training">Start Training</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
