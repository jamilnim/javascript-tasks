/* 
Task 6: API Simulation (Promise)  
---------------------------------------
Convert `getUserProfile(userExists)` into a Promise  
If `userExists === true`, **resolve after 2 sec** with `"User profile loaded"`  
If `userExists === false`, **reject after 2 sec** with `"User not found"`  
*/

function getUserProfile(userExists) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userExists) {
                resolve("User profile loaded");
            } else {
                reject("User not found");
            }
        }, 3000); 
    });
}


getUserProfile(true).then(console.log).catch(console.error);
getUserProfile(false).then(console.log).catch(console.error);
