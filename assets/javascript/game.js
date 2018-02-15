    // Grab DOM/HTML Elements and store in variables
    var yourGuessHTML = document.getElementById('your-guess');
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
    var yourGuess = [];

    // Generate a computer choice at random
    var computerGuess = choices[Math.floor(Math.random() * choices.length)];
      console.log("The Computer guess is " + computerGuess);

    // Reset Game
    var reset = function() {
      guessesLeft = 10;
      yourGuess = [];
      computerGuess = choices[Math.floor(Math.random() * choices.length)];
      console.log("The New Computer guess is " + computerGuess);
    }

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();
        console.log(userGuess);

      //Make sure only letters can be pressed
      for (var i = 0; i < choices.length; i++ ) {
        if (userGuess.toLowerCase() === choices[i]) {
          yourGuess.push(userGuess);
          console.log("Your letter was added");
  

      //Set condition for wins and reset
        if (userGuess === computerGuess) {
          wins++;
          reset();
        } else {
          guessesLeft--;
        } 

        if (guessesLeft === 0) {
          losses++;
          reset();
        }



        //restrict only to letters
        // if (choicesIndex < 0) {
        //   console.log("That is not a letter");
        // }

        // else {
        //   (userGuess !== choices.keys()) 
        //   alert("You suck!");
        // }
        

        // Write results to HTML
        yourGuessHTML.textContent = yourGuess;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;
      
      }
    }

    };
