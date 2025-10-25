import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import trialHeroImage from "@/assets/trial-hero.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const packages = [
  {
    name: "Basic",
    price: "₹3,000",
    period: "per month",
    features: [
      "3 sessions per week",
      "Access to basic facilities",
      "Group training",
      "Performance tracking"
    ]
  },
  {
    name: "Standard",
    price: "₹5,000",
    period: "per month",
    popular: true,
    features: [
      "5 sessions per week",
      "Access to all facilities",
      "Group & semi-private training",
      "Performance tracking",
      "Monthly progress reports",
      "Nutrition guidance"
    ]
  },
  {
    name: "Premium",
    price: "₹8,000",
    period: "per month",
    features: [
      "Unlimited sessions",
      "Access to all facilities",
      "One-on-one coaching",
      "Performance tracking",
      "Weekly progress reports",
      "Nutrition & fitness plans",
      "Priority tournament selection"
    ]
  }
];

import { Helmet } from "react-helmet";

export default function Trial() {
  const [isLoading, setIsLoading] = useState(false);
  const [sport, setSport] = useState("");
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      parentName: formData.get("parentName") as string,
      studentName: formData.get("studentName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      age: formData.get("age") as string,
      sport: sport,
      preferredDate: formData.get("preferredDate") as string,
    };

    try {
      console.log("Submitting trial booking:", data);
      
      const { data: result, error } = await supabase.functions.invoke("send-trial-email", {
        body: data,
      });

      if (error) {
        console.error("Error from edge function:", error);
        throw error;
      }

      console.log("Trial email sent successfully:", result);

      toast({
        title: "Booking Submitted Successfully! ✓",
        description: "If you do not hear from us in the next 24 hours, we might be busy building champions, so please connect with us over phone or email (provided in the Contact section).",
        duration: 8000,
      });

      e.currentTarget.reset();
      setSport("");
    } catch (error) {
      console.error("Error submitting trial booking:", error);
      setShowErrorDialog(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Book Free Roller Skating Trial Class - Gujarat's No. 1 Skating Academy | RSA</title>
        <meta name="description" content="Book a free roller skating trial class at Gujarat's no. 1 skating academy. Experience expert speed skating training, inline & quad skating coaching by certified coaches in Ahmedabad. Safe training for kids & beginners." />
        <meta name="keywords" content="book a roller skating trial class, roller skating trial Ahmedabad, free skating trial, speed skating trial, inline skating trial for kids, quad skating trial, skating academy trial Gujarat, roller skating coaching trial, weekend skating classes, after-school skating batches, summer skating camp ahmedabad, roller skating rink training, safe roller skating training for beginners, roller skating academy admissions & fees" />
        <link rel="canonical" href="https://rsa.india.co.in/admissions/trial" />
        
        {/* Open Graph / Facebook / Instagram / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rising Stars Academy" />
        <meta property="og:title" content="Book Free Roller Skating Trial Class - Gujarat's No. 1 Skating Academy" />
        <meta property="og:description" content="Experience expert roller skating coaching. Book your free trial class today at Ahmedabad's best skating academy." />
        <meta property="og:url" content="https://rsa.india.co.in/admissions/trial" />
        <meta property="og:image" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:secure_url" content="https://rsa.india.co.in/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Book Free Roller Skating Trial Class at Rising Stars Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="gu_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@risingstarsacademy" />
        <meta name="twitter:title" content="Book Free Roller Skating Trial Class - Gujarat's No. 1 Skating Academy" />
        <meta name="twitter:description" content="Experience expert roller skating coaching. Book your free trial class today at Ahmedabad's best skating academy." />
        <meta name="twitter:image" content="https://rsa.india.co.in/og-image.png" />
        <meta name="twitter:image:alt" content="Book Free Roller Skating Trial Class at Rising Stars Academy" />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-12 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              <div className="relative z-10">
                <img 
                  src={trialHeroImage} 
                  alt="Free roller skating trial class for kids - beginner to advanced skating coaching in Ahmedabad" 
                  className="rounded-lg shadow-2xl w-full h-auto max-h-[300px] object-cover opacity-90"
                />
              </div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Book a Free Roller Skating Trial Class</h1>
                <p className="text-lg">Experience Gujarat's no. 1 skating academy coaching for FREE - Weekend & after-school batches available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Book a Trial Session</h3>
                        <p className="text-muted-foreground">
                          Experience our coaching firsthand with a free trial session. See our facilities 
                          and meet our coaches.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Complete Registration</h3>
                        <p className="text-muted-foreground">
                          Fill out the registration form with your details and choose your preferred 
                          sport and training schedule.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Select Your Package</h3>
                        <p className="text-muted-foreground">
                          Choose from our flexible fee packages that suit your training needs and schedule.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Start Training</h3>
                        <p className="text-muted-foreground">
                          Begin your journey with professional coaching and world-class facilities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={pkg.popular ? "border-primary border-2 relative" : ""}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trial Booking Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Free Trial Booking</CardTitle>
                <p className="text-muted-foreground">
                  Book your free trial session and discover the RSA difference
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name</Label>
                      <Input id="parentName" name="parentName" placeholder="Enter your name" required />
                    </div>
                    <div>
                      <Label htmlFor="studentName">Student Name</Label>
                      <Input id="studentName" name="studentName" placeholder="Enter student name" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter email address" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter phone number" required />
                  </div>

                  <div>
                    <Label htmlFor="age">Student Age</Label>
                    <Input id="age" name="age" type="number" placeholder="Enter age" required />
                  </div>

                  <div>
                    <Label htmlFor="sport">Interested Sport</Label>
                    <Select value={sport} onValueChange={setSport} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a sport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roller-skating">Roller Skating</SelectItem>
                        <SelectItem value="cricket">Cricket</SelectItem>
                        <SelectItem value="football">Football</SelectItem>
                        <SelectItem value="basketball">Basketball</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input id="preferredDate" name="preferredDate" type="date" required />
                  </div>

                  <Button type="submit" className="w-full gradient-primary" disabled={isLoading}>
                    {isLoading ? "Booking..." : "Book Free Trial"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submission Error</AlertDialogTitle>
            <AlertDialogDescription className="space-y-2">
              <p>There is some error while submitting the form.</p>
              <p>Please send an email to <a href="mailto:rsa4sports@gmail.com" className="text-primary hover:underline font-semibold">rsa4sports@gmail.com</a> or call us directly at <a href="tel:+919824234663" className="text-primary hover:underline font-semibold">+91 98242 34663</a></p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
