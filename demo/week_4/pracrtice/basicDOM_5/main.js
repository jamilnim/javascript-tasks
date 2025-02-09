/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

let inputColor = document.getElementById("colorName");
let changeColorBtn = document.getElementById("changeColorBtn");
let textColorChangeBtn = document.getElementById("textColor");
let textColorChangeOutput = document.getElementById("textToChange");

//  we call here body tag with body and backgroundcolor with background
function changeBackColor() {
  let randomNumber = (Math.random() * 0xfffff * 1000000).toString(16);
  let haxColor = "#" + randomNumber.slice(0, 6);
  document.body.style.backgroundColor = haxColor;
}

function textColorChange() {
  textColorChangeOutput.style.color = inputColor.value;
}

changeColorBtn.addEventListener("click", changeBackColor);
textColorChangeBtn.addEventListener("click", textColorChange);

// //  const randomHexcolor=()=>{
//     return "#"+Math.floor(Math.random()*1677772).toString(16)
