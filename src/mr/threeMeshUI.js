import * as THREE from "three";
import ThreeMeshUI from 'three-mesh-ui';
import { worldState } from '../main.js';

// ThreeMeshUI
let container = null;
let uiVisible = false;
let statusPanel = null;
let statusText = null;
let orbitLinesVisible = true;
let planetaryOutlinesVisible = false;
let lunarEclipseVisible = false;
let solarEclipseVisible = false;

export let uiState = {
  hoveredUI: null
};

// text panel for displaying basic text
function createTextPanel(content, height = 0.03) {
    // text element
    const text = new ThreeMeshUI.Text({
      content: content,
      fontSize: 0.006
    });

    // background panel wrapping the text
    const panel = new ThreeMeshUI.Block({
      textAlign: 'center',
      padding: 0.01,
      fontFamily: 'saira.json',
      fontTexture: 'saira.png',
      justifyContent: 'center',
      width: 0.11,
      height: height,
      offset: 0.005,
      margin: 0.002,
      borderRadius: 0.0075
    });

    panel.add(text);

    return { panel, text };
  }

function showStatus(text) {
  statusText.set({ content: text });

  container.needsUpdate = true;
}

// reusable hovered state for buttons
function makeHoverState(textFn) {
  return {
    state: 'hovered',
    attributes: {
      offset: 0,
      backgroundColor: new THREE.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new THREE.Color(0xffffff)
    },
    onSet: () => {
      showStatus(textFn());
    }
  };
}

function createRow() {
  return new ThreeMeshUI.Block({
    contentDirection: 'row',
    justifyContent: 'center',
    columnGap: 0.005
  });
}

