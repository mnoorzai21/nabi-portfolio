import { ImageResponse } from "next/og";

export const alt = "Mohammad Nabi Noorzai, Software Engineer";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          MN<span style={{ color: "#10b981" }}>.</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            color: "#10b981",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>
        <div style={{ marginTop: 16, fontSize: 76, fontWeight: 700 }}>
          Mohammad Nabi Noorzai
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#a1a1aa" }}>
          Full-stack web apps & FinTech tools for traders
        </div>
        <div style={{ marginTop: 56, fontSize: 28, color: "#10b981" }}>
          mnoorzai.vercel.app
        </div>
      </div>
    ),
    size,
  );
}