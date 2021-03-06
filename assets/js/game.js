
//LOGIC MAP

/* Set VARIABLES
    - 1. Variable for cpuGoal: Randomly generated
    - 2. Variable for userScore set to 0 to start
    - 3. Variable for each crystal/button: Red, Yellow, Green, Blue
    - 4. Varable for  Wins set to 0 to start;
    - 5. Variable for Losses set to 0 to start;
    - 6. Variable for display areas (goal, wins, losses, totalscore)

- - - - - GAME PLAY FLOW - - - - - - - - - -  - -
    1. Generate Random CPU Goal
    2. On Click of Button, it will add to the userScore total
    3. If userScore equals cpuGoal
             - You Win
             -Increment Wins plus 1
        Else
            -You Lose
            -Increment Losses plus 1
        
    4. Reset back to deflaut userScore, Generate new number for buttons, startGame over again
*/


/* * *  GLOBAL VARIABLES * * */

//Set randomly generated number between a range
function getRandomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin) + myMin);
  }

//Set CPU with randomly generated number between 19-120
var cpuGoal = getRandomRange(19, 120); 
var cpuStore = $("#cpu").html(cpuGoal);

var userScore = 0;
var totalScore = $("#total");
totalScore.text(userScore);

var wins = 0;
var winsStore = $("#wins").html(wins);

var losses = 0;
var lossesStore = $("#losses").html(losses);


//Set Crystal gems with randomly generated number between 1-12
var redCrystal = getRandomRange(1, 12);
var greenCrystal = getRandomRange(1, 12);
var yellowCrystal = getRandomRange(1, 12);
var blueCrystal = getRandomRange(1, 12);

// Test Wins & Losses
function winLoss(){
    if (userScore > cpuGoal) {
        alert("Sorry, you lost, try again!");
        losses++;
        lossesStore.text(losses);
        reset();
        startGame();
    } else if (userScore === cpuGoal) {
        alert("Wooohooo! You WON!!!");
        wins++;
        winsStore.text(wins);
        reset();
        startGame();
    }
}

// Reset
function reset(){
    userScore = 0;                          // Set user back to 0
    totalScore.text(userScore);             // Display user on screen to O
    redCrystal = getRandomRange(1, 12);     // Set New Random Number to crystals
    greenCrystal = getRandomRange(1, 12);   // "
    yellowCrystal = getRandomRange(1, 12);  // "
    blueCrystal = getRandomRange(1, 12);    // "
    cpuGoal = getRandomRange(19, 120);      // Set New Random Number to CPU
    cpuStore.text(cpuGoal);                 // Display brand new CPU  on screen
}

function updateScore(val){
    //console.log(val);
    userScore += val;
    totalScore.text(userScore);
    winLoss();
}

//Start Game
function startGame(){

    $(".redCrystal").on("click", function() {
        updateScore(redCrystal);
    });

    $(".greenCrystal").on("click", function(){
        updateScore(greenCrystal);
    });

    $(".yellowCrystal").on("click", function(){
        updateScore(yellowCrystal);
    });

    $(".blueCrystal").on("click", function(){
        updateScore(blueCrystal);
    });

}

startGame();