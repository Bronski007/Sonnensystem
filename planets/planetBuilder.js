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
export async function planetBuilder(){
    const textureLoader = new THREE.TextureLoader();

    //Sun
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const { radius: sunRadius, distanceToSun: sunDistance } = await fetchPlanetData("sun");
    const sun = new Planet(sunRadius*0.000001, new THREE.Vector3(sunDistance * 0.00001, 0, 0), textureSun); //Sun is scaled down  by to .00
    const sunMesh = sun.createPlanet();
    console.log(sunDistance * 0.00001);
    //Earth
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');
    const { radius: earthRadius, distanceToSun: earthDistance } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * 0.0001, new THREE.Vector3(earthDistance * 0.0000001, 0, 0), textureEarth);
    const earthMesh = earth.createPlanet();
    console.log(earthDistance * 0.0000001);

    //Moon
    const textureMoon = textureLoader.load('public/textures/moon.jpg');
    const { radius: moonRadius, distanceToSun: moonDistance} = await fetchPlanetData("moon");
    const moon = new Planet(moonRadius * 0.0001, new THREE.Vector3(moonDistance * 0.00001, 0, 0), textureMoon);
    const moonMesh = moon.createPlanet();
    console.log(moonDistance * 0.00001);

    //Pluto
    const texturePluto = textureLoader.load('public/textures/pluto.jpg');
    const { radius: plutoRadius, distanceToSun: plutoDistance} = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * 0.0001, new THREE.Vector3(plutoDistance * 0.00000001, 0, 0), texturePluto);
    const plutoMesh = pluto.createPlanet();
    console.log(plutoDistance * 0.00000001);
    
    //Venus
    const textureVenus = textureLoader.load('public/textures/venus.jpg');
    const { radius: venusRadius, distanceToSun: venusDistance} = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * 0.0001, new THREE.Vector3(venusDistance * 0.0000001, 0, 0), textureVenus);
    const venusMesh = venus.createPlanet();
    console.log(venusDistance * 0.0000001);
    
    //Jupiter
    const textureJupiter = textureLoader.load('public/textures/jupiter.jpg');
    const { radius: jupiterRadius, distanceToSun: jupiterDistance} = await fetchPlanetData("jupiter");
    const jupiter = new Planet(jupiterRadius * 0.00001, new THREE.Vector3(jupiterDistance * 0.00000001, 0, 0), textureJupiter);
    const jupiterMesh = jupiter.createPlanet();
    console.log(jupiterDistance * 0.00000001);

    //Neptune
    const textureNeptune = textureLoader.load('public/textures/neptune.jpg');
    const { radius: neptuneRadius, distanceToSun: neptuneDistance} = await fetchPlanetData("neptune");
    const neptune = new Planet(neptuneRadius * 0.0001, new THREE.Vector3(neptuneDistance * 0.00000001, 0, 0), textureNeptune);
    const neptuneMesh = neptune.createPlanet();
    console.log(neptuneDistance * 0.00000001);

    //Saturn 
    // TODO: Saturn Ringe!
    const textureSaturn = textureLoader.load('public/textures/saturn.jpg');
    const { radius: saturnRadius, distanceToSun: saturnDistance } = await fetchPlanetData("saturn");
    const saturn = new Planet(saturnRadius * 0.00001, new THREE.Vector3(saturnDistance * 0.00000001, 0, 0), textureSaturn);
    const saturnMesh = saturn.createPlanet();
    console.log(saturnDistance * 0.00000001);
    
    //Mercury
    const textureMercury = textureLoader.load('public/textures/mercury.jpg');
    const { radius: mercuryRadius, distanceToSun: mercuryDistance } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * 0.0001, new THREE.Vector3(mercuryDistance * 0.0000001, 0, 0), textureMercury);
    const mercuryMesh = mercury.createPlanet();
    console.log(mercuryDistance * 0.0000001);

    //Uranus
    const textureUranus = textureLoader.load('public/textures/uranus.jpg');
    const { radius: uranusRadius, distanceToSun: uranusDistance } = await fetchPlanetData("uranus");
    const uranus = new Planet(uranusRadius * 0.0001, new THREE.Vector3(uranusDistance * 0.00000001, 0, 0), textureUranus);
    const uranusMesh = uranus.createPlanet();
    console.log(uranusDistance * 0.00000001);
    
    //Mars
    const textureMars = textureLoader.load('public/textures/mars.jpg');
    const { radius: marsRadius, distanceToSun: marsDistance } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * 0.0001, new THREE.Vector3(marsDistance * 0.0000001, 0, 0), textureMars);
    const marsMesh = mars.createPlanet();
    console.log(marsDistance * 0.0000001);

    return { sunMesh, earthMesh, moonMesh, plutoMesh, venusMesh, jupiterMesh, neptuneMesh, saturnMesh, mercuryMesh, uranusMesh, marsMesh}
}