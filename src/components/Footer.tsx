import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import rsaLogo from "@/assets/rsa-logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Academy Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={rsaLogo} alt="RSA Logo" className="h-12 w-auto" />
              <div>
                <div className="text-lg font-bold text-primary">RSA</div>
                <div className="text-xs text-background/70">Rising Stars Academy</div>
              </div>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Ahmedabad's premier multi-sport academy helping young athletes rise faster and shine brighter.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/RSA4U/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@rising-stars"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/rsa4sports"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Programs</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/sports/roller-skating" className="hover:text-primary transition-colors">
                  Roller Skating
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-primary transition-colors">
                  All Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/admissions" className="hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Connect</h3>
            import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ContactSection() {
  const [open, setOpen] = useState(false)

  return (
    <ul className="space-y-3 text-sm text-background/80">
      <li className="flex items-start gap-2">
        <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="hover:text-primary transition-colors text-left">
              DPS Bopal Skating Rink, Bopal, Ahmedabad Gujarat 380058 India
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Find Us on Map
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              <iframe
                title="RSA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.134497839814!2d72.45743067506862!3d23.002399116053532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d74ab1a1d8b%3A0xf646e2e1d1a8fba5!2sDPS%20Bopal!5e0!3m2!1sen!2sin!4v1697274000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </li>

      <li className="flex items-center gap-2">
        <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
        <a href="tel:+917043535505" className="hover:text-primary transition-colors">
          +91 70435 35505
        </a>
      </li>

      <li className="flex items-center gap-2">
        <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
        <a href="mailto:rsa4sports@gmail.com" className="hover:text-primary transition-colors">
          rsa4sports@gmail.com
        </a>
      </li>
    </ul>
  )
}

            <div className="mt-4">
              <Link to="/contact">
                <button className="text-sm font-medium text-primary hover:text-primary-light transition-colors">
                  Contact Us →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Rising Stars Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
