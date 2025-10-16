import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Instagram</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/rsa4sports/"
          data-instgrm-version="14"
          style={{
            background: "hsl(var(--card))",
            border: 0,
            margin: "0 auto",
            maxWidth: "540px",
            minWidth: "326px",
            width: "100%",
          }}
        />
      </CardContent>
    </Card>
  );
};

const FacebookPost = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (!document.querySelector('script[src*="connect.facebook.net"]')) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Facebook</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div id="fb-root" />
        <div
          className="fb-page"
          data-href="https://www.facebook.com/RSA4U/"
          data-tabs="timeline"
          data-width="500"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/RSA4U/" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/RSA4U/">Rising Star Academy</a>
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

const YouTubeVideo = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">YouTube</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=@rising-stars"
            title="Rising Star Academy YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default function SocialWall() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Social Media</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our latest updates across Instagram, Facebook, and YouTube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <InstagramEmbed />
          <FacebookPost />
          <YouTubeVideo />
        </div>
      </div>
    </section>
  );
}
