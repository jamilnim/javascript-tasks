// /* Task 8: Debug Nested Function Calls
// Should return the square of a number after doubling it.
// */

function double(num) {
    return num + num;
  }
  
  function square(num) {
    return num * num;
  }
  
  function processNumber(num) {
    return square(double(num));
  }
  
  // Debug & Test
  console.log(processNumber(3)); // Expected: 36
  console.log(processNumber(4)); // Expected: 64