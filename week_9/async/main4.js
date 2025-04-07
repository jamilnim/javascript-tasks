/* 
Task 4: Fetch User Data (Promise)  
---------------------------------------
Convert `fetchUserData(shouldFail)` to return a Promise  
If `shouldFail === false`, **resolve after 2 seconds** with `"User data retrieved"`  
If `shouldFail === true`, **reject after 2 seconds** with `"Error fetching user data"`  
*/

function fetchUserData(shouldFail) {
    // Your code here

    .then()


}

// Test Cases
fetchUserData(false).then(console.log).catch(console.error);
// Expected: "User data retrieved" (after 2 sec)
fetchUserData(true).then(console.log).catch(console.error);
// Expected: "Error fetching user data" (after 2 sec)