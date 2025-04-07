"use strict";

/* Task 1: Fix the User Data Processing  
Correct the method chaining so it filters active users and returns uppercase names.  
*/

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Fix this
const activeUsers = users
  .filter((user) => user.active)
  .map(user => user.name.toUpperCase());

console.log(activeUsers); // Expected: ["ALICE", "CHARLIE"]
