import Hero from "@/components/Hero";
import RoomsGrid from "@/components/RoomsGrid";
import WaterfallsSection from "@/components/WaterfallsSection";
import StorySection from "@/components/StorySection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import BookingCtaSection from "@/components/BookingCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <RoomsGrid />
      <WaterfallsSection />
      <StorySection />
      <ReviewsSection />
      <MapSection />
      <BookingCtaSection />
    </>
  );
}
