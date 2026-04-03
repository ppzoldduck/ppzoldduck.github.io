import { CONFIG } from "./config.js";

export class DrawingBoard {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.drawing = false;
    this.color = CONFIG.DEFAULT_COLOR;
  }

  setColor(color) {
    this.color = color;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  start() {
    this.drawing = true;
  }

  stop() {
    this.drawing = false;
    this.ctx.beginPath();
  }

  draw(x, y) {
    if (!this.drawing) return;

    this.ctx.lineWidth = CONFIG.LINE_WIDTH;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = this.color;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
