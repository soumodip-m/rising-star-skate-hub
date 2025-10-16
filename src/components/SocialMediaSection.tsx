import { Facebook, Instagram, Youtube } from "lucide-react";

export default function SocialMediaSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/RSA4U/",
      color: "hover:text-[#1877F2]",
      bgColor: "hover:bg-[#1877F2]/10"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/rsa4sports",
      color: "hover:text-[#E4405F]",
      bgColor: "hover:bg-[#E4405F]/10"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@rising-stars",
      color: "hover:text-[#FF0000]",
      bgColor: "hover:bg-[#FF0000]/10"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Social Media Connectivity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, events, and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-8 bg-card rounded-lg border shadow-sm transition-all duration-300 ${social.bgColor}`}
              >
                <div className={`h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4 transition-colors duration-300 ${social.color}`}>
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Follow us for updates
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
