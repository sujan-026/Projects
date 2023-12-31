// Function to create and append a moon to the DOM
function addMoon(top, left) {
    const moon = document.createElement("div");
    moon.className = "moon";
    moon.style.top = top + "vh";
    moon.style.left = left + "px";
    moon.style.borderRadius = '100%';
    document.body.appendChild(moon);
}

// Add Jupiter
const jupiter = document.getElementById("jupiter");

// Add moons to Jupiter
addMoon(60, 520); // Io
addMoon(40, 690); // Europa
addMoon(50, 660); // Ganymede
addMoon(30, 530); // Callisto
