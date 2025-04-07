/* Task 9: Fix Sorting Algorithm
Should return an array of numbers sorted in ascending order.
*/

function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Debug & Test
  console.log(sortNumbers([5, 3, 9, 1])); // Expected: [1, 3, 5, 9]
  console.log(sortNumbers([20, 100, 3, 50])); // Expected: [3, 20, 50, 100]//