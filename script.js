
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 1){
        return "rock";
    }else if (computerChoice == 2){
        return "paper";
    }else
        return "scissors";
}

function playRound(humanChoice, computerChoice){
    while(gameCount<=5){
        if (humanChoice === computerChoice){
            return 'Draw';
        }
        
        if (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'scissors' && computerChoice === 'paper' ||
            humanChoice === 'paper' && computerChoice === 'rock'
        ){
            humanScore++;
            return "You Win";
        }else{ 
            computerScore++;
            return "You Lose";
        }
    }

    if (gameCount === 5){
        alert("You win");
        humanScore = 0;
        computerScore = 0;
        result = "";
        gameCount = 0;
        modifyDisplay("","")

    }
}

function modifyDisplay(humanChoice, computerChoice){
    const resultElement = document.querySelector("#result");
    const humanChoiceElement = document.querySelector("#human_choice");
    const computerChoiceElement = document.querySelector("#computer_choice");
    const humanScoreElement = document.querySelector("#human_score");
    const computerScoreElement = document.querySelector("#computer_score");
    const gameCountElement = document.querySelector("#game-count");

    resultElement.textContent = result;
    humanChoiceElement.textContent = humanChoice;
    computerChoiceElement.textContent = computerChoice;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    gameCountElement.textContent = gameCount;


}

const buttons = document.querySelectorAll(".btn-choice");
buttons.forEach(button => {
    button.addEventListener('click',(e) => {
        gameCount ++;
        let humanChoice = e.target.id.slice(4);
        let computerChoice = getComputerChoice();
        result = playRound(humanChoice,computerChoice);
        modifyDisplay(humanChoice, computerChoice);
    })
})

const btn = document.querySelector("#btn-reset");
btn.addEventListener('click',() => {
    gameCount = 0;
    result = "";
    humanScore = 0;
    computerScore = 0;
    modifyDisplay("","");
})

let gameCount = 0;
let humanScore = 0;
let computerScore = 0;
let result = "";
