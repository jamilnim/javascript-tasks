'use strict'
// /* Task 10: Debug Nested Data Processing
// Should return a list of full names from an array of user objects.
// */

const users = [
    { firstName: "Jamil", lastName: "Muhammad" },
    { firstName: "Nazmul", lastName: "Huda" },
  ];
  
  function getFullNames(users) {
    return users.map((user) => user.firstName + " " + user.lastName);
  }
  
  // // Debug & Test
  console.log(getFullNames(users)); 