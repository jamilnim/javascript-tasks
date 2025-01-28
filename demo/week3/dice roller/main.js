// 1. Dice Roller
// Create a function named rollDice that:

// Prompts the user for the number of dice they want to roll.
// Rolls a random number between 1 and 6 for each die.
// Logs each die's roll and calculates the total sum of all rolls.
// Displays the results in an alert.

let rollDice = () => {
  let count = 1;
  let customerInput = Number(
    prompt("Please input the number of dice you want to roll")
  );
  let totalRolls = 0;
  let randomNumber;
  for (count = 1; count <= customerInput; count++) {
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    totalRolls = totalRolls + randomNumber;
  }
  console.log(totalRolls);
};

rollDice();
