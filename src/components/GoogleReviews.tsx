import { Star, ExternalLink, ChevronLeft, ChevronRight, Facebook } from "lucide-react";
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

const reviews: Review[] = [
  {
    id: 1,
    author: "Prajakta Mishra",
    rating: 5,
    text: "Rising star academy (RSA) is a really good place for children to take out their hidden talent. Coach is very good and friendly. He pays individual attention to every child. My son loves to go here and is extremely excited for his classes.",
    date: "8 days ago",
    avatar: ""
  },
  {
    id: 2,
    author: "Vandita Chona",
    rating: 5,
    text: "Thank you sir for your continuous guidance to your student and us as parents to understand our child's abilities and weaknesses and giving them confidence to achieve. Your approach to make learning enjoyable has made a significant impact.",
    date: "8 days ago",
    avatar: ""
  },
  {
    id: 3,
    author: "Priyen Solanki",
    rating: 5,
    text: "My son has been training at RSA for a while now, and I'm truly impressed with the dedication and expertise of the coaches. They focus on both skill development and building confidence in young athletes.",
    date: "8 days ago",
    avatar: ""
  },
  {
    id: 4,
    author: "Ravi Sharma",
    rating: 5,
    text: "Excellent coaching facility! The trainers are very professional and caring. My daughter has improved tremendously in her skating skills and confidence. Highly recommend RSA!",
    date: "2 weeks ago",
    avatar: ""
  },
  {
    id: 5,
    author: "Meena Patel",
    rating: 5,
    text: "Best sports academy in Ahmedabad! The infrastructure is great and coaches are experienced. My kids love attending their training sessions here.",
    date: "3 weeks ago",
    avatar: ""
  },
  {
    id: 6,
    author: "Amit Kumar",
    rating: 5,
    text: "Outstanding training facility with excellent coaches. The personalized attention given to each student is commendable. My child has shown remarkable improvement.",
    date: "1 month ago",
    avatar: ""
  },
  {
    id: 7,
    author: "Neha Shah",
    rating: 5,
    text: "Great experience! The coaches are patient and skilled. They have created a wonderful learning environment for kids. Highly recommended!",
    date: "1 month ago",
    avatar: ""
  },
  {
    id: 8,
    author: "Kiran Desai",
    rating: 5,
    text: "My daughter absolutely loves her skating classes at RSA. The coaches are experienced and very encouraging. Best decision we made!",
    date: "2 months ago",
    avatar: ""
  }
];

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
  const [googleData, setGoogleData] = useState({
    averageRating: '5.0',
    totalReviews: reviews.length,
    reviews: reviews
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-google-reviews');
        
        if (error) throw error;
        
        if (data && data.averageRating) {
          setGoogleData({
            averageRating: data.averageRating.toFixed(1),
            totalReviews: data.totalReviews,
            reviews: data.reviews.length > 0 ? data.reviews : reviews
          });
        }
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        // Keep default values on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleReviews();
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
                    <span className="text-3xl font-bold text-foreground">{googleData.averageRating}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">({googleData.totalReviews})</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleReviewClick}
                  className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-6 text-base font-semibold"
                >
                  Review us on Google
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => window.open('https://www.facebook.com/groups/1528245441698569/', '_blank')}
                  className="bg-[#1877f2] hover:bg-[#166fe5] text-white px-6 py-6 text-base font-semibold"
                >
                  <Facebook className="mr-2 h-5 w-5 fill-current" />
                  Join our Skating Community
                </Button>
              </div>
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
              {googleData.reviews.map((review) => (
                <Card 
                  key={review.id} 
                  className="flex-shrink-0 w-[350px] p-6 hover:shadow-lg transition-shadow bg-card"
                >
...
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
