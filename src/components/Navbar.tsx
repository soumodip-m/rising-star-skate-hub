import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import UtilityBar from "@/components/UtilityBar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "#",
      submenu: [
        { name: "Our Story", href: "/about#story" },
        { name: "Founder's Message", href: "/about#founder" },
        { name: "Coaches & Trainers", href: "/about#coaches" },
        { name: "Achievements & Milestones", href: "/about#milestones" },
        { name: "Infrastructure & Facilities", href: "/about#facilities" },
        { name: "Well-Wishers", href: "/about#wellwishers" },
      ],
    },
    {
      name: "Sports & Coaching",
      href: "#",
      submenu: [
        { name: "Roller Skating (Flagship)", href: "/sports/roller-skating" },
        { name: "Cricket", href: "/sports/cricket" },
        { name: "Football", href: "/sports/football" },
        { name: "Basketball", href: "/sports/basketball" },
        { name: "Tennis", href: "/sports/tennis" },
        { name: "Badminton", href: "/sports/badminton" },
        { name: "Athletics", href: "/sports/athletics" },
        { name: "Kho-Kho", href: "/sports/kho-kho" },
        { name: "Kabaddi", href: "/sports/kabaddi" },
        { name: "Shooting", href: "/sports/shooting" },
        { name: "Swimming", href: "/sports/swimming" },
        { name: "Private Coaching", href: "/coaching/private" },
        { name: "Seasonal Camps", href: "/coaching/camps" },
      ],
    },
    {
      name: "Admissions",
      href: "#",
      submenu: [
        { name: "How to Join", href: "/admissions#howtojoin" },
        { name: "Fees & Packages", href: "/admissions#fees" },
        { name: "Registration", href: "/admissions#registration" },
        { name: "Book a Trial", href: "/admissions#trial" },
      ],
    },
    {
      name: "Events & Achievements",
      href: "#",
      submenu: [
        { name: "Upcoming Events", href: "/events#upcoming" },
        { name: "Past Highlights", href: "/events#past" },
        { name: "Competition Schedule", href: "/events#schedule" },
        { name: "Student Achievements", href: "/achievements" },
        { name: "Alumni Success", href: "/achievements#alumni" },
      ],
    },
    {
      name: "Facilities",
      href: "#",
      submenu: [
        { name: "Courts & Grounds", href: "/facilities#courts" },
        { name: "Rinks", href: "/facilities#rinks" },
        { name: "Gym", href: "/facilities#gym" },
        { name: "Pool", href: "/facilities#pool" },
        { name: "Safety & Security", href: "/facilities#safety" },
        { name: "Virtual Tour", href: "/facilities#tour" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/skating-blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <UtilityBar />
      <header className="fixed top-[38px] left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Logo size="md" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground text-left text-xs">
                RSA-Rising Stars Academy
              </h1>
              <p className="text-xs text-muted-foreground">
                Premier Sports Academy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="/shop">Shop</a>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-primary"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Trial
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 cursor-pointer font-medium text-foreground">
                      {item.name}
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/shop">Shop</a>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Trial
              </Button>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
};

export default Navbar;
