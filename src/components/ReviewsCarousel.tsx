"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

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

const AUTOPLAY_DELAY_MS = 5000;

export default function ReviewsCarousel({ reviews }: { reviews: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActiveIndex((current) => (current === index ? current : index));
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const timer = setTimeout(() => {
      scrollToIndex((activeIndex + 1) % reviews.length);
    }, AUTOPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, reviews.length]);

  return (
    <div className="md:hidden">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-margin-mobile px-margin-mobile gap-4 scroll-smooth"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Avaliações de hóspedes"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {reviews.map((review, i) => (
          <div key={`${review.author}-${i}`} className="shrink-0 basis-full snap-center">
            <div className="flex flex-col gap-4 p-8 rounded-xl border border-outline-variant bg-surface-container-low h-full">
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
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => scrollToIndex((activeIndex - 1 + reviews.length) % reviews.length)}
          aria-label="Avaliação anterior"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-surface transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir para avaliação ${i + 1}`}
              aria-current={i === activeIndex}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-primary" : "w-2 bg-outline-variant"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex((activeIndex + 1) % reviews.length)}
          aria-label="Próxima avaliação"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-surface transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
