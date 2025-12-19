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

// npm run dev
// npm run deploy

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

  renderer.xr.addEventListener("sessionstart", function() {
    if (xrmode === "ar") {
      hideStars();
      hideControllers(0);
      hideControllers(1);
      vrButton.style.display = 'none';
    }

    if (xrmode === "vr") {
      showStars();
      showControllers(0);
      showControllers(1);
      arButton.style.display = 'none';
    }

    hideGUI();
    showThreeMeshUI();
  })

  renderer.xr.addEventListener("sessionend", function() {
    showStars();
    hideControllers(0);
    hideControllers(1);
    showGUI();
    hideThreeMeshUI();
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

  // ThreeMeshUI
  let container = null;
  let uiVisible = false;
  const uiOffset = new THREE.Vector3(0, 0.15, -0.25);

  function showThreeMeshUI() {
    if (container === null) {

      container = new ThreeMeshUI.Block({
        padding: 0.2,
        borderRadius: 0.11,
        fontSize: 0.07,
        fontFamily: 'saira.json',
        fontTexture: 'saira.png',
        justifyContent: 'center',
        contentDirection: 'row-reverse' // orient buttons horizontally
      });
  
      container.position.set(0, 0, 0);
      container.rotation.x = -0.55;
  
      // buttons
      const buttonOptions = {
        width: 0.4,
        height: 0.15,
        justifyContent: 'center',
        offset: 0.05,
        margin: 0.02,
        borderRadius: 0.075
      }
  
      const hoveredStateAttributes = {
        state: 'hovered',
        attributes: {
          offset: 0.035,
          backgroundColor: new THREE.Color(0x999999),
          backgroundOpacity: 1,
          fontColor: new THREE.Color(0xffffff)
        },
      };
  
      const idleStateAttributes = {
        state: 'idle',
        attributes: {
          offset: 0.035,
          backgroundColor: new THREE.Color(0x666666),
          backgroundOpacity: 0.3,
          fontColor: new THREE.Color(0xffffff)
        },
      };
  
      const buttonNext = new ThreeMeshUI.Block(buttonOptions);
      const buttonPrevious = new ThreeMeshUI.Block(buttonOptions);
  
      buttonNext.add(new ThreeMeshUI.Text({content:"next"}))
      buttonPrevious.add(new ThreeMeshUI.Text({content:"previous"}))
  
      const selectedAttributes = {
        offset: 0.02,
        backgroundColor: new THREE.Color(0x777777),
        fontColor: new THREE.Color(0x222222)
      };
  
      buttonNext.setupState( {
        state: 'selected',
        attributes: selectedAttributes,
        onSet: () => {
          console.log("Hallo"); // ToDo (port Gui to ThreeMeshUI)
        }
      } );
      buttonNext.setupState(hoveredStateAttributes);
      buttonNext.setupState(idleStateAttributes);
  
      buttonPrevious.setupState( {
        state: 'selected',
        attributes: selectedAttributes,
        onSet: () => {
          console.log("Welt!"); // ToDo
        }
      } );
      buttonPrevious.setupState(hoveredStateAttributes);
      buttonPrevious.setupState(idleStateAttributes);
  
      const hitboxNext = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.02), new THREE.MeshBasicMaterial({visible: false}));
      hitboxNext.userData = {type: "ui", ui: buttonNext};
      buttonNext.add(hitboxNext);
  
      const hitboxPrevious = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.02), new THREE.MeshBasicMaterial({visible: false}));
      hitboxPrevious.userData = {type: "ui", ui: buttonPrevious};
      buttonPrevious.add(hitboxPrevious);
  
      raycastTargets.push(hitboxNext, hitboxPrevious)
      container.add(buttonNext, buttonPrevious);
      scene.add(container);
      uiVisible = true;
    } else {
      container.visible = true;
      uiVisible = true;
    }
  }

  function hideThreeMeshUI() {
    if (container != null) {
      container.visible = false;
      uiVisible = false;
    }
  }

  let isSelected = false;
  let hoveredUI = null;
  // handle controller inputs
  function onSelectStart() {
    isSelected = true;
  }

  function onSelectEnd() {
    if (hoveredUI) {
      hoveredUI.setState("selected");
      hoveredUI = null;
    }
    isSelected = false;
  }

  // add laser to controllers
  function buildController(data, segments = 128) {
    if (data.targetRayMode == 'tracked-pointer') {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array((segments + 1) * 3);
      const colors = new Float32Array((segments + 1) * 4);

      for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          positions[i*3 + 0] = 0;
          positions[i*3 + 1] = 0;
          positions[i*3 + 2] = -t;

          // cyan laser
          colors[i*4 + 0] = 0; // R
          colors[i*4 + 1] = 1; // G
          colors[i*4 + 2] = 1; // B
          colors[i*4 + 3] = 1 - t; // alpha (laser fading out)
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

      const material = new THREE.LineBasicMaterial({vertexColors: true, transparent: true});
      const line = new THREE.Line(geometry, material);
      line.name = "laser";
      line.position.set(0, 0, -0.049);
      return line;
    }
  }

  // controller set up
  function setupController(controllerIndex) {
    // show controller models in VR
    const controllerGrip = renderer.xr.getControllerGrip(controllerIndex);
    const controllerModelFactory = new XRControllerModelFactory();
    const model = controllerModelFactory.createControllerModel(controllerGrip);
    controllerGrip.add(model);
    dolly.add(controllerGrip);

    // handle input
    const controller = renderer.xr.getController(controllerIndex);
    controller.addEventListener("selectstart", onSelectStart);
    controller.addEventListener('selectend', onSelectEnd);
    controller.addEventListener('connected', function (event) {
      this.add(buildController(event.data));
      this.userData.gamepad = event.data.gamepad;
      this.userData.handedness = event.data.handedness;
    });
    controller.addEventListener('disconnected', function () {
      this.remove(this.children[0]);
      this.userData.gamepad = undefined;
      this.userData.handedness = undefined;
    });
    dolly.add(controller);
    return controller;
  }

  function showControllers(controllerIndex) {
    renderer.xr.getControllerGrip(controllerIndex).children.forEach(child => child.visible = true);
  }

  function hideControllers(controllerIndex) {
    renderer.xr.getControllerGrip(controllerIndex).children.forEach(child => child.visible = false);
  }

  const controller1 = setupController(0);
  const controller2 = setupController(1);

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
  
  let savedTimeScale = timeScale;
  let simulationTime = 0; // stores the elapsed time to quickly jump to eclipses
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

  // XR camera movement
  function updateXRMovement(controller, delta) {
      const gamepad = controller.userData.gamepad;

      if (!gamepad) return;

      let x = gamepad.axes[2]; // horizontal
      let z = gamepad.axes[3]; // vertical

      // fallback
      if (!x && !z) {
          x = gamepad.axes[0];
          z = gamepad.axes[1];
      }

      if (Math.abs(x) > 0.1 || Math.abs(z) > 0.1) { // deadzone
        const move = new THREE.Vector3(x, 0, z);

        const direction = move.clone().applyQuaternion(camera.quaternion);
        direction.normalize().multiplyScalar(flyingSpeed * delta);

        dolly.position.add(direction);
      }
  }

  function updateXRInput() {
    const gamepad = controller1.userData.gamepad;
    if (!gamepad) return;

    if (gamepad.buttons[4]?.pressed && !controller1.userData.optionPressed) { // option button
      controller1.userData.optionPressed = true;
      if (uiVisible) hideThreeMeshUI();
      else showThreeMeshUI();
    } else if (!gamepad.buttons[4]?.pressed) {
      controller1.userData.optionPressed = false;
    }
  }

  let raycastTargets = Object.values(meshes);
  let tempMatrix = new THREE.Matrix4();
  const raycaster = new THREE.Raycaster();

  // dynamically adjust length and color of XR controller laser
  function updateControllerLaser(controller, delta) {
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix);

    const intersects = raycaster.intersectObjects(raycastTargets, false);

    const laser = controller.getObjectByName("laser");
    if (!laser) return;

    const positions = laser.geometry.attributes.position.array;
    const colors = laser.geometry.attributes.color.array;
    const segments = positions.length / 3 - 1;

    let defaultDistance = 5; // default max laser length
    let targetDistance = defaultDistance;
    let hitColor = 0x00ffff; // default cyan

    if (intersects.length > 0) {
        const hit = intersects[0];
        const distanceToRay = hit.point.distanceTo(raycaster.ray.origin);
        
        if (Math.abs(distanceToRay - hit.distance) < 0.01) {
            targetDistance = hit.distance;
            hitColor = 0xff0000; // red laser when hit detected
        }

        switch(hit.object.userData.type) {
          case "ui": {
            const ui = hit.object.userData.ui;
            if (!ui) return;

            hoveredUI = ui;
            ui.setState("hovered");
    
            raycastTargets.forEach(
              (obj) => {
                if (obj.userData.type === "ui" && obj !== hit.object) {
                  obj.userData.ui.setState("idle");
                }
              }
            );
            break;
          }
          
          case "planet": {
            // ToDo (do sth when the user clicks on a planet)
            break;
          }
        }
      }

      if (intersects.length === 0) {
        raycastTargets.forEach(obj => {
          if (obj.userData.type === "ui") {
            obj.userData.ui.setState("idle");
          }
        });
        hoveredUI = null;
      }

    if (!laser.userData.currentColor) laser.userData.currentColor = new THREE.Color(0x00ffff);
    laser.userData.currentColor.lerp(new THREE.Color(hitColor), 0.06); // smooth transition

    if (laser.userData.currentDistance === undefined) laser.userData.currentDistance = defaultDistance;
    laser.userData.currentDistance += (targetDistance - laser.userData.currentDistance) * Math.min(5.0 * delta, 1);

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      positions[i*3 + 2] = -t * laser.userData.currentDistance;;

      // update fade dynamically
      colors[i*4 + 3] = 1 - t; 

      colors[i*4 + 0] = laser.userData.currentColor.r;
      colors[i*4 + 1] = laser.userData.currentColor.g;
      colors[i*4 + 2] = laser.userData.currentColor.b;
    }

    laser.geometry.attributes.position.needsUpdate = true;
    laser.geometry.attributes.color.needsUpdate = true;
  }

  function animate() {
    const delta = clock.getDelta();
    simulationTime += delta * timeScale;
    movementControls.update(controls, delta, flyingSpeed);
    ThreeMeshUI.update();

    // ThreeMeshUI hovering over left controller
    if (container && controller1 && uiVisible) {
      container.position.copy(controller1.position).add(uiOffset.clone().applyQuaternion(controller1.quaternion));
      container.quaternion.copy(controller1.quaternion);
    }

    // xr input
    updateXRInput();

    // xr movement
    updateXRMovement(controller1, delta);
    updateXRMovement(controller2, delta);

    // xr raycasting
    updateControllerLaser(controller1, delta);
    updateControllerLaser(controller2, delta);

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

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

main();