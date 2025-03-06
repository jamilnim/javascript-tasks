/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here

const tasks = [
  { id: 1, description: "Buy groceries", completed: false },
  { id: 2, description: "Clean the house", completed: true },
  { id: 3, description: "Finish project", completed: false },
  { id: 4, description: "Exercise for 30 minutes", completed: false },
  { id: 5, description: "Read a book", completed: true },
];

localStorage.setItem("task", JSON.stringify(tasks));

function clearLocalStorage() {
  localStorage.clear();
  const checkstore = JSON.parse(localStorage.getItem("task"));
  console.log(checkstore);
}

clearLocalStorage();
