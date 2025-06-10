import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { Planet } from './planet.js'

//Api communication - fetches the radius of a given planet their distance to the sun etc.
//Source: Bro Code - "How to FETCH data from an API using JavaScript" link: https://www.youtube.com/watch?v=37vxWr0WgQk
async function fetchPlanetData(planet, info){
    try {
        const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/"+planet);
        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        return data.equaRadius;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

//creates the planet objects
export async function planetBuilder(){
    const textureLoader = new THREE.TextureLoader();
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');

    const sunRadius = await fetchPlanetData("sun");
    const earthRadius = await fetchPlanetData("earth");

    //Sun
    const sun = new Planet(sunRadius*0.000001, new THREE.Vector3(-13, 0, 0), textureSun); //Sun is scaled down  by to .00
    const sunMesh = sun.createPlanet();
    //Earth
    const earth = new Planet(earthRadius * 0.0001, new THREE.Vector3(1.5, 0, 0), textureEarth);
    const earthMesh = earth.createPlanet();

    //Moon
    //Pluto
    //Venus
    //Jupiter
    //Neptune
    //Saturn
    //Mercury
    //Uranus
    //Mars

    return { sunMesh, earthMesh}
}