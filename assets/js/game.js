
//LOGIC MAP

/* Set VARIABLES
    1. Variable for cpuGoal: Randomly generated
    - 2. Variable for userScore set to 0 to start
    3. Variable for each crystal/button: Red, Yellow, Green, Blue
    - 4. Varable for  Wins set to 0 to start;
    - 5. Variable for Losses set to 0 to start;
    - 6. Variable for display areas (goal, wins, losses, totalscore)
*/


/***  GLOBAL VARIABLES ***/

var cpuGoal = Math.floor(Math.random() * 120) + 19;
var cpuStore = $("#cpu").html(cpuGoal);

var userScore = 0;
var totalStore = $("#total").html(userScore);

var wins = 0;
var winsStore = $("#wins").html(wins);

var losses = 0;
var lossesStore = $("#losses").html(losses);