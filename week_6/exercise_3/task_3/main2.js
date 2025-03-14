/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

const moodChangeBtn = document.querySelector("#moodChange");

const theme = {
  name: "dark",
  isActive: null,
};

function moodChange() {
  document.body.classList.toggle("dark");
  if (document.body.className === "dark") {
    theme.name = "dark";
    theme.isActive = true;
    document.getElementById("mood").textContent = theme.name;
  } else {
    theme.name = "light";
    theme.isActive = false;
    document.getElementById("mood").textContent = theme.name;
  }

  console.log(theme);
}

moodChangeBtn.addEventListener("click", moodChange);
