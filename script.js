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
function playRound(playerSelection, computerSelection){
    // playerSelection = playerSelection.toLowerCase();
    // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
       playerSelection === "Paper" && computerSelection === "Rock" ||
       playerSelection === "Scissors" && computerSelection === "Paper"
       ){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
       }
    else if(computerSelection === "Rock" && playerSelection === "Scissors" ||
    computerSelection === "Paper" && playerSelection === "Rock" ||
    computerSelection === "Scissors" && playerSelection === "Paper"
    ){
     return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return `It's a Tie!`;
}

function game(){
    let playerScore, computerScore = 0;
    for(let i = 1; i <= 5; i++){
        let playerChoice, computerChoice;
        while(true){
          playerChoice = prompt(`Round ${i}:\nRock, Paper or Scissors?`);
          playerChoice = playerChoice.toLowerCase();
          playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
          if(playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissors'){
            break;
          }
          else{
            console.log('Please type "Rock", "Paper", or "Scissors"');
          }
        }
        console.log(`Test Player Choice: ${playerChoice}`);

        computerChoice = getComputerChoice();
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        let round = playRound(playerChoice, computerChoice);
        console.log(round);
        if(round.includes('Win!')){
            playerScore++;
        }
        else if(round.includes('Lose!')){
            computerScore++;
        }
        else{
            i--;
        }
    }
}