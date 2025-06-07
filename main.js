import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js'

const { scene, camera, renderer } = initScene();
const { sun, earth } = planetBuilder();

scene.add(sun);
scene.add(earth);

camera.position.z = 5;

function animate() {
  sun.rotation.y += 0.01;
  earth.rotation.y += 0.02;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// verknüft alle module (main - setup)