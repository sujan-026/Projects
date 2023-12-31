// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".keys").length

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".keys")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });

}

// Function to mkae sound based on the key pressed
function makeSound(key){

    // Switch statements
    switch (key) {
        case "q":
            var tom1 = new Audio("sounds/key01.mp3")
            tom1.play();
            break;

        case "w":
            var tom2 = new Audio("sounds/key02.mp3")
            tom2.play();
            break;  

        case "e":
            var tom3 = new Audio("sounds/key03.mp3")
            tom3.play();
            break; 

        case "r":
            var tom4 = new Audio("sounds/key04.mp3")
            tom4.play();
            break; 

        case "t":
            var snare = new Audio("sounds/key05.mp3")
            snare.play();
            break; 
        case "y":
            var crash = new Audio("sounds/key06.mp3")
            crash.play();
            break;

        case "u":
            var kickbass = new Audio("sounds/key07.mp3")
            kickbass.play();
            break;

        case "i":
            var key08 = new Audio("sounds/key08.mp3")
            key08.play();
            break;

        default:
            console.log(buttonInnerHTML)
            break;
    }
}


// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);


});

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
