let dice1 =
  Math.floor(Math.random() * 6) +
  1; /* Math.floor rounds down to max of 5, but by adding 1 it means 6 is inclusive. */
let dice2 = Math.floor(Math.random() * 6) + 1;

if (dice1 === 6 && dice2 === 6) {
  console.log("You won a top prize!");
} else if (dice1 === dice2) {
  console.log("You win three free throws!");
} else if ((dice1 + dice2) % 2 === 0) {
  console.log("You win one free throws!");
} else {
  console.log("You lose the game");
}

console.log(`You threw ${dice1} and ${dice2}`);
