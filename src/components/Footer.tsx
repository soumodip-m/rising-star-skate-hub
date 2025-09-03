import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rising Star Academy</h3>
            <p className="text-primary-foreground/80 mb-4">
              Nurturing roller skating champions for over 20 years in Ahmedabad, Gujarat.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 82005 43153</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@risingsportsacademy.com</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cadets & Junior Batch</li>
              <li>Pre-Advance Training</li>
              <li>Advanced Competition Prep</li>
              <li>Inline Skating</li>
              <li>Quad Skating</li>
            </ul>
          </div>

          {/* Training Schedule */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Schedule</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <div>
                <div className="font-medium">Monday - Friday</div>
                <div className="text-sm">5:00 PM - 8:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Weekend Sessions</div>
                <div className="text-sm">Special Programs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent" /> for the skating community
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            © 2024 Rising Star Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;