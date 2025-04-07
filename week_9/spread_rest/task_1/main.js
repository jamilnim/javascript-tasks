'use strict';

/* Task 1: Fix the Array Copying  
Fix the function to correctly clone `fruits`.  
*/

const fruits = ["apple", "banana", "orange"];

// Fix this
const newFruits = [...fruits];
newFruits.push("grape");

console.log(fruits); // Expected: ["apple", "banana", "orange"]


