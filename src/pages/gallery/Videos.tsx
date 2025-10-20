import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
const videos = [{
  title: "RSA Academy Overview 2024",
  description: "A comprehensive look at our facilities, coaches, and programs",
  thumbnail: "/images/facilities-gym.jpg"
}, {
  title: "National Championship Highlights",
  description: "Watch our students compete at the national roller skating championship",
  thumbnail: "/images/events-medals.jpg"
}, {
  title: "Training Sessions - Behind the Scenes",
  description: "Experience a day in the life of RSA athletes",
  thumbnail: "/images/coach-team.jpg"
}, {
  title: "Student Success Stories",
  description: "Hear from our champions about their journey",
  thumbnail: "/images/pool-cross-training.jpg"
}, {
  title: "Football Skills Workshop",
  description: "Professional coaching techniques and drills",
  thumbnail: "/images/training-facility.jpg"
}, {
  title: "Annual Sports Day 2024",
  description: "Highlights from our biggest event of the year",
  thumbnail: "/images/hero-roller.jpg"
}];
export default function Videos() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.scrollY;
        const videoHeight = videoRef.current.offsetHeight;
        if (scrollPosition > videoHeight * 0.5) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Video Section */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4 text-orange-500 md:text-7xl">Work Hard, Dream Big</h1>
              <p className="text-yellow-300 text-3xl">Watch our Athletes in Action</p>
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {videos.map((video, index) => <Card key={index} className="hover-lift overflow-hidden group cursor-pointer">
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>)}
            </div>

            <div className="text-center mt-12 bg-muted/50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our YouTube Channel</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest videos, training tips, and event highlights
              </p>
              <a href="https://www.youtube.com/@rising-stars" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                <Play className="h-5 w-5" />
                Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
}