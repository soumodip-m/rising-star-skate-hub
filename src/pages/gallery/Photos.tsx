import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const photoGallery = [
  { src: "/images/hero-roller.jpg", alt: "Roller Skating Training" },
  { src: "/images/facilities-gym.jpg", alt: "Training Facilities" },
  { src: "/images/pool-cross-training.jpg", alt: "Cross Training Pool" },
  { src: "/images/events-medals.jpg", alt: "Medal Ceremonies" },
  { src: "/images/coach-team.jpg", alt: "Coaching Team" },
  { src: "/images/training-facility.jpg", alt: "Sports Complex" },
];

export default function Photos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RSA Image Gallery</h1>
            <p className="text-xl">Capturing moments of memories & excellence</p>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {photoGallery.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover-lift">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-center px-4">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
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
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
