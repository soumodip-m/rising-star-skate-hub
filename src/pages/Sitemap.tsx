import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, Info, Trophy, Calendar, Image, BookOpen, ShoppingBag, GraduationCap, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "About",
      icon: Info,
      links: [
        { to: "/about/coaches", label: "Coaches" },
        { to: "/about/milestones", label: "Milestones" },
        { to: "/about/facilities", label: "Facilities" },
        { to: "/about/well-wishers", label: "Well Wishers" },
      ],
    },
    {
      title: "Sports Programs",
      icon: Trophy,
      links: [
        { to: "/sports/roller-skating", label: "Roller Skating" },
        { to: "/sports/cricket", label: "Cricket" },
        { to: "/sports/football", label: "Football" },
        { to: "/sports/basketball", label: "Basketball" },
        { to: "/sports/tennis", label: "Tennis" },
        { to: "/sports/badminton", label: "Badminton" },
        { to: "/sports/athletics", label: "Athletics" },
      ],
    },
    {
      title: "Admissions",
      icon: GraduationCap,
      links: [
        { to: "/admissions/trial", label: "Book a Trial" },
        { to: "/admissions/fees", label: "Fees" },
        { to: "/admissions/register", label: "Register" },
        { to: "/admissions/faq", label: "FAQ" },
      ],
    },
    {
      title: "Events",
      icon: Calendar,
      links: [
        { to: "/events/upcoming", label: "Upcoming Events" },
        { to: "/events/past", label: "Past Events" },
        { to: "/events/schedule", label: "Schedule" },
      ],
    },
    {
      title: "Gallery",
      icon: Image,
      links: [
        { to: "/gallery/photos", label: "Photos" },
        { to: "/gallery/videos", label: "Videos" },
        { to: "/gallery/fun-at-rsa", label: "Fun at RSA" },
      ],
    },
    {
      title: "Content",
      icon: BookOpen,
      links: [
        { to: "/achievements", label: "Achievements" },
        { to: "/blog", label: "Blog" },
        { to: "/blog/history", label: "History of Roller Skating" },
        { to: "/blog/types", label: "Types of Roller Skating" },
        { to: "/blog/competitions", label: "Competitions" },
        { to: "/blog/training", label: "Training Tips" },
        { to: "/blog/equipment", label: "Equipment Guide" },
        { to: "/blog/community", label: "Community" },
      ],
    },
    {
      title: "Shop",
      icon: ShoppingBag,
      links: [
        { to: "/shop", label: "Shop" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - All Pages | Rising Stars Academy</title>
        <meta name="description" content="Complete sitemap of Rising Stars Academy website. Browse all pages including sports programs, admissions, events, gallery, blog, and more." />
        <link rel="canonical" href="https://rsaindia.co.in/sitemap" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - Rising Stars Academy Ahmedabad" />
        <meta property="og:description" content="Complete sitemap of Rising Stars Academy website. Browse all pages including sports programs, admissions, events, gallery, and more." />
        <meta property="og:url" content="https://rsaindia.co.in/sitemap" />
        <meta property="og:image" content="https://rsaindia.co.in/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sitemap - Rising Stars Academy" />
        <meta name="twitter:description" content="Complete sitemap of Rising Stars Academy website with all pages and sections." />
        <meta name="twitter:image" content="https://rsaindia.co.in/og-image.png" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sitemap
              </h1>
              <p className="text-lg text-muted-foreground">
                Navigate through all pages of Rising Stars Academy
              </p>
            </div>

            {/* Sitemap Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {sitemapSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* XML Sitemap Link */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-2">
                Looking for the XML sitemap?
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View XML Sitemap →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
