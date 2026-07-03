import { ImageResponse } from "next/og";

export const alt =
  "WITH SOERAI - Komunitas pemberdayaan perempuan muda Indonesia Timur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #f4f8de 0%, #fff7ed 50%, #f9dbe5 100%)",
          color: "#701732",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#e26a8a",
            borderRadius: "999px",
            display: "flex",
            height: 300,
            opacity: 0.2,
            position: "absolute",
            right: -60,
            top: -80,
            width: 300,
          }}
        />
        <div
          style={{
            background: "#abb039",
            borderRadius: "999px",
            bottom: -100,
            display: "flex",
            height: 340,
            left: -80,
            opacity: 0.22,
            position: "absolute",
            width: 340,
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
            padding: "50px 70px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#bf1b59",
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            WITH SOERAI
          </div>
          <div
            style={{
              color: "#576100",
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "4px",
              marginTop: 26,
              textTransform: "uppercase",
            }}
          >
            Woman Illuminating Through Harmony
          </div>
          <div
            style={{
              background: "#701732",
              display: "flex",
              height: 5,
              margin: "34px 0 28px",
              width: 150,
            }}
          />
          <div
            style={{
              color: "#701732",
              display: "flex",
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.35,
            }}
          >
            Komunitas pemberdayaan perempuan muda Indonesia Timur
          </div>
        </div>
      </div>
    ),
    size,
  );
}

