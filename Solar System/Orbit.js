const orbitContainer = document.querySelector('.orbit-container');
const planet = document.getElementById('planet');

// Set the properties of the orbit
//Limit is 300
const orbitRadius = 100; // Adjust the radius as needed
const orbitSpeed = 2; // Adjust the speed as needed

let angle = 0;

function animatePlanet() {
    const x = orbitRadius * Math.cos(angle);
    const y = orbitRadius * Math.sin(angle);

    planet.style.transform = `translate(${x}px, ${y}px)`;

    angle += orbitSpeed * 0.01;

    requestAnimationFrame(animatePlanet);
}

animatePlanet();