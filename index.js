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


// Determine the winner
function determineWinner(userChoice, computerChoice) {

    // Rules to determine the winner
    if (userChoice === computerChoice) {
        // If both the user and computer make the same choice, it's a draw
        selectedChoice(userChoice, 'equals', computerChoice, 'its a Tie!' )
        return 'draw';


    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // If the user's choice beats the computer's choice, the user wins 
        selectedChoice(userChoice, 'beats', computerChoice, 'You Win!')
        return 'user';

    } else {
        // If neither of the above conditions is met, the computer wins
        selectedChoice(computerChoice, 'beats', userChoice, 'You Lose!')
        return 'computer';
    }

}



// To identify the win/lose icons based on selected player choice
function selectedChoice(userChoice, beatText, computerChoice, winText){
    let winner = userChoice === 'rock'? "Images/stonewinicon.png": 
    userChoice === 'paper'? "Images/paperwinicon.png": 
    "Images/scissorwin-3d-icon-in-front-view-png 1.png";

     let loser = computerChoice === 'rock'? "Images/stonewinicon.png": 
     computerChoice === 'paper'? "Images/paperwinicon.png": 
     "Images/scissorwin-3d-icon-in-front-view-png 1.png";

     annouceWin(winner, beatText, loser, winText);
}



 // Win/Lose/Draw Annoucement after each play
function annouceWin(winIconimg, beatText, loseIconimg, winText){
    let winIcon = document.getElementById("winIcon").children[0]
    let beat = document.getElementById("beatText").children[0]
    let loseIcon = document.getElementById("loseIcon").children[0]
    let win = document.getElementById("winText").children[0]

    //Annoucement statement string
    winIcon.src = winIconimg
    beat.innerHTML = beatText
    loseIcon.src = loseIconimg
    win.innerHTML = winText
}


// Function to display the results announcement section
function displayResultsAnnouncement() {
    // Set the visibility of the results announcement section to 'visible'
    resultsAnnounceSection.style.visibility = 'visible';

    // Set a timeout to hide the results announcement section after a couple of seconds
    setTimeout(function() {
        // Set the visibility of the results announcement section to 'hidden' after the timeout
        resultsAnnounceSection.style.visibility = 'hidden';
    }, 3000); // Adjust the timeout duration as needed (in milliseconds)
}

// Call the displayResultsAnnouncement function after player moves are played
displayResultsAnnouncement();




// Function to update the scores based on the result
function updateScore(result) {
    // Increment user score if the result is 'user'
    if (result === 'user') {
        userScore++;
    }
    // Increment computer score if the result is 'computer'
    else if (result === 'computer') {
        computerScore++;
    }
    // Update the score display on the UI
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    playsInRound++;
}



// Round count function
function roundCount() {
//Check status of round
if (playsInRound === 3){
    round++;

//Update rounds increament in UI
roundDisplay.textContent = round;

//Resets the plays per round to zero
playsInRound = 0;
} 
if (round === 3) {
    //console.log('Game over! Three rounds up. Thank you for playing!');
    gameState.gameOver = true; // Mark the game as over
    endGame(); // End the Game
}
}


// Function to check if the user has played in the current round
function checkUserMove() {
    if (!userMovePlayed) {
        // Log a message indicating that the user did not play
        //console.log("User did not play");
        moveStatusText.textContent = "You did not select a move.";
        clearInterval(interval); // Stop the countdown
        return;
    }
}



let gameState = {
    countdownInterval: null, // Holds the interval ID for the countdown
    count: 5, // Initial countdown value
    gameStarted: false,
    gamePaused: false, // Indicates whether the game is paused or not
    gameReseted: false,
    gameOver: false
};




// Function to update the countdown display
function updateCountdownDisplay() {
    const countdownDisplay = document.querySelector("#playTimer h2");
    countdownDisplay.textContent = `00:0${gameState.count}s`;
}



// Function to start the Timer Countdown
function startCountdown(){ 
    
    if (gameState.gameOver) {
        //console.log('Game over! Thanks for playing.');
        endGame();
        return; // Exit the function if the game is over
    }


    if (gameState.gamePaused) {
        //console.log("Checking", gameState.gamePaused);
        gameState.gamePaused = true;
    } else{

     interval = setInterval(() => {        
        gameState.count--; // Decrement the countdown value and Update the countdown display with the current count
        updateCountdownDisplay();

        //console.log(gameState, interval);
       if (gameState.count === 0){
       // Check if the user has played
       
       if (!userMovePlayed) {
        // Log a message indicating that the user did not play
        //console.log("User did not play");
        moveStatusText.textContent = "You did not select a move.\nClick Play button to continue play.";
        clearInterval(interval); // Stop the countdown
        gameState.count = 5;
        updateCountdownDisplay();
        gameState.gameStarted = false;
        return;
    } else {
    
    clearInterval(interval); // Stop the countdown
    gameState.count = 0;
    updateCountdownDisplay();    
       
        setTimeout(() => {
          
            
            // Check if the user has played
            //updateCountdownDisplay();
           shufflePlayerMoves();

           //Checking the win status
           const result = determineWinner(userMoves, computerMoves)

           // Win announcement
           //console.log(annoucementDisplay);
           displayResultsAnnouncement();

           // Update the score based on the result
           updateScore(result);

           //Update Round
            roundCount()


        
        //Add a delay of 3seconds before restarting the countdown
         setTimeout(() => {
            //console.log('Restarting countdown...');
            gameState.count = 5;
            updateCountdownDisplay();
             //Reset player move display images back to rock before countdown begins again  
             resetPlayerMoves();
             userMovePlayed = false;
             startCountdown(); // Restart the countdown


        }, 3000); // 1000 milliseconds = 2 seconds
    },2000);
    }}// Trigger the game logic when countdown finishes  
    }, 1000);  // Run the countdown every second    
}
 }


 function startGame(){
    startCountdown();
    gameState.gameStarted = true;
    //console.log("Game On!");
    statusCheck();
}


// Function to pause the game
function pauseGame() {
    if (!gameState.gamePaused) {
        clearInterval(interval);
        clearInterval(shuffleInterval);
        gameState.gamePaused = true;
        welcomePauseSound.play()
        updateCountdownDisplay();
        //console.log(gameState);
        //console.log("Game paused");
    }
}

function resumeGame(){
    if (gameState.gamePaused) { // If the game is paused
        gameState.gamePaused = false; // Update game state to indicate game is resumed
        startCountdown(); // Restart the countdown timer
        updateCountdownDisplay();
        welcomePauseSound.pause();
        //console.log("Game resumed"); // Log message
    }
}


// Function to toggle between starting and pausing/resuming the game
function togglePlay() {
    if (!gameState.gameStarted) {
        startGame();
    } else {
        if (gameState.gamePaused) {
            resumeGame();
        }
    }
}


function endGame() {
    clearInterval(interval); // Stop the timer

    displayGameOverDialog();
    // Any other tasks to end the game
}


function resetGlobalVariables() {
    playsInRound = 0;
    round = 1;
    userScore = 0;  
    computerScore = 0;
    roundDisplay.textContent = round;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    gameState.count = 5; // Initialize count to its initial value
    gameState.gamePaused = false;
    gameState.gameStarted = false;
    gameState.gameOver = false;
    updateCountdownDisplay();
}


// Function to reset the game
function resetTheGame() {
    if (gameState.gameOver) {
        gameState.gameReseted = true;
        // Reset global variables
        resetGlobalVariables();
        // Restart the countdown timer and update display
        //console.log("Game reseted");
    }
}