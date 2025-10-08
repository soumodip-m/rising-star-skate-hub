import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Target } from "lucide-react";
import teamTrophiesImg from "@/assets/team-trophies.jpg";
import teamChampionsImg from "@/assets/team-champions.jpg";
import teamYellowImg from "@/assets/team-yellow.jpg";
import flagBearersImg from "@/assets/flag-bearers.jpg";
import teamSkatersImg from "@/assets/team-skaters.jpg";
import ImageLightbox from "@/components/ImageLightbox";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "National Championships",
      count: "50+",
      description: "Gold medals won at national level competitions"
    },
    {
      icon: Medal,
      title: "State Medals",
      count: "200+", 
      description: "Medals earned in Gujarat state championships"
    },
    {
      icon: Award,
      title: "Interstate Wins",
      count: "100+",
      description: "Victories in interstate roller skating events"
    },
    {
      icon: Target,
      title: "Local Tournaments",
      count: "300+",
      description: "Wins in local and regional competitions"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      achievement: "National Gold Medalist 2023",
      quote: "RSA gave me the foundation to compete at the highest level. The coaches here truly care about each student's growth."
    },
    {
      name: "Arjun Patel", 
      achievement: "State Champion 2023",
      quote: "The training at Rising Star Academy is world-class. I've grown not just as a skater but as a confident individual."
    },
    {
      name: "Ananya Desai",
      achievement: "Interstate Champion 2022", 
      quote: "Best decision ever was joining RSA. The supportive environment and expert coaching made all the difference."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two decades of excellence has produced countless champions who have 
            made their mark in roller skating competitions across all levels.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="pt-8 pb-6">
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-accent">{testimonial.achievement}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Images */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Achievement Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-40">
              <ImageLightbox
                src={teamChampionsImg}
                alt="RSA team with medals and trophies"
                className="h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-40">
              <ImageLightbox
                src={teamTrophiesImg}
                alt="Championship winning team with coach"
                className="h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-40">
              <ImageLightbox
                src={teamYellowImg}
                alt="RSA yellow team with trophies"
                className="h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-40">
              <ImageLightbox
                src={flagBearersImg}
                alt="Young skaters representing India"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Gallery of Achievement Photos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Champions Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-64 md:h-80">
              <ImageLightbox
                src={teamChampionsImg}
                alt="RSA team with medals and trophies at Rising Stars Academy championship event"
                className="h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-64 md:h-80">
              <ImageLightbox
                src={teamTrophiesImg}
                alt="Championship winning team with coach displaying trophies and medals"
                className="h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-64 md:h-80">
              <ImageLightbox
                src={teamYellowImg}
                alt="RSA yellow team with trophies and medals at championship"
                className="h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-64 md:h-80">
              <ImageLightbox
                src={flagBearersImg}
                alt="Young skaters representing India with national flag at roller skating championship"
                className="h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-64 md:h-80">
              <ImageLightbox
                src={teamSkatersImg}
                alt="RSA team skaters celebrating on track with arms raised"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-sports rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join the legacy of champions at RSA-Rising Stars Academy. With our proven training methods 
            and experienced coaching staff, your child can achieve greatness in roller skating.
          </p>
          <div className="flex justify-center">
            <Trophy className="w-16 h-16 text-white/60 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;