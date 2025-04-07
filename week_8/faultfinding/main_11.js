// /* Task 11: Debug Object Data Transformation
// Should return an array of user names from a nested data structure.
// */

const userData = {
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Jamil" },
    ],
  };
  
  function getUserNames(data) {
    return data.users.map((user) => user.name);
  }
  
  // // Debug & Test
  console.log(getUserNames(userData)); // Expected: ["Alice", "Bob"]