export function showThreeMeshUI(raycastTargets, controller1, orbitLines, planetOutlines, showLunarEclipse, showSolarEclipse) {
  // create ui only once
  if (container === null) {

    // main ui container, later attached to left controller
    container = new ThreeMeshUI.Block({
      padding: 0.01,
      borderRadius: 0.011,
      fontSize: 0.006,
      fontFamily: 'saira.json',
      fontTexture: 'saira.png',
      justifyContent: 'center',
      contentDirection: 'column',
      rowGap: 0.005
    });

    // status text panel displaying relevant information when hovering over a button
    const statusObject = createTextPanel('Solar System');
    statusPanel = statusObject.panel;
    statusText = statusObject.text;
    container.add(statusPanel);
    statusPanel.position.set(0, 0.115, 0);

    // buttons
    const buttonOptions = {
      width: 0.11,
      height: 0.03,
      justifyContent: 'center',
      offset: 0.005,
      margin: 0.002,
      borderRadius: 0.0075
    };

    // reusable idle state attributes for buttons
    const idleStateAttributes = {
      state: 'idle',
      attributes: {
        offset: 0,
        backgroundColor: new THREE.Color(0x666666),
        backgroundOpacity: 0.3,
        fontColor: new THREE.Color(0xffffff)
      },
      onSet: () => showStatus(`Solar System`)
    };

    // buttons
    const buttonIncreaseTimeScale = new ThreeMeshUI.Block(buttonOptions);
    const buttonDecreaseTimeScale = new ThreeMeshUI.Block(buttonOptions);
    const buttonIncreaseFlyingSpeed = new ThreeMeshUI.Block(buttonOptions);
    const buttonDecreaseFlyingSpeed = new ThreeMeshUI.Block(buttonOptions);
    const buttonShowOrbits = new ThreeMeshUI.Block(buttonOptions);
    const buttonShowPlanetaryOutlines = new ThreeMeshUI.Block(buttonOptions);
    const buttonIncreasePlanetaryOutlineScale = new ThreeMeshUI.Block(buttonOptions);
    const buttonDecreasePlanetaryOutlineScale = new ThreeMeshUI.Block(buttonOptions);
    const buttonShowLunarEclipse = new ThreeMeshUI.Block(buttonOptions);
    const buttonShowSolarEclipse = new ThreeMeshUI.Block(buttonOptions);

    // button contents
    buttonIncreaseTimeScale.add(new ThreeMeshUI.Text({content:"Increase Time Scale"}))
    buttonDecreaseTimeScale.add(new ThreeMeshUI.Text({content:"Decrease Time Scale"}))
    buttonIncreaseFlyingSpeed.add(new ThreeMeshUI.Text({content:"Increase Flying Speed"}))
    buttonDecreaseFlyingSpeed.add(new ThreeMeshUI.Text({content:"Decrease Flying Speed"}))
    buttonShowOrbits.add(new ThreeMeshUI.Text({content:"Toggle Orbits"}))
    buttonShowPlanetaryOutlines.add(new ThreeMeshUI.Text({content:"Toggle Planetary Outlines"}))
    buttonIncreasePlanetaryOutlineScale.add(new ThreeMeshUI.Text({content:"Increase Planetary Outlines Scale"}))
    buttonDecreasePlanetaryOutlineScale.add(new ThreeMeshUI.Text({content:"Decrease Planetary Outlines Scale"}))
    buttonShowLunarEclipse.add(new ThreeMeshUI.Text({content:"Toggle Lunar Eclipse"}))
    buttonShowSolarEclipse.add(new ThreeMeshUI.Text({content:"Toggle Solar Eclipse"}))

    // reusable selected state attributes for buttons
    const selectedAttributes = {
      offset: 0.02,
      backgroundColor: new THREE.Color(0x777777),
      fontColor: new THREE.Color(0x222222)
    };

    // button functionalities
    buttonIncreaseTimeScale.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        if (worldState.timeScale < 10000) {
          worldState.timeScale = 10000;
        } else if (worldState.timeScale < 100000) {
          worldState.timeScale = Math.ceil((worldState.timeScale + 0.01) / 10000) * 10000;
        } else {
          worldState.timeScale = Math.ceil((worldState.timeScale + 0.01) / 50000) * 50000;
        }

        showStatus(`Time Scale ${worldState.timeScale.toString().replace(".", " ")}`);
      }
    } );
    buttonIncreaseTimeScale.setupState(makeHoverState(() => `Time Scale ${worldState.timeScale.toString().replace(".", " ")}`));
    buttonIncreaseTimeScale.setupState(idleStateAttributes);

    buttonDecreaseTimeScale.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        if (worldState.timeScale <= 10000) {
          worldState.timeScale = 1;
        } else if (worldState.timeScale <= 100000) {
          worldState.timeScale = Math.floor((worldState.timeScale - 0.01) / 10000) * 10000;
        } else {
          worldState.timeScale = Math.floor((worldState.timeScale - 0.01) / 50000) * 50000;
        }

        showStatus(`Time Scale ${worldState.timeScale.toString().replace(".", " ")}`);
      }
    } );
    buttonDecreaseTimeScale.setupState(makeHoverState(() => `Time Scale ${worldState.timeScale.toString().replace(".", " ")}`));
    buttonDecreaseTimeScale.setupState(idleStateAttributes);

    buttonIncreaseFlyingSpeed.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        if (worldState.flyingSpeed < 0.1) {
          worldState.flyingSpeed = 0.1;
        }
        else if (worldState.flyingSpeed < 1) {
          worldState.flyingSpeed = Number((Math.ceil((worldState.flyingSpeed + 0.01) / 0.1) * 0.1).toFixed(1));
        } else if (worldState.flyingSpeed < 10) {
          worldState.flyingSpeed = Math.ceil((worldState.flyingSpeed + 0.01) / 1) * 1;
        } else {
          worldState.flyingSpeed = Math.ceil((worldState.flyingSpeed + 0.01) / 5) * 5;
        }

        showStatus(`Flying Speed ${worldState.flyingSpeed.toString().replace(".", " ")}`);
      }
    } );
    buttonIncreaseFlyingSpeed.setupState(makeHoverState(() => `Flying Speed ${worldState.flyingSpeed.toString().replace(".", " ")}`));
    buttonIncreaseFlyingSpeed.setupState(idleStateAttributes);

    buttonDecreaseFlyingSpeed.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        if (worldState.flyingSpeed <= 0.1) {
          worldState.flyingSpeed = 0.1;
        } else if (worldState.flyingSpeed <= 1) {
          worldState.flyingSpeed = Number((Math.floor((worldState.flyingSpeed - 0.01) / 0.1) * 0.1).toFixed(1));
        } else if (worldState.flyingSpeed <= 10) {
          worldState.flyingSpeed = Math.floor((worldState.flyingSpeed - 0.01) / 1) * 1;
        } else {
          worldState.flyingSpeed = Math.floor((worldState.flyingSpeed - 0.01) / 5) * 5;
        }

        showStatus(`Flying Speed ${worldState.flyingSpeed.toString().replace(".", " ")}`);
      }
    } );
    buttonDecreaseFlyingSpeed.setupState(makeHoverState(() => `Flying Speed ${worldState.flyingSpeed.toString().replace(".", " ")}`));
    buttonDecreaseFlyingSpeed.setupState(idleStateAttributes);

    buttonShowOrbits.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        orbitLines.forEach(line => { line.visible = !orbitLinesVisible; });
        orbitLinesVisible = !orbitLinesVisible

        showStatus(orbitLinesVisible ? 'Hide Orbits' : 'Show Orbits');
      }
    } );
    buttonShowOrbits.setupState(makeHoverState(() => orbitLinesVisible ? 'Hide Orbits' : 'Show Orbits'));
    buttonShowOrbits.setupState(idleStateAttributes);

    buttonShowPlanetaryOutlines.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        Object.values(planetOutlines).forEach(outline => {outline.visible = !planetaryOutlinesVisible});
        planetaryOutlinesVisible = !planetaryOutlinesVisible;

        showStatus(planetaryOutlinesVisible ? 'Hide Outlines' : 'Show Outlines');
      }
    } );
    buttonShowPlanetaryOutlines.setupState(makeHoverState(() => planetaryOutlinesVisible ? 'Hide Outlines' : 'Show Outlines'));
    buttonShowPlanetaryOutlines.setupState(idleStateAttributes);

    buttonIncreasePlanetaryOutlineScale.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        let value = Object.values(planetOutlines)[0].scale.x;

        let step = value < 1 ? 0.01 : value < 10 ? 0.1 : 1;
        value += step;

        if (value < 1) {
          value = 1.01;
        } else if (value < 10) {
          value = Math.ceil((value + 0.01) / 1) * 1;
        } else {
          value = Math.ceil((value + 0.01) / 5) * 5;
        }

        Object.values(planetOutlines).forEach(outline => {outline.scale.set(value, value, value);});
      
        showStatus(`Outline Scale ${Object.values(planetOutlines)[0].scale.x.toString().replace(".", " ")}`);
      }
    } );
    buttonIncreasePlanetaryOutlineScale.setupState(makeHoverState(() => `Outline Scale ${Object.values(planetOutlines)[0].scale.x.toString().replace(".", " ")}`));
    buttonIncreasePlanetaryOutlineScale.setupState(idleStateAttributes);

    buttonDecreasePlanetaryOutlineScale.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        let value = Object.values(planetOutlines)[0].scale.x - 1;

        let step = value <= 1 ? 0.01 : value <= 10 ? 0.1 : 1;
        value += step;

        if (value <= 1.01) {
          value = 1.01;
        } else if (value <= 10) {
          value = Math.floor((value - 0.01) / 1) * 1;
        } else {
          value = Math.floor((value - 0.01) / 5) * 5;
        } 

        Object.values(planetOutlines).forEach(outline => {outline.scale.set(value, value, value);});
      
        showStatus(`Outline Scale ${Object.values(planetOutlines)[0].scale.x.toString().replace(".", " ")}`);
      }
    } );
    buttonDecreasePlanetaryOutlineScale.setupState(makeHoverState(() => `Outline Scale ${Object.values(planetOutlines)[0].scale.x.toString().replace(".", " ")}`));
    buttonDecreasePlanetaryOutlineScale.setupState(idleStateAttributes);

    buttonShowLunarEclipse.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        showLunarEclipse(!lunarEclipseVisible);
        lunarEclipseVisible = !lunarEclipseVisible;
        solarEclipseVisible = false;
      
        showStatus(lunarEclipseVisible ? 'Deactivate Eclipse' : 'Activate Eclipse');
      }
    } );
    buttonShowLunarEclipse.setupState(makeHoverState(() => lunarEclipseVisible ? 'Deactivate Eclipse' : 'Activate Eclipse'));
    buttonShowLunarEclipse.setupState(idleStateAttributes);

    buttonShowSolarEclipse.setupState( {
      state: 'selected',
      attributes: selectedAttributes,
      onSet: () => {
        showSolarEclipse(!solarEclipseVisible);
        solarEclipseVisible = !solarEclipseVisible;
        lunarEclipseVisible = false;
      
        showStatus(solarEclipseVisible ? 'Deactivate Eclipse' : 'Activate Eclipse');
      }
    } );
    buttonShowSolarEclipse.setupState(makeHoverState(() => solarEclipseVisible ? 'Deactivate Eclipse' : 'Activate Eclipse'));
    buttonShowSolarEclipse.setupState(idleStateAttributes);

    // invisible button hitboxes for raycasting ui interaction
    const hitboxIncreaseTimeScale = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxIncreaseTimeScale.userData = {type: "ui", ui: buttonIncreaseTimeScale};
    buttonIncreaseTimeScale.add(hitboxIncreaseTimeScale);

    const hitboxDecreaseTimeScale = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxDecreaseTimeScale.userData = {type: "ui", ui: buttonDecreaseTimeScale};
    buttonDecreaseTimeScale.add(hitboxDecreaseTimeScale);

    const hitboxIncreaseFlyingSpeed = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxIncreaseFlyingSpeed.userData = {type: "ui", ui: buttonIncreaseFlyingSpeed};
    buttonIncreaseFlyingSpeed.add(hitboxIncreaseFlyingSpeed);

    const hitboxDecreaseFlyingSpeed = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxDecreaseFlyingSpeed.userData = {type: "ui", ui: buttonDecreaseFlyingSpeed};
    buttonDecreaseFlyingSpeed.add(hitboxDecreaseFlyingSpeed);

    const hitboxShowOrbits = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxShowOrbits.userData = {type: "ui", ui: buttonShowOrbits};
    buttonShowOrbits.add(hitboxShowOrbits);

    const hitboxShowPlanetaryOutlines = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxShowPlanetaryOutlines.userData = {type: "ui", ui: buttonShowPlanetaryOutlines};
    buttonShowPlanetaryOutlines.add(hitboxShowPlanetaryOutlines);

    const hitboxIncreasePlanetaryOutlineScale = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxIncreasePlanetaryOutlineScale.userData = {type: "ui", ui: buttonIncreasePlanetaryOutlineScale};
    buttonIncreasePlanetaryOutlineScale.add(hitboxIncreasePlanetaryOutlineScale);

    const hitboxDecreasePlanetaryOutlineScale = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxDecreasePlanetaryOutlineScale.userData = {type: "ui", ui: buttonDecreasePlanetaryOutlineScale};
    buttonDecreasePlanetaryOutlineScale.add(hitboxDecreasePlanetaryOutlineScale);

    const hitboxShowLunarEclipse = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxShowLunarEclipse.userData = {type: "ui", ui: buttonShowLunarEclipse};
    buttonShowLunarEclipse.add(hitboxShowLunarEclipse);

    const hitboxShowSolarEclipse = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.03, 0.02), new THREE.MeshBasicMaterial({visible: false}));
    hitboxShowSolarEclipse.userData = {type: "ui", ui: buttonShowSolarEclipse};
    buttonShowSolarEclipse.add(hitboxShowSolarEclipse);


    raycastTargets.push(hitboxIncreaseTimeScale, hitboxDecreaseTimeScale, hitboxIncreaseFlyingSpeed, hitboxDecreaseFlyingSpeed, hitboxShowOrbits, hitboxShowPlanetaryOutlines, hitboxIncreasePlanetaryOutlineScale, hitboxDecreasePlanetaryOutlineScale, hitboxShowLunarEclipse, hitboxShowSolarEclipse);
    
    // button layout
    const row1 = createRow();
    row1.add(buttonIncreaseTimeScale, buttonDecreaseTimeScale);
    const row2 = createRow();
    row2.add(buttonIncreaseFlyingSpeed, buttonDecreaseFlyingSpeed);
    const row3 = createRow();
    row3.add(buttonShowOrbits, buttonShowPlanetaryOutlines);
    const row4 = createRow();
    row4.add(buttonIncreasePlanetaryOutlineScale, buttonDecreasePlanetaryOutlineScale);
    const row5 = createRow();
    row5.add( buttonShowLunarEclipse, buttonShowSolarEclipse);

    container.add(row1, row2, row3, row4, row5);
    
    // ui hovering over left controller
    controller1.add(container);
    container.position.copy(new THREE.Vector3(-0.075, 0.125, -0.04));
    container.rotation.set(0, 1.5, 0);

    uiVisible = true;
  } else {
    container.visible = true;
    uiVisible = true;

    // readd container elements for raycast detection
    container.traverse((child) => {
      if (child.userData.type === "ui") {
        raycastTargets.push(child);
      }
    });
  }
}

