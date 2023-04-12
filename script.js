const btns = document.querySelectorAll(".btn");
// selecting element
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const reset = document.querySelector(".reset button");
const point0 = document.querySelector(".point0");
const point1 = document.querySelector(".point1");
const dice = document.querySelector(".dice img");
const rollDice = document.querySelector(".roll-dice");
const holdValue = document.querySelector(".hold-value");
const player0Value = document.querySelector("#currentValue0");
const player1Value = document.querySelector("#currentValue1");

let currentValue, score, currentPlayer, player;
function initValue() {
  currentValue = 0;
  score = [0, 0];
  currentPlayer = 0;
  playing = true;
  point1.textContent = 0;
  point0.textContent = 0;
  player0Value.textContent = 0;
  player1Value.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.add("active-player");
  player1.classList.remove("active-player");
  player0.classList.remove("player-winner");
  player1.classList.remove("player-winner");
  playing = true;
}
initValue();
function playerSwitch() {
  document.querySelector(`#currentValue${currentPlayer}`).textContent = 0;
  currentValue = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
}
// roll dice here
rollDice.addEventListener("click", () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    // show dice
    dice.src = `./img/dice-${diceNumber}.png`;
    dice.classList.remove("hidden");

    // game logic
    if (diceNumber !== 1) {
      currentValue += diceNumber;
      document.querySelector(`#currentValue${currentPlayer}`).textContent =
        currentValue;
    } else {
      // player switching
      playerSwitch();
    }
  }
});
// Hold dice
holdValue.addEventListener("click", () => {
  if (playing) {
    score[currentPlayer] += currentValue;
    document.querySelector(`.point${currentPlayer}`).textContent =
      score[currentPlayer];
    // condition for 100 points
    if (score[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player-${currentPlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${currentPlayer}-heading`)
        .classList.add("winner-heading");

      document
        .querySelector(`.player-${currentPlayer}`)
        .classList.remove("active-player");
      dice.classList.add("hidden");
    } else {
      // switching player
      playerSwitch();
    }
  }
});
// reseating game
reset.addEventListener("click", initValue);
// btn effect
reset.addEventListener("click", () => {
  reset.classList.add("reset-btn");
  setTimeout(() => {
    reset.classList.remove("reset-btn");
  }, 50);
});
Array.from(btns).map((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("btn-class");
    setTimeout(() => {
      btn.classList.remove("btn-class");
    }, 50);
  });
});
