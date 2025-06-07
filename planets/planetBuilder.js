import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

export function planetBuilder(){
    const textureLoader = new THREE.TextureLoader();
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');


    //Sun
    const geometrySun = new THREE.SphereGeometry(1, 32, 16);
    const materialSun = new THREE.MeshBasicMaterial({ map: textureSun });
    const sun = new THREE.Mesh(geometrySun, materialSun);
    sun.position.set(-1.5, 0, -1);

    //Earth
    const geometryEarth = new THREE.SphereGeometry(1, 32, 16);
    const materialEarth = new THREE.MeshBasicMaterial({ map: textureEarth });
    const earth = new THREE.Mesh(geometryEarth, materialEarth);
    earth.position.set(1.5, 0, 1);

    return { sun, earth}
}

// Dieses Modul enthält die Logik zur Erstellung der Planeten 
// (villeicht eine extra Planeten Klasse von der für jeden Planet ein Objekt mit den bestimmten feldern in dieser .js erstellt wird)
// das heißt: 1. Planet: allgemeine Planet-definition,  2. planetBuilder: erstellt jeden planeten mit seinen konkreten feldern und Eigenschaften