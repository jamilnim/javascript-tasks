/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const numberHit = document.querySelector("#numberHit");
const IncreaseBtn = document.querySelector("#Increase");
const decreaseBtn = document.querySelector("#decrease");

const counter = {
  value: 5,
};

function increase() {
  counter.value = counter.value + 1;
  numberHit.textContent = counter.value;
}

function decrease() {
  counter.value = counter.value - 1;
  numberHit.textContent = counter.value;
}

IncreaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);

console.log(increase());
