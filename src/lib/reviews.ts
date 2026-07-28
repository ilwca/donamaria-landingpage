import { fallbackTestimonials, type Testimonial } from "@/data/testimonials";

export type ReviewsResult = {
  source: "google" | "fallback";
  overallRating: number | null;
  totalReviews: number | null;
  reviews: Testimonial[];
};

type GooglePlaceDetailsResponse = {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: {
      author_name: string;
      rating: number;
      text: string;
      relative_time_description?: string;
    }[];
  };
  status: string;
};

const AVERAGE_FALLBACK_RATING =
  fallbackTestimonials.reduce((sum, t) => sum + t.rating, 0) / fallbackTestimonials.length;

function fallbackResult(): ReviewsResult {
  return {
    source: "fallback",
    overallRating: Number(AVERAGE_FALLBACK_RATING.toFixed(1)),
    totalReviews: fallbackTestimonials.length,
    reviews: fallbackTestimonials,
  };
}

export async function getReviews(): Promise<ReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackResult();
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("language", "pt-BR");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 }, // 1x por dia
    });

    if (!response.ok) {
      return fallbackResult();
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      return fallbackResult();
    }

    const reviews: Testimonial[] = (data.result.reviews ?? []).map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
    }));

    if (reviews.length === 0) {
      return fallbackResult();
    }

    return {
      source: "google",
      overallRating: data.result.rating ?? null,
      totalReviews: data.result.user_ratings_total ?? null,
      reviews,
    };
  } catch {
    return fallbackResult();
  }
}
