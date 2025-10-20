import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Placeholder newspaper cutting images - replace with actual newspaper images
const newspaperCuttings = [
  { id: 1, image: "/images/events-medals.jpg", alt: "RSA National Championship Coverage" },
  { id: 2, image: "/images/coach-team.jpg", alt: "Team Victory Announcement" },
  { id: 3, image: "/images/facilities-gym.jpg", alt: "Training Facility Feature" },
  { id: 4, image: "/images/pool-cross-training.jpg", alt: "Cross Training Program" },
  { id: 5, image: "/images/hero-roller.jpg", alt: "Roller Skating Championship" },
  { id: 6, image: "/images/events-medals.jpg", alt: "Medal Ceremony Coverage" },
  { id: 7, image: "/images/coach-team.jpg", alt: "Coaching Excellence" },
  { id: 8, image: "/images/facilities-gym.jpg", alt: "State-of-art Facilities" },
  { id: 9, image: "/images/pool-cross-training.jpg", alt: "Youth Development Program" },
  { id: 10, image: "/images/hero-roller.jpg", alt: "Community Sports Initiative" },
  { id: 11, image: "/images/events-medals.jpg", alt: "Regional Tournament Results" },
  { id: 12, image: "/images/coach-team.jpg", alt: "Team Building Success" },
];

const ITEMS_PER_PAGE = 6;

export default function Past() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalPages = Math.ceil(newspaperCuttings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = newspaperCuttings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Team RSA in the News</h1>
            <p className="text-xl">Media coverage highlighting team RSA's efforts</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div 
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {currentItems.map((cutting) => (
                <div
                  key={cutting.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover-lift bg-card"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cutting.image}
                      alt={cutting.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-foreground font-semibold p-4">{cutting.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`cursor-pointer ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                    />
                  </PaginationItem>
                  
                  {renderPageNumbers()}
                  
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={`cursor-pointer ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}