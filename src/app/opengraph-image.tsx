import { ImageResponse } from "next/og";
import { profile } from "@/content/records/profile";

export const alt = `${profile.name} — ${profile.roles.primary} and ${profile.roles.secondary}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#071015",
        color: "#f4f7f4",
        padding: "68px",
        fontFamily: "sans-serif",
        borderLeft: "12px solid #62d8f0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#62d8f0",
        }}
      >
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-4px" }}>
          {profile.roles.primary}
        </div>
        <div style={{ fontSize: 36, color: "#b0bec4" }}>
          {profile.roles.secondary}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          borderTop: "1px solid #47616a",
          paddingTop: 28,
        }}
      >
        <span>Reliable data platforms. Production software.</span>
        <span style={{ color: "#c1ee72" }}>Portfolio ↗</span>
      </div>
    </div>,
    size,
  );
}
