import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

// Planet class with an optional inner Ring object.
// Not every planet needs a ring — the Ring property can be null.
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