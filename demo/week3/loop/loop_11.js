/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

let generateMultiplicationTable = () => {
  let inputNumber = Math.floor(prompt("Please input a number:"));
  let count = 1;
  let answer;

  for (count = 1; count <= 10; count++) {
    answer = inputNumber * count;
    console.log(inputNumber, "X", count, "=", answer);
  }
};

generateMultiplicationTable();
