/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

let targetPara = document.getElementById("para");
let button = document.getElementById("venishBtn");
let button2 = document.getElementById("comeBack");
let button3 = document.getElementById("toggleBtn");

//  two button push

function venish() {
  targetPara.style.display = "none";
}

function come() {
  targetPara.style.display = "block";
}

// one button push

function toggle() {
  if (targetPara.style.display == "none") {
    targetPara.style.display = "block";
  } else {
    targetPara.style.display = "none";
  }
}

button.addEventListener("click", venish);
button2.addEventListener("click", come);
button3.addEventListener("click", toggle);
