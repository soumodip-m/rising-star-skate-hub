import { Award, Building, Trophy } from "lucide-react";

const QuickIntro = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Coaches",
      description: "Expert trainers with national-level experience"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "Purpose-built rinks, courts, and training zones"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "State and national championship winners"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building Champions, One Athlete at a Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RSA – Rising Stars Academy helps young athletes learn faster and compete smarter. 
            From our flagship Roller Skating program to multi-sport coaching, we blend certified 
            training, modern facilities, and a supportive culture—right here in Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;
