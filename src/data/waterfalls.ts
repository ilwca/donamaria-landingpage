export type Waterfall = {
  name: string;
  description: string;
  image: string; // caminho em /public/images/cachoeiras/... — hoje vazio (placeholder)
};

export const waterfalls: Waterfall[] = [
  {
    name: "Cachoeira do Catoá",
    description: "Uma queda d'água cristalina, perfeita para um mergulho revigorante ao amanhecer.",
    image: "/images/cachoeiras/cachoeira-catoa.jpeg",
  },
  {
    name: "Cachoeira do Engenho",
    description: "Cercada por mata nativa, com trilha leve e um cenário digno de cartão-postal.",
    image: "/images/cachoeiras/cachoeira-engenho.jpeg",
  },
  {
    name: "Complexo Águas Lindas",
    description: "Famosa pelo poço profundo e águas calmas, ideal para relaxar e contemplar.",
    image: "/images/cachoeiras/cachoeira-aguas-lindas.jpeg",
  },
];
