import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Brahim Bouargane - Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(198, 93, 59, 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(198, 93, 59, 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontSize: 120,
                fontWeight: 700,
                color: "#1A1A18",
                fontFamily: "Georgia, serif",
              }}
            >
              B
            </span>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "#C65D3B",
                marginLeft: 4,
                marginBottom: 20,
              }}
            />
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#1A1A18",
              margin: 0,
              marginBottom: 16,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Brahim Bouargane
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 32,
              color: "#C65D3B",
              margin: 0,
              marginBottom: 24,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Fullstack Developer
          </p>

          {/* Location */}
          <p
            style={{
              fontSize: 24,
              color: "#5A5A55",
              margin: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Casablanca, Morocco
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#C65D3B",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
