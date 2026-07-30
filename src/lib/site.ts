// Constantes centrais de SEO/metadata — usadas por layout.tsx, sitemap.ts,
// robots.ts, JSON-LD e as páginas de quarto/camping. Trocar via
// NEXT_PUBLIC_SITE_URL em produção (ver README/.env).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://pousadadonamaria.com.br"
).replace(/\/$/, "");

export const SITE_NAME = "Pousada Dona Maria";

export const SITE_TITLE =
  "Pousada Dona Maria — Hospedagem em Campo Alegre, Paranã (TO), perto das Cachoeiras do Catoá";

export const SITE_DESCRIPTION =
  "Pousada no distrito de Campo Alegre, município de Paranã (TO), na Serra Geral do Tocantins — a poucos minutos das Cachoeiras do Catoá, do Engenho e do Complexo Águas Lindas. Quartos, camping e café da manhã caseiro. Reserve pelo WhatsApp.";

export const SITE_KEYWORDS = [
  "pousada Campo Alegre Paranã",
  "hospedagem Paranã Tocantins",
  "pousada Serra Geral do Tocantins",
  "Cachoeira do Catoá",
  "cachoeiras de Paranã Tocantins",
  "onde ficar em Campo Alegre TO",
  "camping Tocantins",
  "pousada perto de cachoeira Tocantins",
  "hospedagem interior do Tocantins",
  "turismo em Paranã TO",
];

// Mesmos valores/fallbacks usados em MapSection.tsx e Footer.tsx — mantidos
// em um único lugar aqui para os dados estruturados (JSON-LD).
export const CONTACT_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "(63) 98444-8039";
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@pousadadonamaria.com.br";
export const MAPS_LAT = process.env.NEXT_PUBLIC_MAPS_LAT || "-13.119141103352018";
export const MAPS_LNG = process.env.NEXT_PUBLIC_MAPS_LNG || "-47.7661878588241";
export const MAPS_ADDRESS =
  process.env.NEXT_PUBLIC_MAPS_ADDRESS || "Campo Alegre, Paranã - TO, 77360-000";
export const INSTAGRAM_URL = "https://www.instagram.com/pousadadonamariaoderci/";
