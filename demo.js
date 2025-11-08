let humanScore =0;
let computerScore =0;

function getComputerChoice(){
    let computerInput = Math.floor(Math.random()*9)+1;
    if (computerInput<=3){
        return "Rock"
    } else if (computerInput<=6){
        return "Paper";
    } else{
        return "Scissors";
    }
};

function getHumanChoice (){
    let humanChoice = prompt("Give your Choice: ");
    return humanChoice;
}



function gameLogic(humanChoice, computerChoice){
    if (humanChoice === 'Rock' && computerChoice === 'Paper'){
        console.log('Computer Wins! Paper beats Rock!');
        computerScore++;
    } else if (humanChoice === 'Paper' && computerChoice === 'Paper'){
        console.log("It's a tie!");
        computerScore++;
        humanScore++;
    } else if(humanChoice === 'Scissors' && computerChoice=== 'Paper'){
        console.log('You Win! Scissors beats Paper!');
        humanScore++;
    } else if (humanChoice === 'Rock' && computerChoice === 'Rock'){
        console.log("It's a tie!");
        computerScore++;
        humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice==='Rock'){
        console.log('You Win! Paper beats Rock!');
        humanScore++;
    } else if (humanChoice === 'Scissors' && computerChoice==='Rock'){
        console.log('Computer Wins! Rock beats Scissors!');
        computerScore++;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
        console.log('You Win! Rock beats Scissors!');
        humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors'){
        console.log('Computer Wins! Scissors beats Paper!');
        computerScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors'){
        console.log("It's a tie!");
        computerScore++;
        humanScore++;
    }
}

function playGame(num){
    for (let i=1; i<=num;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        gameLogic(humanChoice, computerChoice);  
    }
    console.log("===========================================");
    console.log(`Your Score: ${humanScore}. Computer Score: ${computerScore}`);
    if(humanScore>computerScore){
        console.log("You win!")
    } else {
        console.log('Computer Wins!')
    }
}

playGame(5);