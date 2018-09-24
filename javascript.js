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
            timeremaining = 60;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            document.getElementById("startReset").innerHTML = "Reset Game"; // Changes the startReset button text

            startCountdown();
        }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;

        // Game Over
        if(timeremaining == 0){
            stopCountdown();
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
        }
    }. 1000);
}

function stopCountdown(){
    clearInterval(action);
}