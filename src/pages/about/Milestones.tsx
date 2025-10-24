import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Award, Target } from "lucide-react";
import teamSunset from "@/assets/team-sunset.jpg";
const milestones = [{
  year: "2015",
  title: "Academy Founded",
  description: "Started with 10 students and a dream to create champions",
  icon: Target
}, {
  year: "2017",
  title: "First National Medal",
  description: "Our roller skating team won gold at national championships",
  icon: Trophy
}, {
  year: "2019",
  title: "500+ Students",
  description: "Reached a milestone of training over 500 young athletes",
  icon: Users
}, {
  year: "2023",
  title: "International Recognition",
  description: "Students represented India at international competitions",
  icon: Award
}];
export default function Milestones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-12 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="z-10">
                <h1 className="text-4xl font-bold mb-4 md:text-4xl">Our Journey of Excellence</h1>
                <p className="text-lg">Milestones that definte Team RSA -Rising Stars Academt</p>
              </div>
              <div className="relative z-10">
                <img src={teamSunset} alt="RSA Team at sunset" className="rounded-lg shadow-2xl w-full h-auto object-cover" style={{
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }} />
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
}