/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

let countdownTimer = () => {
  let countDownNumber = 0;
  countDownNumber = Math.floor(prompt("Please input a number:"));

  while (countDownNumber >= 0) {
    console.log(countDownNumber);
    countDownNumber--;
  }
  console.log("Time,s up");
};
countdownTimer();
