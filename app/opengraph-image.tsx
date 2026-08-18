import { ImageResponse } from "next/og";

/**
 * 사이트 전역 OG 이미지 (1200×630).
 * 디자인된 이미지가 준비되면 public/og/og-image.png로 교체하고
 * layout.tsx metadata.openGraph.images에서 참조하면 된다.
 */

// output: "export" 빌드에서 라우트를 정적으로 생성하기 위해 필요하다.
export const dynamic = "force-static";

export const alt = "ONEUL — Life ON, ONEUL";
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
          padding: "96px",
          background: "#fafaf7",
          color: "#141412",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 120, fontWeight: 800, letterSpacing: "-0.04em" }}>
          <span>Life&nbsp;</span>
          <span style={{ color: "#c44500" }}>ON</span>
          <span>,</span>
        </div>
        <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: "-0.04em" }}>
          ONEUL
        </div>
        <div style={{ marginTop: 48, fontSize: 36, color: "#6b6b64" }}>
          We build for today.
        </div>
      </div>
    ),
    size,
  );
}
