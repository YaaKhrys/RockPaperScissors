/** let playerChoice = "";

let playerChoiceContainer = document.querySelector("#player-choice-container");

playerChoiceContainer.addEventListener("click"), handlePlayerChoice


/** let shapes = ["Rock", "Paper", "Scissors"]; // The shape variable containing the options the players can choose.


// The Computer random choice of shape selection function
function getComputerChoice (shapes) {

    return shapes[Math.floor(Math.random()*shapes.length)];
}

console.log(getComputerChoice(shapes));

// The Player selection of Shape

let playerInput = ["Rock", "Paper", "Scissors"]; 


// Varaibles to store the User and Computer moves (choices)
let userMove;
let computerMove;


// Setting Up User Move Selection

// Linking User move options div elements using their IDs
const rockChoice = docuemnt.getElementById("rockIcon")
const paperChoice = docuemnt.getElementById("paperIcon")
const scissorsChoice = docuemnt.getElementById("scissorsIcon")


// Adding event listeners to the User move options div elements
rockChoice.addEventListener("click", () => userChooses("Rock"));
paperChoice.addEventListener("click", () => userChooses("Paper"));
scissorsChoice.addEventListener("click", () => userChooses("Scissors"));


// Generating Cmputer's Moves (Choices)

//Array of possible Computer choices
const computerMove = ["Rock", "Paper" "Scissors"];

// Generate a random index for computerMove
const randomIndex =  Math.floor(Math.random()*computerMove.length);

// Get the computer's choice using the random index
const computerMove = computerMove[randomIndex];


**/

