import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      rating: 5,
      text: "RSA has been incredible for my daughter's development. The coaches are professional, caring, and truly invested in each child's progress. She's not only improved her skating skills but also gained confidence.",
      avatar: "PS"
    },
    {
      name: "Rajesh Patel",
      role: "Student",
      rating: 5,
      text: "Best skating academy in Gujarat! The training is top-notch and the facilities are excellent. I've won multiple medals thanks to the guidance I received here.",
      avatar: "RP"
    },
    {
      name: "Anita Desai",
      role: "Parent",
      rating: 5,
      text: "My son joined RSA two years ago and it's been amazing to watch his transformation. The structured training programs and supportive environment make all the difference.",
      avatar: "AD"
    },
    {
      name: "Arjun Shah",
      role: "Student",
      rating: 5,
      text: "The coaches at Rising Stars Academy are world-class. They push you to be your best while making learning fun. I'm proud to be part of the RSA family!",
      avatar: "AS"
    },
    {
      name: "Meera Gandhi",
      role: "Parent",
      rating: 5,
      text: "Exceptional academy with a proven track record. My daughter has participated in state and national championships, all thanks to the excellent training at RSA.",
      avatar: "MG"
    },
    {
      name: "Karan Mehta",
      role: "Student",
      rating: 5,
      text: "RSA is more than just a skating academy - it's a family. The camaraderie among students and the dedication of coaches create a perfect learning environment.",
      avatar: "KM"
    }
  ];

  // Triple the testimonials array for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Students & Parents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our amazing community of skaters and their families
          </p>
        </div>

        <div className="testimonials-container overflow-hidden">
          <div className="testimonials-scroll flex gap-6">
            {infiniteTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="testimonial-card flex-shrink-0 w-[350px] hover:shadow-lg transition-all duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-sports flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
