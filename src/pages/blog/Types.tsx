import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skateTypes = [
  {
    title: "Inline Skating",
    subtitle: "Speed and precision focused",
    description: "Inline skates feature wheels arranged in a single line, providing superior speed and efficiency. Ideal for racing, fitness, and recreational skating.",
    features: [
      "Single line of wheels for maximum speed",
      "Lower center of gravity for stability",
      "Better aerodynamics",
      "Precise steering and control",
      "Suitable for outdoor and track racing"
    ]
  },
  {
    title: "Quad Skating",
    subtitle: "Balance and artistry focused",
    description: "Quad skates have four wheels in a rectangular formation, offering excellent stability and control. Perfect for artistic skating, dance, and roller derby.",
    features: [
      "Four wheels in rectangular formation",
      "Better balance for beginners",
      "Excellent for artistic skating",
      "Great maneuverability for tricks",
      "Traditional roller derby choice"
    ]
  }
];

const progression = [
  {
    step: 1,
    title: "Basic Stance and Balance",
    duration: "1-2 weeks",
    description: "Learn proper posture, foot positioning, and core engagement"
  },
  {
    step: 2,
    title: "Forward Movement",
    duration: "2-3 weeks",
    description: "Master pushing off, gliding, and maintaining momentum"
  },
  {
    step: 3,
    title: "Stopping Techniques",
    duration: "2-4 weeks",
    description: "Practice T-stop, heel brake, and power stop methods"
  },
  {
    step: 4,
    title: "Turning and Steering",
    duration: "3-5 weeks",
    description: "Develop crossover techniques and tight turning skills"
  },
  {
    step: 5,
    title: "Advanced Techniques",
    duration: "Ongoing",
    description: "Speed development, endurance training, and competition preparation"
  }
];

export default function Types() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Skating Fundamentals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Types of Skating & Essential Techniques
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Master both inline and quad skating with comprehensive guides, practice routines, and expert techniques for every skill level.
            </p>
          </div>
        </section>

        {/* Skate Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {skateTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <p className="text-primary">{type.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                    <div className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Progression */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Essential Practice Progression</h2>
              <p className="text-muted-foreground mb-12">
                Follow this structured approach to build your skating skills from beginner to advanced
              </p>
              <div className="space-y-6">
                {progression.map((item) => (
                  <Card key={item.step}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <Badge className="mb-3">{item.duration}</Badge>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
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
