import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const GoogleReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(5.0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log('Fetching Google reviews...');
        const { data, error } = await supabase.functions.invoke('fetch-google-reviews');
        
        if (error) {
          console.error('Error fetching reviews:', error);
          return;
        }
        
        if (data?.reviews) {
          console.log(`Loaded ${data.reviews.length} reviews`);
          setReviews(data.reviews);
          setAverageRating(data.averageRating || 5.0);
          setTotalReviews(data.totalReviews || data.reviews.length);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370; // Card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleReviewClick = () => {
    // Direct Google Maps link to write a review - won't be blocked
    const businessName = "RSA Rising Stars Academy";
    const address = "DPS Neelkanth Rd Bopal Ahmedabad Gujarat";
    const searchQuery = encodeURIComponent(`${businessName} ${address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank');
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Community Speaks</h2>
          <p className="text-center text-muted-foreground">Loading reviews...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Community Speaks</h2>
        
        {/* Google Reviews Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-6 bg-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-[#4285f4]">G</span>
                    <span className="text-2xl font-bold text-[#ea4335]">o</span>
                    <span className="text-2xl font-bold text-[#fbbc04]">o</span>
                    <span className="text-2xl font-bold text-[#4285f4]">g</span>
                    <span className="text-2xl font-bold text-[#34a853]">l</span>
                    <span className="text-2xl font-bold text-[#ea4335]">e</span>
                    <span className="text-xl font-semibold text-foreground ml-2">Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-foreground">{averageRating}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">({totalReviews})</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={handleReviewClick}
                className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-6 text-base font-semibold"
              >
                Review us on Google
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Business Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">RSA - Rising Stars Academy</h3>
          <p className="text-muted-foreground">DPS - Neelkanth Rd, Bopal, Ahmedabad, Gujarat 380058, India</p>
        </div>

        {/* Scrollable Reviews */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent scroll-smooth"
          >
            <div className="flex gap-4 px-12" style={{ minWidth: 'min-content' }}>
              {reviews.map((review) => (
                <Card 
                  key={review.id} 
                  className="flex-shrink-0 w-[350px] p-6 hover:shadow-lg transition-shadow bg-card"
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {getInitials(review.author)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{review.author}</h4>
                        <svg className="w-4 h-4 text-[#4285f4]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
