/* Task 1: Fix the Greeting Function  
Should return "Hello, [name]!".  
If no name is provided, return "Hello, guest!".  
*/

function greet(name) {
    return ("Hello, " + name,'!');
}

// Debug & Test
console.log(greet("Alice")); // Expected: "Hello, Alice!"
console.log(greet()); // Expected: "Hello, guest!"