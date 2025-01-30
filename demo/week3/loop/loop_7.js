/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

let sumAndAverage = () => {
  let maxnumber = -Infinity;
  let minNumber = +Infinity;
  let count = 1;
  let totalNumber = 0;
  let averageinput = 0;

  for (count >= 1; count <= 10; count++) {
    let userInput = Math.floor(prompt("Please input a number"));

    if (userInput >= maxnumber) {
      maxnumber = userInput;
    }
    if (minNumber >= userInput) {
      minNumber = userInput;
    }
    totalNumber = totalNumber + userInput;
    averageinput = totalNumber / count;
  }
  console.log("Total of input", totalNumber);
  console.log("Average of input:", averageinput);
  console.log("Largest input is:", maxnumber);
  console.log("Smallest input is:", minNumber);
};
sumAndAverage();
