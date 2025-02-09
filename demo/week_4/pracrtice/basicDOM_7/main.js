/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let counterBtn = document.getElementById("counterBtn");

function counter() {
  let count = document.getElementById("number").innerText;
  let numberCount = parseInt(count);
  numberCount++;
  document.getElementById("number").innerText = numberCount;
}

counterBtn.addEventListener("click", counter);
