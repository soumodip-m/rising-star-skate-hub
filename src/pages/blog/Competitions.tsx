import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, MapPin } from "lucide-react";

const hierarchy = [
  {
    level: "International",
    events: "World Championships, Continental Championships, World Cup Series",
    requirements: "National team selection, world ranking qualification"
  },
  {
    level: "National",
    events: "National Championships, National Cup Series, Inter-state competitions",
    requirements: "State or regional qualification, national federation membership"
  },
  {
    level: "Regional",
    events: "State Championships, Regional cups, District competitions",
    requirements: "Local club membership, basic skill certification"
  },
  {
    level: "Local",
    events: "Club championships, beginner competitions, fun races",
    requirements: "Basic skating ability, age-appropriate categories"
  }
];

const majorEvents = [
  {
    title: "World Roller Speed Skating Championships",
    description: "The ultimate championship featuring the world's best speed skaters",
    frequency: "Annual",
    participants: "500+ athletes from 50+ countries",
    categories: ["Track Speed", "Road Speed", "Marathon"]
  },
  {
    title: "World Roller Games",
    description: "Multi-discipline roller sports championship including speed, artistic, and hockey",
    frequency: "Every 2 years",
    participants: "3000+ athletes from 80+ countries",
    categories: ["Speed", "Artistic", "Hockey", "Freestyle"]
  },
  {
    title: "World Road Championships",
    description: "Premier road skating competition featuring marathon and half-marathon events",
    frequency: "Annual",
    participants: "800+ athletes from 40+ countries",
    categories: ["Marathon", "Half Marathon", "10K Road"]
  }
];

const indiaEvents = [
  {
    name: "SGFI National Skating Championship",
    organization: "School Games Federation of India",
    description: "Premier school-level skating competition in India"
  },
  {
    name: "RSFI National Championship",
    organization: "Roller Skating Federation of India",
    description: "National championship sanctioned by RSFI"
  },
  {
    name: "State Level Championships",
    organization: "State Skating Associations",
    description: "Regional competitions across different states"
  }
];

export default function Competitions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Global Competitions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              International Roller Skating Competitions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Discover the world of competitive roller skating, from local club races to international championships where the world's best athletes compete for glory.
            </p>
          </div>
        </section>

        {/* Competition Hierarchy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Competition Hierarchy</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Understanding the different levels of competitive roller skating
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {hierarchy.map((level, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold mb-2">{level.events}</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Requirements:</strong> {level.requirements}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Major International Championships */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Major International Championships</h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {majorEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        <Badge>{event.frequency}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm">{event.participants}</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Categories:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.categories.map((cat, idx) => (
                            <Badge key={idx} variant="outline">{cat}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* India Competitions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Competitions in India</h2>
                  <p className="text-muted-foreground">National and state-level skating championships</p>
                </div>
              </div>
              <div className="space-y-6">
                {indiaEvents.map((event, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                      <Badge className="w-fit">{event.organization}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
