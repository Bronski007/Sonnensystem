import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

//Planet Class - with inner Ring Object
export class Planet {
    constructor(radius, texture, Ring, cloudTexture) {
        this.radius = radius;
        this.texture = texture;
        this.Ring = Ring;
        this.cloudTexture = cloudTexture;
    }
}

export class Ring {
    constructor(innerRadius, outerRadius, texture){
        this.innerRadius = innerRadius;
        this.outerRadius = outerRadius;
        this.texture = texture;
    }
}