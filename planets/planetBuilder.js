import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { Planet } from './planet.js'

//Api communication - fetches the radius of a given planet their distance to the sun etc.
//Source: Bro Code - "How to FETCH data from an API using JavaScript" link: https://www.youtube.com/watch?v=37vxWr0WgQk
async function fetchPlanetData(planet){
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

function createOrbit(mesh, distance) {
    const orbit = new THREE.Object3D();
    orbit.position.set(0, 0, 0);
    mesh.position.set(distance, 0, 0);
    orbit.add(mesh);

    // orbit visualization
    const curve = new THREE.EllipseCurve(0, 0, distance, distance, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(200);
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, 0, p.y))); // convert to THREE.Vector3
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const ellipse = new THREE.Line(geometry, material);
    orbit.add(ellipse);

    return orbit;
}

// creates the planet objects
export async function planetBuilder(sizeMultplier, distanceMultiplier){
    const textureLoader = new THREE.TextureLoader();

    // sun
    const sunSizeMultplier = 0.000001; // scaling down the sun size
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const { radius: sunRadius, distanceToSun: sunDistance } = await fetchPlanetData("sun");
    const sun = new Planet(sunRadius * sunSizeMultplier, textureSun);
    const sunMesh = sun.createPlanet();

    // mercury
    const textureMercury = textureLoader.load('public/textures/mercury.jpg');
    const { radius: mercuryRadius, distanceToSun: mercuryDistance } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * sizeMultplier, textureMercury);
    const mercuryMesh = mercury.createPlanet();
    const mercuryOrbit = createOrbit(mercuryMesh, mercuryDistance * distanceMultiplier);
    mercuryOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(7.00), THREE.MathUtils.degToRad(48.331), 0));

    // venus
    const textureVenus = textureLoader.load('public/textures/venus.jpg');
    const { radius: venusRadius, distanceToSun: venusDistance} = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * sizeMultplier, textureVenus);
    const venusMesh = venus.createPlanet();
    const venusOrbit = createOrbit(venusMesh, venusDistance * distanceMultiplier);
    venusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(3.39), THREE.MathUtils.degToRad(76.680), 0));
    
    // earth
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');
    const { radius: earthRadius, distanceToSun: earthDistance } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * sizeMultplier, textureEarth);
    const earthMesh = earth.createPlanet();
    const earthOrbit = createOrbit(earthMesh, earthDistance * distanceMultiplier);

    // moon
    const textureMoon = textureLoader.load('public/textures/moon.jpg');
    const { radius: moonRadius, distanceToSun: moonDistance} = await fetchPlanetData("moon");
    const moonOrbitRadius = 0.384400; // average distance from Earth to Moon in meters
    const moon = new Planet(moonRadius * sizeMultplier, textureMoon);
    const moonMesh = moon.createPlanet();
    const moonOrbit = createOrbit(moonMesh, moonOrbitRadius);
    moonMesh.position.set(moonOrbitRadius, 0, 0);
    moonOrbit.add(moonMesh);
    earthMesh.add(moonOrbit);
    moonOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(5.145), 0, 0));

    // mars
    const textureMars = textureLoader.load('public/textures/mars.jpg');
    const { radius: marsRadius, distanceToSun: marsDistance } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * sizeMultplier, textureMars);
    const marsMesh = mars.createPlanet();
    const marsOrbit = createOrbit(marsMesh, marsDistance * distanceMultiplier);
    marsOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.85), THREE.MathUtils.degToRad(49.578), 0));

    // jupiter
    const textureJupiter = textureLoader.load('public/textures/jupiter.jpg');
    const { radius: jupiterRadius, distanceToSun: jupiterDistance} = await fetchPlanetData("jupiter");
    const jupiter = new Planet(jupiterRadius * sizeMultplier, textureJupiter);
    const jupiterMesh = jupiter.createPlanet();
    const jupiterOrbit = createOrbit(jupiterMesh, jupiterDistance * distanceMultiplier);
    jupiterOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.31), THREE.MathUtils.degToRad(100.464), 0));

    // saturn 
    // TODO: Saturn Ringe!
    const textureSaturn = textureLoader.load('public/textures/saturn.jpg');
    const { radius: saturnRadius, distanceToSun: saturnDistance } = await fetchPlanetData("saturn");
    const saturn = new Planet(saturnRadius * sizeMultplier, textureSaturn);
    const saturnMesh = saturn.createPlanet();
    const saturnOrbit = createOrbit(saturnMesh, saturnDistance * distanceMultiplier);
    saturnOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(2.49), THREE.MathUtils.degToRad(113.665), 0));

    // uranus
    const textureUranus = textureLoader.load('public/textures/uranus.jpg');
    const { radius: uranusRadius, distanceToSun: uranusDistance } = await fetchPlanetData("uranus");
    const uranus = new Planet(uranusRadius * sizeMultplier, textureUranus);
    const uranusMesh = uranus.createPlanet();
    const uranusOrbit = createOrbit(uranusMesh, uranusDistance * distanceMultiplier);
    uranusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(0.77), THREE.MathUtils.degToRad(74.006), 0));

    // neptune
    const textureNeptune = textureLoader.load('public/textures/neptune.jpg');
    const { radius: neptuneRadius, distanceToSun: neptuneDistance} = await fetchPlanetData("neptune");
    const neptune = new Planet(neptuneRadius * sizeMultplier, textureNeptune);
    const neptuneMesh = neptune.createPlanet();
    const neptuneOrbit = createOrbit(neptuneMesh, neptuneDistance * distanceMultiplier);
    neptuneOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.77), THREE.MathUtils.degToRad(131.784), 0));

    // pluto
    const texturePluto = textureLoader.load('public/textures/pluto.jpg');
    const { radius: plutoRadius, distanceToSun: plutoDistance} = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * sizeMultplier, texturePluto);
    const plutoMesh = pluto.createPlanet();
    const plutoOrbit = createOrbit(plutoMesh, plutoDistance * distanceMultiplier);
    plutoOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(17.16), THREE.MathUtils.degToRad(110.299), 0));

    return {
        sunMesh,
        orbits: {
            mercury: mercuryOrbit,
            venus: venusOrbit,
            earth: earthOrbit,
            moon: moonOrbit,
            mars: marsOrbit,
            jupiter: jupiterOrbit,
            saturn: saturnOrbit,
            uranus: uranusOrbit,
            neptune: neptuneOrbit,
            pluto: plutoOrbit
        },
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
    };
}