function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    const humanChoice = prompt('Choose rock, paper or scissors').toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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

for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}:`);
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

console.log('Final Scores:');
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log('You win!');
} else if (humanScore < computerScore) {
    console.log('You lose!');
} else {
    console.log('It\'s a tie!');
}