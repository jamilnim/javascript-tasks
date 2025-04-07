/* Task 4: Add Default Values  
Modify the function so that if `role` is missing, it defaults to `"guest"`.  
*/

function getUserInfo(user) {
    const { name, role="guest" } = user;
    console.log(`${name} - ${role}`);
}

getUserInfo({ name: "Alice" }); // Expected: "Alice - guest"