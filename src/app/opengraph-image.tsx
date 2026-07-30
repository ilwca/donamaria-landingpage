import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg, #0e4322 0%, #115128 45%, #1c3f26 100%)",
          color: "#f5e0ba",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, opacity: 0.8, marginBottom: 24 }}>
          INTERIOR DO TOCANTINS
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, textAlign: "center" }}>{SITE_NAME}</div>
        <div style={{ fontSize: 32, opacity: 0.9, marginTop: 28 }}>
          Campo Alegre, Paranã (TO) — perto das Cachoeiras do Catoá
        </div>
      </div>
    ),
    { ...size }
  );
}
