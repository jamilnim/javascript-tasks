'use strict';

/* Task 2: Fix the Array Destructuring  
Extract the first two colors from the colors array.  
*/

const colors = ["red", "blue", "green", "yellow"];

// Fix this
const [primary, secondary]=["red", "blue", "green", "yellow"];

console.log(primary, secondary); // Expected: "red blue"