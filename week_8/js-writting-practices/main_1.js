 "use strict"

 /* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/

function task1() {
  
    try {
        veriable = 10; 
    } catch (error) {
        console.log("Strict mode error: " + error.message);
    }
}

task1(); 
