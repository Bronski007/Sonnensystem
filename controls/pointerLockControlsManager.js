import { PointerLockControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/PointerLockControls.js?module';

export function initPointerLockControls(camera, renderer) {
  const controls = new PointerLockControls(camera, renderer.domElement);
  
  document.body.addEventListener('click', () => {
    if (!controls.isLocked) controls.lock();
  });

  return controls;
}