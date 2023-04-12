// selecting element
const point0 = document.querySelector(".point0");
const point1 = document.querySelector(".point1");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
// btn
const dice = document.querySelector(".dice img");
const rollDice = document.querySelector(".roll-dice");
const holdValue = document.querySelector(".hold-value");
const reset = document.querySelector(".reset");

let score, currentScore, currentPlayer, playerWinner;
function startingFunctionalities() {
  point0.textContent = 0;
  point1.textContent = 0;

  score = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  dice.classList.add("hidden");
  playerWinner = true;
  document.querySelector(`#currentValue${currentPlayer}`).textContent = 0;
  document.querySelector(`.player-0`).classList.remove("player-winner");
  document.querySelector(`.player-1`).classList.remove("player-winner");
  document.querySelector(`.player-0`).classList.add("active-player");
  document.querySelector(`.player-1`).classList.remove("active-player");
  document.querySelector(`.player-0 h1`).classList.remove("winner-heading");
  document.querySelector(`.player-1 h1`).classList.remove("winner-heading");
}
startingFunctionalities();
function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#currentValue${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
}
rollDice.addEventListener("click", () => {
  const randNumber = Math.trunc(Math.random() * 6) + 1;
  if (playerWinner) {
    dice.classList.remove("hidden");
    dice.src = `./img/dice-${randNumber}.png`;
    //   Active player logic
    if (randNumber !== 1) {
      currentScore += randNumber;
      document.querySelector(`#currentValue${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdValue.addEventListener("click", () => {
  if (playerWinner) {
    score[currentPlayer] += currentScore;
    document.querySelector(`.point${currentPlayer}`).textContent =
      score[currentPlayer];
    if (score[currentPlayer] >= 100) {
      playerWinner = false;
      document
        .querySelector(`.player-${currentPlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${currentPlayer}`)
        .classList.add("active-player");
      document
        .querySelector(`.player-${currentPlayer} h1`)
        .classList.add("winner-heading");
      dice.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

reset.addEventListener("click", startingFunctionalities);
