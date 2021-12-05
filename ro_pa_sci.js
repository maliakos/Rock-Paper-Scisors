//computerPLay is the function that mimics the
//computer's "opponents" behaviour.
function computerPlay() {
  //Using the Math functions in order to get a random
  //integer between one and three.
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

function game() {
  let userMove = "Something";
  let computerMove;
  let wins = 0;
  let loses = 0;
  while (wins < 5 && loses < 5) {
    computerMove = computerPlay();
    if (loseOrWin(userMove, computerMove).indexOf("lose") > 0) {
      loses++;
      console.log(`Score:${wins} to ${loses}`);
    } else if (loseOrWin(userMove, computerMove).indexOf("win") > 0) {
      wins++;
      console.log(`Score:${wins} to ${loses}`);
    } else {
    }
  }

  return wins == 5 ? `You won!5 to ${loses}` : `You lost ${wins} to 5`;
}
