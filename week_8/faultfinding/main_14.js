// /* Task 14: Debug a Loop that Processes Array
// Should return an array of squared numbers.
// */

function squareNumbers(arr) {
    let squaredArr = [];
    for (let i = 0; i < arr.length ; i++) {
      squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
  }
  
  // // Debug & Test
  console.log(squareNumbers([1, 2, 3, 4])); // Expected: [1, 4, 9, 16]
  