import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How can my son or daughter start Speed Skating at RSA?",
    answer: "To begin Speed Skating at RSA, parents can visit our academy during beginner batch timings or contact our coaching team for a short orientation. New skaters are first assessed for balance, coordination, and comfort on skates before being placed in the suitable batch. Beginners don't need prior experience—just enthusiasm and the right safety gear."
  },
  {
    question: "What age is ideal to start Roller Speed Skating?",
    answer: "Children can start as early as 4 to 5 years old. At RSA, we design training sessions according to age and skill level, ensuring young skaters build a strong foundation safely and progressively."
  },
  {
    question: "Which sports are best for my child's fitness?",
    answer: "At RSA, we believe in multi-sport development. Roller Skating, Basketball, Athletics, and Functional Fitness are excellent for improving strength, agility, endurance, and coordination. For overall fitness and confidence, Speed Skating remains one of the most effective and enjoyable sports for children."
  },
  {
    question: "What are the training timings at RSA?",
    answer: "• Beginner Batch: 5:00 PM – 6:00 PM (Monday, Wednesday, Friday / Tuesday, Thursday, Saturday)\n• Intermediate Batch: 5:30 PM – 7:00 PM\n• Advanced Batch: 6:00 PM – 9:00 PM\n\nThese timings may vary slightly during tournaments or special events, and updates are always shared in advance."
  },
  {
    question: "What equipment does my child need to start skating?",
    answer: "Beginners require a helmet, knee pads, elbow pads, wrist guards, and quad or inline skates (as per their level). RSA coaches can guide parents on selecting the right gear and brands suitable for each age group."
  },
  {
    question: "Why is protective gear important for beginner skaters?",
    answer: "Safety is our top priority at RSA. All beginner skaters are required to wear a certified helmet, knee pads, elbow pads, and wrist guards during every session. Protective gear helps prevent injuries during falls and builds confidence as children learn new techniques. Our coaches also ensure that each child's equipment fits properly and is worn correctly before they step onto the rink."
  },
  {
    question: "Who conducts the training sessions at RSA?",
    answer: "All training sessions are led by certified coaches under the guidance of Coach Indrajitsinh, who has years of experience producing state and national-level skaters. RSA's coaching philosophy emphasizes technical skill, fitness, discipline, and enjoyment."
  },
  {
    question: "Does RSA participate in competitions?",
    answer: "Yes! RSA skaters regularly participate in district, state, national, and international competitions. The academy is proud to be recognized as the No. 1 team in Gujarat and among the top-performing teams in India."
  },
  {
    question: "Can my child balance academics and sports training?",
    answer: "Absolutely. Our training schedules are carefully designed to complement school timings. RSA promotes balanced development — helping students excel in both academics and sports through structured and time-efficient practice sessions."
  },
  {
    question: "How can I enroll my child at RSA?",
    answer: "Enrollment is simple! Visit the academy during training hours or contact us via phone or WhatsApp. Our team will guide you through the registration process, trial sessions, and batch allocation based on your child's age and skill level."
  }
];

export default function FAQ() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Admissions | Rising Stars Academy</title>
        <meta 
          name="description" 
          content="Get answers to common questions about enrolling at Rising Stars Academy, training timings, equipment requirements, and our roller speed skating programs." 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about enrolling at Rising Stars Academy
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-5 text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help! Call us at <a href="tel:+919824234663" className="text-primary font-semibold hover:underline">+91 98242 34663</a>
            </p>
            <div className="flex justify-center">
              <a 
                href="/admissions/trial" 
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Book Free Trial
              </a>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
