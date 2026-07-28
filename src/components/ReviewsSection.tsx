import { Star } from "lucide-react";
import { getReviews } from "@/lib/reviews";
import Reveal from "./Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.round(rating) ? "fill-tertiary text-tertiary" : "text-outline-variant"}`}
        />
      ))}
    </div>
  );
}

export default async function ReviewsSection() {
  const { overallRating, totalReviews, reviews } = await getReviews();

  return (
    <section id="avaliacoes" className="py-section-gap px-margin-mobile max-w-container-max mx-auto scroll-mt-14">
      <Reveal as="div" className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Quem já ficou, conta
        </h2>
        {overallRating !== null && (
          <div className="flex items-center justify-center gap-3 mb-2">
            <Stars rating={overallRating} />
            <span className="font-label-lg text-label-lg text-on-surface-variant">
              {overallRating.toFixed(1)}
              {totalReviews ? ` · ${totalReviews} avaliações` : ""}
            </span>
          </div>
        )}
        <div className="w-24 h-px bg-tertiary-container mx-auto mt-8" />
      </Reveal>

      <Reveal as="div" className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {reviews.slice(0, 6).map((review, i) => (
          <div
            key={`${review.author}-${i}`}
            className="flex flex-col gap-4 p-8 rounded-xl border border-outline-variant bg-surface-container-low"
          >
            <Stars rating={review.rating} />
            <p className="font-body-md text-body-md text-on-surface-variant flex-1">
              &ldquo;{review.text}&rdquo;
            </p>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">{review.author}</p>
              {review.relativeTime && (
                <p className="font-label-sm text-label-sm text-outline">{review.relativeTime}</p>
              )}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
