import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = 'ChIJcYmpFaCbXjkR_9pBAg4rNqA';

    if (!apiKey) {
      console.error('GOOGLE_PLACES_API_KEY not found');
      throw new Error('Google Places API key not configured');
    }

    console.log('Fetching reviews for Place ID:', placeId);

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      console.error('Google API response not ok:', response.status, response.statusText);
      throw new Error(`Google Places API returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API error status:', data.status, data.error_message);
      throw new Error(`Google Places API error: ${data.status}`);
    }

    console.log('Successfully fetched reviews:', data.result?.reviews?.length || 0);

    // Transform the reviews to match our format
    const reviews = data.result?.reviews?.map((review: any, index: number) => ({
      id: index + 1,
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      date: review.relative_time_description,
      avatar: review.profile_photo_url || '',
    })) || [];

    const result = {
      placeName: data.result?.name || 'RSA - Rising Stars Academy',
      rating: data.result?.rating || 5.0,
      totalReviews: data.result?.user_ratings_total || 0,
      reviews: reviews,
    };

    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        placeName: 'RSA - Rising Stars Academy',
        rating: 5.0,
        totalReviews: 0,
        reviews: []
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, // Return 200 with empty reviews rather than error
      },
    );
  }
});
