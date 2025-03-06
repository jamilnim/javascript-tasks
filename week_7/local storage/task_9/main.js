/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

const tasks = [
    { id: 1, description: "Buy groceries", completed: false },
    { id: 2, description: "Clean the house", completed: true },
    { id: 3, description: "Finish project", completed: false },
    { id: 4, description: "Exercise for 30 minutes", completed: false },
    { id: 5, description: "Read a book", completed: true }
  ];

  localStorage.setItem('tasks',JSON.stringify(tasks))

  function markTaskComplete(taskId){

    const updatetask=JSON.parse(localStorage.getItem('tasks'))
   updatetask[taskId].completed=true
    console.log(updatetask)
    localStorage.setItem('updatetask',JSON.stringify(updatetask))
  }

  markTaskComplete(2)
