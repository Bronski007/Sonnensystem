import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // field of view, aspect ratio, near clipping plane, far clipping plane

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // adds the canvas element the renderer uses to html body

// sun
const geometrySun = new THREE.SphereGeometry(1, 32, 16); // radius, number of horizontal segments, number of vertical segments
const materialSun = new THREE.MeshBasicMaterial({color: 0xffff00});
const sun = new THREE.Mesh(geometrySun, materialSun);
scene.add(sun); // adds sun to the coordinates (0, 0, 0)

camera.position.z = 5; // moves camera by +5 on z axis to (0, 0, 5)

// rendering the scene
function animate() {
    // rotating the sun
    sun.rotation.x += 0.01;
    sun.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);