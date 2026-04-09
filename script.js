let humanScore = 0;
let computerScore = 0;
let resultDiv = document.getElementById("results");
let human = document.getElementById("human");
let computer = document.getElementById("computer");

const buttons = document.querySelectorAll(".choice");

function getComputerChoice() {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  const floor = 1;
  const ceiling = 3;

  let result = Math.floor(Math.random() * (ceiling - floor + 1) + floor);

  if (result === 1) {
    return rock;
  } else if (result === 2) {
    return paper;
  } else {
    return scissors;
  }
}

function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  let roundWinner = "";
  let winsNeeded = 5;
  let winnerDiv = document.getElementById("overallWinner");
  winnerDiv.textContent = "";

  if (humanScore === winsNeeded) {
    winnerDiv.textContent = "That's 5 Wins! Player Wins!";
    resetGame();
  } else if (computerScore === winsNeeded) {
    winnerDiv.textContent = "That's 5 Wins! Computer Wins!";
    resetGame();
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundWinner = "You Win! Rock beats Scissors.";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    roundWinner = "You Lose! Paper beats Rock.";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    roundWinner = "Tie! Go Again.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundWinner = "You Win! Paper beats Rock.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    roundWinner = "You Lose! Scissors beats Paper.";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    roundWinner = "Tie! Go Again.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundWinner = "You Win! Scissors beats Paper.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    roundWinner = "You Lose! Rock beats Scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    roundWinner = "Tie! Go Again.";
  }

  resultDiv.textContent = roundWinner;
  human.textContent = `Human: ${humanScore}`;
  computer.textContent = `Computer: ${computerScore}`;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  const winnerDiv = document.getElementById("overallWinner");
  resultDiv.textContent = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
});
