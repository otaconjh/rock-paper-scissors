function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let selector = Math.floor(Math.random() * 3);
  return options[selector];
}
function playRound(playerSelection, computerSelection) {
  const rock = "ROCK",
    paper = "PAPER",
    scissors = "SCISSORS",
    loser = 0,
    winner = 1;
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == computerSelection) return ["Tie!", undefined];
  if (playerSelection == rock) {
    if (computerSelection == paper) {
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, loser];
    } else {
      return [`You Win! ${playerSelection} beats ${computerSelection}`, winner];
    }
  }
  if (playerSelection == paper) {
    if (computerSelection == scissors) {
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, loser];
    } else {
      return [`You Win! ${playerSelection} beats ${computerSelection}`, winner];
    }
  }
  if (playerSelection == scissors) {
    if (computerSelection == rock)
      return [`You Lose! ${computerSelection} beats ${playerSelection}`, loser];
  } else {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, winner];
  }
}

function game() {
  let results = [];
  const userWon = 1;
  for (let i = 0; i < 5; i++) {
    let userVal = prompt("Enter Rock, paper or scissors");
    results[i] = playRound(userVal, computerPlay());
    console.log(results[i][0]);
  }
  results = results.filter((result) => result[1] == userWon);
  if (results.length >= 3) console.log(`You won ${results.length} times`);
}
game();
