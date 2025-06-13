import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js';
import { initPointerLockControls } from './controls/pointerLockControlsManager.js';
import { createMovementControls } from './controls/movementManager.js';

async function main() {
  const { scene, camera, renderer } = initScene();

  const controls = initPointerLockControls(camera, renderer);
  scene.add(controls.getObject());
  const movementControls = createMovementControls();
  const clock = new THREE.Clock();

  const {sunMesh, earthMesh, moonMesh, plutoMesh, venusMesh, jupiterMesh, neptuneMesh, saturnMesh, mercuryMesh, uranusMesh, marsMesh} = await planetBuilder(0.0001, 0.0000001);

  scene.add(sunMesh);
  scene.add(earthMesh);
  scene.add(moonMesh);
  scene.add(plutoMesh);
  scene.add(venusMesh);
  scene.add(jupiterMesh);
  scene.add(neptuneMesh);
  scene.add(saturnMesh);
  scene.add(mercuryMesh);
  scene.add(uranusMesh);
  scene.add(marsMesh);


  function animate() {
    const delta = clock.getDelta();
    movementControls.update(controls, delta);

    sunMesh.rotation.y += 0.01;
    earthMesh.rotation.y += 0.01;
    moonMesh.rotation.y += 0.01;
    plutoMesh.rotation.y += 0.01;
    venusMesh.rotation.y += 0.01;
    jupiterMesh.rotation.y += 0.01;
    neptuneMesh.rotation.y += 0.01;
    saturnMesh.rotation.y += 0.01;
    mercuryMesh.rotation.y += 0.01;
    uranusMesh.rotation.y += 0.01;
    marsMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();

// verknüft alle module (main - setup)