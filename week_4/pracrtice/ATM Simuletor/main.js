const dipositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdrow = document.getElementById("withdraw");

let currentBalance = 0;

dipositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  balance.innerText = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withrawAmount = Number(inputWithdrow.value);
  withdraw(withrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positve number";
  } else {
    currentBalance += depositAmount;
  }
}

function withdraw(withrawAmount) {
  if (typeof withrawAmount !== "number") {
    message.innerText = "please enter a number";
  } else if (withrawAmount < 0) {
    message.innerText = "Please enter a positve number";
  } else if (withrawAmount > currentBalance) {
    message.innerText = "Insufficient Funds";
  } else {
    currentBalance -= withrawAmount;
  }
}
