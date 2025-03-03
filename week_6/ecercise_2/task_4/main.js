/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here

const bankAccount = {
  accountHolder: "John Doe",
  balance: 1000,
  transactions: [200, -50, 300, -100],
};


function finalBalance() {
    bankAccount.transactions.forEach((transaction) => {
      bankAccount.balance += transaction;
      console.log("total balance", bankAccount.balance);
    });
  }

finalBalance();