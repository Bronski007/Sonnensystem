import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

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
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}