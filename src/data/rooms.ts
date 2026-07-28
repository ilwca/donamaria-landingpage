export type Accommodation = {
  slug: string;
  type: "quarto" | "camping";
  name: string;
  shortDescription: string;
  longDescription: string;
  capacity: string;
  amenities: string[];
  images: string[]; // caminhos em /public/images/... — hoje vazio (placeholder)
  priceFrom?: string; // placeholder, ex: "a partir de R$ 220/noite"
  whatsappMessage: string;
  gridSpan: "large" | "medium" | "small"; // controla o tamanho do card no bento grid da home
};

// Política comum a todas as acomodações (repetida em cada longDescription, por decisão do produto):
// café da manhã incluso, crianças <12 anos pagam 50%, sinal de 50% no ato da reserva,
// refeições à parte (almoço/jantar self-service R$ 50 ou no quilo R$ 65).
const POLICY_NOTE =
  "Café da manhã incluso. Crianças menores de 12 anos pagam 50% do valor. Reservas exigem sinal de 50% no ato. Refeições à parte: almoço/jantar self-service por R$ 50,00 ou no quilo por R$ 65,00.";

const ROOM_PRICE_NOTE =
  "A diária pode ser reservada como hospedagem compartilhada (R$ 160 por pessoa), hospedagem exclusiva (R$ 180 por pessoa) ou suíte casal fechada (R$ 300).";

export const accommodations: Accommodation[] = [
  {
    slug: "suite-master",
    type: "quarto",
    name: "Suíte Master",
    shortDescription:
      "Cama de casal e cama de solteiro em banheiro privativo, para quem busca mais privacidade.",
    longDescription: `A Suíte Master traz uma cama de casal e uma cama de solteiro, com banheiro privativo — boa opção para casais ou pequenos grupos. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 3 pessoas",
    amenities: [
      "1 cama de casal + 1 cama de solteiro",
      "Banheiro privativo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Master e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "suite-aurora",
    type: "quarto",
    name: "Suíte Aurora",
    shortDescription:
      "Cama de casal e duas camas de solteiro, com banheiro privativo — espaço de sobra para a família.",
    longDescription: `A Suíte Aurora tem uma cama de casal e duas camas de solteiro, com banheiro privativo — cabe bem famílias ou grupos de amigos. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 4 pessoas",
    amenities: [
      "1 cama de casal + 2 camas de solteiro",
      "Banheiro privativo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Aurora e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "quarto-jardim",
    type: "quarto",
    name: "Quarto Jardim",
    shortDescription:
      "Cama de casal e duas camas de solteiro, com banheiro externo, no cantinho mais simples da casa.",
    longDescription: `O Quarto Jardim tem uma cama de casal e duas camas de solteiro, com banheiro externo (não privativo) — opção mais simples e em conta da casa. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 4 pessoas",
    amenities: [
      "1 cama de casal + 2 camas de solteiro",
      "Banheiro externo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Quarto Jardim e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "suite-mirante",
    type: "quarto",
    name: "Suíte Mirante",
    shortDescription:
      "Cama de casal e duas camas de solteiro, com banheiro privativo — ótima para grupos maiores.",
    longDescription: `A Suíte Mirante tem uma cama de casal e duas camas de solteiro, com banheiro privativo — ótima para grupos maiores ou famílias com crianças. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 4 pessoas",
    amenities: [
      "1 cama de casal + 2 camas de solteiro",
      "Banheiro privativo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Mirante e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "suite-horizonte",
    type: "quarto",
    name: "Suíte Horizonte",
    shortDescription:
      "Cama de casal e cama de solteiro, com banheiro privativo, num quartinho tranquilo da casa.",
    longDescription: `A Suíte Horizonte tem uma cama de casal e uma cama de solteiro, com banheiro privativo — um cantinho tranquilo para casais ou pequenos grupos. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 3 pessoas",
    amenities: [
      "1 cama de casal + 1 cama de solteiro",
      "Banheiro privativo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Horizonte e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "suite-cerrado",
    type: "quarto",
    name: "Suíte Cerrado",
    shortDescription:
      "Cama de casal e cama de solteiro, com banheiro privativo, com toques do Cerrado tocantinense.",
    longDescription: `A Suíte Cerrado tem uma cama de casal e uma cama de solteiro, com banheiro privativo e detalhes que remetem à vegetação da região. ${ROOM_PRICE_NOTE} ${POLICY_NOTE}`,
    capacity: "Até 3 pessoas",
    amenities: [
      "1 cama de casal + 1 cama de solteiro",
      "Banheiro privativo",
      "Ventilador de teto",
      "Café da manhã incluso",
      "Wi-Fi",
    ],
    images: [],
    priceFrom: "a partir de R$ 160 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Cerrado e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "camping",
    type: "camping",
    name: "Camping",
    shortDescription:
      "Área verde reservada para barracas, debaixo das árvores do quintal da pousada. Traga sua própria barraca.",
    longDescription: `Pra quem prefere dormir mais perto do céu, a Pousada Dona Maria reserva uma área de camping na sombra das árvores do quintal. É necessário trazer sua própria barraca. A diária custa R$ 90,00 por pessoa. ${POLICY_NOTE}`,
    capacity: "Até 4 barracas",
    amenities: [
      "Área grande e sombreada",
      "Banheiro compartilhado",
      "Ponto de energia",
      "Café da manhã incluso",
      "Traga sua própria barraca",
    ],
    images: [],
    priceFrom: "a partir de R$ 90 por pessoa",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Camping e verificar disponibilidade.",
    gridSpan: "large",
  },
];

export function getAccommodationBySlug(slug: string): Accommodation | undefined {
  return accommodations.find((a) => a.slug === slug);
}

export const rooms = accommodations.filter((a) => a.type === "quarto");
export const camping = accommodations.find((a) => a.type === "camping")!;
