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

  const {sunMesh, orbits, meshes} = await planetBuilder(0.00001, 0.0000001);

  scene.add(sunMesh);

  // Pointlight source in the middle of the sun (mimics it light)
  const sunLight = new THREE.PointLight(0xffffff, 2, 0, 0);
  sunLight.position.copy(sunMesh.position);
  scene.add(sunLight); 

  for (const [name, orbit] of Object.entries(orbits)) {
    if (name !== "moon") scene.add(orbit);
  }

  function animate() {
    const delta = clock.getDelta();
    movementControls.update(controls, delta);

    orbits.mercury.rotation.y += 0.00415;
    orbits.venus.rotation.y   += 0.00162;
    orbits.earth.rotation.y   += 0.00100;
    orbits.moon.rotation.y    += 0.013;
    orbits.mars.rotation.y    += 0.00053;
    orbits.jupiter.rotation.y += 0.000084;
    orbits.saturn.rotation.y  += 0.000034;
    orbits.uranus.rotation.y  += 0.000012;
    orbits.neptune.rotation.y += 0.000006;
    orbits.pluto.rotation.y   += 0.000004;

    meshes.sun.rotation.y     += 0.00039;
    meshes.mercury.rotation.y += 0.000017;
    meshes.venus.rotation.y   += -0.000004;
    meshes.earth.rotation.y   += 0.01;
    meshes.moon.rotation.y    += 0.00037;
    meshes.mars.rotation.y    += 0.0097;
    meshes.jupiter.rotation.y += 0.0244;
    meshes.saturn.rotation.y  += 0.0227;
    meshes.uranus.rotation.y  += -0.0138;
    meshes.neptune.rotation.y += 0.0149;
    meshes.pluto.rotation.y   += 0.00156;

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();