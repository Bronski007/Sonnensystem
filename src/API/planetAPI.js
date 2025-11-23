/*
Method to fetch data from https://api.le-systeme-solaire.net/

Update: Now using local file bodies.json instead of API due to authorization/CORS restrictions
*/



// Api communication - fetches the radius of a given planet their distance to the sun etc.
// Source: Bro Code - "How to FETCH data from an API using JavaScript" link: https://www.youtube.com/watch?v=37vxWr0WgQk
export async function fetchPlanetData(planet){
    try {
        const response = await fetch("bodies.json");
        const data = await response.json();
        const planetData = data.bodies.find(p => p.id.toLowerCase() === planet.toLowerCase() || (p.englishName && p.englishName.toLowerCase() === planet.toLowerCase()));

        if (!planetData) throw new Error("Could not find planet!");
        return {
            radius: planetData.meanRadius,
            distanceToSun: planetData.semimajorAxis, // distance to the sun
            eccentricity: planetData.eccentricity, // the degree of deviation from a perfect circle
            sideralOrbit: planetData.sideralOrbit, // the time it takes for the planet to complete one orbit around the sun in earth days
        };
    } catch (error) {
        console.error(error);
        return 1;
    }
}