function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
let count = 0;
var humanScore = 0;
var computerScore = 0;
let computerChoice = getComputerChoice();
function playRound(humanChoice, computerChoice) {
  count++;
  console.log(humanChoice);
  console.log(computerChoice);

  if (humanChoice === computerChoice) {
    return ["It's a tie!", humanScore, computerScore];
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return ["You win!", humanScore, computerScore];
  } else {
    computerScore++;
    return ["You lose!", humanScore, computerScore];
  }
}
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanChoice = btn.id;
    const [result, humanScore, computerScore] = playRound(
      humanChoice,
      computerChoice
    );
    console.log(result);
    const round = document.getElementById("round");
    let humanScoree = document.getElementById("human-score");
    let computerScoree = document.getElementById("computer-score");
    humanScoree.textContent = `${humanScore}`;
    computerScoree.textContent = `${computerScore}`;
    round.textContent = `Round ${count}`;
    let computerTitle = document.getElementById("cChoice");
    computerTitle.textContent = ` ${computerChoice}`;
    let resultTitle = document.getElementById("result");
    resultTitle.textContent = `${result}`;
    console.log(count);
    if (count === 5) {
      if (humanScore > computerScore) {
        resultTitle.textContent = "You win the game!";
      } else if (humanScore < computerScore) {
        resultTitle.textContent = "You lose the game!";
      } else {
        resultTitle.textContent = "It's a tie!";
      }
    }
    if (count === 6) {
      restartGame();
    }
    computerChoice = getComputerChoice();
  });
});
function restartGame() {
  humanScore = 0;
  computerScore = 0;
  count = 0;
  const round = document.getElementById("round");
  round.textContent = `Round ${count}`;
  const humanScoree = document.getElementById("human-score");
  humanScoree.textContent = `${humanScore}`;
  const computerScoree = document.getElementById("computer-score");
  computerScoree.textContent = `${computerScore}`;
  const computerTitle = document.getElementById("cChoice");
  computerTitle.textContent = ` ${computerChoice}`;
  const resultTitle = document.getElementById("result");
  resultTitle.textContent = ``;
}
