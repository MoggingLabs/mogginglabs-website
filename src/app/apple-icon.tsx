import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Same mark as icon.svg, full-bleed for iOS (which masks its own corners). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16130e",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path
            d="M22 76 V27 L50 63 L78 27 V76"
            fill="none"
            stroke="#faf7f1"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="33" r="7.5" fill="#e8501a" />
        </svg>
      </div>
    ),
    size,
  );
}
