import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Zap, Award } from "lucide-react";
import raceStartImg from "@/assets/race-start.jpg";
const ProgramsSection = () => {
  const programs = [{
    icon: Users,
    title: "Cadets & Junior Batch",
    description: "Perfect for beginners and young skaters starting their journey with fun skates",
    features: ["Basic skating techniques", "Fun and games approach", "Safety first training", "Building confidence"],
    time: "5:00 PM - 6:00 PM",
    level: "Beginner",
    color: "bg-success"
  }, {
    icon: Zap,
    title: "Pre-Advance Batch",
    description: "Intermediate training for skaters ready to take their skills to the next level",
    features: ["Advanced techniques", "Speed development", "Agility training", "Competition prep"],
    time: "6:00 PM - 7:00 PM",
    level: "Intermediate",
    color: "bg-primary"
  }, {
    icon: Award,
    title: "Advance Batch",
    description: "Elite training for competitive skaters aiming for championships",
    features: ["Professional coaching", "Competition strategies", "Performance optimization", "Tournament preparation"],
    time: "7:00 PM - 8:00 PM",
    level: "Advanced",
    color: "bg-accent"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer three specialized training batches every weekday evening, 
            designed to cater to different skill levels and age groups.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto mb-8">
            <img src={raceStartImg} alt="Young skaters at the starting line of competitive roller skating race" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardHeader className={`${program.color} text-white`}>
                <div className="flex items-center justify-between">
                  <program.icon className="w-8 h-8" />
                  <span className="text-sm font-medium opacity-90">{program.level}</span>
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{program.description}</p>
                
                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  {program.time}
                </div>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>)}
                </ul>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Training Schedule
          </h3>
          <p className="text-muted-foreground mb-6">
            All training sessions are conducted on weekday evenings at our Ahmedabad facility
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-card rounded-lg p-4 min-w-[120px]">
              <div className="font-semibold text-foreground">Monday - Saturday</div>
              <div className="text-sm text-muted-foreground">Evening Sessions</div>
            </div>
            <div className="bg-card rounded-lg p-4 min-w-[120px]">
              <div className="font-semibold text-foreground">Both Styles</div>
              <div className="text-sm text-muted-foreground">Inline & Quad</div>
            </div>
            <div className="bg-card rounded-lg p-4 min-w-[120px]">
              <div className="font-semibold text-foreground">All Ages</div>
              <div className="text-sm text-muted-foreground">Boys & Girls</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProgramsSection;