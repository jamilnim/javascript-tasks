// /* Task 13: Debug LocalStorage Data Saving
// Should save a user object to LocalStorage and retrieve it.
// */

// Below will only work in a browser environment

// function saveUser(user) {
//   localStorage.setItem("user", JSON.stringify(user));
// }

// function getUser() {
//   return JSON.parse(localStorage.getItem("user"));
// }

// // // // Debug & Test
// saveUser({ name: "Alice", age: 25 });
// console.log(getUser()); // Expected: { name: "Alice", age: 25 }


function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  function getUser() {
    const data = localStorage.getItem("user");
    return data = JSON.parse(data);
  }
  

saveUser({ name: "Alice", age: 25 });
console.log(getUser()); // Expected: { name: "Alice", age: 25 }
  

// not ok !!!