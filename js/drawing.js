import { CONFIG } from "./config.js";

export class DrawingBoard {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.drawing = false;
    this.hasActivePathPoint = false;
    this.color = CONFIG.DEFAULT_COLOR;
  }

  setColor(color) {
    this.color = color;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  start() {
    if (!this.drawing) {
      this.ctx.beginPath();
      this.hasActivePathPoint = false;
    }
    this.drawing = true;
  }

  stop() {
    this.drawing = false;
    this.hasActivePathPoint = false;
    this.ctx.beginPath();
  }

  draw(x, y) {
    if (!this.drawing) return;

    this.ctx.lineWidth = CONFIG.LINE_WIDTH;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = this.color;

    if (!this.hasActivePathPoint) {
      this.ctx.moveTo(x, y);
      this.hasActivePathPoint = true;
      return;
    }

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
