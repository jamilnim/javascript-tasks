/* Task 4: Fix Chained String Manipulation  
Extract initials from a full name using chaining.  
*/

const fullName = "John Doe";

const initials = fullName
    .split(" ")
    .map(word => word[0].toUpperCase()) 
    .join(" ");

console.log(initials); // Expected: "J D"