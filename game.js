// this game is rock paper scissors

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
        userChoice = prompt("That is not a valid input!");
    }

    if (userChoice == "R"){
        return "rock";
    } else if (userChoice == "P"){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    console.log(`The computer played ${computerChoice} and you played ${humanChoice}.`)

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




