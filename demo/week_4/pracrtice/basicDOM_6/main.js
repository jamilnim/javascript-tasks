/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const submitBtn = document.getElementById("submitBtn");

function emptyProtection() {
  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  if (inputName === "" || inputEmail === "") {
    alert("Missing required input");
  } else {
    alert("submitted");
  }
}

submitBtn.addEventListener("click", emptyProtection);
