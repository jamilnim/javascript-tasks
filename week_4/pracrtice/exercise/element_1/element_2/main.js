/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

function Retrieve() {
  const input = document.getElementById("fruitInput");
  let fruitList = document.getElementById("fruitList");
  let element = document.createElement("li");
  element.innerText = input.value;
  fruitList.appendChild(element);
  input.value = "";
}

function addComments() {
  const cmments = document.getElementById("comment").value;
  customerInput.textContent = cmments;
}

function replace() {
  const cmments = document.getElementById("comment").value;
  customerInput.textContent = cmments;
}
