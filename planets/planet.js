import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

//Planet Class
export class Planet {
    constructor(radius, texture) {
        this.radius = radius;
        this.texture = texture;
    }
    
    //creates a planet on the given parameters and returns an object of it
    createPlanet() {
        const geometry = new THREE.SphereGeometry(this.radius, 64, 32);
        const material = new THREE.MeshStandardMaterial({map: this.texture});
        return new THREE.Mesh(geometry, material);
    }
}