import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Codefynix — IT solutions in Kochi, Kerala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const path = join(process.cwd(), "public", "codefynix-mark.png");
  const png = await readFile(path);
  const src = png.toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 48,
          background: "linear-gradient(155deg,#0d0d0d 0%,#141a10 52%,#0d0d0d 100%)",
          padding: 72,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og Satori */}
        <img
          alt=""
          width={220}
          height={220}
          src={`data:image/png;base64,${src}`}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: "#f5f5f5",
              letterSpacing: -2,
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1,
            }}
          >
            Code<span style={{ color: "#7DD63A" }}>fynix</span>
          </span>
          <p
            style={{
              marginTop: 28,
              fontSize: 34,
              fontWeight: 650,
              color: "#bceb7a",
              maxWidth: 760,
              lineHeight: 1.3,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            IT Company in Kochi — websites, web apps, CRM & automation
          </p>
          <p
            style={{
              marginTop: 20,
              fontSize: 26,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            www.codefynix.com
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
