import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star, Users, Globe, Target, Calendar, Sparkles } from "lucide-react";
import teamSunset from "@/assets/team-sunset.jpg";
import khelMahakumbhTeam from "@/assets/milestones/khel-mahakumbh-team.jpg";
import warriorChampionship from "@/assets/milestones/warrior-championship.jpg";
import sagWinners from "@/assets/milestones/sag-winners-2014.jpg";
import championTeam from "@/assets/milestones/champion-team-trophies.jpg";
import teamMedals from "@/assets/milestones/team-medals-outdoor.jpg";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: any;
  image?: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    year: "1998",
    title: "The Beginning",
    description: "Academy started with 9 students; first Gujarat State medal",
    icon: Star,
  },
  {
    year: "1999",
    title: "National Breakthrough",
    description: "First RSFI medal and National Championship in Chandigarh",
    icon: Trophy,
  },
  {
    year: "2002",
    title: "SGFI Nationals Selection",
    description: "First SGFI Nationals selection marked our growing presence",
    icon: Target,
  },
  {
    year: "2003",
    title: "CBSE National Medals",
    description: "First CBSE National medals added to our trophy cabinet",
    icon: Medal,
  },
  {
    year: "2005",
    title: "CISCE Recognition",
    description: "CISCE Nationals selection expanded our competitive reach",
    icon: Award,
  },
  {
    year: "2007",
    title: "Perfect Performance",
    description: "RSFI Kolkata: 11 selected, all won medals - a historic achievement",
    icon: Sparkles,
    highlight: true,
  },
  {
    year: "2008",
    title: "RSFI Nationals",
    description: "Continued excellence at RSFI National Championships",
    icon: Trophy,
  },
  {
    year: "2010",
    title: "Khel Mahakumbh Record",
    description: "RSA holds record for most medals in Khel Mahakumbh (ongoing)",
    icon: Medal,
    image: khelMahakumbhTeam,
    highlight: true,
  },
  {
    year: "2014-15",
    title: "International Camp",
    description: "Organized International Camp with foreign skaters",
    icon: Globe,
    image: sagWinners,
  },
  {
    year: "2015",
    title: "Asian Championship",
    description: "Students participated in Asian Championship",
    icon: Globe,
  },
  {
    year: "2016",
    title: "First SGFI Gold",
    description: "First SGFI Gold Medal - a breakthrough moment",
    icon: Trophy,
    highlight: true,
  },
  {
    year: "2022",
    title: "Special Olympics",
    description: "Student won medal in Special Olympics, Berlin",
    icon: Award,
  },
  {
    year: "2024",
    title: "RSFI Excellence",
    description: "25+ medals in RSFI Nationals showcasing consistent excellence",
    icon: Medal,
    image: championTeam,
    highlight: true,
  },
];
export default function Milestones() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.milestone-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-roller.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <Trophy className="h-16 w-16 text-amber-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Journey of Excellence</h1>
              <p className="text-xl md:text-2xl text-slate-100">Milestones that define Team RSA - Rising Stars Academy</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">7×</div>
                <div className="text-sm md:text-base opacity-90">Defending Champions</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">2×</div>
                <div className="text-sm md:text-base opacity-90">Warriors Tournament Champions</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-sm md:text-base opacity-90">Students Trained Yearly</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                <div className="text-sm md:text-base opacity-90">Total Students Trained</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Timeline of Achievements</h2>
            
            {/* Timeline */}
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-orange-500 to-amber-500"></div>
                
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isLeft = index % 2 === 0;
                  const isVisible = visibleItems.includes(index);
                  
                  return (
                    <div
                      key={index}
                      data-index={index}
                      className={`milestone-item relative mb-12 md:mb-16 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                        {/* Content */}
                        <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                          <Card className={`${milestone.highlight ? 'border-2 border-amber-500 shadow-lg shadow-amber-500/20' : ''} hover-lift`}>
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4 md:flex-row-reverse md:justify-end">
                                <div className={`${milestone.highlight ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-primary/10'} p-3 rounded-lg flex-shrink-0`}>
                                  <Icon className={`h-6 w-6 ${milestone.highlight ? 'text-white' : 'text-primary'}`} />
                                </div>
                                <div className="flex-1">
                                  <div className={`${milestone.highlight ? 'text-amber-600' : 'text-primary'} font-bold text-2xl mb-2 flex items-center gap-2`}>
                                    <Calendar className="h-5 w-5" />
                                    {milestone.year}
                                  </div>
                                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                  <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                              </div>
                              
                              {milestone.image && (
                                <div className="mt-4 rounded-lg overflow-hidden">
                                  <img 
                                    src={milestone.image} 
                                    alt={milestone.title}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                        
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                          <div className={`w-6 h-6 rounded-full border-4 ${milestone.highlight ? 'bg-amber-500 border-amber-600 animate-pulse' : 'bg-primary border-background'}`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Championship Moments</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={warriorChampionship} alt="Warrior Tournament Championship winners with trophy" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Warriors Tournament Champions</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={championTeam} alt="RSA team with 7 championship trophies" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">7-Time Defending Champions</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={teamMedals} alt="Team RSA athletes with medals at outdoor event" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Medal Winners at National Level</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motivational Quote */}
        <section className="py-20 bg-gradient-to-r from-primary via-orange-600 to-amber-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-6 animate-pulse" />
              <blockquote className="text-3xl md:text-4xl font-bold italic mb-6">
                "Every Star Deserves to Shine — and our journey proves it."
              </blockquote>
              <p className="text-xl text-slate-100">- Team RSA, Rising Stars Academy</p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Legacy Continues</h2>
              <p className="text-lg text-muted-foreground mb-8">
                From humble beginnings with 9 students in 1998 to training over 5000 athletes, RSA has consistently 
                produced champions who excel not just in roller skating, but in academics and life. Our alumni's success 
                in competitive exams like NEET is a testament to the discipline and dedication we instill.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-4 text-amber-500" />
                    <h3 className="font-bold text-xl mb-2">Championship Record</h3>
                    <p className="text-sm text-muted-foreground">Unmatched success in Khel Mahakumbh and national competitions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold text-xl mb-2">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">Building character and discipline in thousands of young athletes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                    <h3 className="font-bold text-xl mb-2">Academic Excellence</h3>
                    <p className="text-sm text-muted-foreground">Alumni excelling in NEET and competitive examinations</p>
                  </CardContent>
                </Card>
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