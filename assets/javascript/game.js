var userWon = false;
var userLost = false;


$(document).ready(function(){
    
    //The values assigned to each crystal color
    var redCrystalVal;
    var blueCrystalVal;
    var orangeCrystalVal;
    var greenCrystalVal;

    //The number the user is trying to achive
    var targetVal;

    //The value the user currently has 
    var userVal;

    // If the user has Lost the round
    var userLost = false;

    // If the user has won the round
    userWon = false;

    //Tally of games won or lost added to after each round depending on outcome. 
    var gamesWon = 0;
    var gamesLost = 0;

    //calls a new game
    newGame();

    //When a crystal is clicked...
    $(".crystal").on("click", function() {
        console.log("You clicked a crystal");
            
        if(!userLost && !userWon) {
            if(this.value == "red") {
                userVal += redCrystalVal;
            }

            if(this.value == "blue") {
                userVal += blueCrystalVal;
            }

            if(this.value == "orange") {
                userVal += orangeCrystalVal;
            }

            if(this.value == "green") {
                userVal += greenCrystalVal;
            }
            if(userVal != 0) {
                $("#win-lose-status").empty().attr("class", "");
                console.log("Clear alert");
            }
        } else if (userLost) {
            newGame();
            gamesLost ++;
            $("#user-losses").text("Losses: " + gamesLost);
            $("#win-lose-status").attr("class", "alert alert-danger").text("You lost. Click a crystal to play again.");
            
        } else if (userWon) {
            newGame();
            gamesWon ++;
            $("#user-wins").text("Wins: " + gamesWon);
            $("#win-lose-status").attr("class", "alert alert-success").text("You Won!. Click a crystal to play again.");
        }

        
        
        changeWinLossStatus();
        $("#user-score").text(userVal);
    })

    //Creates a new game for user
    function newGame() {
        userVal = 0;
        redCrystalVal = getRandomInt(1, 13);
        blueCrystalVal = getRandomInt(1, 13);
        orangeCrystalVal = getRandomInt(1, 13);
        greenCrystalVal = getRandomInt(1, 13);
        targetVal = getRandomInt(19, 121);
        $("#target-score").text(targetVal);
        $("#user-score").text(userVal);
        userWon = false;
        userLost = false;
        $("#user-wins").text("Wins: " + gamesWon);
        $("#user-losses").text("Losses: " + gamesLost);
        
    }

    // Returns a random int between a min and max. Maximum is exclusive and the minimum is inclusive
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // A win and loss status change
    function changeWinLossStatus() {
        if(userVal === targetVal) {
            userWon = true;
        } else if (userVal > targetVal) {
            userLost = true;
        }
    }

})


