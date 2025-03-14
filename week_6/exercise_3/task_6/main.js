/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

let taskNameInput = document.querySelector("#taskName");
let taskDescriptionInput = document.querySelector("#taskDiscroption");
const newOrderBtn = document.querySelector("#newOrder");
const taskList = document.querySelector("#taskList");

function Task(title, discription, completed) {
  this.title = title;
  this.discription = discription;
  this.completed = completed;
}

const allTask = [];

function addNewTask() {
  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;
  const newtask = new Task(taskName, taskDescription);
  allTask.push(newtask);
  taskNameInput.value = "";
  taskDescriptionInput.value = "";
  console.log(allTask);
  DisplayOrder();
}

function DisplayOrder() {
  taskList.innerHTML = "";
  allTask.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `Task Name ${task.title} <br> Task Discription ${task.discription}`;
    taskList.appendChild(li);
  });
}

newOrderBtn.addEventListener("click", addNewTask);
