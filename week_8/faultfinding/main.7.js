//* Task 7: Debug Object Property Access
// Should return the user’s email from an object.
// */

function getEmail(user) {
  return user.email;
}

// Debug & Test
console.log(getEmail({ name: "Alice", email: "alice@example.com" })); // Expected: "alice@example.com"
