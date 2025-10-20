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

export default function Trial() {
  const [isLoading, setIsLoading] = useState(false);
  const [sport, setSport] = useState("");
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
      const { error } = await supabase.functions.invoke("send-trial-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Trial booked!",
        description: "We'll contact you soon to confirm your trial session.",
      });

      e.currentTarget.reset();
      setSport("");
    } catch (error) {
      console.error("Error booking trial:", error);
      toast({
        title: "Error",
        description: "Failed to book trial. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <img 
                  src={trialHeroImage} 
                  alt="Children learning roller skating" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Trial Session</h1>
                <p className="text-xl">Experience our world-class coaching for FREE</p>
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
    </div>
  );
}
