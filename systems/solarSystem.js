import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { fetchPlanetData } from '../API/planetAPI.js';


function createOrbit(mesh, distance, eccentricity){
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

// Creates the Solarsystem
export async function solarSystemBuilder(meshes, distanceMultiplier){
    const { distanceToSun: mercuryDistance, eccentricity: mercuryEccentricity, sideralOrbit: mercurySideralOrbit } = await fetchPlanetData("mercury");
    const mercuryOrbit = createOrbit(meshes.mercury, mercuryDistance * distanceMultiplier, mercuryEccentricity);
    mercuryOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(7.00), THREE.MathUtils.degToRad(48.331), 0));
    const mercuryOrbitParams = {distance: mercuryDistance * distanceMultiplier, eccentricity: mercuryEccentricity, sideralOrbit: mercurySideralOrbit, mesh: meshes.mercury};

    const { distanceToSun: venusDistance, eccentricity: venusEccentricity, sideralOrbit: venusSideralOrbit } = await fetchPlanetData("venus");
    const venusOrbit = createOrbit(meshes.venus, venusDistance * distanceMultiplier, venusEccentricity);
    venusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(3.39), THREE.MathUtils.degToRad(76.680), 0));
    const venusOrbitParams = {distance: venusDistance * distanceMultiplier, eccentricity: venusEccentricity, sideralOrbit: venusSideralOrbit, mesh: meshes.venus};
    
    const { distanceToSun: earthDistance, eccentricity: earthEccentricity, sideralOrbit: earthSideralOrbit } = await fetchPlanetData("earth");
    const earthOrbit = createOrbit(meshes.earth, earthDistance * distanceMultiplier, earthEccentricity);
    const earthOrbitParams = {distance: earthDistance * distanceMultiplier, eccentricity: earthEccentricity, sideralOrbit: earthSideralOrbit, mesh: meshes.earth};

    const { eccentricity: moonEccentricity, sideralOrbit: moonSideralOrbit } = await fetchPlanetData("moon");
    const moonOrbitRadius = 384400 * 5; // average distance from Earth to Moon
    const moonOrbit = createOrbit(meshes.moon, moonOrbitRadius * distanceMultiplier, moonEccentricity);
    meshes.earth.add(moonOrbit);
    moonOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(5.145), THREE.MathUtils.degToRad(125.08), 0));
    const moonOrbitParams = {distance: moonOrbitRadius * distanceMultiplier, eccentricity: moonEccentricity, sideralOrbit: moonSideralOrbit, mesh: meshes.moon};

    const { distanceToSun: marsDistance, eccentricity: marsEccentricity, sideralOrbit: marsSideralOrbit } = await fetchPlanetData("mars");
    const marsOrbit = createOrbit(meshes.mars, marsDistance * distanceMultiplier, marsEccentricity);
    marsOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.85), THREE.MathUtils.degToRad(49.578), 0));
    const marsOrbitParams = {distance: marsDistance * distanceMultiplier, eccentricity: marsEccentricity, sideralOrbit: marsSideralOrbit, mesh: meshes.mars};

    const { distanceToSun: jupiterDistance, eccentricity: jupiterEccentricity, sideralOrbit: jupiterSideralOrbit } = await fetchPlanetData("jupiter");
    const jupiterOrbit = createOrbit(meshes.jupiter, jupiterDistance * distanceMultiplier, jupiterEccentricity);
    jupiterOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.31), THREE.MathUtils.degToRad(100.464), 0));
    const jupiterOrbitParams = {distance: jupiterDistance * distanceMultiplier, eccentricity: jupiterEccentricity, sideralOrbit: jupiterSideralOrbit, mesh: meshes.jupiter};

    const { distanceToSun: saturnDistance, eccentricity: saturnEccentricity, sideralOrbit: saturnSideralOrbit  } = await fetchPlanetData("saturn");
    const saturnOrbit = createOrbit(meshes.saturn, saturnDistance * distanceMultiplier, saturnEccentricity);
    saturnOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(2.49), THREE.MathUtils.degToRad(113.665), 0));
    const saturnOrbitParams = {distance: saturnDistance * distanceMultiplier, eccentricity: saturnEccentricity, sideralOrbit: saturnSideralOrbit, mesh: meshes.saturn};

    const { distanceToSun: uranusDistance, eccentricity: uranusEccentricity, sideralOrbit: uranusSideralOrbit  } = await fetchPlanetData("uranus");
    const uranusOrbit = createOrbit(meshes.uranus, uranusDistance * distanceMultiplier, uranusEccentricity);
    uranusOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(0.77), THREE.MathUtils.degToRad(74.006), 0));
    const uranusOrbitParams = {distance: uranusDistance * distanceMultiplier, eccentricity: uranusEccentricity, sideralOrbit: uranusSideralOrbit, mesh: meshes.uranus};

    const { distanceToSun: neptuneDistance, eccentricity: neptuneEccentricity, sideralOrbit: neptuneSideralOrbit } = await fetchPlanetData("neptune");
    const neptuneOrbit = createOrbit(meshes.neptune, neptuneDistance * distanceMultiplier, neptuneEccentricity);
    neptuneOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(1.77), THREE.MathUtils.degToRad(131.784), 0));
    const neptuneOrbitParams = {distance: neptuneDistance * distanceMultiplier, eccentricity: neptuneEccentricity, sideralOrbit: neptuneSideralOrbit, mesh: meshes.neptune};

    const { distanceToSun: plutoDistance, eccentricity: plutoEccentricity, sideralOrbit: plutoSideralOrbit } = await fetchPlanetData("pluto");
    const plutoOrbit = createOrbit(meshes.pluto, plutoDistance * distanceMultiplier, plutoEccentricity);
    plutoOrbit.quaternion.setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(17.16), THREE.MathUtils.degToRad(110.299), 0));
    const plutoOrbitParams = {distance: plutoDistance * distanceMultiplier, eccentricity: plutoEccentricity, sideralOrbit: plutoSideralOrbit, mesh: meshes.pluto};


    return{
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
    }
}