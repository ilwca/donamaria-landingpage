import type { Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pousada Dona Maria — Hospedagem no interior do Tocantins",
  description:
    "Pousada Dona Maria: hospitalidade, tempero caseiro e as cachoeiras mais bonitas do interior do Tocantins. Reserve pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${jakarta.variable}`}>
      <body className="font-body-md text-body-md text-on-surface bg-surface">
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
