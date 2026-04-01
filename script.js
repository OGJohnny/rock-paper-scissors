let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    return humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose! Paper beats Rock");
    return computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    return console.log("Tie! Go Again");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    return humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose! Scissors beats Paper");
    return computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return console.log("Tie! Go Again");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    return humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose! Rock beats Scissors");
    return computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return console.log("Tie! Go Again");
  }
}

function playGame() {
  let game = 0;

  for (let i = game; i < 5; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log(
      "After 5 Rounds You win " + humanScore + " to " + computerScore + "!",
    );
  } else if (computerScore > humanScore) {
    console.log(
      "After 5 Rounds You lose " + computerScore + " to " + humanScore + "!",
    );
  } else if (humanScore === computerScore) {
    console.log(
      "After 5 Rounds It's a tie! " + humanScore + " to " + computerScore + "!",
    );
  }
}

playGame();
