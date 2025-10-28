import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const GOOGLE_PLACES_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY');
    
    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error('Google Places API key not configured');
    }

    // RSA - Rising Stars Academy place ID
    const placeId = 'ChIJeRl-lfqEXjkRV5MgBLl7tl4'; // This is a placeholder - you'll need the actual Place ID

    // First, get place details to fetch the reviews
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(placeDetailsUrl);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const result = data.result;
    
    return new Response(
      JSON.stringify({
        averageRating: result.rating || 0,
        totalReviews: result.user_ratings_total || 0,
        reviews: result.reviews?.map((review: any, index: number) => ({
          id: index + 1,
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          date: review.relative_time_description,
          avatar: review.profile_photo_url || '',
        })) || [],
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        averageRating: 5.0,
        totalReviews: 8,
        reviews: [] 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
