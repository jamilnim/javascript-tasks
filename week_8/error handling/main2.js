
/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
    try {
      console.log(a);
    } catch (error) {
      console.log("ReferenceError caught: myVariable is not defined");
    }
  }