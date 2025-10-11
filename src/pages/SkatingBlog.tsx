import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import UtilityBar from "@/components/UtilityBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, BookOpen, Trophy, Users, Dumbbell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SkatingBlog = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Rich History",
      description: "Explore the fascinating evolution of roller skating from 1760 to modern speed skating.",
      icon: BookOpen
    },
    {
      title: "Types & Techniques",
      description: "Master both inline and quad skating with expert guidance and practice tips.",
      icon: Users
    },
    {
      title: "Global Competitions",
      description: "Stay updated with international championships and competitions worldwide.",
      icon: Trophy
    },
    {
      title: "Training Programs",
      description: "Structured programs from beginner to advanced with exercise routines.",
      icon: Dumbbell
    }
  ];

  const stats = [
    { number: "260+", label: "Years of Skating History" },
    { number: "50+", label: "Countries Competing" },
    { number: "1000+", label: "Active Skaters Worldwide" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UtilityBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-sports text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master the Art of Speed Skating
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Your complete guide to roller skating - from history and techniques to equipment and competitions. Join the global community of speed skating enthusiasts.
          </p>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <section.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-sports text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're a complete beginner or looking to improve your technique, we have the resources and community to help you succeed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/#programs')}
            >
              Start Training
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default SkatingBlog;
