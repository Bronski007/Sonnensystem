import * as THREE from "three";

/*
initial scene set-up
*/
export function initScene() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1500);
  camera.position.set(0, 0, 75);

  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer shadows
  renderer.xr.enabled = true;
  renderer.xr.setFramebufferScaleFactor(1.5);
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}