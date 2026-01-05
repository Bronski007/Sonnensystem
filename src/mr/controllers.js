import * as THREE from "three";
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { uiState } from './threeMeshUI.js';

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

let isSelected = false;
// handle controller inputs
export function onSelectStart() {
  isSelected = true;
}

export function onSelectEnd() {
  if (uiState.hoveredUI) {
    uiState.hoveredUI.setState("selected");
    uiState.hoveredUI = null;
  }
  isSelected = false;
}

// controller set up
export function setupController(renderer, dolly, controllerIndex) {
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

export function showControllers(renderer, controllerIndex) {
  renderer.xr.getControllerGrip(controllerIndex).children.forEach(child => child.visible = true);
}

export function hideControllers(renderer, controllerIndex) {
  renderer.xr.getControllerGrip(controllerIndex).children.forEach(child => child.visible = false);
}