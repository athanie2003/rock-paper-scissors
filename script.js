const playBtn = document.querySelector('.play');
let playerScore = computerScore = 0;
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const changingText = document.querySelector('h2');
const score = document.querySelector('h1');

let playerChoice, computerChoice;

function pressPlay(){
    playBtn.style.display = 'none';
    game();
}

playBtn.addEventListener('click', pressPlay);

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

function updateScore(choice){
    changingText.innerText = `Computer Chooses: ${computerChoice}\n`;
    changingText.innerText += playRound(choice, computerChoice);
    if(changingText.innerText.includes('Win!')){
        playerScore++;
    }
    else if(changingText.innerText.includes('Lose!')){
        computerScore++;
    }
    score.innerText = `Player vs. Computer\n Score: ${playerScore}-${computerScore}`;
    playBtn.innerText = 'Next';
    playBtn.style.display = 'block';
    playBtn.style.cssText = 'margin-top: 50px';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function checkWinner(){
    if(playerScore === 5 || computerScore === 5){
    changingText.innerText = 'Game Over\n';
    console.log('Game Over');
    if(playerScore > computerScore){
        changingText.innerText += 'You Win!';
    }
    else{
        changingText.innerText += 'You Lose!';
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playBtn.style.display = 'none';
    }
}

function game(){
    score.innerText = `Player vs. Computer\n Score: ${playerScore}-${computerScore}`;
    changingText.innerText = `Choose:\nRock, Paper or Scissors?`;
    computerChoice = getComputerChoice();
}

// putting buttons in a function causes buttons to perform more than once
playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        changingText.innerText = `Choose:\nRock, Paper or Scissors?`;
});

rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;

rockBtn.addEventListener('click', () => {
        updateScore('Rock');
        checkWinner();
});
paperBtn.addEventListener('click', () => {
        updateScore('Paper');
        checkWinner();
});
scissorsBtn.addEventListener('click', () => {
        updateScore('Scissors');
        checkWinner();
});