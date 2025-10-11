import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import UtilityBar from "@/components/UtilityBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sports = [
  {
    name: "Cricket",
    description: "Professional cricket coaching with focus on technique, fitness, and match strategy. Training for all formats of the game.",
    features: ["Batting techniques", "Bowling mechanics", "Fielding drills", "Match strategy"]
  },
  {
    name: "Football",
    description: "Comprehensive football training from grassroots to competitive level with emphasis on skill development and teamwork.",
    features: ["Ball control", "Passing & shooting", "Tactical awareness", "Team coordination"]
  },
  {
    name: "Basketball",
    description: "Develop fundamental skills, team play, and competitive edge in basketball with professional coaching.",
    features: ["Dribbling & shooting", "Defense techniques", "Court awareness", "Team strategies"]
  },
  {
    name: "Tennis",
    description: "Expert tennis coaching for beginners to advanced players focusing on technique and match play.",
    features: ["Forehand & backhand", "Serve techniques", "Court positioning", "Match tactics"]
  },
  {
    name: "Badminton",
    description: "Structured badminton training with certified coaches for all skill levels.",
    features: ["Racket techniques", "Footwork drills", "Shot accuracy", "Game strategy"]
  },
  {
    name: "Athletics",
    description: "Track and field training covering sprints, jumps, and throws with professional guidance.",
    features: ["Speed training", "Endurance building", "Technique refinement", "Competition prep"]
  },
  {
    name: "Kho-Kho",
    description: "Traditional Indian sport training focusing on agility, speed, and team coordination.",
    features: ["Quick reflexes", "Team coordination", "Strategic thinking", "Physical fitness"]
  },
  {
    name: "Kabaddi",
    description: "Professional kabaddi coaching emphasizing strength, strategy, and traditional techniques.",
    features: ["Raiding techniques", "Defense strategies", "Breath control", "Team tactics"]
  },
  {
    name: "Shooting",
    description: "Professional shooting training with safety protocols and competitive preparation.",
    features: ["Aim training", "Safety protocols", "Mental focus", "Competition readiness"]
  },
  {
    name: "Swimming",
    description: "Comprehensive swimming program from learning basics to competitive swimming.",
    features: ["Stroke techniques", "Breathing control", "Endurance training", "Water safety"]
  }
];

const OtherSports = () => {
  return (
    <div className="min-h-screen">
      <UtilityBar />
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Sports Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond our flagship roller skating program, we offer expert coaching in multiple sports. Each program is designed to help athletes excel in their chosen discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-2xl">{sport.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{sport.description}</p>
                  <ul className="space-y-2">
                    {sport.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a trial session in any of our sports programs and experience professional coaching firsthand.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => window.location.href = '/#contact'}
            >
              Book a Trial
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

export default OtherSports;
