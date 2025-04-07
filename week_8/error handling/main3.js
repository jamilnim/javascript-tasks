/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/


function task3() {
    try {
      throw new Error("Error message");
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Task completed.");
    }
  }