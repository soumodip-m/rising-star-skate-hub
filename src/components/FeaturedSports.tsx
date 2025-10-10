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
      description: "Our flagship program with inline & quad skating",
      href: "/sports/roller-skating",
      featured: true,
    },
    {
      name: "Cricket",
      icon: Circle,
      description: "Professional cricket coaching for all levels",
      href: "/sports/cricket",
    },
    {
      name: "Football",
      icon: Trophy,
      description: "Build teamwork and technical skills",
      href: "/sports/football",
    },
    {
      name: "Basketball",
      icon: Target,
      description: "Fast-paced training and strategy",
      href: "/sports/basketball",
    },
    {
      name: "Tennis",
      icon: Zap,
      description: "Master technique and court strategy",
      href: "/sports/tennis",
    },
    {
      name: "Badminton",
      icon: Award,
      description: "Agility and precision training",
      href: "/sports/badminton",
    },
    {
      name: "Athletics",
      icon: Activity,
      description: "Track and field excellence",
      href: "/sports/athletics",
    },
    {
      name: "Kho-Kho",
      icon: User,
      description: "Traditional Indian sport mastery",
      href: "/sports/kho-kho",
    },
    {
      name: "Kabaddi",
      icon: Dumbbell,
      description: "Strength and strategy combined",
      href: "/sports/kabaddi",
    },
    {
      name: "Shooting",
      icon: Flag,
      description: "Precision and focus training",
      href: "/sports/shooting",
    },
    {
      name: "Swimming",
      icon: Waves,
      description: "Aquatic excellence and fitness",
      href: "/sports/swimming",
    },
  ];

  return (
    <section className="py-20 bg-[image:var(--gradient-layer-1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Sports Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional coaching programs designed 
            to unlock your athletic potential
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
      </div>
    </section>
  );
};

export default FeaturedSports;
