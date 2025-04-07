'use strict';

/* Task 1: Fix the Employee Destructuring  
Extract `name` and `position` from the employee object.  
*/

const employee = { name: "Sarah", position: "Manager", department: "HR" };

// Fix this
const { name, position } = employee;

console.log(name, position); // Expected: "Sarah Manager"

