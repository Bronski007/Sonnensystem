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
            radius: data.meanRadius,
            distanceToSun: data.semimajorAxis,
            eccentricity: data.eccentricity, // the degree of deviation from a perfect circle
            sideralOrbit: data.sideralOrbit, // the time it takes for the planet to complete one orbit around the sun in earth days
        };
    } catch (error) {
        console.error(error);
        return 1;
    }
}

function createOrbit(mesh, distance, eccentricity) {
    const orbit = new THREE.Object3D();
    
    const semiMajorAxis = distance; // semi-major axis is half the length of the longest diameter of the ellipse
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - Math.pow(eccentricity, 2)); // semi-minor axis is half the length of the shortest diameter of the ellipse
    const focalDistance = Math.sqrt(semiMajorAxis * semiMajorAxis - semiMinorAxis * semiMinorAxis); // focal distance is the distance from the center of the ellipse to the focus (where the sun is located)
    
    const curve = new THREE.EllipseCurve(-focalDistance, 0, semiMajorAxis, semiMinorAxis, 0, 2 * Math.PI, false, 0); // create an ellipse curve with its center shifted by -focalDistance on the x-axis, this ensures the Sun is positioned at the origin (0, 0) at the focus
    const points = curve.getPoints(200);
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, 0, p.y))); // convert points to 3D vectors for Three.js geometry
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const ellipse = new THREE.Line(geometry, material);
    orbit.add(ellipse);

    mesh.position.set(semiMajorAxis, 0, 0); // position the planet mesh at aphelion (farthest point on ellipse)
    orbit.add(mesh);

    return orbit;
}

