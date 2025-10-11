import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    preferredBatch: "Cadets & Junior Batch (4:00 PM - 5:30 PM)",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-trial-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your trial session.",
      });

      setFormData({
        childName: "",
        age: "",
        parentName: "",
        phone: "",
        email: "",
        preferredBatch: "Cadets & Junior Batch (4:00 PM - 5:30 PM)",
        notes: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your Free Trial
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our world-class coaching firsthand. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rising Stars Academy<br />
                  Ahmedabad, Gujarat<br />
                  India
                </p>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15583952273!2d72.41493238671876!3d23.02047039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RSA Academy Location"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Training Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends:</span>
                    <span>Special Sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 98242 34663</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>rsaindia@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Schedule a Trial Session</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Child's Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Enter child's name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Age
                    </label>
                    <input 
                      type="number" 
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Age"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Parent/Guardian Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Preferred Batch
                  </label>
                  <select 
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({...formData, preferredBatch: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  >
                    <option>Cadets & Junior Batch (4:00 PM - 5:30 PM)</option>
                    <option>Pre-Advance Batch (5:30 PM - 8:00 PM)</option>
                    <option>Advance Batch (6:00 PM - 9:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Schedule Trial Session"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your trial session
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
