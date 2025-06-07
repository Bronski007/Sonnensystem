import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";


//Planet Class
export class Planet {
    constructor(radius, position, texture) {
        this.radius = radius;
        this.position = position;
        this.texture = texture;
    }
    //creates a planet on the given parameters and returns an object
    createPlanet() {
        const geometry = new THREE.SphereGeometry(this.radius, 32, 16);
        const material = new THREE.MeshBasicMaterial({ map: this.texture });
        const obj = new THREE.Mesh(geometry, material);
        obj.position.copy(this.position);
        return obj;
    }
}