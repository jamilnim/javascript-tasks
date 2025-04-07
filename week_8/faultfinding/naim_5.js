
/* Task 5: Fix Array Indexing Issue  
Should return the last item of the array.  
*/

function getLastItem(arr) {
    return arr[arr.length - 1];
  }
  
  // Debug & Test
  console.log(getLastItem(["apple", "banana", "cherry"])); // Expected: "cherry"
  console.log(getLastItem([1, 2, 3])); // Expected: 3