import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Share2 } from "lucide-react";

const stats = [
  { number: "750K+", label: "Global Community Members" },
  { number: "50+", label: "Active Groups & Forums" },
  { number: "200+", label: "Local Clubs in India" },
  { number: "365", label: "Events Per Year" }
];

const socialPlatforms = [
  {
    icon: "📘",
    name: "Facebook",
    members: "25,000+ members",
    description: "Join skating groups, share experiences, and connect with local skaters",
    groups: ["Speed Skating World", "Inline Skating India", "Roller Skating Enthusiasts", "RSFI Official Group"]
  },
  {
    icon: "📷",
    name: "Instagram",
    members: "150,000+ members",
    description: "Follow skating influencers, watch technique videos, and share your progress",
    groups: ["#SpeedSkating", "#InlineSkating", "#SkatingIndia", "#RollerSkating"]
  },
  {
    icon: "📺",
    name: "YouTube",
    members: "500,000+ members",
    description: "Learn from tutorials, watch competitions, and follow skating channels",
    groups: ["World Skate Official", "Speed Skating Techniques", "Indian Roller Sports", "Skating Tutorials Pro"]
  },
  {
    icon: "🐦",
    name: "Twitter/X",
    members: "75,000+ members",
    description: "Get real-time updates on competitions, news, and community discussions",
    groups: ["@WorldSkate", "@RSFIIndia", "@SpeedSkatingNews", "@SkatingUpdates"]
  }
];

const localClubs = [
  {
    city: "Mumbai",
    clubs: ["Mumbai Skating Club", "Western India Roller Sports", "Andheri Skating Academy"],
    members: "500+"
  },
  {
    city: "Delhi NCR",
    clubs: ["Delhi Skating Association", "Gurgaon Speed Skating", "Noida Roller Club"],
    members: "800+"
  },
  {
    city: "Bangalore",
    clubs: ["Bangalore Skating Club", "Karnataka Speed Skating", "Silicon Valley Skaters"],
    members: "600+"
  },
  {
    city: "Pune",
    clubs: ["Pune Skating Association", "Maharashtra Roller Sports", "Deccan Skaters"],
    members: "400+"
  }
];

const communityEvents = [
  {
    type: "Weekly Meetups",
    description: "Regular skating sessions and practice meets",
    frequency: "Every weekend"
  },
  {
    type: "Workshops",
    description: "Skill development and technique improvement sessions",
    frequency: "Monthly"
  },
  {
    type: "Social Rides",
    description: "Group skating events in parks and public spaces",
    frequency: "Bi-weekly"
  },
  {
    type: "Competitions",
    description: "Local and regional racing events",
    frequency: "Quarterly"
  }
];

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Global Community
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the Skating Community
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Connect with fellow skaters, share experiences, learn from experts, and be part of the growing global roller skating family across social media and local communities.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Communities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Share2 className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Social Media Communities</h2>
                <p className="text-muted-foreground">Connect with skaters worldwide on these popular platforms</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {socialPlatforms.map((platform, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{platform.icon}</span>
                      <div>
                        <CardTitle className="text-2xl">{platform.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{platform.members}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">
                      {platform.name === "Facebook" ? "Popular Groups:" : 
                       platform.name === "Instagram" ? "Popular Hashtags:" :
                       platform.name === "YouTube" ? "Popular Channels:" : "Follow:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.groups.map((group, idx) => (
                        <Badge key={idx} variant="outline">{group}</Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Join {platform.name}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Clubs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Local Skating Clubs in India</h2>
                  <p className="text-muted-foreground">Find and connect with skating communities in major cities</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {localClubs.map((location, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{location.city}</CardTitle>
                      <Badge>{location.members} Members</Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {location.clubs.map((club, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-sm">{club}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Community Events</h2>
                  <p className="text-muted-foreground">Regular activities bringing skaters together</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {communityEvents.map((event, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{event.type}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      <Badge variant="outline">{event.frequency}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
