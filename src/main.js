import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import GUI from 'lil-gui';
import ThreeMeshUI from 'three-mesh-ui'
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

  const controls = initPointerLockControls(camera, renderer);

  const dolly = new THREE.Group();
  dolly.position.set(0, 0, 75);
  dolly.add(controls.object);
  scene.add(dolly);

  const movementControls = createMovementControls();
  const clock = new THREE.Clock();

  // XR
  // show controller models
  const controllerModelFactory = new XRControllerModelFactory()

  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  const model1 = controllerModelFactory.createControllerModel(controllerGrip1);
  controllerGrip1.add(model1);
  dolly.add(controllerGrip1);

  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  const model2 = controllerModelFactory.createControllerModel(controllerGrip2);
  controllerGrip2.add(model2);
  dolly.add(controllerGrip2);

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
    this.userData.gamepad = event.data.gamepad;
    this.userData.handedness = event.data.handedness;
  });
  controller1.addEventListener('disconnected', function () {
    this.remove(this.children[0]);
    this.userData.gamepad = undefined;
    this.userData.handedness = undefined;
  });
  dolly.add(controller1);

  const controller2 = renderer.xr.getController(1);
  controller2.addEventListener("selectstart", onSelectStart);
  controller2.addEventListener('selectend', onSelectEnd);
  controller2.addEventListener('connected', function (event) {
    this.add(buildController(event.data));
    this.userData.gamepad = event.data.gamepad;
    this.userData.handedness = event.data.handedness; 
  });
  controller2.addEventListener('disconnected', function () {
    this.remove(this.children[0]);
    this.userData.gamepad = undefined;
    this.userData.handedness = undefined;
  });
  dolly.add(controller2);

  const raycaster1 = new THREE.Raycaster();
  const raycaster2 = new THREE.Raycaster();

  function buildController(data) {
    switch (data.targetRayMode) {
      case 'tracked-pointer':
        const segments = 20;
        const points = [];
        const colors = [];

        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          points.push(new THREE.Vector3(0, 0, -t)); 
          colors.push(0, 1, 1, 1 - t);
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const colorAttr = new Float32Array(points.length * 4);
        for (let i = 0; i < points.length; i++) {
          colorAttr[i*4 + 0] = 0;
          colorAttr[i*4 + 1] = 1;
          colorAttr[i*4 + 2] = 1;
          colorAttr[i*4 + 3] = 1 - i/segments;
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colorAttr, 4));

        const material = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true
        });

        const line = new THREE.Line(geometry, material);
        line.name = "laser";
        return line;
    }
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
  let rotationSpeed = 2.0; // for XR camera rotation

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
      const gamepad = controller.userData.gamepad;
      const handedness = controller.userData.handedness;

      if (!gamepad || handedness !== 'left') return;

      let x = gamepad.axes[2];
      let z = gamepad.axes[3];

      if (!x && !z) {
          x = gamepad.axes[0];
          z = gamepad.axes[1];
      }

      if (Math.abs(x) > 0.1 || Math.abs(z) > 0.1) {
          const move = new THREE.Vector3(x, 0, z);

          move.applyQuaternion(camera.quaternion);
          
          move.multiplyScalar(flyingSpeed * delta);

          dolly.position.add(move);
      }
  }

  function updateXRRotation(controller, delta) {
      const gamepad = controller.userData.gamepad;
      const handedness = controller.userData.handedness;

      if (!gamepad || handedness !== 'right') return;

      let x = gamepad.axes[2];
      let y = gamepad.axes[3];

      if (!x && !y && (gamepad.axes[0] || gamepad.axes[1])) {
          x = gamepad.axes[0];
          y = gamepad.axes[1];
      }

      if (Math.abs(x) > 0.1) {
          dolly.rotateY(-x * rotationSpeed * delta);
      }

      if (Math.abs(y) > 0.1) {
          dolly.rotateX(-y * rotationSpeed * delta);
      }
    
      dolly.updateMatrix();
  }

  function animate() {
    const delta = clock.getDelta();
    simulationTime += delta * timeScale;
    movementControls.update(controls, delta, flyingSpeed);

    // xr movement
    updateXRMovement(controller1, delta);
    updateXRMovement(controller2, delta);

    // xr rotation
    updateXRRotation(controller1, delta);
    updateXRRotation(controller2, delta);

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

      const laser = controller1.getObjectByName("laser");
      if (laser) {
        const distance = intersects1[0].distance;
        const positions = laser.geometry.attributes.position.array;
        for (let i = 0; i <= 20; i++) {
          positions[i*3 + 2] = - (i/20) * distance;
        }
        laser.geometry.attributes.position.needsUpdate = true;
      }

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

      const laser = controller2.getObjectByName("laser");
      if (laser) {
        const distance = intersects2[0].distance;
        const positions = laser.geometry.attributes.position.array;
        for (let i = 0; i <= 20; i++) {
          positions[i*3 + 2] = - (i/20) * distance;
        }
        laser.geometry.attributes.position.needsUpdate = true;
      }

    } else {
      intersectedObject = undefined;
    }

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();