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
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Trial Session</h1>
            <p className="text-xl">Experience our world-class coaching for FREE</p>
          </div>
        </section>

        {/* Trial Booking Form */}
        <section className="py-16">
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
