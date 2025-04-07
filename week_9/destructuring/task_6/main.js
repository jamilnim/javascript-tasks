/* Task 6: Create Your Own
Write a function that receives a `car` object and logs the `brand` and `year`.
Test with `{ brand: "Toyota", year: 2020 }`.
*/

// Write your code here


function carDetails({ brand, year }) {
    console.log(`Brand: ${brand}, Year: ${year}`);
  }
  
carDetails({ brand: "Toyota", year: 2020 });
