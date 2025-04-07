/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/




function saveUser(user) {

    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("Error saving user");
    }
  }
  
  function getUser() {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      console.log("Error retrieving user");
    }
  }

  saveUser({ name: "Alice", age: 25 });
console.log(getUser());