import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="gradient-hero text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          {/* Phone Number and Email */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@risingstarsacademy.com" className="hover:text-accent transition-colors">
                info@risingstarsacademy.com
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com/risingstarsacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://instagram.com/risingstarsacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="https://youtube.com/@risingstarsacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
