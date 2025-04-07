'use strict';


/* Task 2: Fix Array Merging  
Correctly merge the `oldTasks` and `newTasks` arrays.  
*/

const oldTasks = ["task1", "task2"];
const newTasks = ["task3", "task4"];

// Fix this
const allTasks = [...oldTasks, ...newTasks];

console.log(allTasks); // Expected: ["task1", "task2", "task3", "task4"]


