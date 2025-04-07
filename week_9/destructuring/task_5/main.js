/* Task 5: Fix Function Parameters  
Fix the function so it correctly destructures `name` and `age`.  
*/

function introduce({name,age}) {
    console.log(`${name} is ${age} years old.`);
}

introduce({ name: "Emma", age: 28 }); // Expected: "Emma is 28 years old."