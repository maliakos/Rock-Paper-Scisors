function computerPlay() {
  let computerMove = "Something";
  let randomToThree = Math.floor(Math.random() * 3) + 1;
  switch (randomToThree) {
    case 1:
      computerMove = "Rock";
      break;
    case 2:
      computerMove = "Paper";
      break;
    case 3:
      computerMove = "Scissors";
      break;
  }
  return computerMove;
}

function loseOrWin(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return `You Tie, the computer made the same move, ${playerSelection} !`;
  } else if (playerSelection == "rock") {
    return computerSelection == "Paper"
      ? "You lose, computer's move was Paper"
      : "You win,computer's move was Scissors";
  } else if (playerSelection == "paper") {
    return computerSelection == "Scissors"
      ? "You lose, scissors beats Paper!"
      : "You win  computer's move was Rock";
  } else {
    return computerSelection == "Rock"
      ? "You lose, computer's move was Rock!"
      : "You win computer's move was Paper";
  }
}

function game(userMove = "Something") {
  const skata = document.createElement("div");
  skata.textContent = loseOrWin(userMove, computerPlay());
  document.body.appendChild(skata);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    game(e.target.getAttribute("data-type"))
  );
});
