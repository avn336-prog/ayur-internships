/**
 * Generates the brand's raster assets (favicon icons + social OG image) with
 * no external image libraries. Run: bun scripts/generate-assets.ts
 *
 * Draws the AyurSetu mark — a deep-green rounded tile with a cream leaf —
 * using the same visual language as public/logo.svg, plus a pixel-font
 * wordmark for the Open Graph image.
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

/* ------------------------------------------------------------------ */
/* Minimal PNG encoder                                                 */
/* ------------------------------------------------------------------ */

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (const byte of bytes) {
    c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Uint8Array): Buffer {
  const typeBytes = Buffer.from(type, "ascii");
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])));
  return Buffer.concat([length, typeBytes, data, crc]);
}

function encodePng(width: number, height: number, rgba: Uint8Array): Buffer {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const stride = width * 4 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0; // filter: none
    Buffer.from(rgba.buffer, rgba.byteOffset + y * width * 4, width * 4).copy(
      raw,
      y * stride + 1,
    );
  }
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ------------------------------------------------------------------ */
/* Canvas helpers                                                      */
/* ------------------------------------------------------------------ */

type RGB = [number, number, number];

class Canvas {
  readonly width: number;
  readonly height: number;
  private data: Uint8Array;

  constructor(width: number, height: number) {
    this.width = Math.round(width);
    this.height = Math.round(height);
    this.data = new Uint8Array(this.width * this.height * 4);
  }

  png(): Uint8Array {
    return this.data;
  }

  /** Source-over composite of a color with optional alpha. */
  setPixel(x: number, y: number, color: RGB, alpha = 1) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) return;
    const i = (y * this.width + x) * 4;
    const a = Math.max(0, Math.min(1, alpha));
    if (a <= 0) return;
    const dstA = this.data[i + 3] / 255;
    const outA = a + dstA * (1 - a);
    if (outA <= 0) return;
    const srcW = a / outA;
    const dstW = (dstA * (1 - a)) / outA;
    for (let c = 0; c < 3; c++) {
      this.data[i + c] = Math.round(color[c] * srcW + this.data[i + c] * dstW);
    }
    this.data[i + 3] = Math.round(outA * 255);
  }

  gradient(top: RGB, bottom: RGB) {
    for (let y = 0; y < this.height; y++) {
      const t = this.height === 1 ? 0 : y / (this.height - 1);
      const color: RGB = [
        top[0] + (bottom[0] - top[0]) * t,
        top[1] + (bottom[1] - top[1]) * t,
        top[2] + (bottom[2] - top[2]) * t,
      ];
      for (let x = 0; x < this.width; x++) this.setPixel(x, y, color);
    }
  }

  fillRect(x0: number, y0: number, x1: number, y1: number, color: RGB, alpha = 1) {
    for (let y = Math.round(y0); y <= Math.round(y1); y++) {
      for (let x = Math.round(x0); x <= Math.round(x1); x++) {
        this.setPixel(x, y, color, alpha);
      }
    }
  }

  roundRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    radius: number,
    color: RGB,
    alpha = 1,
  ) {
    const r = Math.max(0, Math.min(radius, (x1 - x0) / 2, (y1 - y0) / 2));
    const cx0 = x0 + r;
    const cy0 = y0 + r;
    const cx1 = x1 - r;
    const cy1 = y1 - r;
    for (let y = Math.floor(y0); y <= Math.ceil(y1); y++) {
      for (let x = Math.floor(x0); x <= Math.ceil(x1); x++) {
        const dx = Math.max(cx0 - x, 0, x - cx1);
        const dy = Math.max(cy0 - y, 0, y - cy1);
        if (dx * dx + dy * dy <= r * r + 0.5) this.setPixel(x, y, color, alpha);
      }
    }
  }

  circle(cx: number, cy: number, radius: number, color: RGB, alpha = 1) {
    const rr = radius * radius;
    for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y++) {
      for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x++) {
        const dx = x - cx;
        const dy = y - cy;
        if (dx * dx + dy * dy <= rr) this.setPixel(x, y, color, alpha);
      }
    }
  }

  /**
   * Symmetric leaf, pointed at both ends, widest ~35% from the top, with an
   * optional center midrib in `ribColor` (pass the surrounding background
   * color to carve the vein out).
   */
  leaf(
    cx: number,
    top: number,
    bottom: number,
    maxHalfWidth: number,
    color: RGB,
    ribColor?: RGB,
  ) {
    const height = bottom - top;
    for (let y = Math.floor(top); y <= Math.ceil(bottom); y++) {
      const t = (y - top) / height;
      const halfWidth = maxHalfWidth * Math.pow(4 * t * (1 - t), 0.7);
      for (let x = Math.floor(cx - halfWidth); x <= Math.ceil(cx + halfWidth); x++) {
        this.setPixel(x, y, color);
      }
    }
    if (ribColor && height > 0) {
      const ribTop = top + height * 0.38;
      for (let y = Math.floor(ribTop); y <= Math.ceil(bottom); y++) {
        const t = (y - ribTop) / (bottom - ribTop);
        const halfW = 0.5 + t * maxHalfWidth * 0.08;
        for (let x = Math.floor(cx - halfW); x <= Math.ceil(cx + halfW); x++) {
          this.setPixel(x, y, ribColor);
        }
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/* 5x7 pixel font                                                      */
/* ------------------------------------------------------------------ */

const FONT: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01110"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  I: ["01110", "00100", "00100", "00100", "00100", "00100", "01110"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  W: ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
  ".": ["00000", "00000", "00000", "00000", "00000", "01110", "01110"],
  "•": ["00000", "00000", "01110", "01110", "01110", "00000", "00000"],
};

function textWidth(text: string, scale: number): number {
  return text.length * 6 * scale - scale;
}

function drawText(
  canvas: Canvas,
  text: string,
  centerX: number,
  topY: number,
  scale: number,
  color: RGB,
) {
  let cursorX = Math.round(centerX - textWidth(text, scale) / 2);
  for (const char of text.toUpperCase()) {
    const glyph = FONT[char] ?? FONT["•"];
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (glyph[row][col] === "1") {
          canvas.fillRect(
            cursorX + col * scale,
            topY + row * scale,
            cursorX + col * scale + scale - 1,
            topY + row * scale + scale - 1,
            color,
          );
        }
      }
    }
    cursorX += 6 * scale;
  }
}

