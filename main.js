import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { ARButton } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/webxr/ARButton.js";
import { VRButton } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/webxr/VRButton.js";
import { XRControllerModelFactory } from "./XR/XRControllerModelFactory.js";
import GUI from "https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm";
import { initScene } from './core/initScene.js';
import { planetBuilder } from './planets/planetBuilder.js';
import { initPointerLockControls } from './controls/pointerLockControlsManager.js';
import { createMovementControls } from './controls/movementManager.js';
import { solarSystemBuilder } from './systems/solarSystem.js'
import { TransitionManager } from './transitions/transitionManager.js';

// ToDo: add XR UI: https://github.com/felixmariotto/three-mesh-ui

async function main() {
  //initialise scene
  const { scene, camera, renderer } = initScene();

  // XR buttons
  document.body.appendChild(ARButton.createButton(renderer))
  document.body.appendChild(VRButton.createButton(renderer))

  const dolly = new THREE.Group();
  dolly.position.set(0, 0, 75);
  dolly.add(camera);
  scene.add(dolly);

  const controls = initPointerLockControls(camera, renderer);
  scene.add(controls.getObject());
  const movementControls = createMovementControls();
  const clock = new THREE.Clock();

  // XR
  // show controller models
  const controllerModelFactory = new XRControllerModelFactory()

  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  const model1 = controllerModelFactory.createControllerModel(controllerGrip1);
  controllerGrip1.add(model1);
  scene.add(controllerGrip1);

  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  const model2 = controllerModelFactory.createControllerModel(controllerGrip2);
  controllerGrip2.add(model2);
  scene.add(controllerGrip2);

  // handle controller inputs
  function onSelectStart() {
    // ToDo: Add code for when user presses their controller
  }

  function onSelectEnd() {
    // ToDo: Add code for when user releases the button on their controller
  }

  // get controller inputs
  const controller1 = renderer.xr.getController(0);
  controller1.addEventListener("selectstart", onSelectStart);
  controller1.addEventListener('selectend', onSelectEnd);
  controller1.addEventListener('connected', function (event) {
    this.add(buildController(event.data));
  } );
  controller1.addEventListener('disconnected', function () {
    this.remove(this.children[0]);
  } );
  dolly.add(controller1);

  const controller2 = renderer.xr.getController(1);
  controller2.addEventListener("selectstart", onSelectStart);
  controller2.addEventListener('selectend', onSelectEnd);
  controller2.addEventListener('connected', function (event) {
    this.add(buildController(event.data));
  } );
  controller2.addEventListener('disconnected', function () {
    this.remove(this.children[0]);
  } );
  dolly.add(controller2);

  const raycaster1 = new THREE.Raycaster();
  const raycaster2 = new THREE.Raycaster();

  function buildController(data) {
    // laser pointer line
    switch (data.targetRayMode) {
      case 'tracked-pointer':
        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -5], 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute([0, 1, 1, 0, 0.5, 1], 3));

        var material = new THREE.LineBasicMaterial({vertexColors: true, blending: THREE.AdditiveBlending, transparent: true});

        return new THREE.Line(geometry, material);

      case 'gaze':
        var geometry = new THREE.RingBufferGeometry(0.02, 0.04, 32).translate(0, 0, - 1);
        var material = new THREE.MeshBasicMaterial({ opacity: 0.5, transparent: true});
        return new THREE.Mesh(geometry, material);
    }
  }

  // ToDo: check if working correctly
  function handleThumbstick(controller) {
    if (!controller.gamepad) return { x: 0, y: 0 };

    const axes = controller.gamepad.axes;
    return { x: axes[0], y: axes[1] };
  }

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

  // create planet meshes and orbits
  const { meshes } = await planetBuilder(0.00001);
  const { orbits, orbitParams } = await solarSystemBuilder(meshes, 0.0000001);
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

  // default values
  let timeScale = 10000; // 10000 times faster than real life
  let flyingSpeed = 10;

  // gui
  const gui = new GUI();
  const params = {
    timeScale: timeScale,
    flyingSpeed: flyingSpeed,
    showOrbits: true,
    showLunarEclipse: false,
    showSolarEclipse: false,
    showPlanetaryOutlines: false,
    planetaryOutlinesScale: 1.01
  };
  gui.add(params, 'timeScale', 1, 100000000).step(10000).name('Time Scale').onChange((value) => {
    timeScale = value;
  });
  gui.add(params, 'flyingSpeed', 1, 100).step(1).name('Flying Speed').onChange((value) => {
    flyingSpeed = value;
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

  let simulationTime = 0; // stores the elapsed time to quickly jump to eclipses
  let savedTimeScale = timeScale;

  let transition = null;

  // listeners for Solar/Lunar eclipses
  lunarCtrl.onChange((value) => {
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
          timeScale = 0; // "freezes" the solarsystem
          console.log("Lunar eclipse transition complete");
        }
      );
    } else {
      timeScale = savedTimeScale;

      // disabling planetary outlines
      planetOutlines.earth.visible = false;
      planetOutlines.moon.visible = false;
      planetOutlines.earth.scale.set(1.01, 1.01, 1.01); // back to default size
      planetOutlines.moon.scale.set(1.01, 1.01, 1.01);
      planetOutlines.earth.material.color.set(0xffffff); // back to white
      planetOutlines.moon.material.color.set(0xffffff);
    }
  });

  solarCtrl.onChange((value) => {
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
          timeScale = 0; // "freezes" the solarsystem
          console.log("Solar eclipse transition complete");
        }
      );
    } else {
      timeScale = savedTimeScale;

      // disabling planetary outlines
      planetOutlines.earth.visible = false;
      planetOutlines.moon.visible = false;
      planetOutlines.earth.scale.set(1.01, 1.01, 1.01); // back to default size
      planetOutlines.moon.scale.set(1.01, 1.01, 1.01);
      planetOutlines.earth.material.color.set(0xffffff); // back to white
      planetOutlines.moon.material.color.set(0xffffff);
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

  let tempMatrix1 = new THREE.Matrix4();
  let tempMatrix2 = new THREE.Matrix4();

  const room = new THREE.Group();
  room.add(meshes.sun);
  room.add(meshes.mercury);
  room.add(meshes.venus);
  room.add(meshes.earth);
  room.add(meshes.moon);
  room.add(meshes.mars);
  room.add(meshes.jupiter);
  room.add(meshes.saturn);
  room.add(meshes.uranus);
  room.add(meshes.neptune);
  room.add(meshes.pluto);
  scene.add(room);

  let intersectedObject, intersectedPosition;

  function updateXRMovement(controller, delta) {
    const thumbstick = handleThumbstick(controller);

    if (thumbstick.x !== 0 || thumbstick.y !== 0) {
      const moveVector = new THREE.Vector3(-thumbstick.x, 0, -thumbstick.y);
      
      const cameraQuaternion = camera.quaternion.clone();
      const euler = new THREE.Euler().setFromQuaternion(cameraQuaternion, 'YXZ');
      const yRotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, euler.y, 0));
      moveVector.applyQuaternion(yRotation);

      moveVector.multiplyScalar(flyingSpeed * delta);

      room.position.add(moveVector);
    }
  }

  function animate() {
    const delta = clock.getDelta();
    simulationTime += delta * timeScale;
    movementControls.update(controls, delta, flyingSpeed);

    // xr movement
    updateXRMovement(controller1, delta);

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

    // Transition Handling from Events
    if (transition?.isActive()) {
      transition.update(delta);
    } else {
      simulationTime += delta * timeScale;
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

    // xr raycasting
    // controller 1
    tempMatrix1.identity().extractRotation(controller1.matrixWorld);
    raycaster1.ray.origin.setFromMatrixPosition(controller1.matrixWorld);
    raycaster1.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix1);

    var intersects1 = raycaster1.intersectObjects(room.children);

    if (intersects1.length > 0) {
      intersectedObject = intersects1[0].object;
      intersectedPosition = intersects1[0].point;

      // ToDo: do something to show that the intersectedObject is selected
      // intersectedObject.rotation.y += .1;

    } else {
      intersectedObject = undefined;
    }

    // controller 2
    tempMatrix2.identity().extractRotation(controller2.matrixWorld);
    raycaster2.ray.origin.setFromMatrixPosition(controller2.matrixWorld);
    raycaster2.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix2);

    var intersects2 = raycaster2.intersectObjects(room.children);

    if (intersects2.length > 0) {
      intersectedObject = intersects2[0].object;
      intersectedPosition = intersects2[0].point;

      // ToDo: do something to show that the intersectedObject is selected
      // intersectedObject.rotation.y += .1;

    } else {
      intersectedObject = undefined;
    }

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();