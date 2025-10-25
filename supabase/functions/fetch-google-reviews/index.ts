import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    
    if (!apiKey) {
      console.error('Google Places API key not found');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const placeId = 'ChIJcYmpFaCbXjkR_9pBAg4rNqA';
    
    // Fetch place details with reviews
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    console.log('Fetching Google reviews for place:', placeId);
    
    const response = await fetch(placeDetailsUrl);
    const data = await response.json();
    
    if (data.status !== 'OK') {
      console.error('Google API error:', data.status, data.error_message);
      return new Response(
        JSON.stringify({ error: `Google API error: ${data.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = data.result;
    const reviews = result.reviews || [];
    
    console.log(`Successfully fetched ${reviews.length} reviews`);
    
    // Transform reviews to our format
    const transformedReviews = reviews.map((review: GoogleReview, index: number) => ({
      id: index + 1,
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      date: review.relative_time_description,
      avatar: review.profile_photo_url || '',
    }));

    return new Response(
      JSON.stringify({
        reviews: transformedReviews,
        averageRating: result.rating || 5.0,
        totalReviews: result.user_ratings_total || reviews.length,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch reviews', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});