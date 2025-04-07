"use strict";

/* 
Task 3: Login System (Callback)  
---------------------------------------
Fix `loginUser(username, validUser, callback)`  
If `validUser === true`, call the callback with `"Welcome, [username]!"` after **1 second**  
If `validUser === false`, call the callback immediately with `"Invalid login"`  
*/

function loginuser(username, validUser, callback) {
  if (validUser) {
    setTimeout(() => {
      callback(`welcome ${username}!`);
    }, 2000);
  } else {
    callback("Invalid Login");
  }
}

// Test Cases
 loginuser("Sam", true, (message) => console.log(message));
// Expected: "Welcome, Sam!" (after 1 sec)
loginuser("Alex", false, (message) => console.log(message));
// Expected: "Invalid login" (immediately)