export function hideThreeMeshUI(raycastTargets) {
  if (container != null) {
    container.visible = false;
    uiVisible = false;
  }

  // remove container elements from raycast detection
  raycastTargets.splice(0, raycastTargets.length, ...raycastTargets.filter(obj => obj.userData.type !== "ui"));
}

let planetInfoContainer = null;
let namePanel = null;
let nameText = null;
let infoPanel = null;
let infoText = null;
// ui, hovering over right controller, with name and info about the, with controller-laser selected, planet
function showPlanetInfo(name, info, controller2) {
  // create ui only on first use
  if (planetInfoContainer === null) {
      planetInfoContainer = new ThreeMeshUI.Block({
      padding: 0.01,
      borderRadius: 0.011,
      fontSize: 0.006,
      fontFamily: 'saira.json',
      fontTexture: 'saira.png',
      justifyContent: 'center',
      contentDirection: 'column',
      rowGap: 0.005
      });

      const nameObject = createTextPanel('');
      namePanel = nameObject.panel;
      nameText = nameObject.text;

      const infoObject = createTextPanel('', 0.12);
      infoPanel = infoObject.panel;
      infoText = infoObject.text;

      planetInfoContainer.add(namePanel);
      planetInfoContainer.add(infoPanel);

      // ui hovering over right controller
      planetInfoContainer.position.copy(new THREE.Vector3(0.075, 0.125, -0.02));
      planetInfoContainer.rotation.set(0, 1.5 + Math.PI, 0);

      controller2.add(planetInfoContainer);
  }

  nameText.set({ content: name });
  infoText.set({ content: info });

  planetInfoContainer.needsUpdate = true;
}