/* ------------------------------------------------------------------ */
/* Brand palette & shapes                                              */
/* ------------------------------------------------------------------ */

const CREAM_TOP: RGB = [250, 245, 232];
const CREAM_BOTTOM: RGB = [222, 235, 219];
const TILE_DARK: RGB = [28, 52, 38];
const TILE_LIGHT: RGB = [46, 86, 60];
const LEAF_CREAM: RGB = [252, 248, 235];
const INK: RGB = [28, 56, 40];
const INK_SOFT: RGB = [72, 97, 79];
const SAFFRON: RGB = [219, 160, 62];
const MOSS: RGB = [160, 196, 168];
const TERRA: RGB = [184, 98, 58];

/** Deep-green rounded tile with the cream leaf mark. */
function drawTile(canvas: Canvas, cx: number, cy: number, size: number) {
  const half = size / 2;
  canvas.roundRect(cx - half, cy - half, cx + half, cy + half, size * 0.24, TILE_DARK);
  // soft lighter sheen across the upper half
  canvas.roundRect(
    cx - half,
    cy - half,
    cx + half,
    cy - half + size * 0.52,
    size * 0.24,
    TILE_LIGHT,
    0.5,
  );
  const leafH = size * 0.5;
  canvas.leaf(
    cx,
    cy - leafH / 2,
    cy + leafH / 2,
    size * 0.155,
    LEAF_CREAM,
    TILE_DARK,
  );
}

/* ------------------------------------------------------------------ */
/* Outputs                                                             */
/* ------------------------------------------------------------------ */

const OUT_DIR = new URL("../public/", import.meta.url);

function save(name: string, buffer: Buffer) {
  const path = new URL(name, OUT_DIR).pathname;
  writeFileSync(path, buffer);
  console.log(`✔ wrote public/${name} (${buffer.length} bytes)`);
}

function buildIcon(size: number): Buffer {
  const canvas = new Canvas(size, size);
  canvas.gradient(TILE_LIGHT, TILE_DARK);
  // full-bleed tile with rounded corners baked in (no transparency)
  canvas.roundRect(0, 0, size - 1, size - 1, size * 0.2, TILE_DARK);
  canvas.roundRect(0, 0, size - 1, size * 0.5, size * 0.2, TILE_LIGHT, 0.5);
  const leafH = size * 0.52;
  canvas.leaf(size / 2, size / 2 - leafH / 2, size / 2 + leafH / 2, size * 0.16, LEAF_CREAM, TILE_DARK);
  return encodePng(size, size, canvas.png());
}

function buildOgImage(): Buffer {
  const W = 1200;
  const H = 630;
  const canvas = new Canvas(W, H);
  canvas.gradient(CREAM_TOP, CREAM_BOTTOM);

  // decorative soft blobs
  canvas.circle(1110, 40, 250, SAFFRON, 0.14);
  canvas.circle(90, 640, 300, MOSS, 0.35);
  canvas.circle(640, 660, 220, LEAF_CREAM, 0.5);
  canvas.circle(1180, 560, 190, TERRA, 0.08);

  // mark + wordmark
  drawTile(canvas, 600, 185, 205);
  drawText(canvas, "AYURSETU", 600, 315, 19, INK);
  canvas.roundRect(556, 468, 644, 476, 4, SAFFRON, 0.95);
  drawText(canvas, "FIND YOUR AYURVEDIC INTERNSHIP", 600, 505, 4, INK_SOFT);

  // footer strip
  drawText(canvas, "WWW.AYURSETU.IN", 70 + textWidth("WWW.AYURSETU.IN", 3) / 2, 565, 3, INK_SOFT);
  drawTile(canvas, 1138, 587, 52);

  return encodePng(W, H, canvas.png());
}

mkdirSync(OUT_DIR, { recursive: true });

const iconSizes: Array<[string, number]> = [
  ["icon-32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];
for (const [name, size] of iconSizes) {
  save(name, buildIcon(size));
}
save("og-image.png", buildOgImage());
console.log("✔ Done.");
