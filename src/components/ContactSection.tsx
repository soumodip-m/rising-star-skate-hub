import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your roller skating journey? Contact us to learn more about 
            our programs and schedule a trial session for your child.
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
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Child's Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter child's name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Age
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Preferred Batch
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
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
                  className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Any specific questions or requirements..."
                ></textarea>
              </div>

              <Button variant="hero" className="w-full">
                Schedule Trial Session
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll contact you within 24 hours to confirm your trial session
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
