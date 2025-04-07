/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
    
    try {
      if (age < 18) {
        throw new Error("You must be at least 18.");
      }
      console.log("Access granted.");
    } catch (error) {
      console.log(error.message);
    }
  }