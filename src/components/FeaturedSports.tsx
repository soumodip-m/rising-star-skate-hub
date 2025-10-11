import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Flame, 
  Target, 
  Zap,
  User,
  Dumbbell,
  Activity,
  Award,
  Circle,
  Flag,
  Waves
} from "lucide-react";

const FeaturedSports = () => {
  const sports = [
    {
      name: "Roller Skating",
      icon: Flame,
      description: "Master speed, balance, and race craft with our flagship program. Inline & Quad coaching for all levels.",
      href: "/sports/roller-skating",
      featured: true,
    },
    {
      name: "Cricket",
      icon: Circle,
      description: "Professional cricket coaching with focus on technique, fitness, and match strategy.",
      href: "/other-sports",
    },
    {
      name: "Football",
      icon: Trophy,
      description: "Comprehensive football training from grassroots to competitive level.",
      href: "/other-sports",
    },
    {
      name: "Basketball",
      icon: Target,
      description: "Develop fundamental skills, team play, and competitive edge in basketball.",
      href: "/other-sports",
    },
    {
      name: "Tennis",
      icon: Zap,
      description: "Expert tennis coaching for beginners to advanced players.",
      href: "/other-sports",
    },
    {
      name: "Badminton",
      icon: Award,
      description: "Structured badminton training with certified coaches.",
      href: "/other-sports",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Sports Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of sports programs, each designed to help you excel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <Card
                key={sport.name}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  sport.featured
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-primary text-white"
                    : "bg-card"
                }`}
              >
                <CardContent className="p-6">
                  <div className={`flex ${sport.featured ? 'flex-col md:flex-row' : 'flex-col'} items-start gap-4`}>
                    <div
                      className={`rounded-lg p-4 ${
                        sport.featured
                          ? "bg-white/20"
                          : "bg-primary/10 group-hover:bg-primary/20"
                      } transition-colors`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          sport.featured ? "text-white" : "text-primary"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          sport.featured ? "text-white" : "text-foreground"
                        }`}
                      >
                        {sport.name}
                        {sport.featured && (
                          <span className="ml-2 text-sm font-normal bg-white/20 px-2 py-1 rounded">
                            Flagship
                          </span>
                        )}
                      </h3>
                      <p
                        className={`mb-4 ${
                          sport.featured ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        {sport.description}
                      </p>
                      <Button
                        variant={sport.featured ? "secondary" : "outline"}
                        size="sm"
                        asChild
                      >
                        <a href={sport.href}>Learn more</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/other-sports">View All Sports</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSports;
