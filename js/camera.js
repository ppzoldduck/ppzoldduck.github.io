export function initCamera(videoElement, onFrame) {
  if (typeof Camera === "undefined") {
    throw new Error("MediaPipe Camera is not loaded.");
  }

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await onFrame();
    },
    width: 640,
    height: 480
  });

  camera.start();
  return camera;
}
