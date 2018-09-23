var playing = false; // Game starts at not playing
var score;

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

            document.getElementById("startReset").innerHTML = "Reset Game"; // Changes the startReset button text

        }
}