'use strict';

/* Task 3: Fix Nested Destructuring  
Extract `username` and `email` from the user object.  
*/

const user = {
    id: 101,
    details: { username: "john_doe", email: "john@example.com" },
};

// Fix this
const {
    info:{username,email} = user
};
console.log(username, email); // Expected: "john_doe john@example.com"

