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



// User Move Selection - All in one function
function selectUserMove(userChoice) {

    // Check if the timer has started
    if (!gameState.gameStarted) {
        return; // Exit early if the timer hasn't started
    }

    if (userChoice !== null) {
        // Play the user move selection sound
        userMoveSelectSound.play();
    }

    // Check if the timer is still running
    if (gameState.count === 0) {
        return; // Exit early if the timer has ended
    }


    // Use switch statement to set the image path based on the user's choice
    //let imagePath;
    switch (userChoice) {
        case 'scissors':
            imagePath = "Images/scissorsplayerplay.png";
            selectedMove = "scissors";
            break;
        case 'paper':
            imagePath = "Images/paperplayerplay.png";
            selectedMove = "paper";
            break;
        case 'rock':
                imagePath = "Images/rockplayerplay.png";
                selectedMove = "rock";
                break;
        default:
            // Default to rock if an invalid choice is provided
            imagePath = "Images/rockplayerplay.png";
            break;
    }
    
    userMovePlayed = true;
    //console.log("User selected: " + imagePath + " (" + selectedMove + ")"); // Proceed with game logic
    //userChoice = userMoves;



    // Set the source (src) attribute of the image to the constructed path
    userMoves = selectedMove;

    //shufflePlayerMoves();

    // Call function to let the computer make its move (randomly)
    const computerChoice = generateComputerMove();
    computerMoves = computerChoice;

    // Log the computer's move
    //console.log("Computer selected: " + computerImagePath + computerMoves);

}




// Function to let the computer make its move (randomly)
function generateComputerMove() {
    const computerMovesList = ['rock', 'paper', 'scissors'];
    const computerSelection = Math.floor(Math.random() * computerMovesList.length)
    const computerChoice = computerMovesList[computerSelection];

    computerImagePath = `Images/${computerChoice.toLowerCase()}computerplay.png`;
   // computerMoveImage.src = computerImagePath;

   computerMoves = computerChoice;

     // Return the computer's choice
     return computerChoice;
}



// Function to reset player moves to default values
function resetPlayerMoves() {
    //console.log ('Players moves resetted');
// If game count is 5, reset player moves to rock
if (gameState.count === 5) {
    imagePath = "Images/rockplayerplay.png";
    computerImagePath = "Images/rockcomputerplay.png";
    
    userMoveDisplay.src = imagePath;
    //userMoveDisplay.style.display = 'block'; // Show the user's move image
    computerMoveDisplay.src = computerImagePath;
}
}