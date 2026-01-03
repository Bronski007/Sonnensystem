import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import GUI from 'lil-gui';
import ThreeMeshUI from 'three-mesh-ui';
import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js';
import { initPointerLockControls } from './controls/pointerLockControlsManager.js';
import { createMovementControls } from './controls/movementManager.js';
import { solarSystemBuilder } from './systems/solarSystem.js'
import { TransitionManager } from './transitions/transitionManager.js';
import { setupController, showControllers, hideControllers } from './mr/controllers.js';
import { showThreeMeshUI, hideThreeMeshUI, updateXRMovement, updateXRInput, updateControllerLaser } from './mr/threeMeshUI.js';

// npm run dev
// npm run deploy

// default values
export let worldState = {
  flyingSpeed: 10, 
  timeScale: 10000 // 10000 times faster than real life
};

async function main() {
  //initialise scene
  const { scene, camera, renderer } = initScene();

  let xrmode = "";
  // XR buttons
  const arButton = ARButton.createButton(renderer);
  const vrButton = VRButton.createButton(renderer);
  
  arButton.addEventListener("pointerdown", function() {
    xrmode = "ar";
  });
  vrButton.addEventListener("pointerdown", function() {
    xrmode = "vr";
  });

  // listener for start of ar / vr mode
  renderer.xr.addEventListener("sessionstart", function() {
    if (xrmode === "ar") {
      hideStars();
      hideControllers(renderer, 0);
      hideControllers(renderer, 1);
      vrButton.style.display = 'none';
    }

    if (xrmode === "vr") {
      showStars();
      showControllers(renderer, 0);
      showControllers(renderer, 1);
      arButton.style.display = 'none';
    }

    hideGUI();
    showThreeMeshUI(raycastTargets, controller1, orbitLines, planetOutlines, showLunarEclipse, showSolarEclipse);
  })

  // listener for end of ar / vr mode
  renderer.xr.addEventListener("sessionend", function() {
    showStars();
    hideControllers(renderer, 0);
    hideControllers(renderer, 1);
    showGUI();
    hideThreeMeshUI(raycastTargets);
    vrButton.style.display = 'block';
    arButton.style.display = 'block';
  })
  
  document.body.appendChild(arButton)
  document.body.appendChild(vrButton)

  const controls = initPointerLockControls(camera, renderer);

  const dolly = new THREE.Group(); // container for camera, controllers etc.
  dolly.position.set(0, 0, 75);
  dolly.add(controls.object);
  scene.add(dolly);

  const movementControls = createMovementControls();
  const clock = new THREE.Clock();

  const controller1 = setupController(renderer, dolly, 0);
  const controller2 = setupController(renderer, dolly, 1);

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

  function showStars() {
    starField.visible = true;
  }

  function hideStars() {
    starField.visible = false;
  }


  // create planet meshes and orbits
  const { meshes } = await planetBuilder(0.00001);
  const { orbits, orbitParams } = await solarSystemBuilder(meshes, 0.0000001);
  scene.add(meshes.sun);
  scene.add(meshes.moon);

  let raycastTargets = Object.values(meshes);

  // pointlight source in the middle of the sun
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

  // collecting orbitLines and orbitAngles for later use
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

  // creating planetary outlines
  const planetOutlines = {};
  for (const [name, mesh] of Object.entries(meshes)) {
    const edgesGeometry = new THREE.EdgesGeometry(mesh.geometry);
    const outlineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const outline = new THREE.LineSegments(edgesGeometry, outlineMaterial);
    outline.scale.set(1.01, 1.01, 1.01);
    outline.visible = false;
    planetOutlines[name] = outline;
    mesh.add(outline);
  }

  // gui (non mr mode)
  const gui = new GUI();
  const params = {
    timeScale: worldState.timeScale,
    flyingSpeed: worldState.flyingSpeed,
    showOrbits: true,
    showLunarEclipse: false,
    showSolarEclipse: false,
    showPlanetaryOutlines: false,
    planetaryOutlinesScale: 1.01
  };
  gui.add(params, 'timeScale', 1, 100000000).step(10000).name('Time Scale').onChange((value) => {
    worldState.timeScale = value;
  });
  gui.add(params, 'flyingSpeed', 1, 100).step(1).name('Flying Speed').onChange((value) => {
    worldState.flyingSpeed = value;
  });
  gui.add(params, 'showOrbits').name('Show Orbits').onChange((value) => {
    orbitLines.forEach(line => { line.visible = value; });
  });
  gui.add(params, 'showPlanetaryOutlines').name('Show Planetary Outlines').onChange((value) => {
    Object.values(planetOutlines).forEach(outline => {outline.visible = value;});
  });
  gui.add(params, 'planetaryOutlinesScale', 1.01, 100).step(1).name('Planetary Outlines Scale').onChange((value) => {
    Object.values(planetOutlines).forEach(outline => {outline.scale.set(value, value, value);});
  });

  const lunarCtrl = gui.add(params, 'showLunarEclipse').name('Show Lunar Eclipse').listen();
  const solarCtrl = gui.add(params, 'showSolarEclipse').name('Show Solar Eclipse').listen();
  
  let savedTimeScale = worldState.timeScale;
  let simulationTime = 0; // stores the elapsed time to quickly jump to eclipses
  let transition = null;

  // listeners for Solar/Lunar eclipses
  lunarCtrl.onChange((value) => {
    showLunarEclipse(value);
  });

  solarCtrl.onChange((value) => {
    showSolarEclipse(value);
  });

  function showLunarEclipse(value) {
    if (value) {
      params.showSolarEclipse = false;

      // enabling planetary outlines for earth and moon for better visibility
      planetOutlines.earth.visible = true;
      planetOutlines.moon.visible = true;
      planetOutlines.earth.scale.set(5, 5, 5); // making the outlines bigger
      planetOutlines.moon.scale.set(5, 5, 5);
      planetOutlines.earth.material.color.set(0xff0000); // making the outlines red
      planetOutlines.moon.material.color.set(0xff0000);

      solarCtrl.updateDisplay();

      //start transition to simulationTime 1275000
      transition = new TransitionManager(
        simulationTime, //start
        0,  //end
        2.0, //time to travel
        (value) => simulationTime = value,
        () => {
          worldState.timeScale = 0; // "freezes" the solarsystem
          console.log("Lunar eclipse transition complete");
        }
      );
    } else {
      worldState.timeScale = savedTimeScale;

      // disabling planetary outlines
      planetOutlines.earth.visible = false;
      planetOutlines.moon.visible = false;
      planetOutlines.earth.scale.set(1.01, 1.01, 1.01); // back to default size
      planetOutlines.moon.scale.set(1.01, 1.01, 1.01);
      planetOutlines.earth.material.color.set(0xffffff); // back to white
      planetOutlines.moon.material.color.set(0xffffff);
    }
  }

  function showSolarEclipse(value) {
    if (value) {
      params.showLunarEclipse = false;

      // enabling planetary outlines for earth and moon for better visibility
      planetOutlines.earth.visible = true;
      planetOutlines.moon.visible = true;
      planetOutlines.earth.scale.set(5, 5, 5); // making the outlines bigger
      planetOutlines.moon.scale.set(5, 5, 5);
      planetOutlines.earth.material.color.set(0xff0000); // making the outlines red
      planetOutlines.moon.material.color.set(0xff0000);

      lunarCtrl.updateDisplay();

      //start transition to simulationTime 1275000
      transition = new TransitionManager(
        simulationTime, //start
        1275000,  //end
        2.0, //time to travel
        (value) => simulationTime = value,
        () => {
          worldState.timeScale = 0; // "freezes" the solarsystem
          console.log("Solar eclipse transition complete");
        }
      );
    } else {
      worldState.timeScale = savedTimeScale;

      // disabling planetary outlines
      planetOutlines.earth.visible = false;
      planetOutlines.moon.visible = false;
      planetOutlines.earth.scale.set(1.01, 1.01, 1.01); // back to default size
      planetOutlines.moon.scale.set(1.01, 1.01, 1.01);
      planetOutlines.earth.material.color.set(0xffffff); // back to white
      planetOutlines.moon.material.color.set(0xffffff);
    }
  }

  function hideGUI() {
    gui.hide()
  }

  function showGUI() {
    gui.show()
  }

  // moon orbit line
  const geometry = new THREE.BufferGeometry();
  const points = new Float32Array((256 + 1) * 3);
  geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const moonOrbitLine = new THREE.LineLoop(geometry, material);
  scene.add(moonOrbitLine);
  orbitLines.push(moonOrbitLine);

  function animate() {
    const delta = clock.getDelta();
    simulationTime += delta * worldState.timeScale;
    movementControls.update(controls, delta);
    ThreeMeshUI.update();

    // xr input
    updateXRInput(raycastTargets, controller1, controller2);

    // xr movement
    updateXRMovement(camera, dolly, controller1, delta);
    updateXRMovement(camera, dolly, controller2, delta);

    // xr raycasting
    updateControllerLaser(raycastTargets, controller1, delta, controller2);
    updateControllerLaser(raycastTargets, controller2, delta, controller2);

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
        // moon positioned relativly to earth
        const earthPos = meshes.earth.position;
        mesh.position.set(earthPos.x + x, earthPos.y, earthPos.z + z);

        // moon orbit line
        const segments = 256;
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

    // Transition Handling from Events
    if (transition?.isActive()) {
      transition.update(delta);
    } else {
      simulationTime += delta * worldState.timeScale;
    }

    // rotation of planets around their own axis
    meshes.sun.rotation.y += (2 * Math.PI / (25 * 24 * 3600)) * delta * worldState.timeScale;
    meshes.mercury.rotation.y += (2 * Math.PI / (58.6 * 24 * 3600)) * delta * worldState.timeScale;
    meshes.venus.rotation.y += (2 * Math.PI / (-243 * 24 * 3600)) * delta * worldState.timeScale;
    meshes.earth.rotation.y += (2 * Math.PI / (24 * 3600)) * delta * worldState.timeScale;
    meshes.moon.rotation.y += (2 * Math.PI / (27.3 * 24 * 3600)) * delta * worldState.timeScale;
    meshes.mars.rotation.y += (2 * Math.PI / (24.6 * 3600)) * delta * worldState.timeScale;
    meshes.jupiter.rotation.y += (2 * Math.PI / (9.9 * 3600)) * delta * worldState.timeScale;
    meshes.saturn.rotation.y += (2 * Math.PI / (10.7 * 3600)) * delta * worldState.timeScale;
    meshes.uranus.rotation.y += (2 * Math.PI / (-17.2 * 3600)) * delta * worldState.timeScale;
    meshes.neptune.rotation.y += (2 * Math.PI / (16.1 * 3600)) * delta * worldState.timeScale;
    meshes.pluto.rotation.y += (2 * Math.PI / (153.3 * 3600)) * delta * worldState.timeScale;

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();