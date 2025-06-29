import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import GUI from "https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm";
import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js';
import { initPointerLockControls } from './controls/pointerLockControlsManager.js';
import { createMovementControls } from './controls/movementManager.js';
import { solarSystemBuilder } from './systems/solarSystem.js'

async function main() {
  const { scene, camera, renderer } = initScene();

  const controls = initPointerLockControls(camera, renderer);
  scene.add(controls.getObject());
  const movementControls = createMovementControls();
  const clock = new THREE.Clock();

  // star background
  const starCount = 50000;
  const positions = [];

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 10000;
    const y = (Math.random() - 0.5) * 10000;
    const z = (Math.random() - 0.5) * 10000;
    positions.push(x, y, z);
  }

  const starsGeometry = new THREE.BufferGeometry();
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
  const starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);

  const distanceMultiplier = 0.0000001;
  const { meshes } = await planetBuilder(0.00001);
  const { orbits, orbitParams } = await solarSystemBuilder(meshes, distanceMultiplier);
  scene.add(meshes.sun);
  scene.add(meshes.moon);
  
  // Pointlight source in the middle of the sun
  const sunLight = new THREE.PointLight(0xffffff, 2, 0, 0);
  sunLight.position.copy(meshes.sun.position);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1048;
  sunLight.shadow.mapSize.height = 1048;
  sunLight.shadow.camera.near = 1;
  sunLight.shadow.camera.far = 50;
  scene.add(sunLight); 

  // earth and moon cast and receive shadows
  meshes.earth.castShadow = true;
  meshes.earth.receiveShadow = true;
  meshes.moon.castShadow = true;
  meshes.moon.receiveShadow = true;

  const orbitLines = [];
  for (const [name, orbit] of Object.entries(orbits)) {
    if (name != "moon") {
      scene.add(orbit);
      orbitLines.push(orbit.children[0]);
    }
  }

  const orbitAngles = {};
  for (const name in orbitParams) {
    orbitAngles[name] = 0;
  }

  let timeScale = 10000;
  let flyingSpeed = 10;

  // gui
  const gui = new GUI();
  const params = {
    timeScale: timeScale,
    flyingSpeed: flyingSpeed,
    showOrbits: true,
    showLunarEclipse: false,
    showSolarEclipse: false
  };
  gui.add(params, 'timeScale', 1, 100000000).step(10000).name('Time Scale').onChange((value) => {
    timeScale = value;
  });
  gui.add(params, 'flyingSpeed', 1, 100).step(1).name('Flying Speed').onChange((value) => {
    flyingSpeed = value;
  });
  gui.add(params, 'showOrbits').name('Show Orbits').onChange((value) => {
    orbitLines.forEach(line => {line.visible = value;});
  });
  
  const lunarCtrl = gui.add(params, 'showLunarEclipse').name('Show Lunar Eclipse').listen();
  const solarCtrl = gui.add(params, 'showSolarEclipse').name('Show Solar Eclipse').listen();

  let simulationTime = 0;
  let savedTimeScale = timeScale;

  // method to ensure that only lunar or solar eclipse is active
  lunarCtrl.onChange((value) => {
    if (value) {
      params.showSolarEclipse = false;

      // logic:
      if (timeScale !== 0) {
        savedTimeScale = timeScale;
      }
      timeScale = 0;
      simulationTime = 0;
      
      // update GUI
      solarCtrl.updateDisplay();
    }

    if (!value) {
      timeScale = savedTimeScale;
    }
  });

  solarCtrl.onChange((value) => {
    if (value) {
      params.showLunarEclipse = false;

      // logic:
      if (timeScale !== 0) {
        savedTimeScale = timeScale;
      }
      timeScale = 0;
      simulationTime = 1275000;

      lunarCtrl.updateDisplay();
    }

    if (!value) {
      timeScale = savedTimeScale;
    }
  });

  // moon orbit line
  const geometry = new THREE.BufferGeometry();
  const points = new Float32Array((128 + 1) * 3);
  geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const moonOrbitLine = new THREE.LineLoop(geometry, material);
  scene.add(moonOrbitLine);
  orbitLines.push(moonOrbitLine);

  function animate() {
    const delta = clock.getDelta();
    simulationTime += delta * timeScale;
    movementControls.update(controls, delta, flyingSpeed);

    // rotation of planets around the sun
    for (const [name, params] of Object.entries(orbitParams)) {
      const { distance, eccentricity, sideralOrbit, mesh } = params;
      const angularSpeed = (2 * Math.PI) / (sideralOrbit * 24 * 3600);
      orbitAngles[name] = -angularSpeed * simulationTime;
      const semiMinorAxis = distance * Math.sqrt(1 - Math.pow(eccentricity, 2));
      const focalDistance = Math.sqrt(distance * distance - semiMinorAxis * semiMinorAxis);
      const x = distance * Math.cos(orbitAngles[name]) - focalDistance;
      const z = semiMinorAxis * Math.sin(orbitAngles[name]);
      if (name === "moon") {
        const earthPos = meshes.earth.position;
        mesh.position.set(earthPos.x + x, earthPos.y, earthPos.z + z);

        // moon orbit line
        const segments = 128;
        const positions = moonOrbitLine.geometry.attributes.position.array;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * 2 * Math.PI;
          const px = distance * Math.cos(angle) - focalDistance;
          const pz = semiMinorAxis * Math.sin(angle);
          const idx = i * 3;
          positions[idx] = px;
          positions[idx + 1] = 0;
          positions[idx + 2] = pz;
        }
        moonOrbitLine.geometry.attributes.position.needsUpdate = true;
        moonOrbitLine.position.copy(earthPos);
      } else {
        mesh.position.set(x, 0, z);
      }
    }

    // rotation of planets around their own axis
    meshes.sun.rotation.y += (2 * Math.PI / (25 * 24 * 3600)) * delta * timeScale;
    meshes.mercury.rotation.y += (2 * Math.PI / (58.6 * 24 * 3600)) * delta * timeScale;
    meshes.venus.rotation.y += (2 * Math.PI / (-243 * 24 * 3600)) * delta * timeScale;
    meshes.earth.rotation.y += (2 * Math.PI / (24 * 3600)) * delta * timeScale;
    meshes.moon.rotation.y += (2 * Math.PI / (27.3 * 24 * 3600)) * delta * timeScale;
    meshes.mars.rotation.y += (2 * Math.PI / (24.6 * 3600)) * delta * timeScale;
    meshes.jupiter.rotation.y += (2 * Math.PI / (9.9 * 3600)) * delta * timeScale;
    meshes.saturn.rotation.y += (2 * Math.PI / (10.7 * 3600)) * delta * timeScale;
    meshes.uranus.rotation.y += (2 * Math.PI / (-17.2 * 3600)) * delta * timeScale;
    meshes.neptune.rotation.y += (2 * Math.PI / (16.1 * 3600)) * delta * timeScale;
    meshes.pluto.rotation.y += (2 * Math.PI / (153.3 * 3600)) * delta * timeScale;

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();