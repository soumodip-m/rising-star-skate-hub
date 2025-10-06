import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Achievements", href: "#achievements" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground">RSA-Rising Stars Academy</h1>
              <p className="text-xs text-muted-foreground">RSA4U - Roller Skating Excellence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 82005 43153</span>
              </div>
            </div>
            <Button variant="sports" size="sm" className="hidden sm:block">
              Join Now
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;