export type Testimonial = {
  author: string;
  rating: number; // 1 a 5
  text: string;
  relativeTime?: string;
};

// Depoimentos placeholder — usados como fallback enquanto GOOGLE_PLACES_API_KEY
// e GOOGLE_PLACE_ID não estiverem configurados em produção (ver src/lib/reviews.ts).
export const fallbackTestimonials: Testimonial[] = [
  {
    author: "Marina T.",
    rating: 5,
    text: "A Dona Maria recebe a gente como se fosse da família. O café da manhã sozinho já vale a viagem, e as cachoeiras por perto são um espetáculo.",
    relativeTime: "há 2 meses",
  },
  {
    author: "Carlos E.",
    rating: 5,
    text: "Lugar simples, limpo e com um clima gostoso de interior. Voltamos com certeza na próxima folga.",
    relativeTime: "há 3 meses",
  },
  {
    author: "Juliana R.",
    rating: 5,
    text: "Fomos em família e as crianças amaram o quintal. A Dona Maria indicou as melhores cachoeiras e ainda preparou um almoço caseiro maravilhoso.",
    relativeTime: "há 5 meses",
  },
];
