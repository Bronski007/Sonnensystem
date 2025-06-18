import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { fetchPlanetData } from '../API/planetAPI.js';
import { Planet } from './planet.js'
import { Ring } from './planet.js';

//creates Planet and Ring Meshes
function createPlanet(planet){
    const geometry = new THREE.SphereGeometry(planet.radius, 64, 32);
    const material = new THREE.MeshStandardMaterial({ map: planet.texture });
    const planetMesh = new THREE.Mesh(geometry, material);

    // add a ring to the PlanetMesh if the planet contains a ring-object
    if (planet.Ring) {  
        const ringGeo = new THREE.RingGeometry(planet.Ring.innerRadius, planet.Ring.outerRadius, 64);
        const ringMat = new THREE.MeshBasicMaterial({map: planet.Ring.texture, side: THREE.DoubleSide, transparent: true}); // visualise ring from bottom and top view
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2; //align ring with the equatorial plane
        planetMesh.add(ring);
    }

    return planetMesh;
}

// creates the planets
export async function planetBuilder(sizeMultplier){
    const textureLoader = new THREE.TextureLoader();
    // sun
    const sunSizeMultplier = 0.000001; // scaling down the sun size (prevent sun from scaling over merkur orbit)
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const { radius: sunRadius} = await fetchPlanetData("sun");
    const sunGeometry = new THREE.SphereGeometry(sunRadius * sunSizeMultplier, 64, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({map: textureSun}); // use MeshBasicMaterial for sun to avoid lighting issues
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial)

    // mercury
    const textureMercury = textureLoader.load('public/textures/mercury.jpg');
    const { radius: mercuryRadius } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * sizeMultplier, textureMercury);
    const mercuryMesh = createPlanet(mercury);

    // venus
    const textureVenus = textureLoader.load('public/textures/venus.jpg');
    const { radius: venusRadius } = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * sizeMultplier, textureVenus);
    const venusMesh = createPlanet(venus);

    // earth
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');
    const { radius: earthRadius } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * sizeMultplier, textureEarth);
    const earthMesh = createPlanet(earth);

    // moon
    const textureMoon = textureLoader.load('public/textures/moon.jpg');
    const { radius: moonRadius } = await fetchPlanetData("moon");
    const moon = new Planet(moonRadius * sizeMultplier, textureMoon);
    const moonMesh = createPlanet(moon);
    
    // mars
    const textureMars = textureLoader.load('public/textures/mars.jpg');
    const { radius: marsRadius } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * sizeMultplier, textureMars);
    const marsMesh = createPlanet(mars);

    // jupiter
    const textureJupiter = textureLoader.load('public/textures/jupiter.jpg');
    const { radius: jupiterRadius } = await fetchPlanetData("jupiter");
    const jupiter = new Planet(jupiterRadius * sizeMultplier, textureJupiter);
    const jupiterMesh = createPlanet(jupiter);

    // saturn
    const textureSaturn = textureLoader.load('public/textures/saturn.jpg');
    const textureSaturnRing = textureLoader.load('public/textures/saturn ring.png');
    const { radius: saturnRadius } = await fetchPlanetData("saturn");
    const saturnRing = new Ring(saturnRadius * sizeMultplier + 0.25, saturnRadius * sizeMultplier + 0.4, textureSaturnRing)
    const saturn = new Planet(saturnRadius * sizeMultplier, textureSaturn, saturnRing);
    const saturnMesh = createPlanet(saturn);

    // uranus
    const textureUranus = textureLoader.load('public/textures/uranus.jpg');
    const textureUranusRing = textureLoader.load('public/textures/saturn ring.png');
    const { radius: uranusRadius } = await fetchPlanetData("uranus");
    const uranusRing = new Ring(uranusRadius * sizeMultplier + 0.25, uranusRadius * sizeMultplier + 0.4, textureUranusRing)
    const uranus = new Planet(uranusRadius * sizeMultplier, textureUranus, uranusRing);
    const uranusMesh = createPlanet(uranus);

    // neptune
    const textureNeptune = textureLoader.load('public/textures/neptune.jpg');
    const { radius: neptuneRadius } = await fetchPlanetData("neptune");
    const neptune = new Planet(neptuneRadius * sizeMultplier, textureNeptune);
    const neptuneMesh = createPlanet(neptune);

    // pluto
    const texturePluto = textureLoader.load('public/textures/pluto.jpg');
    const { radius: plutoRadius } = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * sizeMultplier, texturePluto);
    const plutoMesh = createPlanet(pluto);

    return {
        meshes: {
            sun: sunMesh,
            mercury: mercuryMesh,
            venus: venusMesh,
            earth: earthMesh,
            moon: moonMesh,
            mars: marsMesh,
            jupiter: jupiterMesh,
            saturn: saturnMesh,
            uranus: uranusMesh,
            neptune: neptuneMesh,
            pluto: plutoMesh
        }
    }
}