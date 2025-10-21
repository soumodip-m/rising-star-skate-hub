import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import aryaImg from "@/assets/achievements/arya.jpg";
import rudyImg from "@/assets/achievements/rudy.jpg";
import shouryaImg from "@/assets/achievements/shourya.jpg";
import sreyanshImg from "@/assets/achievements/sreyansh.jpg";
import team1Img from "@/assets/achievements/team-1.jpg";
import team2Img from "@/assets/achievements/team-2.jpg";
const galleryImages = [
  { src: aryaImg, alt: "Arya with coach holding medal and trophy" },
  { src: rudyImg, alt: "Rudy with coach after winning competition" },
  { src: shouryaImg, alt: "Shourya with coach displaying medal" },
  { src: sreyanshImg, alt: "Sreyansh with teammates holding trophy" },
  { src: team1Img, alt: "Team RSA champions with medals and trophies" },
  { src: team2Img, alt: "Rising Stars Academy team celebration" },
];
export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(0);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    const container = document.getElementById('thumbnail-container');
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Achievements</h1>
            <p className="text-xl">Celebrating excellence and success stories</p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Champions Gallery</h2>
            
            {/* Main Preview Image */}
            <div className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-cover animate-fade-in"
                  key={selectedImage}
                />
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="relative">
              <button
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div 
                id="thumbnail-container"
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-4 ring-primary shadow-xl scale-105' 
                        : 'ring-2 ring-border hover:ring-primary/50 hover:scale-105 shadow-md'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-32 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Total Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">National Medals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">State Medals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Championships Won</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
}