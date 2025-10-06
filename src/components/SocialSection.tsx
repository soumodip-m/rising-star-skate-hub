import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected with RSA-Rising Stars Academy and see our latest updates, training sessions, and championship moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Facebook */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <Facebook className="w-12 h-12 mx-auto mb-4 text-[#1877F2]" />
              <CardTitle>Facebook</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Follow us for daily updates, event announcements, and community highlights
              </p>
              <a 
                href="https://www.facebook.com/RSA4U/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors font-medium"
              >
                Follow on Facebook
              </a>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-[#E4405F]" />
              <CardTitle>Instagram</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                See our stunning photos, stories, and behind-the-scenes moments
              </p>
              <a 
                href="https://www.instagram.com/rsa4u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FD1D1D] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Follow on Instagram
              </a>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <Youtube className="w-12 h-12 mx-auto mb-4 text-[#FF0000]" />
              <CardTitle>YouTube</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Watch training videos, competition highlights, and tutorials
              </p>
              <a 
                href="https://www.youtube.com/@rsa4u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-[#CC0000] transition-colors font-medium"
              >
                Subscribe on YouTube
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Embedded Social Feeds Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Facebook Feed */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Facebook className="w-5 h-5 text-[#1877F2]" />
              Latest Posts
            </h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRSA4U&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#E4405F]" />
              Photo Gallery
            </h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">
                Visit our Instagram @rsa4u to see our latest photos and stories
              </p>
            </div>
          </div>

          {/* YouTube Feed */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Youtube className="w-5 h-5 text-[#FF0000]" />
              Recent Videos
            </h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">
                Subscribe to our YouTube channel @rsa4u for training videos and competition highlights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
