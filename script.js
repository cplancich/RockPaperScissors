// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper

// Prompt user to make a choice of R, P, or S
function rockPaperScissors() {
var charactersChoice = prompt("What is your choice? R, P, or S");

var choices = ["R", "P", "S"];

// Verify user has chosen one of these three options
// if (charactersChoice != choices) {
//     alert("You must choose R, P, or S!");
// }
// Confirm user choice

// Generate random choice for computer

// Creates a random number between 0 and 2 from var choices
var compChoice = Math.floor(Math.random() * choices.length);

// Shows the randomly generated array number as a letter
var compLetter = choices[compChoice];
console.log(compLetter);

alert("Computer chose "+ compLetter);
// Compare user choice to computer's

    // IF we meet a winning condition, you win! is displayed
    if ((charactersChoice==="R" && compLetter==="S")||(charactersChoice==="P" && compLetter==="R")||(charactersChoice==="S"&&compLetter==="P")) {
        // tally the win
        alert("You won!");
    }
    // IF there is a tie
    // tally the tie
    else if ((charactersChoice==="R" && compLetter==="R")||(charactersChoice==="P" && compLetter==="P")||(charactersChoice==="S"&&compLetter==="S")) {
        alert("it's a tie!");
    }
    else {
        alert("you lose!");
    }

    // IF we meet a loss condition, you lose! is displaye
    // Tally the loss

// Confirm if user wants to play again

}

rockPaperScissors();