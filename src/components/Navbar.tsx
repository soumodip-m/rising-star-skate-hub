import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingBag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import rsaLogo from "@/assets/rsa-logo.png";
interface NavItem {
  label: string;
  path?: string;
  submenu?: {
    label: string;
    path: string;
  }[];
}
const navItems: NavItem[] = [{
  label: "Home",
  path: "/"
}, {
  label: "About Us",
  submenu: [{
    label: "Our Story",
    path: "/about"
  }, {
    label: "Founder's Message",
    path: "/about#founders-message"
  }, {
    label: "Milestones",
    path: "/about/milestones"
  }]
}, {
  label: "Sports & Coaching",
  submenu: [{
    label: "Roller Skating (Flagship)",
    path: "/sports/roller-skating"
  }
  //{ label: "Other Sports", path: "/sports" },
  ]
}, {
  label: "Admissions",
  path: "/admissions/trial",
  submenu: [{
    label: "Join Us",
    path: "/admissions/trial"
  }, {
    label: "FAQ",
    path: "/admissions/faq"
  }]
}, {
  label: "Achievements",
  submenu: [{
    label: "Achievements",
    path: "/achievements"
  }, {
    label: "Media Coverage",
    path: "/events/past"
  }]
}, {
  label: "Gallery",
  submenu: [{
    label: "Photos",
    path: "/gallery/photos"
  }, {
    label: "Videos",
    path: "/gallery/videos"
  }, {
    label: "Fun@RSA",
    path: "/gallery/fun-at-rsa"
  }]
}, {
  label: "Blog",
  path: "/blog"
}, {
  label: "Contact Us",
  path: "/contact"
}];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [shopDialogOpen, setShopDialogOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-scale">
            <img src={rsaLogo} alt="RSA Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-primary">RSA</div>
              <div className="text-xs text-muted-foreground">Rising Stars Academy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => <div key={item.label} className="relative group" onMouseEnter={() => item.submenu && setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                {item.path ? <Link to={item.path} onClick={() => window.scrollTo(0, 0)} className={`px-4 py-2 text-sm font-medium transition-colors rounded-md flex items-center justify-center ${isActive(item.path) ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-muted"}`}>
                    {item.label}
                  </Link> : <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors flex items-center justify-center gap-1">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>}

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.label && <div className="absolute left-0 top-full pt-2 w-56 animate-fade-in">
                    <div className="bg-popover border border-border rounded-lg shadow-lg py-2 overflow-hidden">
                      {item.submenu.map(subitem => <Link key={subitem.path} to={subitem.path} onClick={() => window.scrollTo(0, 0)} className={`block px-4 py-3 text-sm transition-colors ${isActive(subitem.path) ? "bg-primary text-primary-foreground font-medium" : "text-popover-foreground hover:bg-muted hover:text-primary"}`}>
                          {subitem.label}
                        </Link>)}
                    </div>
                  </div>}
              </div>)}
          </div>

          {/* Utility Items */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setShopDialogOpen(true)}>
              Shop
            </Button>
            <Link to="/admissions/trial">
              <Button size="sm" className="gradient-primary shadow-glow">
                Book a Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <div key={item.label}>
                  {item.path ? <Link to={item.path} onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo(0, 0);
            }} className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive(item.path) ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"}`}>
                      {item.label}
                    </Link> : <>
                      <button onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors">
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === item.label && item.submenu && <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map(subitem => <Link key={subitem.path} to={subitem.path} onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }} className={`block px-4 py-2 text-sm rounded-md transition-colors ${isActive(subitem.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                              {subitem.label}
                            </Link>)}
                        </div>}
                    </>}
                </div>)}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" onClick={() => {
              setShopDialogOpen(true);
              setMobileMenuOpen(false);
            }}>
                  Shop
                </Button>
                <Link to="/admissions/trial" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full gradient-primary">Book a Trial</Button>
                </Link>
              </div>
            </div>
          </div>}
      </div>

      {/* Shop Dialog */}
      <Dialog open={shopDialogOpen} onOpenChange={setShopDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center">RSA Shop Coming Soon!</DialogTitle>
            <DialogDescription className="text-center pt-4 space-y-4">
              <p className="text-base">
                We're working on bringing you the best skating gear and RSA merchandise.
              </p>
              <p className="text-base font-medium">
                For immediate equipment needs, please contact us:
              </p>
              <div className="flex items-center justify-center gap-2 text-primary pt-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919825042321" className="text-lg font-semibold hover:underline">+91 98242 34663</a>
              </div>
              <p className="text-sm text-muted-foreground">
                or reach out via WhatsApp for quick assistance
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-2">
            <Button onClick={() => setShopDialogOpen(false)} className="min-w-[120px]">
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>;
}