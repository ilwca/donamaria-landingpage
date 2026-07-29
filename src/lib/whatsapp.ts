const DEFAULT_NUMBER = "5563984448039"; // placeholder — trocar em NEXT_PUBLIC_WHATSAPP_NUMBER

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_NUMBER;
}

export function buildWhatsAppLink(message: string): string {
  const number = getWhatsAppNumber();
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const GENERIC_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre a Pousada Dona Maria.";
