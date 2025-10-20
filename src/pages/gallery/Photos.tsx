import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

type Album = "All" | "Training" | "Competitions" | "Events" | "Awards" | "Campus";

interface Photo {
  src: string;
  alt: string;
  album: Album;
  caption: string;
}

const photoGallery: Photo[] = [
  // Training (10 images)
  { src: "/images/hero-roller.jpg", alt: "Roller Skating Training Session", album: "Training", caption: "Professional roller skating training" },
  { src: "/images/facilities-gym.jpg", alt: "Gym Training", album: "Training", caption: "State-of-the-art gym facilities" },
  { src: "/images/pool-cross-training.jpg", alt: "Cross Training Pool", album: "Training", caption: "Cross-training at our pool" },
  { src: "/images/coach-team.jpg", alt: "Coaching Session", album: "Training", caption: "Expert coaches guiding students" },
  { src: "/images/fun/rain-practice-01.jpg", alt: "Rain Practice", album: "Training", caption: "Training in all conditions" },
  { src: "/images/fun/rain-practice-02.jpg", alt: "Outdoor Training", album: "Training", caption: "Building resilience and strength" },
  { src: "/src/assets/training/training-1.jpg", alt: "Training Session 1", album: "Training", caption: "Daily training routines" },
  { src: "/src/assets/training/training-2.jpg", alt: "Training Session 2", album: "Training", caption: "Skill development exercises" },
  { src: "/src/assets/training/training-3.jpg", alt: "Training Session 3", album: "Training", caption: "Group training activities" },
  { src: "/src/assets/training/training-4.jpg", alt: "Training Session 4", album: "Training", caption: "Advanced techniques practice" },
  
  // Competitions (10 images)
  { src: "/images/events-medals.jpg", alt: "Medal Ceremony", album: "Competitions", caption: "Celebrating our champions" },
  { src: "/src/assets/achievements-team-1.jpg", alt: "Competition Team 1", album: "Competitions", caption: "Our victorious team" },
  { src: "/src/assets/achievements-team-2.jpg", alt: "Competition Team 2", album: "Competitions", caption: "National championship winners" },
  { src: "/src/assets/Racer.jpg", alt: "Competitive Racer", album: "Competitions", caption: "Speed skating competition" },
  { src: "/src/assets/Start Line updated2.jpg", alt: "Starting Line", album: "Competitions", caption: "Ready for the race" },
  { src: "/src/assets/training/training-5.jpg", alt: "Competition Prep", album: "Competitions", caption: "Preparing for competitions" },
  { src: "/src/assets/training/training-6.jpg", alt: "Race Day", album: "Competitions", caption: "Competition day excitement" },
  { src: "/src/assets/hero-roller-skating.jpg", alt: "Skating Competition", album: "Competitions", caption: "Intense competition moments" },
  { src: "/src/assets/hero-quad-skating.jpg", alt: "Quad Skating Event", album: "Competitions", caption: "Quad skating championship" },
  { src: "/src/assets/inline-skate.jpg", alt: "Inline Racing", album: "Competitions", caption: "Inline skating competition" },
  
  // Events (10 images)
  { src: "/images/fun/diwali-01.jpg", alt: "Diwali Celebration", album: "Events", caption: "Diwali festivities at RSA" },
  { src: "/images/fun/diwali-02.jpg", alt: "Diwali Event", album: "Events", caption: "Celebrating together" },
  { src: "/images/fun/diwali-03.jpg", alt: "Festival of Lights", album: "Events", caption: "Cultural celebrations" },
  { src: "/images/fun/holi-01.jpg", alt: "Holi Celebration", album: "Events", caption: "Colors of joy" },
  { src: "/images/fun/holi-02.jpg", alt: "Holi Fun", album: "Events", caption: "Festival of colors" },
  { src: "/images/fun/holi-03.jpg", alt: "Holi Event", album: "Events", caption: "Community bonding" },
  { src: "/images/fun/holi-05.jpg", alt: "Holi Group", album: "Events", caption: "Team spirit" },
  { src: "/images/fun/holi-group.jpg", alt: "Holi Team", album: "Events", caption: "Celebrating together" },
  { src: "/src/assets/team-sunset.jpg", alt: "Team Event", album: "Events", caption: "Evening team gathering" },
  { src: "/src/assets/hero-about-road.jpg", alt: "Road Event", album: "Events", caption: "Outdoor activities" },
  
  // Awards (5 images)
  { src: "/images/events-medals.jpg", alt: "Award Ceremony", album: "Awards", caption: "Recognition of excellence" },
  { src: "/src/assets/achievements-team-1.jpg", alt: "Team Awards", album: "Awards", caption: "Championship trophies" },
  { src: "/src/assets/achievements-team-2.jpg", alt: "Winners", album: "Awards", caption: "Our proud winners" },
  { src: "/images/news-cuttings/cutting-1.jpg", alt: "Media Coverage", album: "Awards", caption: "Featured in media" },
  { src: "/images/news-cuttings/cutting-2.jpg", alt: "Press Recognition", album: "Awards", caption: "Press highlights" },
  
  // Campus (5 images)
  { src: "/images/facilities-gym.jpg", alt: "Campus Gym", album: "Campus", caption: "Modern training facilities" },
  { src: "/images/pool-cross-training.jpg", alt: "Campus Pool", album: "Campus", caption: "Swimming pool area" },
  { src: "/src/assets/training-facility.jpg", alt: "Training Facility", album: "Campus", caption: "Our campus facilities" },
  { src: "/src/assets/why-choose-rink.jpg", alt: "Skating Rink", album: "Campus", caption: "Professional skating rink" },
  { src: "/src/assets/why-choose-training.jpg", alt: "Campus Training Area", album: "Campus", caption: "Dedicated training zones" },
];

export default function Photos() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const albums: Album[] = ["All", "Training", "Competitions", "Events", "Awards", "Campus"];

  const filteredPhotos = selectedAlbum === "All" 
    ? photoGallery 
    : photoGallery.filter(photo => photo.album === selectedAlbum);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setZoomLevel(1);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
    setZoomLevel(1);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredPhotos.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl">Capturing moments of excellence and achievement</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Our Gallery
            </h2>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 pb-6 border-b border-border">
              {albums.map((album) => (
                <Button
                  key={album}
                  onClick={() => setSelectedAlbum(album)}
                  variant={selectedAlbum === album ? "default" : "outline"}
                  size="sm"
                  className="rounded-full px-6"
                  aria-label={`Filter by ${album}`}
                >
                  {album}
                </Button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${photo.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white font-medium text-sm text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Want to see more photos from our academy? Follow us on social media!
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/rsa4sports" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline font-medium"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/RSA4U/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline font-medium"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent 
          className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-none"
          aria-describedby="lightbox-description"
        >
          <div className="relative w-full h-full flex flex-col">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-50 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
                onClick={handleZoomIn}
                aria-label="Zoom in"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
                onClick={handleZoomOut}
                aria-label="Zoom out"
                disabled={zoomLevel <= 1}
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center overflow-auto p-4">
              <img
                src={filteredPhotos[currentImageIndex]?.src}
                alt={filteredPhotos[currentImageIndex]?.alt}
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>

            {/* Caption */}
            <div 
              id="lightbox-description"
              className="bg-black/80 text-white p-4 text-center"
            >
              <p className="font-medium text-lg">{filteredPhotos[currentImageIndex]?.caption}</p>
              <p className="text-sm text-gray-400 mt-1">
                {currentImageIndex + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
