import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // field of view, aspect ratio, near clipping plane, far clipping plane

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // adds the canvas element the renderer uses to html body

const textureLoader = new THREE.TextureLoader();
const textureSun = textureLoader.load('public/Textures/sun.jpg');
const textureEarth = textureLoader.load('public/Textures/earth.png')

// sun
const geometrySun = new THREE.SphereGeometry(1, 32, 16); // radius, number of horizontal segments, number of vertical segments
const materialSun = new THREE.MeshBasicMaterial({map: textureSun});
const sun = new THREE.Mesh(geometrySun, materialSun);
sun.position.set(-1.5, 0, -1);
scene.add(sun);

const geometryEarth = new THREE.SphereGeometry(1, 32, 16); // radius, number of horizontal segments, number of vertical segments
const materialEarth = new THREE.MeshBasicMaterial({map: textureEarth});
const earth = new THREE.Mesh(geometryEarth, materialEarth);
earth.position.set(1.5, 0, 1);
scene.add(earth);

camera.position.z = 5; // moves camera by +5 on z axis to (0, 0, 5)

// rendering the scene
function animate() {
    sun.rotation.y += 0.01; // rotating the sun
    earth.rotation.y += 0.02;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);