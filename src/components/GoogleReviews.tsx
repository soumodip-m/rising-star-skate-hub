import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  timeAgo: string;
  verified: boolean;
  fullText: string;
}

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const reviewsPerPage = 3;
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(5.0);
  const { toast } = useToast();

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      console.log('Fetching Google reviews...');
      const { data, error } = await supabase.functions.invoke('fetch-google-reviews');

      if (error) {
        console.error('Error fetching reviews:', error);
        toast({
          title: "Error",
          description: "Failed to load Google reviews",
          variant: "destructive",
        });
        return;
      }

      if (data && data.reviews) {
        console.log('Received reviews:', data.reviews.length);
        setAverageRating(data.rating || 5.0);
        setTotalReviews(data.totalReviews || 0);

        const formattedReviews: Review[] = data.reviews.map((review: GoogleReview) => ({
          name: review.author_name,
          avatar: review.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=4285f4&color=fff`,
          rating: review.rating,
          text: review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text,
          fullText: review.text,
          timeAgo: review.relative_time_description,
          verified: true,
        }));

        setReviews(formattedReviews);
      }
    } catch (error) {
      console.error('Error in fetchGoogleReviews:', error);
      toast({
        title: "Error",
        description: "Failed to load Google reviews",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + reviewsPerPage >= reviews.length ? 0 : prev + reviewsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - reviewsPerPage < 0 ? reviews.length - reviewsPerPage : prev - reviewsPerPage));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          {/* Google Logo */}
          <div className="flex items-center gap-1">
            <span className="text-[#4285f4] text-4xl font-bold">G</span>
            <span className="text-[#ea4335] text-4xl font-bold">o</span>
            <span className="text-[#fbbc04] text-4xl font-bold">o</span>
            <span className="text-[#4285f4] text-4xl font-bold">g</span>
            <span className="text-[#34a853] text-4xl font-bold">l</span>
            <span className="text-[#ea4335] text-4xl font-bold">e</span>
            <span className="text-foreground text-4xl font-normal ml-2">Reviews</span>
          </div>
        </div>

        <a
          href="https://share.google/BH6s9VSzO0a8bNbTc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-8 py-6 text-lg rounded-full">
            Review us on Google
          </Button>
        </a>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-5xl font-bold">{averageRating}</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-[#fbbc04] text-[#fbbc04]" />
          ))}
        </div>
        <span className="text-muted-foreground text-lg ml-2">({totalReviews})</span>
      </div>

      {/* Reviews Grid */}
      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
            >
              {/* Reviewer Info */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#4285f4] text-xs font-bold">G</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    {review.verified && (
                      <svg className="w-4 h-4 text-[#4285f4]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.timeAgo}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-gray-300"}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed mb-2">{review.text}</p>
              {review.text.length < review.fullText.length && (
                <button 
                  onClick={() => setSelectedReview(review)}
                  className="text-[#4285f4] text-sm font-medium hover:underline"
                >
                  Read more
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * reviewsPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === i * reviewsPerPage ? "bg-foreground w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full Review Dialog */}
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <img
                src={selectedReview?.avatar}
                alt={selectedReview?.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span>{selectedReview?.name}</span>
                  <svg className="w-4 h-4 text-[#4285f4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">{selectedReview?.timeAgo}</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < (selectedReview?.rating || 0) ? "fill-[#fbbc04] text-[#fbbc04]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedReview?.fullText}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
