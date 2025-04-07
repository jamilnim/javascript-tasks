'use strict';

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/
'use strict';

function task1() {
    try {
      undefinedFunction(); // This function is not defined, so it will cause an error.
    } catch (error) {
      console.log("Error caught: function is not defined");
    }
  }
  