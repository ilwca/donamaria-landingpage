export type Waterfall = {
  name: string;
  description: string;
  image: string; // caminho em /public/images/cachoeiras/... — hoje vazio (placeholder)
};

export const waterfalls: Waterfall[] = [
  {
    name: "Cachoeira do Catuá",
    description: "Uma queda d'água cristalina, perfeita para um mergulho revigorante ao amanhecer.",
    image: "",
  },
  {
    name: "Cachoeira do Engenho",
    description: "Cercada por mata nativa, com trilha leve e um cenário digno de cartão-postal.",
    image: "",
  },
  {
    name: "Complexo Águas Lindas",
    description: "Famosa pelo poço profundo e águas calmas, ideal para relaxar e contemplar.",
    image: "",
  },
];
