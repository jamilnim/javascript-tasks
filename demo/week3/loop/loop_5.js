/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

let calculateAverageUntilZero = () => {
  let customerInput = 1;
  let totalNumber = 0;
  let countInput = 1;
  let average;

  while (customerInput > 0) {
    customerInput = prompt("Please input a number");
    countInput++;
    totalNumber = totalNumber + customerInput;

    average = totalNumber / countInput;
  }
  console.log(average);
};

calculateAverageUntilZero();
