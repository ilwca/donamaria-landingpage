import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showIcon?: boolean;
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-primary text-surface hover:bg-primary-container shadow-sm",
  secondary:
    "border border-primary text-primary hover:bg-primary hover:text-surface",
  ghost: "text-primary hover:text-primary-container",
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-widest transition-all ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="w-4 h-4" strokeWidth={2.5} />}
      {children}
    </a>
  );
}
