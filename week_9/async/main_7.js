
/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
Convert `fetchUserDataAsync(shouldFail)` to use `async/await`  
If `shouldFail === false`, wait **2 sec** and return `"User data loaded"`  
If `shouldFail === true`, wait **2 sec** and throw `"Failed to fetch data"`  
*/



async function fetchUserDataAsync(shouldFail) {

    await new Promise(resolve => setTimeout(resolve, 2000));


    if (shouldFail) {
        throw "Failed to fetch data";
    } else {
        return "User data loaded";
    }
}


fetchUserDataAsync(false).then(console.log) .catch(console.error);

fetchUserDataAsync(true).then(console.log) .catch(console.error); 

