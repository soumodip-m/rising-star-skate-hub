import { Card, CardContent } from "@/components/ui/card";
import { Medal, Target, Heart, Star, Eye } from "lucide-react";
import teamGujaratImg from "@/assets/team-gujarat.jpg";
import racerActionImg from "@/assets/racer-action.jpg";
import ImageLightbox from "@/components/ImageLightbox";
const AboutSection = () => {
  const features = [{
    icon: Medal,
    title: "20+ Years Legacy",
    description: "Established excellence in roller skating training with a proven track record of success"
  }, {
    icon: Target,
    title: "Professional Training",
    description: "Expert coaching for both inline and quad skating with structured programs"
  }, {
    icon: Heart,
    title: "Nurturing Environment",
    description: "Safe, supportive atmosphere where young skaters develop confidence and skills"
  }, {
    icon: Star,
    title: "National Champions",
    description: "Our students regularly compete and win at state and national level championships"
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About RSA-Rising Stars Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over two decades, RSA-Rising Stars Academy has been Ahmedabad's premier destination 
            for roller skating excellence. We specialize in training young athletes in both 
            inline and quad skating, building champions who shine at every level.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 bg-orange-200">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Our Vision
              </h3>
              <p className="leading-relaxed text-red-900">
                To inspire and nurture young athletes to reach their fullest potential — building champions in sport and character for life.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-accent" />
                Our Mission
              </h3>
              <p className="leading-relaxed text-orange-800">
                To provide world-class sports training, promote discipline and teamwork, and create an engaging environment where every child and youth can discover their passion, develop skills, and achieve excellence both on and off the field.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="relative">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/10 rounded-full p-8">
                      <feature.icon className="w-16 h-16 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Team Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-64 md:h-80">
            <ImageLightbox src={teamGujaratImg} alt="RSA team representing Gujarat at national championships" className="h-full" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-64 md:h-80">
            <ImageLightbox src={racerActionImg} alt="Young skaters competing in high-speed roller skating race" className="h-full" />
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Championship Family
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our experienced team has guided countless young skaters to victory in local, 
            state, interstate, and national tournaments. Your child's skating journey 
            starts here at RSA.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold">Local</div>
              <div className="text-sm opacity-90">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">State</div>
              <div className="text-sm opacity-90">Championships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Interstate</div>
              <div className="text-sm opacity-90">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">National</div>
              <div className="text-sm opacity-90">Level Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;