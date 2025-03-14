/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

const moodChangeBtn = document.querySelector("#moodChange");

class Theme {
  constructor(name, isActive) {
    this.name = name;
    this.isActive = isActive;
  }
  changeThem() {
    document.body.classList.toggle(this.name);
    if (this.name === "dark") {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
const nowTheme = new Theme("dark", true);
moodChangeBtn.addEventListener("click", () => nowTheme.changeThem());
console.log(nowTheme);
