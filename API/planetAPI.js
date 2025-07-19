/*
Method to fetch data from https://api.le-systeme-solaire.net/
*/



//Api communication - fetches the radius of a given planet their distance to the sun etc.
//Source: Bro Code - "How to FETCH data from an API using JavaScript" link: https://www.youtube.com/watch?v=37vxWr0WgQk
export async function fetchPlanetData(planet){
    try {
        const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/"+planet);
        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        return {
            radius: data.meanRadius,
            distanceToSun: data.semimajorAxis, // distance to the sun
            eccentricity: data.eccentricity, // the degree of deviation from a perfect circle
            sideralOrbit: data.sideralOrbit, // the time it takes for the planet to complete one orbit around the sun in earth days
        };
    } catch (error) {
        console.error(error);
        return 1;
    }
}