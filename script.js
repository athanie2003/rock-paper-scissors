// return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice(){
    switch(Math.floor(Math.random()*3)+1){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

//plays single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){

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
    let playerScore = computerScore = 0;
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const changingText = document.querySelector('h2');
    
    // while(playerScore < 5 && computerScore < 5){
          let playerChoice, computerChoice;

          changingText.innerText = `Choose:\nRock, Paper or Scissors?`;
          rockBtn.addEventListener('click', () => {playerChoice = 'Rock';});
          paperBtn.addEventListener('click', () => {playerChoice = 'Paper';});
          scissorsBtn.addEventListener('click', () => {playerChoice = 'Scissors';});

          if(rockBtn.clicked == true || paperBtn.clicked == true || scissorsBtn.clicked == true){


          changingText.innerText = playRound(playerChoice, computerChoice);
          console.log(changingText.innerText);
          if(changingText.innerText.includes('Win!')){
              playerScore++;
          }
          else if(changingText.innerText.includes('Lose!')){
              computerScore++;
          }

        console.log(`Player vs. Computer\n Score: ${playerScore}-${computerScore}`);
    }
    // }
    // console.log('Game Over');
    // if(playerScore > computerScore){
    //     console.log('You Win!');
    // }
    // else{
    //     console.log('You Lose!');
    // }
}

const playBtn = document.querySelector('.play');

function pressPlay(){
    playBtn.style.display = 'none';
    game();
}

playBtn.addEventListener('click', pressPlay);