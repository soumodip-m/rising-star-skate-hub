import { Phone, Facebook, Instagram, Youtube } from "lucide-react";

const UtilityBar = () => {
  return (
    <div className="bg-gradient-primary text-white py-2 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Phone Number - Left Side */}
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" />
            <a href="tel:+919824234663" className="hover:text-white/80 transition-colors">
              +91 98242 34663
            </a>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/RSA4U/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/rsa4u"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@rsa4u"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
