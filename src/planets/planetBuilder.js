import * as THREE from "three";
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

    if (planet.cloudTexture) {
        const cloudGeometry = new THREE.SphereGeometry(planet.radius * 1.01, 64, 32);
        const cloudMaterial = new THREE.MeshStandardMaterial({map: planet.cloudTexture, transparent: true, opacity: 0.5});
        const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        planetMesh.add(cloudMesh);
        cloudMesh.rotation.y = Math.PI / 2;
    }

    return planetMesh;
}

// creates the planets (based on API Data)
export async function planetBuilder(sizeMultplier){
    const textureLoader = new THREE.TextureLoader();
    // sun
    const sunSizeMultplier = 0.000001; // scaling down the sun size (prevent sun from scaling over mercury orbit)
    const textureSun = textureLoader.load('sun.jpg');
    const { radius: sunRadius} = await fetchPlanetData("sun");
    const sunGeometry = new THREE.SphereGeometry(sunRadius * sunSizeMultplier, 64, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({map: textureSun}); // use MeshBasicMaterial for sun to avoid lighting issues
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.userData.type = "planet";
    sunMesh.userData.name = "SUN";
    sunMesh.userData.info = "The Sun is a Star with an average surface temperature of 5505 C and a diameter of 1392700 km";

    // mercury
    const textureMercury = textureLoader.load('mercury.jpg');
    const { radius: mercuryRadius } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * sizeMultplier, textureMercury);
    const mercuryMesh = createPlanet(mercury);
    mercuryMesh.userData.type = "planet";
    mercuryMesh.userData.name = "MERCURY";
    mercuryMesh.userData.info = "Mercury is a Terrestrial Planet and the 1st planet from the Sun with an average surface temperature of 167 C and a diameter of 4880 km";

    // venus
    const textureVenus = textureLoader.load('venus.jpg');
    const { radius: venusRadius } = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * sizeMultplier, textureVenus);
    const venusMesh = createPlanet(venus);
    venusMesh.userData.type = "planet";
    venusMesh.userData.name = "VENUS";
    venusMesh.userData.info = "Venus is a Terrestrial Planet and the 2nd planet from the Sun with an average surface temperature of 464 C and a diameter of 12104 km";

    // earth
    const textureEarth = textureLoader.load('earth_day.jpg');
    const textureEarthClouds = textureLoader.load('earth_clouds.png');
    const { radius: earthRadius } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * sizeMultplier, textureEarth, null, textureEarthClouds);
    const earthMesh = createPlanet(earth);
    earthMesh.userData.type = "planet";
    earthMesh.userData.name = "EARTH";
    earthMesh.userData.info = "Earth is a Terrestrial Planet and the 3rd planet from the Sun with an average surface temperature of 15 C and a diameter of 12742 km and 1 moon";

    // moon
    const textureMoon = textureLoader.load('moon.jpg');
    const { radius: moonRadius } = await fetchPlanetData("moon");
    const moon = new Planet(moonRadius * sizeMultplier, textureMoon);
    const moonMesh = createPlanet(moon);
    moonMesh.userData.type = "planet";
    moonMesh.userData.name = "MOON";
    moonMesh.userData.info = "The Moon is a Natural Satellite orbiting Earth with an average surface temperature of minus 20 C and a diameter of 3474 km";
    
    // mars
    const textureMars = textureLoader.load('mars.jpg');
    const { radius: marsRadius } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * sizeMultplier, textureMars);
    const marsMesh = createPlanet(mars);
    marsMesh.userData.type = "planet";
    marsMesh.userData.name = "MARS";
    marsMesh.userData.info = "Mars is a Terrestrial Planet and the 4th planet from the Sun with an average surface temperature of minus 63 C and a diameter of 6779 km and 2 moons";

    // jupiter
    const textureJupiter = textureLoader.load('jupiter.jpg');
    const textureJupiterRing = textureLoader.load('jupiter_ring.png');
    const { radius: jupiterRadius } = await fetchPlanetData("jupiter");
    const jupiterRing = new Ring(jupiterRadius * sizeMultplier * 1.29, jupiterRadius * sizeMultplier * 1.72, textureJupiterRing)
    const jupiter = new Planet(jupiterRadius * sizeMultplier, textureJupiter, jupiterRing);
    const jupiterMesh = createPlanet(jupiter);
    jupiterMesh.userData.type = "planet";
    jupiterMesh.userData.name = "JUPITER";
    jupiterMesh.userData.info = "Jupiter is a Gas Giant and the 5th planet from the Sun with an average surface temperature of minus 108 C and a diameter of 139820 km and 4 rings and 95 moons";

    // saturn
    const textureSaturn = textureLoader.load('saturn.jpg');
    const textureSaturnRing = textureLoader.load('saturn_ring.png');
    const { radius: saturnRadius } = await fetchPlanetData("saturn");
    const saturnRing = new Ring(saturnRadius * sizeMultplier * 1.15, saturnRadius * sizeMultplier * 2.4, textureSaturnRing)
    const saturn = new Planet(saturnRadius * sizeMultplier, textureSaturn, saturnRing);
    const saturnMesh = createPlanet(saturn);
    saturnMesh.userData.type = "planet";
    saturnMesh.userData.name = "SATURN";
    saturnMesh.userData.info = "Saturn is a Gas Giant and the 6th planet from the Sun with an average surface temperature of minus 139 C and a diameter of 116460 km and 7 rings and 83 moons";

    // uranus
    const textureUranus = textureLoader.load('uranus.jpg');
    const textureUranusRing = textureLoader.load('uranus_ring.png');
    const { radius: uranusRadius } = await fetchPlanetData("uranus");
    const uranusRing = new Ring(uranusRadius * sizeMultplier * 1.5, uranusRadius * sizeMultplier * 2.0, textureUranusRing)
    const uranus = new Planet(uranusRadius * sizeMultplier, textureUranus, uranusRing);
    const uranusMesh = createPlanet(uranus);
    uranusMesh.userData.type = "planet";
    uranusMesh.userData.name = "URANUS";
    uranusMesh.userData.info = "Uranus is an Ice Giant and the 7th planet from the Sun with an average surface temperature of minus 197 C and a diameter of 50724 km and 13 rings and 27 moons";

    // neptune
    const textureNeptune = textureLoader.load('neptune.jpg');
    const textureNeptuneRing = textureLoader.load('neptune_ring.png');
    const { radius: neptuneRadius } = await fetchPlanetData("neptune");
    const neptuneRing = new Ring(neptuneRadius * sizeMultplier * 1.7, neptuneRadius * sizeMultplier * 2.56, textureNeptuneRing)
    const neptune = new Planet(neptuneRadius * sizeMultplier, textureNeptune, neptuneRing);
    const neptuneMesh = createPlanet(neptune);
    neptuneMesh.userData.type = "planet";
    neptuneMesh.userData.name = "NEPTUNE";
    neptuneMesh.userData.info = "Neptune is an Ice Giant and the 8th planet from the Sun with an average surface temperature of minus 201 C and a diameter of 49244 km and 5 rings and 14 moons";

    // pluto
    const texturePluto = textureLoader.load('pluto.jpg');
    const { radius: plutoRadius } = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * sizeMultplier, texturePluto);
    const plutoMesh = createPlanet(pluto);
    plutoMesh.userData.type = "planet";
    plutoMesh.userData.name = "PLUTO";
    plutoMesh.userData.info = "Pluto is a Dwarf Planet and the 9th planet from the Sun with an average surface temperature of minus 229 C and a diameter of 2377 km and 5 moons";

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