import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Zap, Award, Settings } from "lucide-react";
import raceStartImg from "@/assets/race-start.jpg";
import racerActionImg from "@/assets/racer-action.jpg";
import teamGujaratImg from "@/assets/team-gujarat.jpg";
import ImageLightbox from "@/components/ImageLightbox";
const ProgramsSection = () => {
  const programs = [{
    icon: Users,
    title: "Cadets & Junior Batch",
    description: "Perfect for beginners and young skaters starting their journey with fun skates",
    features: ["Basic skating techniques", "Fun and games approach", "Safety first training", "Building confidence"],
    time: "5:00 PM - 6:00 PM",
    level: "Beginner",
    gradient: "bg-gradient-sports"
  }, {
    icon: Zap,
    title: "Pre-Advance Batch",
    description: "Intermediate training for skaters ready to take their skills to the next level",
    features: ["Advanced techniques", "Speed development", "Agility training", "Competition prep"],
    time: "6:00 PM - 7:00 PM",
    level: "Intermediate",
    gradient: "bg-gradient-sports"
  }, {
    icon: Award,
    title: "Advance Batch",
    description: "Elite training for competitive skaters aiming for championships",
    features: ["Professional coaching", "Competition strategies", "Performance optimization", "Tournament preparation"],
    time: "7:00 PM - 8:00 PM",
    level: "Advanced",
    gradient: "bg-gradient-sports"
  }, {
    icon: Settings,
    title: "Custom Programs",
    description: "Tailored training programs designed to meet specific needs and goals",
    features: ["Personalized coaching", "Flexible schedules", "Individual attention", "Goal-oriented training"],
    time: "By Appointment",
    level: "All Levels",
    gradient: "bg-gradient-sports"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer specialized training batches every weekday evening, 
            designed to cater to different skill levels and age groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg h-48">
              <ImageLightbox
                src={raceStartImg}
                alt="Young skaters at the starting line of competitive roller skating race"
                className="h-full"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-48">
              <ImageLightbox
                src={racerActionImg}
                alt="Skater in action during training session"
                className="h-full"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-48">
              <ImageLightbox
                src={teamGujaratImg}
                alt="RSA team representing Gujarat"
                className="h-full"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-4">Training Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Training Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Training Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardHeader className={`${program.gradient} text-white`}>
                <div className="flex items-center justify-between">
                  <program.icon className="w-6 h-6" />
                  <span className="text-xs font-medium opacity-90">{program.level}</span>
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">{program.description}</p>
                
                <div className="flex items-center gap-2 mb-3 text-xs font-medium">
                  <Clock className="w-3 h-3 text-primary" />
                  {program.time}
                </div>

                <ul className="space-y-1 mb-4">
                  {program.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>)}
                </ul>

                <Button variant="outline" className="w-full text-xs h-8">
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