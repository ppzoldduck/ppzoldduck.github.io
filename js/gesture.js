import { CONFIG } from "./config.js";

export function detectPinch(landmarks) {
  const index = landmarks[8];
  const thumb = landmarks[4];

  const dx = index.x - thumb.x;
  const dy = index.y - thumb.y;

  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance < CONFIG.DRAW_THRESHOLD;
}
