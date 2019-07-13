
$(document).ready(function(){

    let targetNumber = 0;

    let randCrystal1 = 0;
    let randCrystal2 = 0;
    let randCrystal3 = 0;
    let randCrystal4 = 0;

    let userTotal = 0;
    let totalWins = 0;
    let totalLosses = 0;

//generate a random number between 1 and 12 for each crystal 
function randomNumbers(){
    randCrystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    randCrystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    randCrystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    randCrystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    targetNumber = Math.floor(Math.random() * (200 - 19) + 19);
}

//will need a function to reset the variables, regenerate a random number for the crystals and the target number
function resetGame(){
    //regen random numbers for crystals and target number 
    randomNumbers();

    //reset user total
    userTotal = 0;

    //reset displayed values
    $("#usertotaldisplay").text(userTotal);
    $("#targetnumberdisplay").text(targetNumber);
}

//checks if the user toal is equal to the target number
//if yes, start over and add to wins
//if over the guess, start over and ad to losses
function checkWin(){
    if (userTotal === targetNumber){
        totalWins+=1; 
        $("#wins").text("Wins: " + totalWins);
        resetGame();
        // console.log("A win: " + totalWins);
        
    }
    else if (userTotal > targetNumber){
        totalLosses+=1;
        $("#losses").text("Losses: " + totalLosses);
        resetGame();
        // console.log("A loss: " + totalLosses);
    }
};

//on load, generate 1st set of random for crystals and target guess
randomNumbers();

//display tagrget number 
$("#targetnumberdisplay").text(targetNumber);


//clickable crystal images which will add the random number to the player total      
$("#crystal1").click(function () { 
    userTotal += randCrystal1;
    $("#usertotaldisplay").text(userTotal);
    checkWin();
    // console.log(userTotal);
    });

$("#crystal2").click(function () { 
    userTotal += randCrystal2
    $("#usertotaldisplay").text(userTotal);
    checkWin();
    // console.log(userTotal);
    });

$("#crystal3").click(function () { 
    userTotal += randCrystal3
    $("#usertotaldisplay").text(userTotal);
    checkWin();
    // console.log(userTotal);
    });

$("#crystal4").click(function () { 
    userTotal += randCrystal4
    $("#usertotaldisplay").text(userTotal);
    checkWin();
    // console.log(userTotal);
    });
});


