// Write code for the game Rock paper and scissors to be played in
// browser console.
// It has 2 players - computer and the player.
// Both of them need to select one of Rock paper or scissors
// for each round
// Let's just a create a game for one round.
// We will need first the computer choice to be returned and stored
// Then we will need the users choice
// Based on that declare a winner.

// Get computer choice

let getRandomChoice = Math.floor(Math.random() * 100) + 1;

function getcomputerChoice() {
    if (getRandomChoice < 33) {
        return "Rock";
    } else if (getRandomChoice > 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let round = 0;

function getHumanChoice() {

    let input = prompt(`Round ${++round}\n\nGive your input\nChoose from: rock, paper or scissors.`);
    
    if (input == '' || input == null) {
        getHumanChoice();
    } else {
        firstLetter = input.charAt(0);
        firstLetterCap = firstLetter.toUpperCase();
        sliced = input.slice(1);
        slicedLowerCase = sliced.toLowerCase();
        finalWord = firstLetterCap + slicedLowerCase;
    }

    if (finalWord == "Rock" || finalWord == "Paper" || finalWord == "Scissors") {
        finalWord;
    } else {
        getHumanChoice();
    }

    return finalWord;
}

// Write the code to play 1 Round.
// rock > scissors
// scissors > paper
// paper > rock

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let computerChoice = getcomputerChoice();
        let humanChoice = getHumanChoice();
        
        if (humanChoice == "Rock" && computerChoice == "Scissors" ||
            humanChoice == "Scissors" && computerChoice == "Paper" ||
            humanChoice == "Paper" && computerChoice == "Rock") {
            console.log(`You won!!\n\nYour choice: ${humanChoice}\nComputer choice: ${computerChoice}\n\n${humanChoice} beats ${computerChoice}.\n\nYour score: ${++humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice == "Scissors" && computerChoice == "Rock" ||
                    humanChoice == "Paper" && computerChoice == "Scissors" ||
                    humanChoice == "Rock" && computerChoice == "Paper") {
                        console.log(`You Lost!!\n\nYour choice: ${humanChoice}\nComputer choice: ${computerChoice}\n\n${computerChoice} beats ${humanChoice}.\n\nYour score: ${humanScore}\nComputer score: ${++computerScore}`);
                    } else {
                        console.log(`It's a draw!! \n\nYou Both chose: ${humanChoice}\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
                    }
    }

    function finalResult() {

        if (humanScore > computerScore) {
            console.log(`CONGRATUALATIONS!!!\n\nYOU WON`);
        } else if (humanScore < computerScore) {
            console.log(`YOU LOST.\n\nREFRESH the page to play again.`)
        } else {
            let goldenRoundResponse = prompt('Do you want to play the golden round?');

            if(goldenRoundResponse = "y") {
                playRound();
                finalResult();
            } else {
                console.log('GAME OVER');
            }
        }        
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    finalResult();


}

playGame();