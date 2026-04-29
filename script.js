
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice)
    if (computerChoice == 1){
        return "rock";
    }else if (computerChoice == 2){
        return "paper";
    }else
        return "scissors";
}

function getHumanChoice(){
    let humanchoice = prompt("Enter your choice Rock, Paper or Scissors")
    return humanchoice.toLowerCase()
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            return `Draw!!! Both chose ${humanChoice}`;
        }
        
        if (humanChoice === 'rock'){
            if (computerChoice === 'paper'){
                computerScore = computerScore + 1;
                return 'You lose!! Paper beats Rock';
            }else {
                humanScore = humanScore + 1;
                return 'You win!! Rock beats scissors';
            }
        } else if (humanChoice === 'paper'){
            if (computerChoice === 'scissors'){
                computerScore = computerScore + 1;
                return 'You lose!! Scissors beat Paper';
            } else {
                humanScore = humanScore + 1;
                return 'You win!! Paper beats Rock';
            }
        } else{
            if (computerChoice === 'rock'){
                computerScore = computerScore + 1;
                return 'You lose!! Rock beats Scissors'
            } else {
                humanScore = humanScore + 1;
                return 'You win!! Rock beats Paper';
            }
        } 
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    console.log('Final score');
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`); 

    if (humanScore === computerScore){
        console.log('The game is a draw');
    } else if (humanScore > computerScore){
        console.log('You win!!');
    } else{
        console.log('You lose!!');
    }
}

playGame();