// XR camera movement
export function updateXRMovement(camera, dolly, controller, delta) {
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
  direction.normalize().multiplyScalar(worldState.flyingSpeed * delta);

  dolly.position.add(direction);
  }
}

let planetInfoVisible = true;
// toggle ui and planet info ui using left / right controllers stick buttons
export function updateXRInput(raycastTargets, controller1, controller2) {
  const gamepad1 = controller1.userData.gamepad;
  if (!gamepad1) return;
  const gamepad2 = controller2.userData.gamepad;
  if (!gamepad2) return;

  // left controller: toggle main ui
  if (gamepad1.buttons[3]?.pressed && !controller1.userData.optionPressed) { // stick press
      controller1.userData.optionPressed = true;
      if (uiVisible) hideThreeMeshUI(raycastTargets);
      else showThreeMeshUI(raycastTargets, controller1);
  } else if (!gamepad1.buttons[3]?.pressed) {
      controller1.userData.optionPressed = false;
  }

  // right controller: toggle planet info ui
  if (gamepad2.buttons[3]?.pressed && !controller2.userData.optionPressed) { // stick press
    controller2.userData.optionPressed = true;
    planetInfoVisible = !planetInfoVisible;

    if (planetInfoContainer) {
      planetInfoContainer.visible = planetInfoVisible;
    }
  } else if (!gamepad2.buttons[3]?.pressed) {
    controller2.userData.optionPressed = false;
  }
}

let tempMatrix = new THREE.Matrix4();
const raycaster = new THREE.Raycaster();

// dynamically adjust length and color of XR controller laser
export function updateControllerLaser(raycastTargets, controller, delta, controller2) {
  tempMatrix.identity().extractRotation(controller.matrixWorld); // extract controller rotation for ray direction
  // set ray origin and direction
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
        // activate hovered and idle states for ui buttons
        case "ui": {
          const ui = hit.object.userData.ui;
          if (!ui) return;

          uiState.hoveredUI = ui;
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
        
        // update planet info ui for currently selected planet
        case "planet": {
          showPlanetInfo(hit.object.userData.name, hit.object.userData.info, controller2);
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
      uiState.hoveredUI = null;
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