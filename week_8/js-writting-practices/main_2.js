 "use strict"

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/


function task2() {
    "use strict";
    
    const MAX_USERS = 400;
    let currentUsers = 30;

    try {
        MAX_USERS = 200; // Trying to change a constant - should throw a TypeError
    } catch (error) {
        console.log("Constant assignment error: " + error.message);
    }

    console.log("Constent has not changed", MAX_USERS); 
}

task2();