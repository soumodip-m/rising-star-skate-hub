import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";
const SocialSection = () => {
  return <section className="py-20 bg-background">
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
          

          {/* Instagram */}
          

          {/* YouTube */}
          
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
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRSA4U&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{
              border: 'none',
              overflow: 'hidden'
            }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className="rounded-lg"></iframe>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#E4405F]" />
              Photo Gallery
            </h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">Visit our Instagram @rsa4sports to see our latest photos and stories</p>
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
    </section>;
};
export default SocialSection;