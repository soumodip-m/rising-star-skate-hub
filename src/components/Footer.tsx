import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RSA-Rising Stars Academy</h3>
            <p className="text-primary-foreground/80 mb-4">
              Nurturing roller skating champions for over 20 years in Ahmedabad, Gujarat.
            </p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98242 34663</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>rsaindia@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/RSA4U/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rsa4u" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@rsa4u" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
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
                <div className="text-sm">4:00 PM - 9:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Weekend Sessions</div>
                <div className="text-sm">Special Programs/Road Sessions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent" /> for the skating community
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">© 2025 RSA-Rising Stars Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;