import { PointerLockControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/PointerLockControls.js?module';


/*
 * When the user clicks anywhere on the page, the pointer is locked
 * (hidden and captured), enabling mouse movement to control the camera.
*/

export function initPointerLockControls(camera, renderer) {
  const controls = new PointerLockControls(camera, renderer.domElement);

  document.body.addEventListener('click', () => {
    if (!controls.isLocked) controls.lock();
  });

  return controls;
}