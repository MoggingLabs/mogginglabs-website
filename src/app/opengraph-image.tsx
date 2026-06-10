import { ImageResponse } from "next/og";

export const alt = "MoggingLabs — AI agents for lead-gen teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f1",
          color: "#16130e",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, display: "flex" }}>
            <span>Mogging</span>
            <span style={{ color: "#e8501a" }}>Labs</span>
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8a8377",
              fontFamily: "monospace",
            }}
          >
            AI implementation studio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            AI agents for lead-gen teams.
          </div>
          <div style={{ display: "flex", marginTop: 28, alignItems: "center", gap: 18 }}>
            <div style={{ width: 64, height: 4, background: "#e8501a" }} />
            <div style={{ fontSize: 28, color: "#3d3830" }}>
              Built, installed, and running inside the tools you already use.
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#8a8377",
            fontFamily: "monospace",
            letterSpacing: 2,
          }}
        >
          mogginglabs.org — start with a free audit
        </div>
      </div>
    ),
    size,
  );
}
