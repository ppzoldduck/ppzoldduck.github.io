import { initCamera } from "./camera.js";
import { createHandTracker } from "./handTracker.js";
import { detectPinch } from "./gesture.js";
import { DrawingBoard } from "./drawing.js";
import { initUI } from "./ui.js";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

const board = new DrawingBoard(canvas);
initUI(board);

const hands = createHandTracker((results) => {
  if (results.multiHandLandmarks.length === 0) {
    board.stop();
    return;
  }

  const landmarks = results.multiHandLandmarks[0];
  const indexFinger = landmarks[8];

  const x = indexFinger.x * canvas.width;
  const y = indexFinger.y * canvas.height;

  const isPinching = detectPinch(landmarks);

  if (isPinching) {
    board.start();
    board.draw(x, y);
  } else {
    board.stop();
  }
});

initCamera(video, async () => {
  await hands.send({ image: video });
});
