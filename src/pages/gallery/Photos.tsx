import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const photoGallery = [
  { src: "/images/hero-roller.jpg", alt: "Team RSA Advanced Skaters Group" },
  { src: "/images/facilities-gym.jpg", alt: "Coach with Young Athletes" },
  { src: "/images/pool-cross-training.jpg", alt: "Team Formation Training Session" },
  { src: "/images/events-medals.jpg", alt: "Race Finish Line Victory" },
  { src: "/images/coach-team.jpg", alt: "RSA Family Group Photo" },
  { src: "/images/fun/diwali-01.jpg", alt: "Team RSA Night Training" },
  { src: "/images/fun/diwali-02.jpg", alt: "Coach with Two Athletes" },
  { src: "/images/fun/diwali-03.jpg", alt: "Young Athletes Flag Ceremony" },
  { src: "/images/fun/holi-01.jpg", alt: "Team Line-up at Federation Track" },
  { src: "/images/fun/holi-02.jpg", alt: "Junior Skaters Training Group" },
  { src: "/images/training/sunset-group.jpg", alt: "Team Group at Sunset" },
  { src: "/images/training/coach-athlete-road.jpg", alt: "Coach with Athlete on Road" },
  { src: "/images/training/team-indoor-court.jpg", alt: "Team on Indoor Court" },
  { src: "/images/training/team-federation.jpg", alt: "Team at Federation Track" },
  { src: "/images/training/coach-team-athletes.jpg", alt: "Coach with Team Athletes" },
  { src: "/images/training/group-outdoor-selfie.jpg", alt: "Group Outdoor Training Session" },
  { src: "/images/training/coach-young-athlete.jpg", alt: "Coach with Young Athlete" },
  { src: "/images/training/race-action.jpg", alt: "Race Action Shot" },
  { src: "/images/training/award-ceremony.jpg", alt: "Award Ceremony Moment" },
  { src: "/images/training/outdoor-track-group.jpg", alt: "Outdoor Track Training Group" },
  { src: "/images/fun/holi-03.jpg", alt: "Holi Fun at RSA" },
  { src: "/images/fun/holi-05.jpg", alt: "Holi Group Celebration" },
  { src: "/images/fun/holi-group.jpg", alt: "Holi Team Photo" },
  { src: "/images/fun/kite-flying.jpg", alt: "Kite Flying Activity" },
  { src: "/images/fun/kite-running.jpg", alt: "Kite Running Fun" },
  { src: "/images/fun/bonfire-skating.jpg", alt: "Bonfire and Skating" },
  { src: "/images/fun/rain-practice-01.jpg", alt: "Training in Rain" },
  { src: "/images/fun/rain-practice-02.jpg", alt: "Rain Practice Session" },
  { src: "/images/news-cuttings/cutting-1.jpg", alt: "News Coverage 1" },
  { src: "/images/news-cuttings/cutting-2.jpg", alt: "News Coverage 2" },
  { src: "/images/news-cuttings/cutting-3.jpg", alt: "Media Recognition 3" },
  { src: "/images/news-cuttings/cutting-4.jpg", alt: "Press Coverage 4" },
  { src: "/images/news-cuttings/cutting-5.jpg", alt: "News Article 5" },
  { src: "/images/news-cuttings/cutting-6.jpg", alt: "Media Feature 6" },
  { src: "/images/news-cuttings/cutting-7.jpg", alt: "Press Release 7" },
  { src: "/images/news-cuttings/cutting-8.jpg", alt: "News Highlight 8" },
  { src: "/images/news-cuttings/cutting-9.jpg", alt: "Media Coverage 9" },
  { src: "/images/news-cuttings/cutting-10.jpg", alt: "Press Article 10" },
  { src: "/images/news-cuttings/cutting-11.jpg", alt: "News Feature 11" },
  { src: "/images/news-cuttings/cutting-12.jpg", alt: "Media Report 12" },
  { src: "/images/news-cuttings/cutting-13.jpg", alt: "Press Coverage 13" },
  { src: "/images/news-cuttings/cutting-14.jpg", alt: "News Story 14" },
  { src: "/images/news-cuttings/cutting-15.jpg", alt: "Media Article 15" },
  { src: "/images/news-cuttings/cutting-16.jpg", alt: "Press Feature 16" },
  { src: "/images/news-cuttings/cutting-17.jpg", alt: "News Clip 17" },
  { src: "/images/news-cuttings/cutting-18.jpg", alt: "Media Mention 18" },
  { src: "/images/news-cuttings/cutting-19.jpg", alt: "Press Highlight 19" },
  { src: "/images/news-cuttings/cutting-20.jpg", alt: "News Recognition 20" },
];

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : photoGallery.length - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedImage((prev) => (prev! < photoGallery.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Lazy loading observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setLoadedImages((prev) => new Set([...prev, index]));
          }
        });
      },
      { rootMargin: "50px" }
    );

    const images = document.querySelectorAll(".lazy-image");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : photoGallery.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev! < photoGallery.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RSA Image Gallery</h1>
            <p className="text-xl">Capturing moments of memories & excellence</p>
          </div>
        </section>

        {/* Masonry Photo Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
              {photoGallery.map((photo, index) => (
                <div
                  key={index}
                  data-index={index}
                  className="lazy-image break-inside-avoid mb-4 relative group overflow-hidden rounded-lg shadow-lg hover-lift cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedImage(index);
                    }
                  }}
                  aria-label={`View ${photo.alt}`}
                >
                  {loadedImages.has(index) ? (
                    <>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-semibold text-center px-4">{photo.alt}</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-64 bg-muted animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-foreground/70 mb-4">
                Want to see more photos from our academy? Follow us on social media!
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/rsa4sports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/RSA4U/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full backdrop-blur-sm transition-all"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full backdrop-blur-sm transition-all"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            {selectedImage !== null && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <img
                  src={photoGallery[selectedImage].src}
                  alt={photoGallery[selectedImage].alt}
                  className="max-w-full max-h-[calc(100%-4rem)] object-contain"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {photoGallery[selectedImage].alt}
                </p>
                <p className="text-white/70 text-sm mt-2">
                  {selectedImage + 1} / {photoGallery.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
