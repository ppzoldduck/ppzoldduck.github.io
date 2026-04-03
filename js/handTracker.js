export function createHandTracker(onResults) {
  if (typeof Hands === "undefined") {
    throw new Error("MediaPipe Hands is not loaded.");
  }

  const hands = new Hands({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
  });

  hands.setOptions({
    maxNumHands: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7
  });

  hands.onResults(onResults);

  return hands;
}
