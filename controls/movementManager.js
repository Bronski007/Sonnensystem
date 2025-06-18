import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

export function createMovementControls() {
  const move = { forward: false, backward: false, left: false, right: false, up: false, down: false };
  const velocity = new THREE.Vector3();

  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW': move.forward = true; break;
      case 'KeyS': move.backward = true; break;
      case 'KeyA': move.left = true; break;
      case 'KeyD': move.right = true; break;
      case 'Space': move.up = true; break;
      case 'ShiftLeft': move.down = true; break;
    }
  });

  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'KeyW': move.forward = false; break;
      case 'KeyS': move.backward = false; break;
      case 'KeyA': move.left = false; break;
      case 'KeyD': move.right = false; break;
      case 'Space': move.up = false; break;
      case 'ShiftLeft': move.down = false; break;
    }
  });

  function update(controls, delta, speed = 10) {
    velocity.set(0, 0, 0);
    if (move.forward) velocity.z += speed * delta;
    if (move.backward) velocity.z -= speed * delta;
    if (move.left) velocity.x -= speed * delta;
    if (move.right) velocity.x += speed * delta;

    controls.moveRight(velocity.x);
    controls.moveForward(velocity.z);

    if (move.up) controls.getObject().position.y += speed * delta;
    if (move.down) controls.getObject().position.y -= speed * delta;
  }

  return { update };
}