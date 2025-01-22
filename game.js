/* January 2025
This is a classic game of rock paper scissors. The user plays five rounds against the computer.
Rock beats scissors, scissors beats paper, and paper beats rock.
*/

//define global variables
let humanScore = 0;
let computerScore = 0;

//this function randomizes the computer's choice and returns that string
function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0){
        return "rock";
    } else if (compChoice == 1){
        return "paper";
    } else {
        return "scissors";
    }

}

// this function asks the user for their choice and returns that string
function getHumanChoice(){
    let possibleChoices = ["R", "P", "S"];

    let userChoice = prompt("Enter your choice: R, P, S").toUpperCase();
    
    while (!possibleChoices.includes(userChoice)){
        userChoice = prompt("That is not a valid input! Please enter a different input: R, P, S").toUpperCase();
    }

    if (userChoice == "R"){
        return "rock";
    } else if (userChoice == "P"){
        return "paper";
    } else {
        return "scissors";
    }
}

// this function plays one round of r,p,s
function playRound(humanChoice, computerChoice){
    
    if (humanChoice == computerChoice) {
        console.log(`You tied with ${humanChoice}!`);
    }else if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "paper") ||  
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`You lost :( ${humanChoice} loses to ${computerChoice}`);
        computerScore += 1;
    }
}

//this function allows the player to play one full game with 5 rounds
function playGame(){
 
    for (let i = 0; i < 5; i ++){
        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human, computer);
        console.log(`Computer's score: ${computerScore}`);
        console.log(`Your score: ${humanScore}`);
    }

    console.log(`Final Score: \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`)
    if (humanScore > computerScore){
        console.log("You beat the computer!");
    } else if (computerScore > humanScore){
        console.log("You lost to the computer");
    } else {
        console.log("You tied with the computer")
    }
}


playGame();



