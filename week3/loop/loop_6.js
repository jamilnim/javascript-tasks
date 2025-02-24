/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

let askToContinue = () => {
  let customerInput;
  let customerOption = "y";
  let totalCustomerInput = 0;
  let count = 0;
  let average;

  while (customerOption === "y") {
    customerInput = Number(prompt("Please input a number"));
    totalCustomerInput = totalCustomerInput + customerInput;
    count++;
    customerOption = prompt("Do you want to continue giving numbers? (y/n)");
  }

  average = totalCustomerInput / count;
  console.log(average);
};

askToContinue();



