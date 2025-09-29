// app/og-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };

export default async function OgImage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ");
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: "white",
          background: "linear-gradient(135deg,#1a202c,#2d3748)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {title}
      </div>
    ),
    size
  );
}
