export type Testimonial = {
  author: string;
  rating: number; // 1 a 5
  text: string;
  relativeTime?: string;
};

// Nota média e total de avaliações reais do Google (perfil da pousada), usados
// como fallback enquanto GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID não estiverem
// configurados em produção — independentes da quantidade de depoimentos de
// exemplo abaixo (ver src/lib/reviews.ts).
export const FALLBACK_OVERALL_RATING = 4.8;
export const FALLBACK_TOTAL_REVIEWS = 38;

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
    text: "Para os visitantes da região baixa da Chapada, a pousada da Dona Maria é sem dúvida uma das melhores opções de estadia. E para completar, a anfitriã Dona Maria nos acolheu com muito carinho e braços abertos. Com certeza voltaremos para visitar o que faltou!",
    relativeTime: "há 1 ano",
  },
  {
    author: "Julianna M.",
    rating: 5,
    text: "Já nos hospedamos 2 vezes na pousada da Dona Maria, que recebe muito bem a todos. Recomendo muito !",
    relativeTime: "há 8 meses",
  },
  {
    author: "Rodrigo C.",
    rating: 5,
    text: "Pousada simples mas com toda a estrutura necessária pra descansar depois das  trilhas, ponto estratégico pra quem vai visitar a cachoeira do catoa....comida caseira muito boa servida pela dona Maria.",
    relativeTime: "há 1 ano",
  },
  {
    author: "Christian S.",
    rating: 5,
    text: "A atenção que a proprietária demonstra aos hóspedes nos deixa muito à vontade.  O café da manhã, com produtos feitos em casa, é uma delícia.",
    relativeTime: "há 1 ano",
  }
  
];
