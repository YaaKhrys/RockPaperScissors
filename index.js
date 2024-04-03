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
const rockChoice = document.getElementById("rockIcon"); // Icon for the User rock move
const paperChoice = document.getElementById("paperIcon"); // Icon for the User paper move
const scissorsChoice = document.getElementById("scissorsIcon"); // Icon for the User scissors move
const playGame = document.getElementById("playIcon"); // Icon to play/start game
const pauseButton = document.querySelector("#pauseGameIcon .pause"); // Icon to pause game
const resetGame = document.getElementById("resetIcon"); // Icon to reset game
const userMoveDisplay = document.querySelector(".userMoveDisplay"); // Container that display's the user's moves
const computerMoveDisplay = document.querySelector(".computerMoveDisplay"); // Container that display's the computer's moves
const userScoreDisplay = document.querySelector("#userScore .theUserScore"); // Display area for the user's scores
const computerScoreDisplay = document.querySelector("#computerScore .theComputerScore"); // Display area for the computer's scores
const roundDisplay = document.querySelector("#roundsDisplay .roundsCountNumber"); //Display round number 
const annoucementDisplay = document.querySelector("#resultsAnnounceSection .announcementSection") //Display annoucement
const countdownDisplay = document.querySelector("#playTimer h2"); // Display game timer
const gameStartButton = document.getElementById("playGameIcon");
const welcomeBox = document.getElementById('welcomeBox');
const nextButton = document.getElementById('nextButton');
const introDialog = document.getElementById('introDialog');
const closeButton = document.querySelector('#introDialog #closeWindow');
const startButton = document.getElementById('start');
const welcomePauseSound = document.getElementById("welcomePauseGameSound");
const moveStatusText = document.querySelector("#status");
const userMovesSelection = document.getElementsByClassName("userMoveOptions");
const userMoveSelectSound = document.getElementById("userMovesSelectionSound");
const pauseDialogBox = document.getElementById('pauseDialogBox');
const resumeButton = document.getElementById('pauseDialogResume');
const userImages = document.querySelectorAll('#userMoveDisplayIcon .userMoveDisplay');
const computerImages = document.querySelectorAll('#computerMoveDisplayIcon .computerMoveDisplay');
const gameOverDialog = document.getElementById('gameOverDialog');
const gameOverText = document.getElementById('gameOverText');
const winGameSound = document.getElementById("userWinGameSound");
const loseGameSound = document.getElementById("userLoseGameSound");


// Event listener for the "Next" button to show the intro box
nextButton.addEventListener('click', function() {
    // Hide the welcome box
    welcomeBox.style.display = 'none';

    // Show the intro box
    introDialog.style.visibility = 'visible';

    // Set the flag to true to indicate that the next button has been clicked
    nextButtonClicked = true;

    // Play the game sound
    playWelcomePauseGameSound();
});

// Function to close the intro dialog
function closeIntroDialog() {
    // Hide the intro dialog
    introDialog.style.visibility = 'hidden';

    // Pause the game sound
    welcomePauseSound.pause();
}

// Event listener for the close button to close the intro dialog
closeButton.addEventListener('click', closeIntroDialog);

// Function to play the game sound
function playWelcomePauseGameSound() {
     // Play the game sound
     welcomePauseSound.play()
     .then(() => {
         // Sound played successfully
         //console.log("Sound played successfully");
     })
     .catch(error => {
         // Log the error
         //console.error("Failed to play sound:", error);
     });
}

// Event listener for starting the game when the start button is clicked
startButton.addEventListener('click', function() {
    // Close the intro dialog
    closeIntroDialog();
});


function playUserMovesSound() {
    // Check if any of the user move options has been clicked
    if (userMovesSelectionClicked) {
        // Play the game sound
        userMoveSelectSound.play();
    }
}



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