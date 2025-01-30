/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

let findMinMax = () => {
  let inputNumber = Math.floor(prompt("How many time you want to inpu:"));
  let smallestNumber = Infinity;
  let largestNumber = -Infinity;
  let count = 1;
  let customerInput = 0;

  for (count = 1; count <= inputNumber; count++) {
    customerInput = Math.floor(prompt("input number:"));
    if (largestNumber <= customerInput) {
      largestNumber = customerInput;
    }

    if (smallestNumber >= customerInput) {
      smallestNumber = customerInput;
    }
  }
  console.log(largestNumber);
  console.log(smallestNumber);
};
findMinMax();
