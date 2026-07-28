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
    author: "Rossi P.",
    rating: 5,
    text: "Melhor hospedagem em Campo Alegre. Suítes confortáveis  com cama box e camas de solteiro,  acomodam até 4 pessoas. chuveiro quente. Café da manhã de fazenda.  Receptividade ótima. Dona da Pousada é excepcionalmente atenciosa",
    relativeTime: "há 3 anos",
  },
  {
    author: "Ariovaldo N.",
    rating: 5,
    text: "A dona Maria e dona Miúda são super agradáveis,  Boa receptividade e bem informadas sobre tudo na região.  Lá é o ponto de partida para lindas cachoeiras e pontos de água quente. Vale a pena conhecer campo Alegre,  município de Paranã To.",
    relativeTime: "há 6 anos",
  },
  {
    author: "Rodrigo G.",
    rating: 5,
    text: "Para os visitantes da região baixa da Chapada, a pousada da Dona Maria é sem dúvida uma das melhores opções de estadia. Quartos com banheiro privativo com água quente, ar condicionado, e impecavelmente limpos. Além disso, a Dona Maria oferece um delicioso café da manhã e um jantar muito rico e variado. E para completar, a anfitriã Dona Maria nos acolheu com muito carinho e braços abertos. Com certeza voltaremos para visitar o que faltou!",
    relativeTime: "há 1 ano",
  },
];
