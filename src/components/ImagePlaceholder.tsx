import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  className?: string;
};

// Painel placeholder honesto no lugar de fotografia real, até termos as fotos
// definitivas da pousada. Ver README.md > "Substituindo imagens".
export default function ImagePlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-container-high text-on-surface-variant ${className}`}
    >
      <ImageIcon className="w-8 h-8 opacity-50" strokeWidth={1.5} />
      <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60 text-center px-4">
        {label}
      </span>
    </div>
  );
}
