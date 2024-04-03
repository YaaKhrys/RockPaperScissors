// SetUp Variables
let userMove = "";
let computerMove = "";
let userScore = 0;   // Varaibles to store scores
let computerScore = 0;  // Varaibles to store scores
let playsInRound = 0;
const playsPerRound = 3; // Number of plays in each round
let round = 1;
let annoucement = "";
let timer = "";
let userMoveHistory = [];
let lastDisplayedMove = "";
let count = 5; // Initial countdown value
let shuffleInterval; // ShuffleInterval aaccessible
let gameStarted = false;
let gameReseted = false;
let gameOver = false;
let gamePaused = false;
let interval = null; // Variable to track the game state (paused or not)
let userMoves = "";
let computerMoves = "";
let nextButtonClicked = false;
let userMovesSelectionClicked = false;
let userMovePlayed = false;
let computerImagePath = "";
let imagePath = "";
//let userMove = document.getElementById("userRockDisplay");
//let computerMoveImage = document.getElementById("computerRockDisplay");



// References to HTML elements - Linking to IDs
const rockChoice = docuemnt.getElementById("rockIcon"); // Icon for the User rock move
const paperChoice = docuemnt.getElementById("paperIcon"); // Icon for the User paper move
const scissorsChoice = docuemnt.getElementById("scissorsIcon"); // Icon for the User scissors move
const playGame = docuemnt.getElementById("playIcon"); // Icon to play/start game
const pauseGame = docuemnt.getElementById("pauseIcon"); // Icon to pause game
const resetGame = docuemnt.getElementById("resetIcon"); // Icon to reset game
const userMoveDisplay = docuemnt.getElementById("userMoveDisplay"); // Container that display's the user's moves
const computerMoveDisplay = docuemnt.getElementById("computerMoveDisplay"); // Container that display's the computer's moves
const userScoreDisplay = docuemnt.getElementById("userScoreDisplay"); // Display area for the user's scores
const computerScoreDisplay = docuemnt.getElementById("computerScoreDisplay"); // Display area for the computer's scores


// Adding event listeners to the User move options div elements
rockChoice.addEventListener("click", function () {userChooses("Rock");});
paperChoice.addEventListener("click", function () {userChooses("Paper");});
scissorsChoice.addEventListener("click", function () {userChooses("Scissors");});


// Function to handle the user's move choice
function userChooses (move) {

    //Update's the user's move variable
    userChooses = move;

    // Display User's move ();
    displayUserMove ();
}




// Generating Cmputer's Moves (Choices)

function generateComputerMove () {

    //Array of possible Computer choices
    const computerMoves = ["Rock", "Paper" "Scissors"];

    // Generate a random index for computerMove
    const randomIndex =  Math.floor(Math.random()*computerMoves.length);

    computerMove = computerMoves[randomIdex];

    displayBothMoves();
}


// Function to display both player's moves after shuffling