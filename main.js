import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js';

async function main() {
  const { scene, camera, renderer } = initScene();

  const { sunMesh, earthMesh } = await planetBuilder();

  scene.add(sunMesh);
  scene.add(earthMesh);

  function animate() {
    sunMesh.rotation.y += 0.01;
    earthMesh.rotation.y += 0.02;
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();


// verknüft alle module (main - setup)