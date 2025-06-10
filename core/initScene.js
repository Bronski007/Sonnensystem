import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

//Basic Scene Setup
export function initScene() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 10);

  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  // TODO: static at the moment
  const textureLoader = new THREE.TextureLoader();
  const backGround = textureLoader.load('public/textures/stars_milky_way.jpg');
  scene.background = backGround;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}
