function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function getHumanChoice() {
    const humanChoice = prompt('Choose rock, paper or scissors').toLowerCase();
    return humanChoice;
}
let humanChoice = getHumanChoice();
console.log(humanChoice);
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
function playround(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
               humanChoice === 'paper' && computerChoice === 'rock' ||
               humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win!';
       
    } else {
        computerScore++;
        return 'You lose!';
    
    }
}

console.log(playround(humanChoice, computerChoice));
console.log("computer choise was " + computerChoice);