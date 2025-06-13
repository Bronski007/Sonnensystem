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
        return {
            radius: data.meanRadius,                 // durchschnittlicher Radius
            distanceToSun: data.semimajorAxis,       // mittlere Entfernung zur Sonne
        };
    } catch (error) {
        console.error(error);
        return 1;
    }
}


//creates the planet objects
// FIXME: Scaling überarbeiten
export async function planetBuilder(sizeMultplier, distanceMultiplier){
    const textureLoader = new THREE.TextureLoader();

    //Sun
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const { radius: sunRadius, distanceToSun: sunDistance } = await fetchPlanetData("sun");
    const sun = new Planet(sunRadius* sizeMultplier, new THREE.Vector3(-100, 0, 0), textureSun); //Sun is scaled down  by to .00
    const sunMesh = sun.createPlanet();
    //Earth
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');
    const { radius: earthRadius, distanceToSun: earthDistance } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * sizeMultplier, new THREE.Vector3(earthDistance * distanceMultiplier, 0, 0), textureEarth);
    const earthMesh = earth.createPlanet();

    //Moon
    const textureMoon = textureLoader.load('public/textures/moon.jpg');
    const { radius: moonRadius, distanceToSun: moonDistance} = await fetchPlanetData("moon");
    const moon = new Planet(moonRadius * sizeMultplier, new THREE.Vector3(moonDistance * distanceMultiplier, 0, 0), textureMoon);
    const moonMesh = moon.createPlanet();

    //Pluto
    const texturePluto = textureLoader.load('public/textures/pluto.jpg');
    const { radius: plutoRadius, distanceToSun: plutoDistance} = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * sizeMultplier, new THREE.Vector3(plutoDistance * distanceMultiplier, 0, 0), texturePluto);
    const plutoMesh = pluto.createPlanet();
    
    //Venus
    const textureVenus = textureLoader.load('public/textures/venus.jpg');
    const { radius: venusRadius, distanceToSun: venusDistance} = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * sizeMultplier, new THREE.Vector3(venusDistance * distanceMultiplier, 0, 0), textureVenus);
    const venusMesh = venus.createPlanet();
    
    //Jupiter
    const textureJupiter = textureLoader.load('public/textures/jupiter.jpg');
    const { radius: jupiterRadius, distanceToSun: jupiterDistance} = await fetchPlanetData("jupiter");
    const jupiter = new Planet(jupiterRadius * sizeMultplier, new THREE.Vector3(jupiterDistance * distanceMultiplier, 0, 0), textureJupiter);
    const jupiterMesh = jupiter.createPlanet();

    //Neptune
    const textureNeptune = textureLoader.load('public/textures/neptune.jpg');
    const { radius: neptuneRadius, distanceToSun: neptuneDistance} = await fetchPlanetData("neptune");
    const neptune = new Planet(neptuneRadius * sizeMultplier, new THREE.Vector3(neptuneDistance * distanceMultiplier, 0, 0), textureNeptune);
    const neptuneMesh = neptune.createPlanet();

    //Saturn 
    // TODO: Saturn Ringe!
    const textureSaturn = textureLoader.load('public/textures/saturn.jpg');
    const { radius: saturnRadius, distanceToSun: saturnDistance } = await fetchPlanetData("saturn");
    const saturn = new Planet(saturnRadius * sizeMultplier, new THREE.Vector3(saturnDistance * distanceMultiplier, 0, 0), textureSaturn);
    const saturnMesh = saturn.createPlanet();
    
    //Mercury
    const textureMercury = textureLoader.load('public/textures/mercury.jpg');
    const { radius: mercuryRadius, distanceToSun: mercuryDistance } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * sizeMultplier, new THREE.Vector3(mercuryDistance * distanceMultiplier, 0, 0), textureMercury);
    const mercuryMesh = mercury.createPlanet();

    //Uranus
    const textureUranus = textureLoader.load('public/textures/uranus.jpg');
    const { radius: uranusRadius, distanceToSun: uranusDistance } = await fetchPlanetData("uranus");
    const uranus = new Planet(uranusRadius * sizeMultplier, new THREE.Vector3(uranusDistance * distanceMultiplier, 0, 0), textureUranus);
    const uranusMesh = uranus.createPlanet();

    //Mars
    const textureMars = textureLoader.load('public/textures/mars.jpg');
    const { radius: marsRadius, distanceToSun: marsDistance } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * sizeMultplier, new THREE.Vector3(marsDistance * distanceMultiplier, 0, 0), textureMars);
    const marsMesh = mars.createPlanet();

    return { sunMesh, earthMesh, moonMesh, plutoMesh, venusMesh, jupiterMesh, neptuneMesh, saturnMesh, mercuryMesh, uranusMesh, marsMesh}
}