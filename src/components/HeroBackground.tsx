"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// A partir do breakpoint md (mesmo usado no resto do layout) trocamos a
// imagem de fallback pela versão desktop e passamos a carregar o vídeo;
// abaixo disso o hero fica só na imagem estática de mobile, sem gastar
// dados com vídeo.
const DESKTOP_QUERY = "(min-width: 768px)";

export default function HeroBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    setIsDesktop(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={isDesktop ? "/images/hero-desktop-fallback.jpeg" : "/images/hero-mobile.jpeg"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {isDesktop && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src="/videos/pousada.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
        />
      )}

      {/* Camada verde escuro (mesmo tom do fundo original do hero) por cima do vídeo/imagem */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(149,213,159,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(217,197,160,0.18), transparent 50%), linear-gradient(160deg, rgba(14,67,34,0.8) 0%, rgba(17,81,40,0.74) 45%, rgba(28,63,38,0.82) 100%)",
        }}
      />
    </div>
  );
}
