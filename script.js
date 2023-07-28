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
    changingText.innerText = playRound(choice, computerChoice);
    if(changingText.innerText.includes('Win!')){
        playerScore++;
        console.log('testing');
    }
    else if(changingText.innerText.includes('Lose!')){
        computerScore++;
        console.log('testing2');
    }
    console.log(`p: ${playerScore}`);
    console.log(`c: ${computerScore}`);
    score.innerText = `Player vs. Computer\n Score: ${playerScore}-${computerScore}`;
    playBtn.innerText = 'Next';
    playBtn.style.display = 'block';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function checkWinner(){
    console.log('Game Over');
    if(playerScore > computerScore){
        console.log('You Win!');
    }
    else{
        console.log('You Lose!');
    }
}

function game(){
    score.innerText = `Player vs. Computer\n Score: ${playerScore}-${computerScore}`;
    changingText.innerText = `Choose:\nRock, Paper or Scissors?`;
    computerChoice = getComputerChoice();
}
    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        changingText.innerText = `Choose:\nRock, Paper or Scissors?`;
    });

    rockBtn.addEventListener('click', () => {
        updateScore('Rock');
    });
    paperBtn.addEventListener('click', () => {
        updateScore('Paper');
    });
    scissorsBtn.addEventListener('click', () => {
        updateScore('Scissors');
    });