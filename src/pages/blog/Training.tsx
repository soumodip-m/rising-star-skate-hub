import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Zap, Heart, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Beginner Foundation Program",
    description: "Learn basic skating fundamentals, balance, and safety techniques",
    level: "Beginner",
    duration: "8 weeks",
    objectives: [
      "Master basic skating stance and balance",
      "Learn forward and backward movement",
      "Practice safe stopping techniques",
      "Build confidence on skates"
    ]
  },
  {
    title: "Intermediate Speed Training",
    description: "Focus on speed development, technique refinement, and endurance",
    level: "Intermediate",
    duration: "12 weeks",
    objectives: [
      "Improve skating technique and form",
      "Develop speed and power",
      "Learn race strategies",
      "Build cardiovascular endurance"
    ]
  },
  {
    title: "Advanced Competition Prep",
    description: "Elite training for competitive skaters and race preparation",
    level: "Advanced",
    duration: "16 weeks",
    objectives: [
      "Perfect racing technique",
      "Peak performance conditioning",
      "Mental preparation for competition",
      "Advanced tactical training"
    ]
  }
];

const exerciseCategories = [
  {
    icon: Target,
    title: "Balance",
    description: "Core stability and ankle strength exercises"
  },
  {
    icon: Zap,
    title: "Speed",
    description: "High-intensity intervals and sprint training"
  },
  {
    icon: Heart,
    title: "Endurance",
    description: "Cardiovascular fitness and stamina building"
  },
  {
    icon: TrendingUp,
    title: "Technique",
    description: "Form improvement and skill development"
  },
  {
    icon: Dumbbell,
    title: "Strength",
    description: "Leg strength and power development"
  }
];

const exercises = [
  {
    name: "Balance Board Training",
    category: "Balance",
    description: "Improve core stability and ankle strength using balance boards",
    duration: "15-20 minutes",
    frequency: "3-4 times per week"
  },
  {
    name: "Interval Sprints",
    category: "Speed",
    description: "High-intensity sprint intervals to build explosive speed",
    duration: "20-30 minutes",
    frequency: "2-3 times per week"
  },
  {
    name: "Long Distance Skating",
    category: "Endurance",
    description: "Sustained skating sessions to build cardiovascular endurance",
    duration: "45-90 minutes",
    frequency: "2-3 times per week"
  },
  {
    name: "Crossover Drills",
    category: "Technique",
    description: "Practice proper crossover technique for efficient cornering",
    duration: "20-30 minutes",
    frequency: "3-4 times per week"
  }
];

export default function Training() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Training Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Trained for Success in Skating
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Comprehensive training programs and exercise routines designed to take you from beginner to competitive level with structured progression and expert guidance.
            </p>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{program.level}</Badge>
                      <Badge variant="outline">Duration: {program.duration}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Program Objectives:</h4>
                    <ul className="space-y-2">
                      {program.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">{obj}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      <Button className="w-full mt-6">Start Program</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exercise Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Exercise Categories</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Different types of exercises targeting specific aspects of skating performance
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {exerciseCategories.map((category, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Exercises */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Sample Exercise Routines</h2>
              <div className="space-y-6">
                {exercises.map((exercise, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{exercise.name}</CardTitle>
                          <Badge className="mt-2">{exercise.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exercise.description}</p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="font-semibold">Duration:</span> {exercise.duration}
                        </div>
                        <div>
                          <span className="font-semibold">Frequency:</span> {exercise.frequency}
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
