/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

let userInput = document.getElementById("userInput");
let outPutText = document.getElementById("displayText");
let actBtn = document.getElementById("clearBtn");

function liveupdate(event) {
  outPutText.textContent = event.target.value;
}

userInput.addEventListener("input", liveupdate);

function clearText() {
  userInput.value = "";
}

actBtn.addEventListener("click", clearText);


// const inpu