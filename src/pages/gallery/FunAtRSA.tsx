import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const funImages = [
  { src: "/images/fun/diwali-02.jpg", alt: "Diwali celebrations", rotation: "rotate-2" },
  { src: "/images/fun/diwali-03.jpg", alt: "Sparkling fun", rotation: "-rotate-1" },
  { src: "/images/fun/diwali-01.jpg", alt: "Festival of lights", rotation: "rotate-1" },
  { src: "/images/fun/holi-02.jpg", alt: "Holi colors", rotation: "-rotate-2" },
  { src: "/images/fun/holi-03.jpg", alt: "Color splash", rotation: "rotate-3" },
  { src: "/images/fun/holi-05.jpg", alt: "Water fun", rotation: "-rotate-1" },
  { src: "/images/fun/holi-01.jpg", alt: "Team celebration", rotation: "rotate-2" },
  { src: "/images/fun/rain-practice-01.jpg", alt: "Rain practice", rotation: "-rotate-3" },
  { src: "/images/fun/rain-practice-02.jpg", alt: "Dedication in rain", rotation: "rotate-1" },
  { src: "/images/fun/holi-group.jpg", alt: "Group celebration", rotation: "-rotate-2" },
];

export default function FunAtRSA() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fun@RSA 🎉</h1>
            <p className="text-xl">At RSA, sports build strength - and the fun builds smiles</p>
          </div>
        </section>

        {/* Funky Collage Grid */}
        <section className="py-16 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
              {/* Masonry-style grid with varied sizes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {funImages.map((image, index) => {
                  // Create varied sizes for funky layout
                  const sizes = [
                    "col-span-1 row-span-1",
                    "col-span-2 row-span-1",
                    "col-span-1 row-span-2",
                    "col-span-2 row-span-2",
                  ];
                  const sizeClass = sizes[index % sizes.length];
                  
                  return (
                    <div
                      key={index}
                      className={`${sizeClass} group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105 ${image.rotation}`}
                      onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 brightness-110"
                      />
                      {/* Funky colored border effect */}
                      <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" 
                           style={{
                             borderColor: `hsl(var(--primary) / ${0.2 + (index % 5) * 0.15})`
                           }} 
                      />
                    </div>
                  );
                })}
              </div>

              {/* Fun message */}
              <div className="text-center mt-16 space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  More Fun Moments Coming Soon!
                </h2>
                <p className="text-muted-foreground text-lg">
                  Follow us on social media for daily doses of RSA fun and excitement
                </p>
                <div className="flex gap-6 justify-center mt-6">
                  <a 
                    href="https://www.instagram.com/rsa4sports" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    📸 Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/RSA4U/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    👍 Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-background/80 backdrop-blur-sm p-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="text-foreground font-semibold text-lg">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
