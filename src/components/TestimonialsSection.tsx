import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      achievement: "State Medalist",
      rating: 5,
      text: "RSA's roller skating program transformed my daughter's confidence and skill. She's now competing at state level!",
      avatar: "PS"
    },
    {
      name: "Arjun Patel",
      role: "Student (14)",
      achievement: "National Qualifier",
      rating: 5,
      text: "The coaches here are amazing. They pushed me to achieve more than I thought possible.",
      avatar: "AP"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      achievement: "",
      rating: 5,
      text: "Best sports academy in Ahmedabad. Professional coaching, great facilities, and supportive environment.",
      avatar: "RK"
    }
  ];

  // Triple the testimonials array for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our athletes and parents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  {testimonial.achievement && (
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm font-medium text-accent">
                        Achievement
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
