/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

const users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 88 },
  { name: "Eve", score: 95 },
];

const scorelist = document.querySelector(".scorList");
const assindingBtn = document.querySelector("#assinding");
const decendingBtn = document.querySelector("#decending");

function desplay() {
  scorelist.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<button id="cancelBtn">X</button> <br> Name: ${user.name} <b><Score: ${user.score}`;
    scorelist.appendChild(li);
   
  });
  
}

function decending() {
  users.sort((a, b) => b.score - a.score);
  desplay();
}

function accending() {
  users.sort((a, b) => a.score - b.score);
  desplay();
}

function indexdata() {
  const a = this.dataset.index;
  console.log(a);
}



desplay();




decendingBtn.addEventListener("click", decending);
assindingBtn.addEventListener("click", accending);

// users.sort((a,b)=>(b.score-a.score))
// console.log(users)
