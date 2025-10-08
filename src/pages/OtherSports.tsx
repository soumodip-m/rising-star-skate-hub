import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Heart, Target } from "lucide-react";

const OtherSports = () => {
  const sports = [
    {
      name: "Cricket",
      description: "Comprehensive cricket training for all age groups, focusing on batting, bowling, and fielding techniques.",
      features: ["Professional coaching", "Match practice", "Fitness training", "Tournament participation"],
      icon: Trophy
    },
    {
      name: "Football",
      description: "Develop soccer skills with structured training programs emphasizing teamwork and strategy.",
      features: ["Technical skills", "Tactical training", "Physical conditioning", "League competitions"],
      icon: Users
    },
    {
      name: "Basketball",
      description: "Build basketball fundamentals and competitive skills through expert coaching and practice.",
      features: ["Dribbling & shooting", "Team coordination", "Game strategies", "Inter-school matches"],
      icon: Target
    },
    {
      name: "Volleyball",
      description: "Master volleyball techniques with focus on serving, spiking, and team coordination.",
      features: ["Serve techniques", "Attack strategies", "Defense skills", "Championship prep"],
      icon: Heart
    },
    {
      name: "Karate",
      description: "Traditional karate training promoting discipline, self-defense, and physical fitness.",
      features: ["Self-defense", "Kata training", "Belt progression", "Tournament preparation"],
      icon: Trophy
    },
    {
      name: "Handball",
      description: "Fast-paced handball training developing agility, coordination, and teamwork.",
      features: ["Ball handling", "Offensive plays", "Defensive tactics", "Competitive matches"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-sports">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Other Sports Programs
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Explore our diverse range of sports programs designed to nurture athletic excellence 
              and build well-rounded champions across multiple disciplines.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sports.map((sport, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="bg-gradient-sports text-white">
                    <div className="flex items-center justify-between">
                      <sport.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{sport.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{sport.description}</p>
                    <ul className="space-y-2">
                      {sport.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-sports rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Sports Journey?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join RSA-Rising Stars Academy and discover your passion in sports. 
                Contact us today to learn more about our programs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OtherSports;
