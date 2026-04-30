
let gameCount = 0;
let humanScore = 0;
let computerScore = 0;
let result = "";

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

function resetValues(){
    result = "";
    humanScore = 0;
    gameCount = 0;
    computerScore = 0;
    modifyDisplay("","");
}

const buttons = document.querySelectorAll(".btn-choice");
buttons.forEach(button => {
    button.addEventListener('click',(e) => {
        gameCount ++;
        let humanChoice = e.target.id.slice(4);
        let computerChoice = getComputerChoice();
        result = playRound(humanChoice,computerChoice);
        modifyDisplay(humanChoice, computerChoice);

        if (humanScore == 5 || computerScore == 5){
            setTimeout(() => {
                if (humanScore == 5){
                    alert("You win!!")
                }else{
                    alert("You lose!!")
                }
                resetValues();
            }, 50);
        }
    })
})

const btn = document.querySelector("#btn-reset");
btn.addEventListener('click', resetValues());


