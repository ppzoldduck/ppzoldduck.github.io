export function initCamera(videoElement, onFrame) {
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
