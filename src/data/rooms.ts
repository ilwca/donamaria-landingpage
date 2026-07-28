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

export const accommodations: Accommodation[] = [
  {
    slug: "suite-master",
    type: "quarto",
    name: "Suíte Master",
    shortDescription:
      "O quarto mais espaçoso da casa, com varanda voltada para o quintal e vista das serras ao fundo.",
    longDescription:
      "A Suíte Master é o cantinho mais generoso da Pousada Dona Maria: cama de casal ampla, varanda privativa e uma vista que emenda o quintal florido com as serras ao longe. Ideal para quem quer acordar com o barulho dos pássaros e dormir ouvindo o silêncio do distrito.",
    capacity: "2 a 3 pessoas",
    amenities: ["Cama king", "Varanda privativa", "Banheiro privativo", "Ventilador de teto", "Frigobar", "Wi-Fi"],
    images: [],
    priceFrom: "a partir de R$ 220/noite",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Suíte Master e verificar disponibilidade.",
    gridSpan: "large",
  },
  {
    slug: "quarto-deluxe",
    type: "quarto",
    name: "Quarto Deluxe",
    shortDescription: "Conforto essencial com toques de artesanato local, para uma estadia tranquila.",
    longDescription:
      "O Quarto Deluxe traz o essencial pra uma boa estadia, com detalhes de artesanato feito por gente da região. É o quarto mais procurado por quem viaja em dupla e quer só um lugar simples, limpo e aconchegante pra descansar entre uma cachoeira e outra.",
    capacity: "2 pessoas",
    amenities: ["Cama de casal", "Banheiro privativo", "Ventilador de teto", "Wi-Fi"],
    images: [],
    priceFrom: "a partir de R$ 160/noite",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Quarto Deluxe e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "loft-jardim",
    type: "quarto",
    name: "Loft Jardim",
    shortDescription: "Um quartinho integrado ao jardim da Dona Maria, com portas para o verde.",
    longDescription:
      "O Loft Jardim fica de frente pro jardim que a Dona Maria cuida com carinho todo santo dia. As portas se abrem direto pra área verde — é o quarto preferido de quem viaja sozinho ou quer um cantinho mais reservado pra ler um livro na varandinha.",
    capacity: "1 a 2 pessoas",
    amenities: ["Cama de casal", "Varandinha", "Banheiro privativo", "Wi-Fi"],
    images: [],
    priceFrom: "a partir de R$ 150/noite",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Loft Jardim e verificar disponibilidade.",
    gridSpan: "medium",
  },
  {
    slug: "chale-familiar",
    type: "quarto",
    name: "Chalé Familiar",
    shortDescription: "Espaço generoso para a família toda, com sala compartilhada e varanda ampla.",
    longDescription:
      "O Chalé Familiar tem dois quartos, sala compartilhada e uma varanda grande o suficiente pra reunir a família depois de um dia de cachoeira. É o espaço da casa feito pra criar memória — com direito a rede, mesa grande e muito espaço pras crianças correrem.",
    capacity: "Até 6 pessoas",
    amenities: ["2 quartos", "Sala compartilhada", "Varanda ampla", "Rede", "Wi-Fi"],
    images: [],
    priceFrom: "a partir de R$ 380/noite",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Chalé Familiar e verificar disponibilidade.",
    gridSpan: "large",
  },
  {
    slug: "camping",
    type: "camping",
    name: "Camping",
    shortDescription: "Área verde reservada para barracas, debaixo das árvores do quintal da pousada.",
    longDescription:
      "Pra quem prefere dormir mais perto do céu, a Pousada Dona Maria reserva uma área de camping na sombra das árvores do quintal. Banheiro compartilhado, ponto de luz e a mesma hospitalidade da casa — incluindo o café da manhã da Dona Maria, se quiser.",
    capacity: "Até 4 barracas",
    amenities: ["Área gramada e sombreada", "Banheiro compartilhado", "Ponto de energia", "Fogueira (sob consulta)"],
    images: [],
    priceFrom: "a partir de R$ 40/pessoa por noite",
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
