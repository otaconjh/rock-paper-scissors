function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let selector = Math.floor(Math.random() * 3);
  return options[selector];
}
function playRound(playerSelection, computerSelection) {
  const rock = "ROCK",
    paper = "PAPER",
    scissors = "SCISSORS",
    lost = "computer",
    won = "player";
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == computerSelection) return ["Tie!", undefined];
  if (playerSelection == rock) {
    if (computerSelection == paper) {
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, lost];
    } else {
      return [`You Win! ${playerSelection} beats ${computerSelection}`, won];
    }
  }
  if (playerSelection == paper) {
    if (computerSelection == scissors) {
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, lost];
    } else {
      return [`You Win! ${playerSelection} beats ${computerSelection}`, won];
    }
  }
  if (playerSelection == scissors) {
    if (computerSelection == rock) {
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, lost];
    } else {
      return [`You Win! ${playerSelection} beats ${computerSelection}`, won];
    }
  }
}

let results = [0, 0];
function game(btn) {
  const result = playRound(btn.id, computerPlay());
  console.log(result);
  results[0] = result[1] == "player" ? results[0] + 1 : results[0];
  results[1] = result[1] == "computer" ? results[1] + 1 : results[1];
  console.log(results);
  if (results[0] == 5) {
    let div = document.getElementById("result");
    div.innerText = `You have won! Final score ${results[0]} : ${results[1]}`;
    results = [0, 0];
  }
  if (results[1] == 5) {
    let div = document.getElementById("result");
    div.innerText = `You have lost! Final score ${results[0]} : ${results[1]}`;
    results = [0, 0];
  }
}

const btns = document.body.querySelectorAll("button");
console.log(btns);
btns.forEach((btn) =>
  btn.addEventListener("click", (ev) => {
    game(btn);
  })
);
