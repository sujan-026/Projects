const planetName = document.createElement('div');
planetName.style.position = 'absolute';
planetName.style.top = '10vh';
planetName.style.left = '15px';
planetName.style.fontSize = '25px';
planetName.style.color = 'white'
planetName.style.visibility = 'hidden';
planetName.innerHTML = hidePlanetName();
document.body.appendChild(planetName);

planetName.addEventListener('click', showPlanetName);

function showPlanetName(name){
    planetName.innerHTML = name;
    planetName.style.visibility = 'visible';
    console.log(name);
}

function hidePlanetName() {
    planetName.style.visibility = 'hidden';
}
