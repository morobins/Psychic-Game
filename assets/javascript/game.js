    // Grab DOM/HTML Elements and store in variables
    var yourGuessHTML = document.getElementById('your-guess');
    // var computerGuessHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guesses-left'); 
    var computerGuessHTML = document.getElementById('computer-guess'); 

    // Create a variable array to hold possible computer choices (r,p,s)
    var choices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Create variables for wins/losses
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var yourGuess = event.key.toLowerCase();
  

      // Generate a computer choice at random
      var computerGuess = choices[Math.floor(Math.random() * choices.length)];

      // // Check user's guess against computer's choice with if/else statements
      // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
      //   // Let's run the rest of the game

      //   if ((userGuess === "r") && (computerGuess === "s")) {
      //     wins++;
      //   } else if ((userGuess === "r") && (computerGuess === "p")) {
      //     losses++;
      //   } else if ((userGuess === "s") && (computerGuess === "r")) {
      //     losses++;
      //   } else if ((userGuess === "s") && (computerGuess === "p")) {
      //     wins++;
      //   } else if ((userGuess === "p") && (computerGuess === "s")) {
      //     losses++;
      //   } else if ((userGuess === "p") && (computerGuess === "r")) {
      //     wins++;
        if (yourGuess === computerGuess) {
          wins++;
        } else {
          guessesLeft--;
        } 

        if (guessesLeft === 0) {
          losses++;
        }

        // Write results to HTML
        yourGuessHTML.textContent = yourGuess;
        // computerGuessHTML.textContent = computerGuess;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        // tiesHTML.textContent = ties;
        guessesLeftHTML.textContent = guessesLeft;

      // } else {
      //   alert("you don't know how to play rock paper scissors");
      // }

      

    };
