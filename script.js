// return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice(){
    switch(Math.floor(Math.random()*3)+1){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

//plays single round of Rock Paper Scissors
function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
}