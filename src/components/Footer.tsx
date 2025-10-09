import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import footerDesign from "@/assets/footer-design.jpg";
const Footer = () => {
  return <footer className="relative bg-gradient-sports text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academy Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RSA-Rising Stars Academy</h3>
            <p className="mb-2 text-lg italic font-semibold text-yellow-300">
              Work hard, Dream Big!
            </p>
            <p className="text-white/80 mb-4">Nurturing roller skating champions for over 20 years in Ahmedabad, Gujarat.</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-4/6 " />
                <span>DPS Bopal Skating Rink, Ahmedabad, Gujarat, India 380058</span>
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
              <a href="https://www.facebook.com/RSA4U/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rsa4u" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@rsa4u" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="bg-transparent">
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-white/80">
              <li>Cadets & Junior Batch</li>
              <li>Pre-Advance Training</li>
              <li>Advanced Competition Prep</li>
              <li>Custom Programs</li>
              <li>Inline & Quad Skating</li>
            </ul>
          </div>

          {/* Training Schedule */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Schedule</h4>
            <div className="text-white/80 space-y-2">
              <div>
                <div className="font-medium">Monday - Saturday</div>
                <div className="text-sm">Evening Sessions</div>
              </div>
              <div>
                <div className="font-medium">Weekend Sessions</div>
                <div className="text-sm">Special Programs/Road Sessions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={footerDesign} alt="Footer design" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-white/90 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse bg-yellow-300" /> for the skating community
          </p>
          <p className="text-sm text-white/70 mt-2 text-center">© 2025 RSA-Rising Stars Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;