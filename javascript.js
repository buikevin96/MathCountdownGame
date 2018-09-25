var playing = false; // Game starts at not playing
var score;
var action;
var timeremaining;

// When startReset button is clicked
document.getElementById("startReset").onclick = function(){

        // If we are playing
        if(playing == true){
            location.reload(); // Reloads the page
        }else{
            playing = true; // Change playing variable to true
            score = 0; // Set score to 0
            //Changes the HTML of scorevalue to the actual score
            document.getElementById("scorevalue").innerHTML = score;
            // Changes the display from none to block
            document.getElementById("timeRemaining").style.display = "block"; // Reveals the timer
            show("timeRemaining");
            timeremaining = 60;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;

            //Hide Game over Box
            hide("gameOver");
            document.getElementById("startReset").innerHTML = "Reset Game"; // Changes the startReset button text

            startCountdown();
            generateQA();
        }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;

        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        // Game Over
        if(timeremaining == 0){
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
            hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startReset").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){

}