// creates the planet and their orbit
export async function planetBuilder(sizeMultplier, distanceMultiplier){
    const textureLoader = new THREE.TextureLoader();

    // sun
    const sunSizeMultplier = 0.000001; // scaling down the sun size (prevent sun from scaling over merkur orbit)
    const textureSun = textureLoader.load('public/textures/sun.jpg');
    const { radius: sunRadius, distanceToSun: sunDistance } = await fetchPlanetData("sun");
    const sunGeometry = new THREE.SphereGeometry(sunRadius * sunSizeMultplier, 64, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({map: textureSun}); // use MeshBasicMaterial for sun to avoid lighting issues
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial)

    // mercury
    const textureMercury = textureLoader.load('public/textures/mercury.jpg');
    const { radius: mercuryRadius, distanceToSun: mercuryDistance, eccentricity: mercuryEccentricity, sideralOrbit: mercurySideralOrbit } = await fetchPlanetData("mercury");
    const mercury = new Planet(mercuryRadius * sizeMultplier, textureMercury);
    const mercuryMesh = mercury.createPlanet();
    const mercuryOrbit = createOrbit(mercuryMesh, mercuryDistance * distanceMultiplier, mercuryEccentricity);
    mercuryOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(7.00), THREE.MathUtils.degToRad(48.331), 0));
    const mercuryOrbitParams = {distance: mercuryDistance * distanceMultiplier, eccentricity: mercuryEccentricity, sideralOrbit: mercurySideralOrbit, mesh: mercuryMesh};

    // venus
    const textureVenus = textureLoader.load('public/textures/venus.jpg');
    const { radius: venusRadius, distanceToSun: venusDistance, eccentricity: venusEccentricity, sideralOrbit: venusSideralOrbit } = await fetchPlanetData("venus");
    const venus = new Planet(venusRadius * sizeMultplier, textureVenus);
    const venusMesh = venus.createPlanet();
    const venusOrbit = createOrbit(venusMesh, venusDistance * distanceMultiplier, venusEccentricity);
    venusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(3.39), THREE.MathUtils.degToRad(76.680), 0));
    const venusOrbitParams = {distance: venusDistance * distanceMultiplier, eccentricity: venusEccentricity, sideralOrbit: venusSideralOrbit, mesh: venusMesh};
    
    // earth
    const textureEarth = textureLoader.load('public/textures/earth_day.jpg');
    const { radius: earthRadius, distanceToSun: earthDistance, eccentricity: earthEccentricity, sideralOrbit: earthSideralOrbit } = await fetchPlanetData("earth");
    const earth = new Planet(earthRadius * sizeMultplier, textureEarth);
    const earthMesh = earth.createPlanet();
    const earthOrbit = createOrbit(earthMesh, earthDistance * distanceMultiplier, earthEccentricity);
    const earthOrbitParams = {distance: earthDistance * distanceMultiplier, eccentricity: earthEccentricity, sideralOrbit: earthSideralOrbit, mesh: earthMesh};

    // moon
    const textureMoon = textureLoader.load('public/textures/moon.jpg');
    const { radius: moonRadius, distanceToSun: moonDistance, eccentricity: moonEccentricity, sideralOrbit: moonSideralOrbit } = await fetchPlanetData("moon");
    const moonOrbitRadius = 384400 * 5; // average distance from Earth to Moon
    const moon = new Planet(moonRadius * sizeMultplier, textureMoon);
    const moonMesh = moon.createPlanet();
    const moonOrbit = createOrbit(moonMesh, moonOrbitRadius * distanceMultiplier, moonEccentricity);
    earthMesh.add(moonOrbit);
    moonOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(5.145), THREE.MathUtils.degToRad(125.08), 0));
    const moonOrbitParams = {distance: moonOrbitRadius * distanceMultiplier, eccentricity: moonEccentricity, sideralOrbit: moonSideralOrbit, mesh: moonMesh};

    // mars
    const textureMars = textureLoader.load('public/textures/mars.jpg');
    const { radius: marsRadius, distanceToSun: marsDistance, eccentricity: marsEccentricity, sideralOrbit: marsSideralOrbit } = await fetchPlanetData("mars");
    const mars = new Planet(marsRadius * sizeMultplier, textureMars);
    const marsMesh = mars.createPlanet();
    const marsOrbit = createOrbit(marsMesh, marsDistance * distanceMultiplier, marsEccentricity);
    marsOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.85), THREE.MathUtils.degToRad(49.578), 0));
    const marsOrbitParams = {distance: marsDistance * distanceMultiplier, eccentricity: marsEccentricity, sideralOrbit: marsSideralOrbit, mesh: marsMesh};

    // jupiter
    const textureJupiter = textureLoader.load('public/textures/jupiter.jpg');
    const { radius: jupiterRadius, distanceToSun: jupiterDistance, eccentricity: jupiterEccentricity, sideralOrbit: jupiterSideralOrbit } = await fetchPlanetData("jupiter");
    const jupiter = new Planet(jupiterRadius * sizeMultplier, textureJupiter);
    const jupiterMesh = jupiter.createPlanet();
    const jupiterOrbit = createOrbit(jupiterMesh, jupiterDistance * distanceMultiplier, jupiterEccentricity);
    jupiterOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.31), THREE.MathUtils.degToRad(100.464), 0));
    const jupiterOrbitParams = {distance: jupiterDistance * distanceMultiplier, eccentricity: jupiterEccentricity, sideralOrbit: jupiterSideralOrbit, mesh: jupiterMesh};

    // saturn 
    // TODO: Saturn Ringe!
    const textureSaturn = textureLoader.load('public/textures/saturn.jpg');
    const { radius: saturnRadius, distanceToSun: saturnDistance, eccentricity: saturnEccentricity, sideralOrbit: saturnSideralOrbit  } = await fetchPlanetData("saturn");
    const saturn = new Planet(saturnRadius * sizeMultplier, textureSaturn);
    const saturnMesh = saturn.createPlanet();
    const saturnOrbit = createOrbit(saturnMesh, saturnDistance * distanceMultiplier, saturnEccentricity);
    saturnOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(2.49), THREE.MathUtils.degToRad(113.665), 0));
    const saturnOrbitParams = {distance: saturnDistance * distanceMultiplier, eccentricity: saturnEccentricity, sideralOrbit: saturnSideralOrbit, mesh: saturnMesh};

    // uranus
    const textureUranus = textureLoader.load('public/textures/uranus.jpg');
    const { radius: uranusRadius, distanceToSun: uranusDistance, eccentricity: uranusEccentricity, sideralOrbit: uranusSideralOrbit  } = await fetchPlanetData("uranus");
    const uranus = new Planet(uranusRadius * sizeMultplier, textureUranus);
    const uranusMesh = uranus.createPlanet();
    const uranusOrbit = createOrbit(uranusMesh, uranusDistance * distanceMultiplier, uranusEccentricity);
    uranusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(0.77), THREE.MathUtils.degToRad(74.006), 0));
    const uranusOrbitParams = {distance: uranusDistance * distanceMultiplier, eccentricity: uranusEccentricity, sideralOrbit: uranusSideralOrbit, mesh: uranusMesh};

    // neptune
    const textureNeptune = textureLoader.load('public/textures/neptune.jpg');
    const { radius: neptuneRadius, distanceToSun: neptuneDistance, eccentricity: neptuneEccentricity, sideralOrbit: neptuneSideralOrbit } = await fetchPlanetData("neptune");
    const neptune = new Planet(neptuneRadius * sizeMultplier, textureNeptune);
    const neptuneMesh = neptune.createPlanet();
    const neptuneOrbit = createOrbit(neptuneMesh, neptuneDistance * distanceMultiplier, neptuneEccentricity);
    neptuneOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.77), THREE.MathUtils.degToRad(131.784), 0));
    const neptuneOrbitParams = {distance: neptuneDistance * distanceMultiplier, eccentricity: neptuneEccentricity, sideralOrbit: neptuneSideralOrbit, mesh: neptuneMesh};

    // pluto
    const texturePluto = textureLoader.load('public/textures/pluto.jpg');
    const { radius: plutoRadius, distanceToSun: plutoDistance, eccentricity: plutoEccentricity, sideralOrbit: plutoSideralOrbit } = await fetchPlanetData("pluto");
    const pluto = new Planet(plutoRadius * sizeMultplier, texturePluto);
    const plutoMesh = pluto.createPlanet();
    const plutoOrbit = createOrbit(plutoMesh, plutoDistance * distanceMultiplier, plutoEccentricity);
    plutoOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(17.16), THREE.MathUtils.degToRad(110.299), 0));
    const plutoOrbitParams = {distance: plutoDistance * distanceMultiplier, eccentricity: plutoEccentricity, sideralOrbit: plutoSideralOrbit, mesh: plutoMesh};

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
        },
        orbitParams: {
            mercury: mercuryOrbitParams,
            venus: venusOrbitParams,
            earth: earthOrbitParams,
            moon: moonOrbitParams,
            mars: marsOrbitParams,
            jupiter: jupiterOrbitParams,
            saturn: saturnOrbitParams,
            uranus: uranusOrbitParams,
            neptune: neptuneOrbitParams,
            pluto: plutoOrbitParams
        }
    };
}