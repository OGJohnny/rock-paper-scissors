let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.querySelector('[data-player-score]');
const computerScore_span = document.querySelector('[data-computer-score]');
const result_p = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const buttons = document.querySelectorAll('button');


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randonNumber = Math.floor(Math.random() * 3);
    return choices[randonNumber];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = playerSelection + " beats " + computerSelection + "! You win!";

    if(playerScore == 5) {
        result_p.innerHTML = "You won the best of 5! <br>Reload the page to play again!";
        disableButtons(); 
    }
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerSelection + " beats " + playerSelection + "! You lose!";

    if(computerScore == 5) {
        result_p.innerHTML = "You lost the best of 5! <br>Reload the page to play again!";
        disableButtons();
    }
}

function draw(playerSelection, computerSelection) {
    result_p.innerHTML = playerSelection + " ties " + computerSelection + "! It's a draw!";
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    
    switch(playerSelection + computerSelection) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerSelection, computerSelection);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(playerSelection, computerSelection);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(playerSelection, computerSelection);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })

    paper_div.addEventListener('click', function() {
        game("Paper");
    })

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    })
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        game(button.id);
    })
})

main();