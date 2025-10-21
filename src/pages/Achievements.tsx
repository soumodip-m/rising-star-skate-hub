import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Medal, Trophy, Star } from "lucide-react";

const achievements = [
  {
    category: "Roller Skating",
    icon: Trophy,
    accomplishments: [
      "15 National Gold Medals (2020-2024)",
      "State Champions - 4 consecutive years",
      "3 students selected for National Team",
      "25+ International competition participants",
    ],
  },
  {
    category: "Cricket",
    icon: Medal,
    accomplishments: [
      "District Champions - U-16 Category",
      "5 students in State-level teams",
      "Tournament Winners - Inter-Academy Cup 2024",
      "Best Academy Award 2023",
    ],
  },
  {
    category: "Football",
    icon: Award,
    accomplishments: [
      "State Tournament Runners-Up 2024",
      "City League Champions - U-14",
      "10+ students in district selection trials",
      "Best Coached Team Award 2023",
    ],
  },
  {
    category: "Basketball",
    icon: Star,
    accomplishments: [
      "Inter-School Championship Winners",
      "Regional Tournament Semi-Finalists",
      "3 students in State Basketball Academy",
      "Most Improved Team 2024",
    ],
  },
];

const studentHighlights = [
  {
    name: "Rajesh Kumar",
    sport: "Speed Skating",
    achievement: "National Gold Medalist - 500m Sprint",
    image: "/images/events-medals.jpg",
  },
  {
    name: "Priya Sharma",
    sport: "Cricket",
    achievement: "State Team Player - Best All-Rounder Award",
    image: "/images/coach-team.jpg",
  },
  {
    name: "Amit Patel",
    sport: "Football",
    achievement: "District Selection - Top Scorer",
    image: "/images/facilities-gym.jpg",
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Achievements</h1>
            <p className="text-xl">Celebrating excellence and success stories</p>
          </div>
        </section>

        {/* Sports Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Achievements by Sport</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.category}</h3>
                      </div>
                      <ul className="space-y-3">
                        {item.accomplishments.map((accomplishment, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{accomplishment}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Spotlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Student Spotlights</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {studentHighlights.map((student, index) => (
                <Card key={index} className="hover-lift overflow-hidden">
                  <img src={student.image} alt={student.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                    <p className="text-primary font-semibold mb-2">{student.sport}</p>
                    <p className="text-muted-foreground">{student.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Total Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">National Medals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">State Medals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Championships Won</p>
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
